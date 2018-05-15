import React, { Component } from 'react';
import NewTask from './components/NewTask'
import List from './components/List'
import './App.css';

class App extends Component {

  constructor() {
    super()
      
    this.state = {
      todoList: []
    }

    this.updateTodos = this.updateTodos.bind(this)
  }

  updateTodos(task) {
    this.setState ({ todoList: [...this.state.todoList, task] })
  }

  render() {
 

    return (
      <div className="App">
        <h2>My TODO List</h2>
        <NewTask add={ this.updateTodos }/>
        <List tasks={ this.state.todoList } />
      </div>
    );
  }
}

export default App;