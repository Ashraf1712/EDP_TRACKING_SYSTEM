import EDP from "./EDP";

class Goals extends EDP {
  constructor(_goalsID, _goalsLongterm, _goalsShortterm, _edpID) {
    super(_edpID);
    this.goalsID = _goalsID;
    this.goalsLongterm = _goalsLongterm;
    this.goalsShortterm = _goalsShortterm;
  }

  // Getter and Setter for goalsID
  getGoalsID() {
    return this.goalsID;
  }

  setGoalsID(value) {
    this.goalsID = value;
  }

  // Getter and Setter for goalsLongterm
  getGoalsLongterm() {
    return this.goalsLongterm;
  }

  setGoalsLongterm(value) {
    this.goalsLongterm = value;
  }

  // Getter and Setter for goalsShortterm
  getGoalsShortterm() {
    return this.goalsShortterm;
  }

  setGoalsShortterm(value) {
    this.goalsShortterm = value;
  }
}

export default Goals;
