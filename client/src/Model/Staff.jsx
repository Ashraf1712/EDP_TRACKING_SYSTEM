class Staff {
  staffID = null;
  staffEmail = null;
  staffPassword = null;
  staffName = null;
  departmentID = null;
  categoryID = null;
  sectionID = null;

  constructor(_id, _email, _password, _name, _department, _category, _section) {
    this.staffID = _id;
    this.staffEmail = _email;
    this.staffPassword = _password;
    this.staffName = _name;
    this.departmentID = _department;
    this.categoryID = _category;
    this.sectionID = _section;
  }

  // Getter and Setter for staffID
  getStaffID() {
    return this._staffID;
  }

  setStaffID(value) {
    this._staffID = value;
  }

  // Getter and Setter for staffEmail
  getStaffEmail() {
    return this._staffEmail;
  }

  setStaffEmail(value) {
    this._staffEmail = value;
  }

  // Getter and Setter for staffPassword
  getStaffPassword() {
    return this._staffPassword;
  }

  setStaffPassword(value) {
    this._staffPassword = value;
  }

  // Getter and Setter for staffName
  getStaffName() {
    return this._staffName;
  }

  setStaffName(value) {
    this._staffName = value;
  }

  // Getter and Setter for departmentID
  getDepartmentID() {
    return this._departmentID;
  }

  setDepartmentID(value) {
    this._departmentID = value;
  }

  // Getter and Setter for categoryID
  getCategoryID() {
    return this._categoryID;
  }

  setCategoryID(value) {
    this._categoryID = value;
  }

  // Getter and Setter for sectionID
  getSectionID() {
    return this._sectionID;
  }

  setSectionID(value) {
    this._sectionID = value;
  }

}

export default Staff;
