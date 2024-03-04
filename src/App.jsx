import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './layouts/Nav'

function App() {


  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Nav />}>
        </Route >
      </Routes >
    </div>
  )
}

export default App
