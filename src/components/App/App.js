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
        // debugger
        // console.log(data)
        console.log(data.find(user => user.name === loggedInUser.name))
        this.setState({
          currentUser: data.find(user => user.name === loggedInUser.name)
        })
      })
  }

handleLogout = (e) => {
e.preventDefault()
window.location.href = "/login";
}



getUsers = () => {
  fetch('http://localhost:3000/api/v1/users')
  .then(res => res.json())
  .then(allUsers => this.setState({
    usersArray: allUsers
  }))
  }

createUser = (newUser) => {
  let reqPackage = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(newUser)
  }
  
  fetch('http://localhost:3000/api/v1/users', reqPackage)
  .then(res => res.json())
  .then(user => this.setState({
    usersArray: [...this.state.usersArray, user]
  }))
}


  render() {
    if (this.state.currentUser === '') {
      return <Login handleLogin={this.handleLogin} />
    }
    return (
      <div className="wrapper">
        <img src="https://i.ibb.co/hRgJTGF/Screen-Shot-2021-05-12-at-12-01-10-PM.png" alt="calendar" width="350" height="300"></img>
        {/* <h1>My Planner</h1> */}
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
            {/* <Route path="/preferences">
            <Preferences />
          </Route> */}
            <Route path="/information">
              <Information currentUser={this.state.currentUser}/>
            </Route>
            <Route path="/signup">
              <Signup createUser={this.createUser} />
            </Route>
          </Switch>
          <button onClick={this.handleLogout} className="button"><a id="link" href='/'><h3>Log out</h3></a></button>
          {/* <button onClick={this.handleSignUp} className="button"><a id="link" href='/login'><h3>Sign Up</h3></a></button> */}
        </BrowserRouter>
      </div>
    );
  }
}


export default App;
