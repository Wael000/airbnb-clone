import React from 'react'
import { NavLink } from 'react-router-dom'

const AccountNavBar = () => {
  return (
    <div className='flex justify-center space-x-4 p-4'>
        <NavLink 
            className={({isActive}) => isActive ? 'px-6 py-2 bg-green-500 text-white rounded-full' : "px-6 py-2"} 
            end
            to='/account'>Profile</NavLink>
        <NavLink 
            className={({isActive}) => isActive ? 'px-6 py-2 bg-green-500 text-white rounded-full' : "px-6 py-2"} 
            to='/account/bookings'>Bookings</NavLink>
        <NavLink 
            className={({isActive}) => isActive ? 'px-6 py-2 bg-green-500 text-white rounded-full' : "px-6 py-2"} 
            to='/account/properties'>Accomodations</NavLink>
    </div>
  )
}

export default AccountNavBar
