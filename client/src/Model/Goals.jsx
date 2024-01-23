class Goals {
  constructor(
    goalsID,
    goalsLongterm,
    goalsShortterm,
    staffEmail,
    statusID,
    planID,
    createdAt,
    updatedAt
  ) {
    this._goalsID = goalsID;
    this._goalsLongterm = goalsLongterm;
    this._goalsShortterm = goalsShortterm;
    this._staffEmail = staffEmail;
    this._statusID = statusID;
    this._planID = planID;
    this._createdAt = new Date(createdAt);
    this._updatedAt = new Date(updatedAt);
  }

  get goalsID() {
    return this._goalsID;
  }

  set goalsID(value) {
    this._goalsID = value;
  }

  get goalsLongterm() {
    return this._goalsLongterm;
  }

  set goalsLongterm(value) {
    this._goalsLongterm = value;
  }

  get goalsShortterm() {
    return this._goalsShortterm;
  }

  set goalsShortterm(value) {
    this._goalsShortterm = value;
  }

  get staffEmail() {
    return this._staffEmail;
  }

  set staffEmail(value) {
    this._staffEmail = value;
  }

  get statusID() {
    return this._statusID;
  }

  set statusID(value) {
    this._statusID = value;
  }

  get planID() {
    return this._planID;
  }

  set planID(value) {
    this._planID = value;
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

module.exports = Goals;
