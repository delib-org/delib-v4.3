import store from "../store/store";
import { Membership } from "../../model/membershipModel";

export function getMembership(groupId:string):Membership|undefined{
    try {
        return store.memberIn.find(membership=>membership.groupId === groupId);

    } catch (error) {
        console.error(error)
        return undefined
    }
}

export function clenaMembership(){
    store.memberIn = []
}