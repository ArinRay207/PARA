import React from 'react';
import { IoIosAdd } from "react-icons/io";
import './AddButton.css'

const AddButton = ({bgColor, handleClick, color}) => {
    const style = {
        backgroundColor: bgColor,
        color: color,
        border: "solid",
        borderWidth: "5px",
        borderColor: "#091334"
    }    
  return (
    <div className='add-btn' style={style} onClick={handleClick}>
        <IoIosAdd className='add-sign' />
    </div>
  )
}

export default AddButton