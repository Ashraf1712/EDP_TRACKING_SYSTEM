export interface EDP {
  edpID: string;
  updated_by: string;
  goalsLongterm: string;
  goalsShortterm: string;
  competencyAddress: string;
  competencyCluster: string;
  actionPlan: string;
  intervention: string;
  remarks?: string;
  status: "Pending" | "In Progress" | "Completed";
  dueDate: Date;
  dateAgreement?: Date;
  dateReview?: Date;
}

export interface EDPDetails {
  edpID: string;
  created_by: string;
  created_at: string;
  updated_by: string;
  updated_at: string;
  goalsLongterm: string;
  goalsShortterm: string;
  competencyAddress: string;
  competencyCluster: string;
  actionPlan: string;
  intervention: string;
  remarks: string;
  status: "Pending" | "In Progress" | "Completed";
  dueDate: Date;
  dateAgreement: Date;
  dateReview: Date;
}
