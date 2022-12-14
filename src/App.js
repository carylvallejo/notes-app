import './App.css';
import React, { useState, useEffect } from "react";
import { nanoid } from 'nanoid';
import Side from './Side';
import Main from './Main';

function App() {
  const [notes, setNotes] = useState (
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );
 
  const [activeNote, setActiveNote] = useState(false);

  //store changes 
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  //add new note
  const addNotes = () => {
    const note = {
      id: nanoid(),
      title: "Insert Note Title",
      body: "",
      lastModified: Date.now(),
    };

    setNotes([note, ...notes]);
    setActiveNote(note.id);

  } 
  //current note
  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  //delete note
  const deleteNotes = (noteId) => {
    setNotes(notes.filter(({ id }) => id !== noteId));
  }
  //modify note
  const editNote = (editedNote) => {
    const editedNotes = notes.map((note) => {
      if (note.id === activeNote) {
        return editedNote;
      }
      return note;
    });
    setNotes(editedNotes);
  };

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
        activeNote={getActiveNote()} 
        editNote={editNote} />
    </div>
  );
}

export default App;
