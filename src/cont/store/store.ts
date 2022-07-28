import { Consultation, SectionProps } from "../../model/consultationModel";
import { FirebaseTime } from "../../model/timeModel";
import { Membership } from "../../model/membershipModel";
import { News } from "../../model/newsModel";

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
    memberIn:Membership[];
    memberClean:Function[];
    news:News[],
    lang:Lang;
}
const store:StoreProps = {
  counter: 0,
  user: null,
  error:null,
  consultations:{groups:[],last_update:new Date(0),sections:[]},
  memberIn:[],
  news:[],
  memberClean:[],
  lang:Lang.HE
};

export default store;

export function saveStoreToLocal(){
  localStorage.setItem('store',JSON.stringify(store))
}


