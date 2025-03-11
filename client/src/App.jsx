import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'
import UserProvider from './contexts/UserProvider'
import Account from './components/Account'
import Profile from './components/Profile'
import Bookings from './components/Bookings'
import Accomodations from './components/Accomodations'

function App() {

  return (
    <UserProvider>
      <Routes>
        <Route path='/' element={<Layout/>} >
          <Route index element={<Home/>} />
          <Route path='register' element={<Register/>} />
          <Route path='login' element={<Login/>} />
          <Route path="account" element={<Account />} >
            <Route index element={<Profile />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="properties" element={<Accomodations />} />
          </Route>
        </Route>
      </Routes>
    </UserProvider>
  )
}

export default App
