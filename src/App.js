import './App.css';
import React, { useState, Fragment } from "react";
import Side from './Side';
import Main from './Main';

function App() {
  const [notes, setNotes] = useState (
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );
  const [newNote, setNewNote] = useState ("");
  const [activeNote, setActiveNote] = useState(false);

  const addNotes = () => {
    const note = {
      id: notes.length === 0 ? 1 : notes[notes.length - 1].id + 1,
      title: "Insert Note Title",
      body: "",
    };
    setNotes([note, ...notes]);
    setActiveNote(note.id);

  }

  const getActiveNote = () => {
    return notes.find(({ id }) => id === activeNote);
  }


  const deleteNotes = (id) => {
    setNotes(notes.filter((note) => note.id != id));
  }

  const updateNote = (updatedNote) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }
      return note;
    })
    setNotes(updatedNotes);
  }

  return (
    <div className="App">
        <Side 
        notes={notes}
        addNotes={addNotes}
        deleteNotes={deleteNotes}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
        />
        <Main 
        updateNote={updateNote} activeNote={getActiveNote()}/>
    </div>
  );
}

export default App;
