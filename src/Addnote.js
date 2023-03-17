import React from 'react';
import { useState } from 'react';
import './Addnote.css'
const AddNote = ({onAddNote}) => {
  const [noteText, setNoteText] = useState("")
  const inputChangeHandler = (event) => {
    setNoteText(event.target.value);
  }
  const saveNoteHandler = (event) => {
    if (noteText.trim() === '') {
      return;
    }
    event.preventDefault();
    onAddNote(noteText);
    setNoteText("");
  };
  return (
    <div className="body">
    <div className="card">
      <textarea placeholder="Type to add a note" onChange={inputChangeHandler} value={noteText}></textarea>
        <button className="save-button" onClick={saveNoteHandler}> Save</button>
        </div>
    </div>
  );
};

export default AddNote;
