import { Consultation } from "../../model/consultationModel";
import store from "./store";

export function getConsultationStore(
  consultationId: string
): Consultation | undefined {
  try {
    return store.consultations.groups.find(
      (consultation) => consultation.id === consultationId
    );
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
