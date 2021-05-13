import React from 'react';
import UserStore from '../../stores/UserStore'
import { observer } from 'mobx-react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login'
import Logout from '../Login/Logout'
import Information from '../Information/Information'
// import Preferences from '../Preferences/Preferences';

class App extends React.Component {

  //testing purposes

  user = {
    name: 'Udenna',
    username: 'udenna',
    password: 'udenna'
  }

  async componentDidMount() {

    try {

      let res = await fetch('http://localhost:3000/api/v1/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
          "Authorization": `Bearer ${localStorage.token}`
        },
        body: JSON.stringify(this.user)
      })
      let result = await res.json()

      if (result && result.success) {
        UserStore.loading = false
        UserStore.isLoggedIn = true
        UserStore.username = result.username
      }
      else {
        UserStore.loading = false
        UserStore.isLoggedIn = false
      }
    }
    catch (e) {

      UserStore.loading = false
      UserStore.isLoggedIn = false
      console.log(e) //for debugging errors from the api
    }
  }

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
        'Accept': 'application/json',
      },
      body: JSON.stringify(user)
    }


    fetch('http://localhost:3000/api/v1/login', reqPackage)
      .then(res => res.json())
      .then(data => {
        localStorage.setItem("token", data.token)
      })

    this.setState({ loggedIn: true })
  }


  render() {
    if (UserStore.isLoggedIn) {
      return <Login handleLogin={this.handleLogin} />
    }else{
      return (
        <div className="wrapper">
          <img src="https://finac.nl/wp-content/uploads/2020/09/ill-financiele-planning.png" alt="calendar" width="200" height="150"></img>
          <h1>My Planner</h1>
          <h2>Logged in: { }</h2>
          <button className="button"><a id="link" href='./dashboard'><h3>Dashboard</h3></a></button>
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
            <button className="button"><a id="link" href='/'><h3>Log out</h3></a></button>
          </BrowserRouter>
        </div>
      )
    }
  }
}

export default observer(App);