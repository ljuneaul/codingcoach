/* eslint-disable no-unused-vars */
import React from 'react'
import Card from './Card'

const NoOfMinimumMovies = 6

const CardContainer = ({ movies }) => {
  return (
    <div className='row'>
      {movies
        .slice(0, NoOfMinimumMovies)
        .map(movie =>
          <Card key={movie.id} {...movie} />
        )}
    </div>
  )
}

export default CardContainer
