const Side = ({
    notes,
    addNotes,
    deleteNotes,
    activeNote,
    setActiveNote,
}) => {

    
    return (
        <div className="side">
            <div className="side-top">
            <h1>Notes App</h1>
            <button onClick={addNotes}>Add Note</button>
            </div>
            <div className="side-notes-list">
                {notes.map((note) => ( 
                    <div 
                    //points the selected note as an active note
                    className={`side-note-list ${note.id === activeNote && "active"}`}
                    onClick={() => setActiveNote(note.id)}>
                    <div className="side-title">
                    <strong>{note.title}</strong>
                    <button onClick={(event) => deleteNotes(note.id)}> Delete </button>
                    </div>
                    <p>{note.body && note.body.substr(0,50) + "..." /*displays body preview on the side */ } </p>
                    <small className="description">
                        Date{" "}
                        {new Date(note.lastModified).toLocaleDateString("en-GB", {
                            hour: "2-digit",
                            minute: "2-digit",
                         })}
                    </small>
                </div>
                ))}
            </div>
        </div>
    );
};

export default Side;