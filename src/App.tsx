// import { useState } from 'react'
import './app.scss'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import UserDetails from './Components/UserDetails'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
      <Route path='/' element={<Dashboard/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/user' element={<UserDetails/>}></Route>
      </Routes>
          {/* <Login/> */}

    </Router>
  )
}

export default App
