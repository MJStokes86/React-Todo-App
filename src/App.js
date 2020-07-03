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
  }

  render() {
    const todoItems = this.state.todos.map(item => <TodoItem key = {item.id} item = {item} />)
    return (
      <div className="todo-list">
        {todoItems}
      </div>
    )
  }

}



export default App