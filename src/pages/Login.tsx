import React from 'react'
import '../styles/Login.scss'

const Login = () => {
  return (
    <div className="login-container">
        <div className="login-left">
            <img src="illustration.png" alt="Login Illustration"/>
        </div>
        
        <div className="login-right">
            <div className="login-header">
                {/* <img src="logo.png" alt="Lendsqr Logo"> */}
            </div>
            
            <div className="login-box">
                <h1>Welcome!</h1>
                <p>Enter details to login.</p>
                <form >
                    <div className="input-group">
                        <input type="email" placeholder="Email" required/>
                    </div>
                    <div className="input-group">
                        <input type="password" placeholder="Password" required/>
                        <span className="toggle-password">SHOW</span>
                    </div>
                    <div className="forgot-password">
                        <a href="#">FORGOT PASSWORD?</a>
                    </div>
                    <button type="submit" className="login-btn">LOG IN</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login