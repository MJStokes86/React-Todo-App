import React, { Component } from 'react'
import ReactDOM from 'react-dom'


import TodoItem from './components/TodoItem'
import todosData from './todosData'


class App extends Component {

  constructor () {
    super()
    this.state = {
      todos: todosData // imports data from todoData.js
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => { // here we are looking at a previous state and creating a new array
      const updatedTodos = prevState.todos.map(todo => { // uses map to loop over todosData
        if (todo.id === id) { // this is the todo item we want to flip 
          todo.completed = !todo.completed // this is where todo.completed changes from true to false or vice versa
        }
        return todo // returns todo item and puts it into the new array
      }) // map ends
      return { // returns the new version of state as an object
        todos: updatedTodos  // the todos property and the updated version of todos
      }
    }) // setState ends
  } // event handler ends


  


  render() {
    const todoItems = this.state.todos.map(item => <TodoItem key = {item.id} item = {item} handleChange = {this.handleChange}/>)
    return (
      <div className="todo-list">
        {todoItems}
      </div>
    )
  }

}



export default App