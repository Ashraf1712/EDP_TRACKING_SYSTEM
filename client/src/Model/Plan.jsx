import EDP from "./EDP";

class Plan extends EDP {

  constructor(
    _planID,
    _competencyAddress,
    _competencyCluster,
    _actionPlan,
    _intervention,
    _remarks,
    _edpID,
  ) {
    super(_edpID)
    this.planID = _planID;
    this.competencyAddress = _competencyAddress;
    this.competencyCluster = _competencyCluster;
    this.actionPlan = _actionPlan;
    this.intervention = _intervention;
    this.remarks = _remarks;
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

}

export default Plan;
