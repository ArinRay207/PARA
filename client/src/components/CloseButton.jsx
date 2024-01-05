import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai';
import './CloseButton.css'

const CloseButton = ({color, handleClick}) => {
  return (
    <>
        <AiFillCloseCircle className='close-btn' style={{color: color}} onClick={handleClick} />
    </>
  )
}

export default CloseButton