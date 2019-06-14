const ApiReader = url => fetch(url)
  .then(async (response) => {
    // all movies
    const allMovies = await response.json()

    allMovies
      .sort((a, b) => b.release_date - a.release_date)
      .sort((a, b) => b.rt_score - a.rt_score)

    // single featured movie
    const featuredMovieIndex = Math.floor(Math.random() * allMovies.length)
    const featuredMovie = allMovies[featuredMovieIndex]

    return { allMovies, featuredMovie }
  })

export default ApiReader
