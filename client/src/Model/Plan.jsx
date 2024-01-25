class Plan {
  planID = null;
  competencyAddress = null;
  competencyCluster = null;
  actionPlan = null;
  intervention = null;
  remarks = null;
  goalsID = null;
  createdAt = null;
  updatedAt = null;

  constructor(
    _planID,
    _competencyAddress,
    _competencyCluster,
    _actionPlan,
    _intervention,
    _remarks,
    _goalsID,
    _createdAt,
    _updatedAt
  ) {
    this.planID = _planID;
    this.competencyAddress = _competencyAddress;
    this.competencyCluster = _competencyCluster;
    this.actionPlan = _actionPlan;
    this.intervention = _intervention;
    this.remarks = _remarks;
    this.goalsID = _goalsID;
    this.createdAt = new Date(_createdAt);
    this.updatedAt = new Date(_updatedAt);
  }

  getPlanID() {
    return this.planID;
  }

  setPlanID(value) {
    this.planID = value;
  }

  getCompetencyAddress() {
    return this.competencyAddress;
  }

  setCompetencyAddress(value) {
    this.competencyAddress = value;
  }

  getCompetencyCluster() {
    return this.competencyCluster;
  }

  setCompetencyCluster(value) {
    this.competencyCluster = value;
  }

  getActionPlan() {
    return this.actionPlan;
  }

  setActionPlan(value) {
    this.actionPlan = value;
  }

  getIntervention() {
    return this.intervention;
  }

  setIntervention(value) {
    this.intervention = value;
  }

  getRemarks() {
    return this.remarks;
  }

  setRemarks(value) {
    this.remarks = value;
  }

  getGoalsID() {
    return this.goalsID;
  }

  setGoalsID(value) {
    this.goalsID = value;
  }

  getCreatedAt() {
    return this.createdAt;
  }

  setCreatedAt(value) {
    this.createdAt = new Date(value);
  }

  getUpdatedAt() {
    return this.updatedAt;
  }

  setUpdatedAt(value) {
    this.updatedAt = new Date(value);
  }
}

export default Plan;
