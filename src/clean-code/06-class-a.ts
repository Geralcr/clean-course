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
      this.lastAccess = new Date()
    }
    checkCredentials(): boolean {
      return true
    }
  }

  class UserSettings extends User {
    constructor(
      name: string,
      birthdate: Date,
      gender: Gender,
      email: string,
      role: string,
      public workingDirectory: string,
      public lastOpenFolder: string
    ) {
      super(name, birthdate, gender, email, role)
    }
  }

  const userSettings = new UserSettings(
    'Fernando',
    new Date('1985-10-21'),
    'M',
    'fernando@google.com',
    'Admin',
    '/usr/home',
    '/home'
  )

  console.log({ userSettings })
})()
