class Status {
  constructor(
    statusID,
    status,
    dueDate,
    dateAgreement,
    dateReview,
    goalsID,
    updatedBy,
    createdAt,
    updatedAt
  ) {
    this._statusID = statusID;
    this._status = status;
    this._dueDate = new Date(dueDate);
    this._dateAgreement = dateAgreement ? new Date(dateAgreement) : null;
    this._dateReview = dateReview ? new Date(dateReview) : null;
    this._goalsID = goalsID;
    this._updatedBy = updatedBy;
    this._createdAt = new Date(createdAt);
    this._updatedAt = new Date(updatedAt);
  }

  get statusID() {
    return this._statusID;
  }

  set statusID(value) {
    this._statusID = value;
  }

  get status() {
    return this._status;
  }

  set status(value) {
    this._status = value;
  }

  get dueDate() {
    return this._dueDate;
  }

  set dueDate(value) {
    this._dueDate = value;
  }

  get dateAgreement() {
    return this._dateAgreement;
  }

  set dateAgreement(value) {
    this._dateAgreement = value;
  }

  get dateReview() {
    return this._dateReview;
  }

  set dateReview(value) {
    this._dateReview = value;
  }

  get goalsID() {
    return this._goalsID;
  }

  set goalsID(value) {
    this._goalsID = value;
  }

  get updatedBy() {
    return this._updatedBy;
  }

  set updatedBy(value) {
    this._updatedBy = value;
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

export default Status;
