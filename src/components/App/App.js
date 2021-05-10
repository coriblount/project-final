import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login'
import Logout from '../Login/Logout'
import Information from '../Information/Information'
// import Preferences from '../Preferences/Preferences';

function App() {

  if (1 + 1 === 3) {
    return <Login setToken={console.log()} />
  }


  return (
    <div className="wrapper">
      <img src="https://finac.nl/wp-content/uploads/2020/09/ill-financiele-planning.png" alt="calendar" width="200" height="150"></img>
      <h1>My Planner</h1>
      <button className="button"><a id="link" href='./dashboard'><h3>Dashboard</h3></a></button>
      <br></br>
      <br></br>
      <button className="button"><a id="link" href='./information'><h3>My Information</h3></a></button>
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
            <Route path="/logout">
            <Logout />
          </Route>
        </Switch>
        <br></br>
        <br></br>
        <button className="button"><a id="link" href='/'><h3>Log out</h3></a></button>
      </BrowserRouter>
    </div>
  );
}

export default App;