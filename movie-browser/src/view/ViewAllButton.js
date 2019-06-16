/* eslint-disable no-unused-vars */
import React from 'react'

const ViewAllButton = ({ buttonText, onClickHandler }) => {
  return (
    <button onClick={onClickHandler} className='btn btn-outline-secondary'>
      {buttonText}
    </button>
  )
}

export default ViewAllButton
