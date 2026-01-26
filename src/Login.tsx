import React from 'react'
import './AuthPages.css'
import LoginForm from './domains/forms/Foobara/Auth/LoginForm'

function Login () {
  return (
    <div className="AuthPage">
      <div className="auth-container">
        <h1>Login</h1>
        <div className="form-container">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

export default Login
