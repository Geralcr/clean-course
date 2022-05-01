;(() => {
  const temperaturesInCelsius = [33.6, 12.34]

  const serverIpAddres = '123.123.123.123'

  const users = [
    { id: 1, email: 'fernando@google.com' },
    { id: 2, email: 'juan@google.com' },
    { id: 3, email: 'melissa@google.com' },
  ]

  const userEmails = users.map((user) => user.email)

  const canJump = false
  const canRun = true
  const hasItems = true
  const isLoading = false

  const initialTime = new Date().getTime()

  const finalTime = new Date().getTime() - initialTime

  // Funciones

  function getBooks() {
    throw new Error('Function not implemented.')
  }

  function getBooksByURL(URL: string) {
    throw new Error('Function not implemented.')
  }

  function getAreaSquare(side: number) {
    throw new Error('Function not implemented.')
  }

  function printJob() {
    throw new Error('Function not implemented.')
  }
})()
