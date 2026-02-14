import {useState} from "react";
function CreateArea(props) {
  const [note,setNote] = useState({
    title:"",
    content:""
  });

  function handleChange(e){
    setNote({
      ...note,
      [e.target.name] :e.target.value
  })
  }

  function handleSubmit(e){
    e.preventDefault();
    props.addNote(note);

    setNote({
      title:"",
      content:""
    })

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="title" 
        placeholder="Title" 
        value={note.title} 
        onChange={handleChange}
        />
        <textarea name="content" 
        placeholder="Take a note..." rows="3" 
        value={note.content} 
        onChange={handleChange} 
        />
        <button>Add</button>
      </form>
    </div>
     );
}

export default CreateArea;