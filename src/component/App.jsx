import {useState} from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notesData from "../notes.jsx";
import CreateArea from "./CreateArea.jsx";

function App() {
const [notes,setNotes]=useState(notesData);
  
function addNote(newNote){
   //setNotes([...notes, newNote]);
   setNotes(prevNotes => {
    return [...prevNotes,newNote]
   })
  }

  function deleteNote(id){
     setNotes((prevNotes)=>{
      return prevNotes.filter((noteItem,index)=>{
        return index !== id;
      })
     })
  }

  return (
    <div>
      <Header />
      <CreateArea 
      addNote={addNote}
      />
      {notes.map((noteItem,index)=>(
         <Note 
         key={index}
         id={index}
         title={noteItem.title}
         content={noteItem.content}
         deleteNote={deleteNote}
         />
      ))}
      <Footer />
    </div>
  );
}

export default App;