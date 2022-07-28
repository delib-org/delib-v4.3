import store from "../store/store";
import { Authorizations } from "./authCont";
export async function pageAuthorized(authorized:Array<Authorizations>):Promise<void>{
    try {
        if(store.user !== null){
            
        }
       
    } catch (error) {
        console.error(error)
    }
}