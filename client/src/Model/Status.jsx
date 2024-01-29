import EDP from "./EDP";

class Status extends EDP {

  constructor(
    _statusID,
    _status,
    _dueDate,
    _dateAgreement,
    _dateReview,
    _edpID,
  ) {
    super(_edpID);
    this.statusID = _statusID;
    this.status = _status;
    this.dueDate = new Date(_dueDate);
    this.dateAgreement = _dateAgreement ? new Date(_dateAgreement) : null;
    this.dateReview = _dateReview ? new Date(_dateReview) : null;
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


}

export default Status;
