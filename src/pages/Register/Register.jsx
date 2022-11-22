import React from 'react'
import "./Register.scss"
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='register'>
      <div className='card'>
        <div className='left'>
          <h1>HELLO CHAT</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, rem labore quasi eligendi, odit mollitia, perspiciatis voluptates nam iure eaque cum dolor. Voluptates recusandae molestiae rerum obcaecati ad minus iste?</p>
          <span>Do you have an account?</span>
          <Link to="/login">
          <button>Login</button>
          </Link>
        </div>
        <div className='right'>
          <h1>Login</h1>
          <form>
          <input type="text" placeholder='Username'/>
          <input type="email" placeholder='email'/>
          <input type="password" placeholder='password'/>
          <input type="name" placeholder='name'/>

          </form>
          <button>Register</button>
        
        </div>
        
      </div>

    </div>
  )
}

export default Login