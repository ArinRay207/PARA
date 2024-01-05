import React, { useState } from 'react'
import "./ResultBox.css"

const ResultBox = ({children}) => {
  return (
    <div className='result-container'>
        {children}
    </div>
  )
}

export default ResultBox