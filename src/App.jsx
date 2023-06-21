
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Logged_in from './Logged_in'
import Logged_out from './Logged_out'
import Home from './Home'
import Register from './Register'

function App() {
  
  return (
    <Router>
        <Routes>
            <Route  path='/' element={<Home />} />
            <Route  path='register' element={<Register />}/>
            <Route  path='logged_in' element={<Logged_in />}/>
            <Route  path='logout' element={<Logged_out />}/>
        </Routes>
    </Router>
  )
}

export default App
