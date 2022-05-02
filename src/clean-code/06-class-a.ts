;(() => {
  //No aplicando el principio de responsabilidad unica
  type Gender = 'M' | 'F'
  class Person {
    constructor(public name: string, public birthdate: Date, public gender: Gender) {}
  }

  class User extends Person {
    constructor(
      name: string,
      birthdate: Date,
      gender: Gender,
      public email: string,
      public role: string,
      private lastAccess: Date
    ) {
      super(name, birthdate, gender)
    }
  }
})()
