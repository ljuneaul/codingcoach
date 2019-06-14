const ApiReader = url => fetch(url)
  .then(async (response) => {
    // all movies
    const moviesData = await response.json()
    moviesData
      .sort((a, b) => b.release_date - a.release_date)
      .sort((a, b) => b.rt_score - a.rt_score)

    // single featured movie
    const featuredMovieIndex = Math.floor(Math.random() * moviesData.length)
    const featuredMovieData = moviesData[featuredMovieIndex]

    ES6 tip: when the keys and values are the same you can omit the value, like so:
    
    return { moviesData, featuredMovieData }
  })

export default ApiReader
