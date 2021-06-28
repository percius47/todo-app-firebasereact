
import './App.css';
import TextField from '@material-ui/core/TextField';
import {useState} from 'react';
import { useEffect } from 'react';
import { db } from './firebase_config';
import firebase from "firebase";
import TodoListItem from './Todo';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
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
    if(todoinput==="")
      {}

    else
    {
    db.collection("entries_todo").add(
      {
        inprogress: true,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        todo: todoinput
      });
    }
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
  <div style={{display:"flex"}}>
    
    <TextField id="filled-basic" label="To-do" variant="filled"
       
      style={{ width: "90vw", maxWidth: "500px"}}
      value={todoinput}
      autoComplete="off"
      onChange={(e)=>settodoInput(e.target.value)}
      />
    < button
     onClick={addTodo} 
    ><AddOutlinedIcon className="butt"/></button>
       </div>
        

   <div
   style={{
     maxWidth:"400px"
   }}
   >

   {todos.map((todo)=>(
      <TodoListItem 
      todo={todo.todo} 
      inprogress={todo.inprogress} 
      timestamp={todo.timestamp}
      id={todo.id}/>
    ))   }
   </div>
    </div>
    </div> 
  );

}

export default App;
