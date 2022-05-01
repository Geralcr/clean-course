;(() => {
  // función para obtener información de una película por Id
  function getInfoMovieById(movieId: string) {
    console.log({ movieId })
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  function getInfoMovieOfActors(movieId: string) {
    console.log({ movieId })
  }

  // funcion para obtener el bio del actor por el id
  function getyActorBiograph(ActorId: string) {
    console.log({ ActorId })
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

  interface Actor {
    fullName: string
    birthdate: Date
  }
  // Crea un nuevo actor
  let infoActor: Actor = { fullName: '', birthdate: new Date() }
  function createActor(infoActor: Actor): boolean {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (infoActor.fullName === 'fernando') return false

    console.log('Crear actor')
    return true
  }
})()
