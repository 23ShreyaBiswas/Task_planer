import React from 'react'
import { Todoitem } from "../My_components/Todoitem";
export const Today = (props) => {
  let mystyle = {
    minHeight: "70vh",
  }
  return (
    <div className='container  my-3' style={mystyle}>
      <h3 className=" my-3" >Task to be completed</h3>
      {props.todos.length === 0 ? "No todos to display" :
        props.todos.map((todo) => {
          console.log(todo.sno);
          return (
            <>
          <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete} /><hr/> 
          </>
          )
        })
      }
    </div>
  )
}
