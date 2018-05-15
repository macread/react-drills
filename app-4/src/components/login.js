import React, { Component } from 'react';

export default class Login extends Component {
    constructor() {
    super()
        
    this.state = {
        userName: '',
        password: ''
        }
    
        
    }

    updateUserName(val) {
        this.setState({ userName: val })
    }

    updatePassword(val) {
        this.setState({ password: val })
    }

    loginUser(){
        console.log(this.state.userName, this.state.password)
        alert(`User Name: ${this.state.userName} Password: ${this.state.password}`)
    }

    render() {
        return (
            <div className='Login'>
                <input type='text' className='' onChange={(e)=> {this.updateUserName(e.target.value)}}/>
                <input type='text' className='' onChange={(e)=> {this.updatePassword(e.target.value)} }/>
                <button type='' className='' onClick= {()=>{this.loginUser()}}>Login</button>
            </div> 
        )
        
    }
}