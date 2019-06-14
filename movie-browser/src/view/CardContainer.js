/* eslint-disable no-unused-vars */
import React from 'react'
import Card from './Card'

const NoOfMinimumMovies = 6

const CardContainer = (props) => {
  return (
    <div className='row'>
      {props.movies
        .slice(0, NoOfMinimumMovies)
        .map(movie =>
          <Card key={movie.id} {...movie} />
        )}
    </div>
  )
}

export default CardContainer
