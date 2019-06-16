/* eslint-disable no-unused-vars */
import React from 'react'

const ViewAllButton = ({ buttonText, onClickHandler }) => {
  return (
    <button onClick={onClickHandler} className='btn btn-outline-secondary m-2'>
      {buttonText}
    </button>
  )
}

export default ViewAllButton
