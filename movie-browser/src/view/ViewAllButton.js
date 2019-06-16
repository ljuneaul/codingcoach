/* eslint-disable no-unused-vars */
import React from 'react'

const ViewAllButton = ({ buttonText, onClick }) => {
  return (
    <button onClick={onClick} className='btn btn-outline-secondary' >{ buttonText }</button>
  )
}

export default ViewAllButton
