import './App.css'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Nav from './layouts/Nav'
import Foot from './layouts/Foot'
import LogReg from './pages/LogReg'
import Rate from './pages/Rate'
import Discover from './pages/Discover'
import { useEffect, useState } from 'react'

function App() {
  const [name, setName] = useState('User')
  const [logged, setLogged] = useState(false)
  const [auth, setAuth] = useState('')
  const location = useLocation();

  const navigate = useNavigate()

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token')
      if (token) {
        try {
          const response = await fetch('http://localhost:3000/students/me', {
            method: 'GET',
            headers: {
              Authorization: token,
            },
          })
          if (response.ok) {
            const userData = await response.json();
            setLogged(true)
            setName(userData.student.name)
            setAuth(token)
          } else {
            console.error('Error fetching user data:', response.status);
          }
        } catch (error) {
          console.error('Error fetching user data:', error.message);
        }
      } else {
        setLogged(false)
        navigate('/')
      }
    }
    fetchUserData();
  }, [location.pathname]);



  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Nav logged={logged} setLogged={setLogged} />} >
          <Route index element={<LogReg logged={logged} setLogged={setLogged} />} />
          <Route path='/discover' element={<Discover name={name} auth={auth} />} />
          <Route path='/rate' element={<Rate auth={auth} />} />
        </Route>
      </Routes>
      <Foot />
      <div className='strip'>
      </div >
    </div>
  )
}

export default App
