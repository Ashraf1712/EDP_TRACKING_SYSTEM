class Staff {
  staffID = null;
  staffEmail = null;
  staffPassword = null;
  staffName = null;
  staffReportedTo = null;
  departmentID = null;
  categoryID = null;
  sectionID = null;

  constructor(_id, _email, _password, _name, _reportedTo, _department, _category, _section) {
    this.staffID = _id;
    this.staffEmail = _email;
    this.staffPassword = _password;
    this.staffName = _name;
    this.staffReportedTo = _reportedTo;
    this.departmentID = _department;
    this.categoryID = _category;
    this.sectionID = _section;
  }

  // Getter and Setter for staffID
  getStaffID() {
    return this.staffID;
  }

  setStaffID(value) {
    this.staffID = value;
  }

  // Getter and Setter for staffEmail
  getStaffEmail() {
    return this.staffEmail;
  }

  setStaffEmail(value) {
    this.staffEmail = value;
  }

  // Getter and Setter for staffPassword
  getStaffPassword() {
    return this.staffPassword;
  }

  setStaffPassword(value) {
    this.staffPassword = value;
  }

  // Getter and Setter for staffName
  getStaffName() {
    return this.staffName;
  }

  setStaffName(value) {
    this.staffName = value;
  }

  // Getter and Setter for staffReportedTo
  getStaffReportedTo() {
    return this.staffReportedTo;
  }

  setStaffReportedTo(value) {
    this.staffReportedTo = value;
  }

  // Getter and Setter for departmentID
  getDepartmentID() {
    return this.departmentID;
  }

  setDepartmentID(value) {
    this.departmentID = value;
  }

  // Getter and Setter for categoryID
  getCategoryID() {
    return this.categoryID;
  }

  setCategoryID(value) {
    this.categoryID = value;
  }

  // Getter and Setter for sectionID
  getSectionID() {
    return this.sectionID;
  }

  setSectionID(value) {
    this.sectionID = value;
  }

}

export default Staff;
