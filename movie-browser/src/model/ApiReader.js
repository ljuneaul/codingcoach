const ApiReader = url => fetch(url)
  .then(response => {
    return response.json()
  })

export default ApiReader
