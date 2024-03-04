import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './layouts/Nav'
import Foot from './layouts/Foot'
import LoginRegister from './components/LoginRegister'

function App() {


  return (
    <div className='app'>
      <Nav />
      <div className='strip'></div>
      <div className='lr'><LoginRegister /></div>

      <Foot />
    </div>
  )
}

export default App
