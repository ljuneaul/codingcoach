/* eslint-disable no-unused-vars */
import React from 'react'
import Card from './view/Card.js'
import movie from './data/DummyMovieData.js'

// TODO: makes group of cards

const App = () => {
  return (
    <div>
      <Card {...movie}/>
    </div>
  )
}

export default App
