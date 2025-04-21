import React, { Component } from 'react'
import App from './App'

export default class User extends Component{
    state = {
        users : [
            {id:101,name : "Anurag",password : "Anurag1234"},
            {id:102,name : "Sahil",password : "Sahil894"},
            {id:103,name : "Ajit",password : "Ajit@7847"},
        ],
        isLogeddIn : false
    }
    render(){
        const userdata = this.state.users.map((value) => {   
            // return <h1> Id : {value.id}, Name : {value.name} , Password : {value.password}</h1>
            return <App key={value.id}  data = {value.name} />
        })
        return <div><ul>{userdata}</ul></div>
    }
}