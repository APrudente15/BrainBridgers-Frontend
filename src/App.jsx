import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './layouts/Nav'
import Foot from './layouts/Foot'
import LogReg from './pages/LogReg'

function App() {


  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Nav />} >
          <Route index element={<LogReg />} />
        </Route>
      </Routes>
      <Foot />
    </div >
  )
}

export default App
