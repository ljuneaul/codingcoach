/* eslint-disable no-unused-vars */
import React from 'react'
import Card from './Card'

const NoOfMinimumMovies = 6

const CardContainer = ({ movies, viewAll }) => {
  return (
    <div className='row m-0'>
      {movies
        .slice(0, viewAll ? movies.length : NoOfMinimumMovies)
        .map(movie =>
          <Card key={movie.id} {...movie} />
        )}
    </div>
  )
}

export default CardContainer
