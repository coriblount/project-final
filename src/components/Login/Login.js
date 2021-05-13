import React from 'react';
import './Login.css';

export default function Login(props) {


  return (
    <div className="login-wrapper">
      <img src="https://i.ibb.co/hRgJTGF/Screen-Shot-2021-05-12-at-12-01-10-PM.png" alt="calendar" width="350" height="300"></img>
      <p>Please Log In</p>
      <form onSubmit={props.handleLogin}>
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
