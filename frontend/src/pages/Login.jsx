import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext'

const Login = () => {

  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  };

  const {login} = useContext(AuthContext);

  const handleLogin = async e => {
    e.preventDefault()

    try {
      await login(inputs);
      navigate('/')
    } catch (error) {
      setError(error.response.data)
    }
  };

  return (
    <div className='flex items-center h-screen bg-slate-300 justify-center '>
      <div className='flex bg-white w-1/2 rounded-xl min-h-[600px] overflow-hidden'>
        <div className='flex flex-col flex-1 gap-y-8 imagen p-12 text-white'>
          <h1 className='text-8xl '>Hello world</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor maxime excepturi id nisi tenetur, saepe inventore omnis blanditiis. Tempora maxime odit quo, accusamus repellendus voluptate perferendis cumque ut libero pariatur.
          </p>
          <span className='text-sm'>Don't you have an account?</span>
          <Link to='/register'>
            <button className='w-1/2 p-3 bg-white text-purple-800 font-bold'>Register</button>
          </Link>
        </div>
        <div className='flex flex-col flex-1 gap-y-10 p-12 justify-center'>
          <h1 className='text-5xl'>Login</h1>
          <form className='flex flex-col gap-y-8'>
            <input className=' border-b px-5 py-2' type='text' placeholder='Username' name='username' onChange={handleChange} />
            <input className=' border-b px-5 py-2' type='password' placeholder='Password' name='password' onChange={handleChange} />
            {error && error}
            <button onClick={handleLogin} className='w-1/2 p-3 bg-purple-500 text-white font-bold'>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
