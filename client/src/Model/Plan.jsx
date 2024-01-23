class Plan {
  constructor(
    planID,
    competencyAddress,
    competencyCluster,
    actionPlan,
    intervention,
    remarks,
    goalsID,
    createdAt,
    updatedAt
  ) {
    this._planID = planID;
    this._competencyAddress = competencyAddress;
    this._competencyCluster = competencyCluster;
    this._actionPlan = actionPlan;
    this._intervention = intervention;
    this._remarks = remarks;
    this._goalsID = goalsID;
    this._createdAt = new Date(createdAt);
    this._updatedAt = new Date(updatedAt);
  }

  get planID() {
    return this._planID;
  }

  set planID(value) {
    this._planID = value;
  }

  get competencyAddress() {
    return this._competencyAddress;
  }

  set competencyAddress(value) {
    this._competencyAddress = value;
  }

  get competencyCluster() {
    return this._competencyCluster;
  }

  set competencyCluster(value) {
    this._competencyCluster = value;
  }

  get actionPlan() {
    return this._actionPlan;
  }

  set actionPlan(value) {
    this._actionPlan = value;
  }

  get intervention() {
    return this._intervention;
  }

  set intervention(value) {
    this._intervention = value;
  }

  get remarks() {
    return this._remarks;
  }

  set remarks(value) {
    this._remarks = value;
  }

  get goalsID() {
    return this._goalsID;
  }

  set goalsID(value) {
    this._goalsID = value;
  }

  get createdAt() {
    return this._createdAt;
  }

  set createdAt(value) {
    this._createdAt = value;
  }

  get updatedAt() {
    return this._updatedAt;
  }

  set updatedAt(value) {
    this._updatedAt = value;
  }
}

export default Plan;
