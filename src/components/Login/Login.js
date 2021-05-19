import React from 'react';
import './Login.css';


class Login extends React.Component  {


render () {
    return (
 <div className="login-wrapper">
      <img src="https://i.ibb.co/hRgJTGF/Screen-Shot-2021-05-12-at-12-01-10-PM.png" alt="calendar" width="350" height="300"></img>
      <br></br>
         <button className="signupbuttons"><a id="link" href='./signup'><h3>Sign Up!</h3></a></button>
         <br></br>
      <button className = "welcomebuttons" >Sign In</button>
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
        <br></br>
      </form>
      
    </div>
    )
}
}
  

export default Login

