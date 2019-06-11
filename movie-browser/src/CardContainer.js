/* eslint-disable no-unused-vars */
import React from 'react'
import Card from './view/Card'

const CardContainer = (props) => {
  return (
    <div className='row'>
      {props.movies.map(movie =>
        <Card key={movie.id} {...movie} />
      )}
    </div>
  )
}

export default CardContainer
