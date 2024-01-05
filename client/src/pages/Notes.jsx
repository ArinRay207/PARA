import React, { useEffect, useState } from 'react'
import Note from '../components/Note';
import "./Notes.css"
import Heading from './../components/Heading';
import Navbar from '../components/Navbar';
import AddButton from './../components/AddButton';
import { Navigate, useNavigate } from 'react-router';
import Modal from 'react-modal'
import NoteModal from '../components/NoteModal';
import axios from 'axios';

const Notes = () => {
  const [notes, setNotes] = new useState([]);

  const getAllNotes = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/notes/get-notes");
        console.log(data)
        setNotes(data.notes);
    } catch(error) {
        console.log(error);
    }
  };

  useEffect(() => {
    getAllNotes();
  }, []);

  

  

  const handleKey = (id, title, desc) => {
    console.log(id)
    if (id == -1) {
      addNote(title, desc)
    } else {
      modifyNote(id, title, desc)
    }
  }

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleClick = () => {
    setModalIsOpen(true);
  }
  
  const closeModal = () => {
    setModalIsOpen(false, console.log(modalIsOpen));
  }
  
  const addNote = async (title, description) => {
    closeModal();
    try {
        const res = await axios.post('http://localhost:8080/notes/create-note', {
            title, description
        })

        
        if (res && res.data.success) {
          getAllNotes();
        } else {
        }
    } catch (error) {
        console.log(error);
    }
  }

  const modifyNote = async (id, title, description) => {
    closeModal();
    try {
      const res = await axios.put(`http://localhost:8080/notes/update-note/${id}`, {
        title, description
      });
      if (res.data.success) {
        getAllNotes();
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  }

  const deleteNote = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:8080/notes/delete-note/${id}`);
      if (res.data.success) {
        getAllNotes();
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navbar />
      <Heading>NOTES</Heading>
      <div className='notes-container' id='notes'>
        {
          notes.map((note) => ( <Note 
                                  key={note._id} 
                                  id={note._id} 
                                  title={note.title} 
                                  description={note.description} 
                                  delete={deleteNote} 
                                  onEnter={handleKey}
                                /> ))
        }
        <div className='ghost-note' />
        <div className='ghost-note' />
        <div className='ghost-note' />
        <div className='ghost-note' />
      </div>
      <AddButton bgColor="#73C162" color="#091334" handleClick={handleClick} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="note-modal"
      >
        <NoteModal 
          closeModal={closeModal} 
          id="-1"
          title={"Enter Title"} 
          description={"Enter Description"} 
          handleClick={closeModal} 
          onEnter={handleKey}
        />
      </Modal>
    </>
  )
}

export default Notes