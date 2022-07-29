import { Consultation, SectionProps } from "../../model/consultationModel";
import { FirebaseTime } from "../../model/timeModel";
import { Membership } from "../../model/membershipModel";
import { GroupNews, NewsStore } from "../../model/newsModel";

import { MessageProps } from "../../model/messagesModel";

export interface UserProps{
  displayName:string |null,
  uid?:string |null,
  email?:string |null,
  photoURL?:string |null
  isAnonymous?:boolean |null
}




export enum ErrorType{
  ERROR= 'error',
  WARINIG = 'warning'
}

export enum Lang{
  HE = 'he',
  EN = 'en'
}



export interface StoreProps{
    counter:number
    user:UserProps | null;
    error:{message:string, type:ErrorType} | null;
    consultations:{groups:Consultation[],last_update:FirebaseTime|Date,sections:SectionProps[]};
    chat:{
      messages:MessageProps[],
      last_update:FirebaseTime,
      last_meesage_created:FirebaseTime
    }
    memberIn:Membership[];
    memberClean:Function[];
    news:NewsStore,
    lang:Lang;
}
const store:StoreProps = {
  counter: 0,
  user: null,
  error:null,
  consultations:{groups:[],last_update:new Date(0),sections:[]},
  chat:{messages:[],last_update:{seconds:0, nanoseconds:0},last_meesage_created:{seconds:0, nanoseconds:0}},
  memberIn:[],
  news:new NewsStore(),
  memberClean:[],
  lang:Lang.HE
};

export default store;

export function saveStoreToLocal(){
  localStorage.setItem('store',JSON.stringify(store))
}


