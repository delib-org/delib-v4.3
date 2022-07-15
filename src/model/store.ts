export interface UserProps{
  displayName:string |null,
  uid?:string |null,
  email?:string |null,
  photoURL?:string |null
  isAnonymous?:boolean |null
}

interface StoreProps{
    counter:number
    user:UserProps | null
}
const store:StoreProps = {
  counter: 0,
  user: null
};

export default store;
