class Status {
  statusID = null;
  status = null;
  dueDate = null;
  dateAgreement = null;
  dateReview = null;
  goalsID = null;
  updatedBy = null;
  createdAt = null;
  updatedAt = null;

  constructor(
    _statusID,
    _status,
    _dueDate,
    _dateAgreement,
    _dateReview,
    _goalsID,
    _updatedBy,
    _createdAt,
    _updatedAt
  ) {
    this.statusID = _statusID;
    this.status = _status;
    this.dueDate = new Date(_dueDate);
    this.dateAgreement = _dateAgreement ? new Date(_dateAgreement) : null;
    this.dateReview = _dateReview ? new Date(_dateReview) : null;
    this.goalsID = _goalsID;
    this.updatedBy = _updatedBy;
    this.createdAt = new Date(_createdAt);
    this.updatedAt = new Date(_updatedAt);
  }

  getStatusID() {
    return this.statusID;
  }

  setStatusID(value) {
    this.statusID = value;
  }

  getStatus() {
    return this.status;
  }

  setStatus(value) {
    this.status = value;
  }

  getDueDate() {
    return this.dueDate;
  }

  setDueDate(value) {
    this.dueDate = value;
  }

  getDateAgreement() {
    return this.dateAgreement;
  }

  setDateAgreement(value) {
    this.dateAgreement = value;
  }

  getDateReview() {
    return this.dateReview;
  }

  setDateReview(value) {
    this.dateReview = value;
  }

  getGoalsID() {
    return this.goalsID;
  }

  setGoalsID(value) {
    this.goalsID = value;
  }

  getUpdatedBy() {
    return this.updatedBy;
  }

  setUpdatedBy(value) {
    this.updatedBy = value;
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

export default Status;
