import React from 'react'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from './Home'
import Success from './Success'
import NotFound from './NotFound'
import Menu from './components/Menu'



const App = () => {
  return (
<Router>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/success' element={<Success/>}/>
    <Route path='/*' element={<NotFound/>}/>
{/* <Route path='/menu' element={<Menu/>}/> */}
  </Routes>
  <Toaster/>
</Router>
  )
}

export default App