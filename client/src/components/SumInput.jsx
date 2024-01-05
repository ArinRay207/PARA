import React, { useState } from 'react'
import "./SumInput.css"

const SumInput = ({val, setVal}) => {
  return (
    <div className='middle-container'>
        <textarea 
            className='sum-text-area'
            spellCheck='false'
            contentEditable="true" 
            aria-multiline="true" 
            rows={11}
            value={val}
            onChange={(e)=>{setVal(e.target.value)}}
        />
    </div>
  )
}

export default SumInput