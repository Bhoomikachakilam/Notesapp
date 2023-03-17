import React from 'react'
import './Note.css'
import { MdDeleteForever } from 'react-icons/md';

function Note({ key,text, onDeleteNote }) {
    const handleDeleteNote = () => {
        onDeleteNote(key);
      };
    
  return (
    <div className="note">
          {text}
          <div className="Footer">
          <small>{new Date().toLocaleDateString()}</small>
              <MdDeleteForever className="delete" size='1rem' onClick={handleDeleteNote} />
              </div>
      </div>
  )
}

export default Note

  