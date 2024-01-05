import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import "./NoteModal.css"
import CloseButton from './CloseButton';

const NoteModal = (props) => {
    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);
    
    useEffect(() => {
        const keyDownHandler = event => {
          console.log('User pressed: ', event.key);
          if (event.key === 'Enter') {
            props.closeModal();
            event.preventDefault();    
            props.onEnter(props.id, title, description);
          }
        };
    
        document.addEventListener('keydown', keyDownHandler);
    
        return () => {
          document.removeEventListener('keydown', keyDownHandler);
        };
      }, [title, description]);

    return (
        <div className='note-modal-content'>
            <div className='modal-upper-container'>
                <input className='modal-heading-input'
                    type='text'
                    value={title}
                    onChange={(e)=>{setTitle(e.target.value)}}
                />
                <CloseButton color={"#73C162"} handleClick={props.handleClick}/>
            </div>
            <div className='modal-middle-container'>
                <textarea
                    spellCheck='false'
                    contentEditable="true" 
                    aria-multiline="true" 
                    rows={11}                    
                    className="modal-desc-input"
                    value={description}
                    onChange={(e)=>{setDescription(e.target.value)}}
                />
            </div>
        </div>
    )
}

export default NoteModal