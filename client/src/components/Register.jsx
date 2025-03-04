import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:5000/register', {
        name,
        email,
        password
      })
      console.log(res.data)
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='flex items-center justify-center h-screen'>
        <form 
          className='flex flex-col space-y-4 p-4 border border-gray-300 rounded-lg shadow-md w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4'
          onSubmit={handleSubmit}>
            <h1 className='text-2xl font-bold'>Register</h1>
            <input 
              type='text' 
              placeholder='Name' 
              className='p-2 border border-gray-300 rounded-md'
              value={name}
              onChange={e => setName(e.target.value)} />
            <input 
              type='email' 
              placeholder='Email' 
              className='p-2 border border-gray-300 rounded-md'
              value={email}
              onChange={e => setEmail(e.target.value)} />
            <input 
              type='password' 
              placeholder='Password' 
              className='p-2 border border-gray-300 rounded-md'
              value={password}
              onChange={e => setPassword(e.target.value)} />
            <button className='bg-blue-500 text-white p-2 rounded-md'>Register</button>
            <div className='text-center'>
                <span>Already have an account? </span>
                <Link to='/login' className='text-blue-500'>Login</Link>
            </div>
        </form>
    </div>
  )
}

export default Register
