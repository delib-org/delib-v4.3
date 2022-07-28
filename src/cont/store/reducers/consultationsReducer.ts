import { Section } from "../../../model/consultationModel";
import store from "../store";
import { responseToError } from "../../firebase/consultations/consultationsDBGet";
import { saveStore } from "./storeReducer";

export function selectSection(consultationId:string, section:Section){
    try {
        const index = store.consultations.sections.findIndex(consSec=>consSec.id === consultationId);
        if(index === -1) throw new Error('Couldnt find sections');
        store.consultations.sections[index].selectedSection = section;
        saveStore('selectSection');

    } catch (error) {
        responseToError(error)
    }
}

export function getSectionSelected(consultationId:string):string{
    try {
        const consultation = store.consultations.sections.find(consSec=>consSec.id === consultationId);
        return consultation?.selectedSection || Section.INTRO;
    } catch (error) {
        return Section.INTRO
    }
}