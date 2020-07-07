import React from 'react'
import ReactDOM from 'react-dom'


import App from '../App'



function TodoItem (props) {

  const completedStyle = {
    fontStyle: "Italic",
    color: "gray",
    textDecoration: "line-through"
  }

  const uncompletedStyle = {
    fontStyle: "Normal",
    color: "black",
    textDecoration: "none"
  }

  

    return (
    <div className = "todo-item">
      <input type="checkbox" 
      checked={props.item.completed} // this is the reason why the checks in the checkboxes are showing up and determines if the checked item is completed or not
      onChange = {() => props.handleChange(props.item.id)} // onChange passes an anonymous function that calls the handleChange function that passes the items and their ids
      
      />
       <p style={props.item.completed ? completedStyle : uncompletedStyle}>{props.item.text}</p>
    </div>
    )
}

export default TodoItem