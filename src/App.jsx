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
import Faults from './pages/Faults'
import Tournament from "./pages/Tournament";
import Rackets from './pages/Rackets'
import WarmUp from "./pages/WarmUp";
import WarmDown from './pages/WarmDown'
import Strokes from './pages/Strokes'
import Strength from './pages/Strength'
import Weekly from './pages/Weekly'
import Club from './pages/Club'
import Agility from './pages/Agility'
import Training from './pages/Training'
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
      <Route path="/warmup" element={<WarmUp/>}/>
      <Route path="/warmdown" element={<WarmDown/>}/>
      <Route path="/strokes" element={<Strokes/>}/>
      <Route path="/weekly" element={<Weekly/>}/>
      <Route path="/agility" element={<Agility/>}/>
      <Route path="/strength" element={<Strength/>}/>
      <Route path="/racket" element={<Rackets/>}/>
      <Route path="/shots" element={<Shots/>}/>
      <Route path="/club" element={<Club/>}/>
      <Route path="/tournament" element={<Tournament/>}/>
      <Route path="/faults" element={<Faults/>}/>
      <Route path="/location" element={<Location/>}/>
      <Route path="/cuddalore" element={<Cuddalore/>}/>
      <Route path="/madurai" element={<Madurai/>}/>
      <Route path="/thanjavur" element={<Thanjavur/>}/>
      <Route path="/salem" element={<Salem/>}/>
      <Route path="/training" element={<Training/>}/>
      <Route path="/tiruchirapalli" element={<Trichy/>}/>
      <Route path="/chengalpattu" element={<Chengalpattu/>}/>
    </Routes>
  )
}

export default App
