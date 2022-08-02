const Main  = (activateNote, updateNote) => {
    const textField = (field, value) => {
    updateNote({
        ...activateNote,
        [field]: value,
    })
    }


    return (
        <div className="main">
            <div className="main-page">
            <input 
            id="title"
            type="text"
            placeholder="Title"
            value={activateNote.title}
            onChange={(event) => textField("title", event.target.value)}/>
            <textarea
            id="body" 
            placeholder="Enter your notes"
            value={activateNote.body}
            onChange={(event) => textField("body", event.target.value)}/>
            </div>
        </div>
    );
};


export default Main;