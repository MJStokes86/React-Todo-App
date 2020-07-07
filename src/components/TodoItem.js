import React from 'react'
import ReactDOM from 'react-dom'


import App from '../App'



function TodoItem (props) {
    return (
    <div className = "todo-item">
      <input type="checkbox" 
      checked={props.item.completed} // this is the reason why the checks in the checkboxes are showing up and determines if the checked item is completed or not
      onChange = {() => props.handleChange(props.item.id)} // onChange passes an anonymous function that calls the handleChange function that passes the items and their ids
      
      />
       <p>{props.item.text}</p>
    </div>
    )
}

export default TodoItem