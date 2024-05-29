
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './component/Home'
import Login from './component/Auth/Login'
import Register from './component/Auth/Register'



function App() {

  return (
    <BrowserRouter>
    
    <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/login"  element={<Login/>}/>
      <Route path="/email"  element={<Register/>}/>


    </Routes>
    </BrowserRouter>
  )
}


export default App
