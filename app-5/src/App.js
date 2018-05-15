import React, { Component } from 'react';
import Image from './components/image'
import './App.css';

class App extends Component {

  constructor() {
  super()
    
    this.state = {
        image: 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'
    }

  }

  render() {
    return (
      <div className="App">
        <Image image={ this.state.image } />
      </div>
    );
  }
}

export default App;
