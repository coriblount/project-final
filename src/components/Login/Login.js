import React from 'react';
import { Component } from 'react';
import './Login.css';

export default function Login(props) {

const handleSubmit = (e) => {
e.preventDefault()
let username= {
      username: e.target[0].value
    }

let password = {
  password: e.target[1].value
}



fetch('http://localhost:3000/users', {
  method: 'POST',
  headers: {
    'content-type': "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({
    username,
    password
  })
})
.then(res => res.json())
.then(data=> {
  localStorage.setItem("token", data.jwt)
  props.handleLogin(data.user)
})
}


  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={props.handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={console.log()} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={console.log()} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}
