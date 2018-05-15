import React, { Component } from 'react';
import Todo from './components/Todo'
import './App.css';

class App extends Component {

  constructor() {
    super()
      
    this.state = {
      userInput: '',
      todoList: []
    }

    this.updateUserInput = this.updateUserInput.bind(this)
    this.updateTodoList = this.updateTodoList.bind(this)
  }

  updateUserInput(e) {
    this.setState({ userInput: e.target.value })
  }

  updateTodoList() {
    this.setState ({ todoList: [...this.state.todoList, this.state.userInput],
      userInput: '' })
  }

  render() {
    let list = this.state.todoList.map((item, idx)=> {
      return (
          <Todo key={idx} task={item} />
      )
    })

    return (
      <div className="App">
        <h2>My TODO List</h2>
        <input value={this.state.userInput} type='' className='' onChange={this.updateUserInput} placeholder='Enter new task'/>
        <button type='' className='' onClick={this.updateTodoList}>add</button>
        {list}
      </div>
    );
  }
}

export default App;
