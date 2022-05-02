;(() => {
  //Aplicando el principio de responsabilidad unica
  //Priorizar la composicion frente ala herencia

  type Gender = 'M' | 'F'

  //Person
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

  //User
  interface IUserProps {
    email: string
    role: string
  }
  class User {
    public email: string
    public role: string
    constructor(userProps: IUserProps) {
      const { email, role } = userProps
      this.email = email
      this.role = role
    }
    checkCredentials(): boolean {
      return true
    }
  }

  //User Settings
  interface ISettingsProps {
    lastOpenFolder: string
    workingDirectory: string
  }
  class Settings {
    public workingDirectory: string
    public lastOpenFolder: string
    constructor(userSettingsProps: ISettingsProps) {
      const { lastOpenFolder, workingDirectory } = userSettingsProps

      this.workingDirectory = workingDirectory
      this.lastOpenFolder = lastOpenFolder
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
  class UserSettings {
    public person: Person
    public user: User
    public settings: Settings

    constructor(userSettingsProps: IUserSettingsProps) {
      const { birthdate, email, gender, lastOpenFolder, name, role, workingDirectory } =
        userSettingsProps
      this.person = new Person({ birthdate, name, gender })
      this.user = new User({ email, role })
      this.settings = new Settings({ lastOpenFolder, workingDirectory })
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
  const userSettingsObj = new UserSettings(settingsProps)

  console.log({ userSettingsObj })
  console.log(userSettingsObj.user.checkCredentials())
})()
