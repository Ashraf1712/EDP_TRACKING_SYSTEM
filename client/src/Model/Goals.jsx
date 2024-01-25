class Goals {
  goalsID = null;
  goalsLongterm = null;
  goalsShortterm = null;
  staffEmail = null;
  statusID = null;
  planID = null;
  createdAt = null;
  updatedAt = null;

  constructor(
    _goalsID,
    _goalsLongterm,
    _goalsShortterm,
    _staffEmail,
    _statusID,
    _planID,
    _createdAt,
    _updatedAt
  ) {
    this.goalsID = _goalsID;
    this.goalsLongterm = _goalsLongterm;
    this.goalsShortterm = _goalsShortterm;
    this.staffEmail = _staffEmail;
    this.statusID = _statusID;
    this.planID = _planID;
    this.createdAt = _createdAt ? new Date(_createdAt) : null;
    this.updatedAt = _updatedAt ? new Date(_updatedAt) : null;
  }

  // Getter and Setter for goalsID
  getGoalsID() {
    return this.goalsID;
  }

  setGoalsID(value) {
    this.goalsID = value;
  }

  // Getter and Setter for goalsLongterm
  getGoalsLongterm() {
    return this.goalsLongterm;
  }

  setGoalsLongterm(value) {
    this.goalsLongterm = value;
  }

  // Getter and Setter for goalsShortterm
  getGoalsShortterm() {
    return this.goalsShortterm;
  }

  setGoalsShortterm(value) {
    this.goalsShortterm = value;
  }

  // Getter and Setter for staffEmail
  getStaffEmail() {
    return this.staffEmail;
  }

  setStaffEmail(value) {
    this.staffEmail = value;
  }

  // Getter and Setter for statusID
  getStatusID() {
    return this.statusID;
  }

  setStatusID(value) {
    this.statusID = value;
  }

  // Getter and Setter for planID
  getPlanID() {
    return this.planID;
  }

  setPlanID(value) {
    this.planID = value;
  }

  // Getter and Setter for createdAt
  getCreatedAt() {
    return this.createdAt;
  }

  setCreatedAt(value) {
    this.createdAt = value;
  }

  // Getter and Setter for updatedAt
  getUpdatedAt() {
    return this.updatedAt;
  }

  setUpdatedAt(value) {
    this.updatedAt = value;
  }
}

export default Goals;
