import { Consultation } from "./consultationModel";
import { FirebaseTime } from "./timeModel";

export interface UserProps{
  displayName:string |null,
  uid?:string |null,
  email?:string |null,
  photoURL?:string |null
  isAnonymous?:boolean |null
}

export enum ErrorType{
  ERROR= 'error',
  WARINIG = 'warinig'
}

interface StoreProps{
    counter:number
    user:UserProps | null,
    error:{message:string, type:ErrorType} | null
    consultations:{groups:Consultation[],last_update:FirebaseTime|Date}
}
const store:StoreProps = {
  counter: 0,
  user: null,
  error:null,
  consultations:{groups:[],last_update:new Date(0)}
};

export default store;


