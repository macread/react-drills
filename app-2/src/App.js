import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
  super()
    
  this.state = {
      foods: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
    }
  }

  render() {
    let foodList = this.state.foods.map((food, idx)=> {
      return (
        <h2 key={idx}>{food}</h2>
      )
    })
    return (
      <div className="App">
        {foodList}
      </div>
    );
  }
}

export default App;
