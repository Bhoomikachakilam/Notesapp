import React from 'react';
import { useState } from 'react';
import './App.css';
import AddNote from './Addnote'
import NoteList from'./NoteList'
import { useEffect } from 'react';
import Search from './search.js'


function App() {
  const STORAGE_KEY = "notes";
  const [notes, setNotes] = useState(() => {
    const storedNotes = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return storedNotes ?? [];
  });
  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (storedNotes) {
      setNotes(storedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  }, [notes]);
  const addNoteHandler = (noteText) => {
    setNotes([...notes, noteText]);
  };
  const deleteNoteHandler = ( key ) => {
    const newNotes = [...notes];
    newNotes.splice(key, 1);
    setNotes(newNotes);
  };
  const handleSearch = (text) => {
    setSearchText(text);
  };
  
  return (
    <div className="App">
      <div className="H1" >
        Notes
      </div>
      <Search onSearch={handleSearch} />
      <AddNote onAddNote={addNoteHandler} />
      <NoteList notes={notes} searchText={searchText} onDeleteNote={deleteNoteHandler} />
    </div>
  );
}

export default App;
