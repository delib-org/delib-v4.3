import Joi from "joi";
import { responseToError } from "../cont/firebase/consultations/consultationsDBGet";
import { updateArray } from "../cont/general/general";
import { UserProps } from "../cont/store/store";
import { Consultation, ConsultationSchema } from "./consultationModel";
import { FirebaseTime, FirebaseTimeSchema } from "./timeModel";
import { UserSchema } from "./userModel";

export enum EntityType {
  CONSULTATION = "consultation",
  MESSAGE = "message",
}

//used for store
// export interface NewsItemStore {
//   id?: string;
//   message: string;
//   entityType: EntityType;
//   creator: UserProps;
//   update: FirebaseTime;
// }

export class NewsItem {
  id?: string;
  message: string;
  entityType: EntityType;
  creator: UserProps;
  update: FirebaseTime;

  constructor(
    id: string,
    message: string,
    entityType: EntityType,
    creator: UserProps,
    update: FirebaseTime
  ) {
    this.id = id;
    this.message = message;
    this.entityType = entityType;
    this.creator = creator;
    this.update = update;
  }
  changeFromNewsDBToNewsItemStore(newsDB: News) {
    try {
      const { error } = NewsSchema.validate(newsDB);
      if (error) throw error;
      const { id, creator, entityType, text, update } = newsDB;
      this.id = id;
      this.creator = creator;
      this.message = text;
      this.entityType = entityType;
      this.update = update;
    } catch (error) {
      console.error(error);
    }
  }
}

export const NewsItemStoreSchema = Joi.object({
  id: Joi.string().required(),
  message: Joi.string().required(),
  entityType: Joi.string()
    .valid(EntityType.CONSULTATION, EntityType.MESSAGE)
    .required(),
  creator: UserSchema.required(),
  update: FirebaseTimeSchema,
});

export class GroupNews{
  id:string;
  group:Consultation;
  groupId:string;
  messages: NewsItem[];
  last_update:FirebaseTime;

  constructor( group:Consultation){
    this.id = this.groupId = group.id;
    this.group = group;
    this.messages = [];

    this.last_update = group.time.updated;
  }
  setNewsItem(newsItem:NewsItem){
    this.messages = updateArray(this.messages, newsItem);
    this.last_update = newsItem.update
  }
}

export class NewsStore{
  last_update:FirebaseTime;
  groups:GroupNews[];

  constructor(){
    this.last_update= {seconds:0,nanoseconds:0}
    this.groups = [];
  }
  setGroup(consultation:Consultation){
    try {
      const newGroup = new GroupNews(consultation);
      this.groups =  updateArray(this.groups, newGroup);
    } catch (error) {
      responseToError(error)
    }
  }
  setNewsItem(consultation:Consultation, newsItem:NewsItem){
    try {
      const groupIndex = this.groups.findIndex(grp=>grp.groupId === consultation.id);
      if(groupIndex === -1){
        const newPosition = this.groups.length;
        this.setGroup(consultation);
        this.groups[newPosition].setNewsItem(newsItem);
      } else {
        this.groups[groupIndex].setNewsItem(newsItem);
      }

      
    } catch (error) {
      responseToError(error)
    }
  }
}

// export interface GroupNews {
//   id: string; //groupId
//   group: Consultation;
//   groupId: string;
//   messages: NewsItem[];
//   last_updaet:FirebaseTime;
// }

//used for DB saving
export interface News {
  id?: string;
  creator: UserProps;
  entityType: EntityType;
  group: Consultation;
  groupId: string;
  text: string;
  update: FirebaseTime;
}
export const EntityTypeSchema = Joi.string().valid(
  EntityType.CONSULTATION,
  EntityType.MESSAGE
);

export const NewsSchema = Joi.object({
  creator: UserSchema,
  entityType: Joi.string().valid(EntityType.CONSULTATION, EntityType.MESSAGE),
  group: ConsultationSchema,
  groupId: Joi.string(),
  text: Joi.string(),
  update: FirebaseTimeSchema,
});

export const MessageTextSchema = Joi.string().required();
