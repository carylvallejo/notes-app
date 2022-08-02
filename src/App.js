import './App.css';
import React, { useState, Fragment } from "react";
import Side from './Side';
import Main from './Main';

function App() {
  const [notes, setNotes] = useState ([]);
  const [newNote, setNewNote] = useState ("");
  const [activeNote, setActiveNote] = useState(false);

  const addNotes = () => {
    const note = {
      id: notes.length === 0 ? 1 : notes[notes.length - 1].id + 1,
      title: "Insert title",
      body: "",
      noteName: newNote,
    };
    setNotes([note, ...notes]);
    setActiveNote(note.id);

  }

  const deleteNotes = (id) => {
    setNotes(notes.filter((note) => note.id != id));
  }

  return (
    <Fragment>
        <Side 
        notes={notes}
        addNotes={addNotes}
        deleteNotes={deleteNotes}
        />
        <Main />
    </Fragment>
  );
}

export default App;
