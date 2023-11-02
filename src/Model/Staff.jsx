class Staff {
  id = null;
  staffID = null;
  name = null;

  constructor(_id, _staffID, _name) {
    this.id = _id;
    this.staffID = _staffID;
    this.name = _name;
  }

  set setID(_id) {
    this.id = _id;
  }
  set setStaffID(_staffID) {
    this.staffID = _staffID;
  }
  set setName(_name) {
    this.name = _name;
  }

  get getID() {
    return this.id;
  }
  get getStaffID() {
    return this.staffID;
  }
  get getName() {
    return this.name;
  }
}

export default Staff;
