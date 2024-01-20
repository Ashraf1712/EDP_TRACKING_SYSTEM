class Department {

    departmentID = null;
    department = null;

    constructor(_departmentID, _department) {
        this.departmentID = _departmentID
        this.department = _department
    }

    set setDepartmentID(_departmentID) {
        this.departmentID = _departmentID;
    }
    get getDepartmentID() {
        return this.departmentID;
    }
    set setDepartment(_department) {
        this.department = _department;
    }
    get getDepartment() {
        return this.department;
    }
}

export default Department;