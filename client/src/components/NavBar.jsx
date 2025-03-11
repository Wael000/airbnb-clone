import React from 'react'
import { UserContext } from '../contexts/UserContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    const { user, setUser } = useContext(UserContext)
    const navigate = useNavigate()

    const handleclick = async () => {
        try {
            const res = await axios.get('http://localhost:5000/logout', { withCredentials: true })
            console.log(res.data)
            setUser(null)
            navigate('/')
        }
        catch (err) {
            console.log(err)
        }
    }

  return (
    <div className='flex items-center justify-between p-4 shadow-sm'>
        <Link to="/" className='flex items-center space-x-2 p-4'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
            <span>AirBnb</span>
        </Link>
        <div className='flex items-center space-x-4 border border-gray-300 p-2 rounded-full shadow-sm'>
            <div>Anywhere</div>
            <div className='border-r border-gray-300 h-6'></div>
            <div>Any week</div>
            <div className='border-r border-gray-300 h-6'></div>
            <div>Any guest</div>
            <buutton>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </buutton>
        </div>
        <div className='flex items-center space-x-4'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <Link to={user ? "/account" : '/login'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
            </Link>
            {user ? (
                <div className='flex items-center space-x-2'>
                    <div>{user.name}</div>
                    <button onClick={handleclick}>Logout</button>
                </div>
            ) : (
                <Link to="/login">Login</Link>
            )}
        </div>
    </div>
  )
}

export default NavBar
