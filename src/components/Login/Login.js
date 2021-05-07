import React, { useState } from 'react';
import './Login.css';

export default function Login() {

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={console.log()}>
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
