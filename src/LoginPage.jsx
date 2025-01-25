import { useState } from 'react'
//import "./LoginPage.css";

function LoginPage(){
  return(
    <div className="login-container">
        <h2>Login</h2>

        <form className="login-form">
            <label htmlFor="email">Email</label>
            <br/>
            <input type="email" id="email" className="form-input" placeholder="Enter your email" />

            <br/>
            <label htmlFor="password">Password</label>
            <br/>
            <input type="password" id="password" className="form-input" placeholder="Enter your password" />

            <br/>
          <button type="submit">Login</button>
        </form>
    </div>
  );
}

export default LoginPage;