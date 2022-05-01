;(() => {
  function getMovieById(id: string) {
    console.log({ id })
  }

  function getMovieActorsById(id: string) {
    console.log({ id })
  }

  function getyActorBiographyById(id: string) {
    console.log({ id })
  }

  interface Movie {
    title: string
    description: string
    rating: number
    cast: string[]
  }

  let infoMovie: Movie = { title: '', description: '', rating: 0, cast: [] }
  // Crear una película
  function createMovie(infoMovie: Movie) {
    console.log(infoMovie.title, infoMovie.description, infoMovie.rating, infoMovie.cast)
  }
  createMovie(infoMovie)

  interface Actor {
    fullName: string
    birthdate: Date
  }
  // Crea un nuevo actor
  //datos iniciales declaro e inicializo
  let infoActor1: Actor = { fullName: '', birthdate: new Date() }
  function createActor(infoActor: Actor): boolean {
    //si lo destructuro no uso infoActor.fullName
    const { fullName, birthdate } = infoActor
    //si no lo destructuro infoActor.fullName

    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (infoActor.fullName === 'fernando') return false

    console.log('Crear actor')
    return true
  }
  createActor(infoActor1)
})()
