class EDP {
    constructor(_edpID, _createdAt, _createdBy, _updatedAt, updatedBy) {
        this.edpID = _edpID;
        this.createdAt = new Date(_createdAt);
        this.createdBy = _createdBy;
        this.updatedAt = new Date(_updatedAt);
        this.updatedBy = updatedBy;
    }
    //EDP
    getEdpID() {
        return this.edpID;
    }
    setEdpID(value) {
        this.edpID = value;
    }
    //CREATED
    getCreatedAt() {
        return this.createdAt;
    }

    setCreatedBy(value) {
        this.createdBy = value;
    }
    getCreatedBy() {
        return this.createdBy;
    }

    //Updated
    getUpdatedAt() {
        return this.updatedAt;
    }
    getUpdatedBy() {
        return this.updatedBy;
    }
    setUpdatedBy(value) {
        this.updatedBy = value;
    }
}

export default EDP;