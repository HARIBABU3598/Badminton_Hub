import {Route, Routes} from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import History from './pages/History'
import Score from './pages/Scorecard'
import Rules from './pages/Rules'
import Shots from './pages/Shots'
import Location from './pages/CourtLocation'
import Cuddalore from './pages/Cuddalore'
import Madurai from './pages/Madurai'
import Trichy from './pages/Tiruchirapalli'
import Salem from './pages/Salem'
import Thanjavur from './pages/Thanjavur'
import Chengalpattu from './pages/Chengalpattu'


function App() {
 

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/history" element={<History/>}/>
      <Route path="/score" element={<Score/>}/>
      <Route path="/rules" element={<Rules/>}/>
      <Route path="/shots" element={<Shots/>}/>
      <Route path="/location" element={<Location/>}/>
      <Route path="/cuddalore" element={<Cuddalore/>}/>
      <Route path="/madurai" element={<Madurai/>}/>
      <Route path="/thanjavur" element={<Thanjavur/>}/>
      <Route path="/salem" element={<Salem/>}/>
      <Route path="/tiruchirapalli" element={<Trichy/>}/>
      <Route path="/chengalpattu" element={<Chengalpattu/>}/>
    </Routes>
  )
}

export default App
