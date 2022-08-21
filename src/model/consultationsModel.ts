import { updateArray } from "../cont/general/general";
import { Consultation, ConsultationSchema, Section, SectionsSchema } from "./consultationModel";
import { FirebaseTime } from "./timeModel";

export class Consultations {
  groups: Consultation[];
  sections: Section[];
  last_update: FirebaseTime;

  constructor() {
    this.groups = [];
    this.sections = [];
    this.last_update = { seconds: 0, nanoseconds: 0 };
  }
  setConsultation({
    consultation,
    sections,
  }: {
    consultation?: any;
    sections?: any[];
  }) {
    try {
    
      if (consultation) {
        const { error } = ConsultationSchema.validate(consultation);
        if (error) throw error;
        console.log(consultation)
        this.groups = updateArray(this.groups, consultation);
      } else if (sections) {
        const { error } = SectionsSchema.validate(sections);
        if (error) throw error;
        this.sections = updateArray(this.sections, sections);
      }
    } catch (error) {
      console.error(error);
    }
  }

  deleteConsultation(consultation: any) {
    try {
      const { error } = ConsultationSchema.validate(consultation);
      if (error) throw error;

      this.groups = updateArray(this.groups,consultation,true);
      this.sections = updateArray(this.sections, consultation, true);
    } catch (error) {
      console.error(error);
    }
  }
}
