import React from 'react';
import './Login.css';


class Login extends React.Component  {


render () {
    return (
 <div className="login-wrapper">
      <img src="https://i.ibb.co/hRgJTGF/Screen-Shot-2021-05-12-at-12-01-10-PM.png" alt="calendar" width="350" height="300"></img>
      <br></br>
      <button className = "welcomebuttons" onClick={this.props.handleCreate}>Sign In</button>
      <br></br>
      <form onSubmit={this.props.handleLogin}>
        <label>
          <p>Username</p>
          <input type="text" onChange={console.log()} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={console.log()} />
        </label>
        <div>
          <button className="button" type="submit">Submit</button>
        </div>
      </form>
      
    </div>
    )
}
}
  

export default Login

