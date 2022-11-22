import React from 'react'
import "./Login.scss"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/authenticationContext'

const Login = () => {

  const {login}=useContext(AuthContext);
  const handleLogin=()=>{
    login();
  }

  return (
    <div className='login'>
      <div className='card'>
        <div className='left'>
          <h1>HELLO CHAT</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, rem labore quasi eligendi, odit mollitia, perspiciatis voluptates nam iure eaque cum dolor. Voluptates recusandae molestiae rerum obcaecati ad minus iste?</p>
          <span>Don't you have an account?</span>
          <Link to="/register">
          <button>Register</button>
          </Link>
        </div>
          <div className='right'>
          <h1>Login</h1>
          <form>
          <input type="text" placeholder='Username'/>
          <input type="password" placeholder='password'/>
          <button onClick={handleLogin}>Login</button>
          </form>
          
        
        </div>
      </div>

    </div>
  )
}

export default Login