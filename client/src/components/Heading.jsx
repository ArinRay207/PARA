import React from 'react'
import "./Heading.css"

const Heading = ({children}) => {
  return (
    <div className='heading'>
        {children}
    </div>
  )
}

export default Heading