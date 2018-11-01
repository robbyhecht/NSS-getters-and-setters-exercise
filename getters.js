
class Person {

    constructor (props) {
      this.firstName = props.firstName
      this.lastName = props.lastName
    }

    get fullName () {
      return `${this.firstName} ${this.lastName}`
    }

    set nickname(name) {
      this._nickname = name
    }

}

// you'd then use an object to insert values

// OR

class Person {

  constructor (first, last) {
    this.firstName = first
    this.lastName = last
  }

  get fullName () {
    return `${this.firstName} ${this.lastName}`
  }

  set nickname(name) {
    this._nickname = name
  }

}




const homer = new Person("Homer", "Simpson")
homer.nickName = "Doh"



// Write a Person class with a constructor that takes a first and last name.

// Write a getter that returns the full name

// Write a setter that sets a nickname.