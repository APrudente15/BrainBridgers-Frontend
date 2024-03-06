import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './layouts/Nav'
import Foot from './layouts/Foot'
import LogReg from './pages/LogReg'
import Rate from './pages/Rate'
import Discover from './pages/Discover'

function App() {


  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Nav />} >
          <Route index element={<LogReg />} />
          <Route path='/discover' element={<Discover />} />
          <Route path='/rate' element={<Rate />} />
        </Route>
      </Routes>
      <Foot />
      <div className='strip'>
      </div >
    </div>
  )
}

export default App
