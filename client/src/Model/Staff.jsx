class Staff {
  staffID = null;
  staffEmail = null;
  staffPassword = null;
  staffName = null;
  staffDepartment = null;
  staffCategory = null;
  staffSection = null;

  constructor(_id, _email, _password, _name, _department, _category, _section) {
    this.staffID = _id;
    this.staffEmail = _email;
    this.staffPassword = _password;
    this.staffName = _name;
    this.staffDepartment = _department;
    this.staffCategory = _category;
    this.staffSection = _section;
  }


  // Getter and setter for staffID
  get getStaffID() {
    return this.staffID;
  }

  set setStaffID(_staffID) {
    this.staffID = _staffID;
  }

  // Getter and setter for staffEmail
  get getStaffEmail() {
    return this.staffEmail;
  }

  set setStaffEmail(_email) {
    this.staffEmail = _email;
  }

  // Getter and setter for staffPassword
  get getStaffPassword() {
    return this.staffPassword;
  }

  set setStaffPassword(_password) {
    this.staffPassword = _password;
  }

  // Getter and setter for staffName
  get getStaffName() {
    return this.staffName;
  }

  set setStaffName(_name) {
    this.staffName = _name;
  }

  // Getter and setter for staffDeparment
  get getStaffDepartment() {
    return this.staffDepartment;
  }

  set setStaffDepartment(_department) {
    this.staffDepartment = _department;
  }

  // Getter and setter for staffCategory
  get getStaffCategory() {
    return this.staffCategory;
  }

  set setStaffCategory(_category) {
    this.staffCategory = _category;
  }

  // Getter and setter for staffSection
  get getStaffSection() {
    return this.staffSection;
  }

  set setStaffSection(_section) {
    this.staffSection = _section;
  }

}

export default Staff;
