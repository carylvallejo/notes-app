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
                {notes.map(({id, title, body}) => (
                    <div 
                    className={`side-notes-list ${id === activeNote && "active"}`}
                    onClick={() => setActiveNote(id)}>
                    <div className="side-title">
                    <button onClick={(event) => deleteNotes(id)}> Delete </button>
                    </div>
                    <p>{body && body.substr(0,50) + "..."} </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Side;