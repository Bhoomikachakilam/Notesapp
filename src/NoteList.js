import Note from './Note'
import './NoteList.css'
 const NoteList = ({ notes, searchText, onDeleteNote }) => {
    const filteredNotes = notes.filter(note => {
      return note.toLowerCase().includes(searchText.toLowerCase());
    });
  
    return (
      <div className="NoteList">
        {filteredNotes.map((note, index) => (
          <Note key={index} text={note} onDeleteNote={onDeleteNote} />
        ))}
      </div>
    )
  }
  export default NoteList
  