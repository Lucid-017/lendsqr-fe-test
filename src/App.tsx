// import { useState } from 'react'
import './app.scss'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Users from './Components/Users'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
      <Route path='/' element={<Dashboard/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/user' element={<Users/>}></Route>
      </Routes>
          {/* <Login/> */}

    </Router>
  )
}

export default App
