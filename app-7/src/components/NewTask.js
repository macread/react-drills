import React, { Component } from 'react';

export default class NewTask extends Component {
    constructor() {
        super()

        this.state = {
            userInput: '',
        }

        this.updateUserInput = this.updateUserInput.bind(this)
        this.updateTodoList = this.updateTodoList.bind(this)
    }

    updateUserInput(e) {
        this.setState({ userInput: e.target.value })
      }
    
    updateTodoList() {
        this.props.add( this.state.userInput )
        this.setState({ userInput: '' })
    }
    
    render() {
        return (
            <div>
                <input value={this.state.userInput} type='' className='' onChange={this.updateUserInput} placeholder='Enter new task'/>
                <button type='' className='' onClick={this.updateTodoList}>add</button>
            </div> 
        )
    }
}