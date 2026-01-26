import React from 'react'
import './AuthPages.css'
import RegisterForm from './domains/forms/FoobaraDemo/BlogAuth/RegisterForm'

function Register () {
  return (
    <div className="AuthPage">
      <div className="auth-container">
        <h1>Register</h1>
        <div className="form-container">
          <RegisterForm />
        </div>
      </div>
    </div>
  )
}

export default Register
