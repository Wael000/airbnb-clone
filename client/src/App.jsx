import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout/>} >
        <Route index element={<Home/>} />
        <Route path='register' element={<Register/>} />
        <Route path='login' element={<Login/>} />
      </Route>
    </Routes>
  )
}

export default App
