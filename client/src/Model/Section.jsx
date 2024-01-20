class Section {

    sectionID = null;
    section = null;

    constructor(_sectionID, _section) {
        this.sectionID = _sectionID
        this.section = _section
    }

    set setSectionID(_sectionID) {
        this.sectionID = _sectionID;
    }
    get getSectionID() {
        return this.sectionID;
    }

    set setSection(_section) {
        this.section = _section;
    }
    get getSection() {
        return this.section;
    }
}

export default Section;