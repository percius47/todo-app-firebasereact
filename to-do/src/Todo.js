import React from 'react'
import { ListItem,ListItemText } from '@material-ui/core'
import {Button} from '@material-ui/core'
import { db } from './firebase_config'
import './Todo.css'



export default function TodoListItem({todo, inprogress, id}) {

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
            <ListItem className="listItem">
                <ListItemText  primary={todo} secondary={inprogress ? "In Progress" :"Done"}/>            
            </ListItem>

            <Button onClick={toggleProgress}>{inprogress?"Done":"Undone"}</Button>
            <Button onClick={deleteTodo}> X  </Button>
        </div>
    )
}
