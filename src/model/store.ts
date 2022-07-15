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
}
const store:StoreProps = {
  counter: 0,
  user: null,
  error:null
};

export default store;
