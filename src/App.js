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
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo // returns todo item
      }) // map ends
      return {
        todos: updatedTodos
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