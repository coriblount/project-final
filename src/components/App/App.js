import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login'
// import Logout from '../Login/Logout'
import Information from '../Information/Information'
// import Preferences from '../Preferences/Preferences';

class App extends React.Component {


  state = {time: new Date().toLocaleString()}


  handleLogin = (e) => {
    e.preventDefault()
    let user = {
      name: e.target[0].value,
      password: e.target[1].value
    }

    let reqPackage = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
      },
      body: JSON.stringify(user)
    }


    fetch('http://localhost:3000/login', reqPackage)
      .then(res => res.json())
      .then(data => {
        localStorage.setItem("token", data.token)
      })
  }


  render() {
    if (1 + 1 === 3) {
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
            <Dashboard />
          </Route>
          {/* <Route path="/preferences">
            <Preferences />
          </Route> */}
          <Route path="/information">
          <Information />
          </Route>
        </Switch>
        <br></br>
        <br></br>
        <button className="button"><a id="link" href='/'><h3>Log out</h3></a></button>
      </BrowserRouter>
    </div>
  );
  }
}


export default App;