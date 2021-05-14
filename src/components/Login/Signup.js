import React, { Component } from "react";

export default class SignUp extends Component {

    handlesubmit=(e)=>{
        e.preventDefault()
        let newUsername = e.target[0].value
        let newPassword = e.target[1].value


        let updatedUser = {
            "name": newUsername,
            "password": newPassword
        }
        this.props.createUser(updatedUser)
    }

    // changeHandler=(e)=>{
    //     e.preventDefault()
    //   let {name, value} = e.target
    //   this.setState({
    //     [name]: value
    //   })
    // }

    render(){
        return (
          <div>
              <h1>Sign Up</h1>
              <form onSubmit={this.handlesubmit}>
                <label>UserName</label>
                <input type='text' name='name' placeholder='Enter Userame Here'  /> 
                <br/> <br/>
                <label>Password</label>
                <input type='text' name='password' placeholder='Enter Password'  /> 
                <br/> <br/>
                <input type="submit" name="submit" value="Sign Up" className="submit"/>
              </form>
          </div>
        )
    }
}