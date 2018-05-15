import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()
      
    this.state = {
        message: ''
      }
    this.updateMessage = this.updateMessage.bind(this)
  }

  updateMessage(e){
    this.setState({message: e.target.value})
  }

  render() {
    return (
      <div className="App">
          <input type='' className='' onChange={this.updateMessage}/>
          <p>{this.state.message}</p>
      </div>
    );
  }
}

export default App;
