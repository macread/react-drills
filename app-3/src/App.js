import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
  super()
    
  this.state = {
      foods: [
        "spaghetti",
        "ice cream",
        "sushi",
        "bologna",
        "cheese"
      ],
      filterStg: ''
    }

    this.updateFilter = this.updateFilter.bind(this)
  }

  updateFilter(e) {
    this.setState({filterStg: e.target.value})
    console.log(this.filterStg)
  }

  render() {
    let foodsToDisplay = this.state.foods.filter( (food)=> {
      return food.includes(this.state.filterStg);
    } ).map((food,idx)=> {
        return(
          <h2 key={idx}>{food}</h2>
        )
      })


    
    return (
      <div className="App">
        <input type='text' className='' onChange={this.updateFilter}/>
        {foodsToDisplay}
      </div>
    );
  }
}

export default App;
