import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
        <form className='flex flex-col space-y-4 p-4 border border-gray-300 rounded-lg shadow-md w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4'>
            <h1 className='text-2xl font-bold'>Login</h1>
            <input type='email' placeholder='Email' className='p-2 border border-gray-300 rounded-md' />
            <input type='password' placeholder='Password' className='p-2 border border-gray-300 rounded-md' />
            <button className='bg-blue-500 text-white p-2 rounded-md'>Login</button>
            <div className='text-center'>
                <span>Don't have an account? </span>
                <Link to='/register' className='text-blue-500'>Register</Link>
            </div>
        </form>
    </div>
  )
}

export default Login
