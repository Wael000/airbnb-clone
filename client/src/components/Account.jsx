import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'
import { Outlet } from 'react-router-dom'
import AccountNavBar from './AccountNavBar'

const Account = () => {
    const { user, setUser } = useContext(UserContext)
    const navigate = useNavigate()

    if (!user) {
        navigate('/login')
    }

  return (
    <div>
        <AccountNavBar />
        <Outlet />
    </div>
  )
}

export default Account
