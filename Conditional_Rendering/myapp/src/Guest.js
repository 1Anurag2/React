import React, { Component } from 'react'
// import App from './App'

export default class Guest extends Component{
    render(){
        return (
            <React.Fragment>
                <h1>Welcome Guest</h1>
                <button onClick={this.props.clickdata}>Login</button>
                <button>signUp</button>
            </React.Fragment>
        )
    }
}