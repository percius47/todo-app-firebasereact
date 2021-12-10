import React, { useState } from 'react'
import { ListItem,ListItemText } from '@material-ui/core'

import { db } from './firebase_config'
import './Todo.css'



export default function TodoListItem({todo, inprogress, id}) {
    const [done,setDone]=useState(todo);

function toggleProgress(){
db.collection("entries_todo").doc(id).update({
    
    inprogress: !inprogress

  
    
    
})

}//toggle

function deleteTodo()
{
    db.collection("entries_todo").doc(id).delete();
}


    return (
        <div style={{display:"flex"}}>
          <div className="div-parent" style={{display:"flex" }}>  <ListItem className="listItem">
                <ListItemText  primary={todo} secondary={inprogress ? "In Progress" :"Done"}/>            
            </ListItem>

            <button  className="list-button" onClick={toggleProgress}>
                {inprogress?"Done":"Undone"}</button>

            <button className="list-button" onClick={deleteTodo}> X  </button>
        </div>
        </div>
    )
}
