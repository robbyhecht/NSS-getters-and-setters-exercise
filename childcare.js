
class Childcare {

  constructor (props) {
    this.child = props.child
    this.caregiver = props.caregiver
  }
  changeDiaper () {
    console.log("Your baby is poo and pee free!")
  }

  set behavior(type) {
    if (typeof(type) === "array")
      this._behavior = type
  }

}













// Make a childCare class where you can pass in any child and care giver as properties with methods to change diaper (console logs an inspirational quote to the care giver), and to store behavior in a properties (good or bad ect) using a setter.