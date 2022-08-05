import { Consultation, Section } from "../../model/consultationModel";
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

export function getConsultationSectionsStore(
  consultationId: string
): Array<Section> | undefined {
  try {
    const sections = store.consultations.sections.find(
      (consultation) => consultation.id === consultationId
    );
    if (sections === undefined)
      throw new Error(
        `couldnt find sections of consultation ${consultationId}`
      );
    if (!("sections" in sections))
      throw new Error(
        `couldnt find sections.sections of consultation ${consultationId}`
      );

    return sections.sections;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
