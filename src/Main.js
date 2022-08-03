const Main  = ({activeNote, editNote}) => {
    const textField = (key, value) => {
        editNote({
        ...activeNote,
        [key]: value,
        lastModified: Date.now(),
    })
    }
    //if there are no notes created, main pannel will show a message
    if (!activeNote) return <div className="no-active-note">Please select a note</div>;
    return (
        <div className="main">
            <div className="main-page">
            <input 
                id="title"
                type="text"
                placeholder="Title"
                value={activeNote.title}
                onChange={(event) => textField("title", event.target.value)}/>
            <textarea
                id="body" 
                placeholder="Enter your notes"
                value={activeNote.body}
                onChange={(event) => textField("body", event.target.value)}/>
            </div>
        </div>
    );
};


export default Main;