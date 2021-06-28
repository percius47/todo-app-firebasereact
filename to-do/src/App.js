
import './App.css';
import TextField from '@material-ui/core/TextField';
import {useState} from 'react';
import { useEffect } from 'react';
import Button from '@material-ui/core/Button'
import { db } from './firebase_config';
import firebase from "firebase";
import TodoListItem from './Todo';
function App() {
  const [todos, setTodos] = useState([])
  const [todoinput, settodoInput]=useState("");

  useEffect(() => {
  getTodo();
  }, []);

  function getTodo()
  {
    db.collection("entries_todo").onSnapshot(function (querySnapshot)
    {
      setTodos(
        querySnapshot.docs.map((doc)=>({
        id: doc.id,
        todo: doc.data().todo,
        inprogress: doc.data().inprogress,

      }))
    );
  });
}

  function addTodo(e)
  {
    e.preventDefault();
    console.log(`adding to-do`);
    db.collection("entries_todo").add(
      {
        inprogress: true,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        todo: todoinput
      });
  }

  return (
    <div className="App">

<div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >

      <h1>Prashant's to-do App</h1>
  
    <form>
    
      <TextField 
      id="standard-basic"   
      label="To-Do" 
      style={{ width: "90vw", maxWidth: "500px" }}
      value={todoinput}
      onChange={(e)=>settodoInput(e.target.value)}
      />
    <Button type= "submit"variant="contained"
     onClick={addTodo} 
    style={{display:"none"}}>Default</Button>
       
        </form>

   <div
   style={{
     maxWidth:"400px"
   }}
   >

   {todos.map((todo)=>(
      <TodoListItem 
      todo={todo.todo} 
      inprogress={todo.inprogress} 
      id={todo.id}/>
    ))   }
   </div>
    </div>
    </div> 
  );

}

export default App;
