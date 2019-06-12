/* eslint-disable no-unused-vars */
import React from 'react'
import Card from './Card'

let NoOfMinMovies = 6

const CardContainer = (props) => {
  return (
    <div className='row'>
      {props.movies
        .slice(0, NoOfMinMovies)
        .map(movie =>
          <Card key={movie.id} {...movie} />
        )}
    </div>
  )
}

export default CardContainer
