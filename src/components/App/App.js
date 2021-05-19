import React from 'react';
// import UserStore from '../../stores/UserStore'
// import { observer } from 'mobx-react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login'
import Signup from '../Login/Signup'
// import Logout from '../Login/Logout'
import Information from '../Information/Information'
// import e from 'express';
// import Preferences from '../Preferences/Preferences';

class App extends React.Component {

  state = {
    time: new Date().toLocaleString(),
    currentUser: '',
    usersArray: []
  }

handleCreate = (e) => {
  e.preventDefault()
console.log('clicked')
window.location.href = "/SignUp";
}

  handleLogin = (e) => {
    e.preventDefault()
    // debugger
    let loggedInUser = {
      name: e.target[0].value,
      password: e.target[1].value
    }

    fetch('http://localhost:3000/api/v1/users')
      .then(res => res.json())
      .then(data => {
        // console.log("data", data)
        // console.log("loggedInUser", loggedInUser)
        const foundUser = data.find(user => user.name === loggedInUser.name);
        if (foundUser){
        localStorage.setItem("user", JSON.stringify(foundUser))
        this.setState({currentUser: foundUser})
      }
    })
  }

handleLogout = (e) => {
e.preventDefault()
localStorage.removeItem("user");
window.location.href = "/login";
}


componentDidMount = () => {
  //get the user from localstorage, set the state to the user
  const storedUser = localStorage.getItem("user");
  if (storedUser){
    this.setState({currentUser: JSON.parse(storedUser)})
  }
}

  render() {

  // console.log("user", this.state.currentUser)
  if (this.state.currentUser === '') {
    if (window.location.pathname.toLowerCase() === '/signup') {
      return <Signup handleSignup={this.handleSignup} />
    }else{
      return <Login handleLogin={this.handleLogin} />
    }
  } 
  
  return (
    <div className="wrapper">
        <img src="https://i.ibb.co/hRgJTGF/Screen-Shot-2021-05-12-at-12-01-10-PM.png" alt="planner" width="350" height="300"></img>

        <div className="date">
          <p>
            {this.state.time}
          </p>
        </div>
        <button className="button"><a id="link" href='./dashboard'><h3>Dashboard</h3></a></button>
        <br></br>
        <br></br>
        <button className="button"><a id="link" href='./information'><h3>My Information  </h3></a></button>
        <BrowserRouter>
          <Switch>
            <Route path="/dashboard">
              <Dashboard currentUser={this.state.currentUser} />
            </Route>
            <Route path="/information">
              <Information currentUser={this.state.currentUser}/>
            </Route>
            <Route path="/signup">
              <Signup handleCreate={this.handleCreate}/>
            </Route>
          </Switch>
          <br></br>
          <br></br>
          <button onClick={this.handleLogout} className="button"><a id="link" href='/'><h3>Log out</h3></a></button>
          {/* <button onClick={this.handleSignUp} className="button"><a id="link" href='/login'><h3>Sign Up</h3></a></button> */}
        </BrowserRouter>
      </div>
    );
  }
}


export default App;
