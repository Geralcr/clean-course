;(() => {
  //No aplicando el principio de responsabilidad unica
  type Gender = 'M' | 'F'

  interface IPersonProps {
    birthdate: Date
    gender: Gender
    name: string
  }

  class Person {
    public birthdate: Date
    public gender: Gender
    public name: string
    constructor(personProps: IPersonProps) {
      const { name, birthdate, gender } = personProps
      this.name = name
      this.birthdate = birthdate
      this.gender = gender
    }
  }

  interface IUserProps {
    birthdate: Date
    email: string
    gender: Gender
    lastAccess: Date
    name: string
    role: string
  }
  class User extends Person {
    public email: string
    public role: string
    constructor(userProps: IUserProps) {
      const { birthdate, email, gender, name, role } = userProps
      super({ birthdate, gender, name })
      this.email = email
      this.role = role
    }
    checkCredentials(): boolean {
      return true
    }
  }

  interface IUserSettingsProps {
    birthdate: Date
    email: string
    gender: Gender
    lastOpenFolder: string
    name: string
    role: string
    workingDirectory: string
  }
  class UserSettings extends User {
    public workingDirectory: string
    public lastOpenFolder: string
    constructor(userSettingsProps: IUserSettingsProps) {
      const { birthdate, email, gender, lastOpenFolder, name, role, workingDirectory } =
        userSettingsProps
      const superUser = {
        birthdate,
        email,
        gender,
        name,
        role,
      }
      super(superUser)
      this.workingDirectory = workingDirectory
      this.lastOpenFolder = lastOpenFolder
    }
  }

  const settingsProps: IUserSettingsProps = {
    birthdate: new Date(Date.now()),
    email: 'geral@test.com',
    gender: 'F',
    lastOpenFolder: '/home',
    name: 'geral',
    role: 'admin',
    workingDirectory: '/home/work',
  }
  const userSettings = new UserSettings(settingsProps)

  console.log({ userSettings })
})()
