import React, { useState } from 'react'
import "./Note.css"
import Modal from 'react-modal';
import NoteModal from './NoteModal';
import { MdDelete } from 'react-icons/md'

// const customStyles = { 
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// };


const Note = (props) => {
  const [modalIsOpen, setIsOpen] = new useState(false);
  Modal.setAppElement("#root");
  
  function openModal() {
    setIsOpen(true);
  }
  
  function closeModal() {
    setIsOpen(false);
  }
  
  const desc = props.description.substr(0, 200) + ((props.description.length > 200) ? "..." : "");
  return (
    <>
      <div className="note" onClick={openModal}>
          <div className='note-header'>
            <h2>{props.title}</h2>
            <MdDelete style={{color:"#091334", fontSize:"1.8rem", cursor:"pointer"}} onClick={(e)=>{e.stopPropagation(); props.delete(props.id)}} />
          </div>
          <p>{desc}</p>
      </div>
      
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="note-modal"
      >
        <NoteModal closeModal={closeModal} id={props.id} title={props.title} description={props.description} onEnter={props.onEnter} handleClick={closeModal} />
      </Modal>
    </>
  )
}

export default Note