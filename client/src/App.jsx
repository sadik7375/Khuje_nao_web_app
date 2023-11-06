
import Home from './pages/Home'
import './index.css'
import {  Routes, Route, useNavigate,BrowserRouter } from 'react-router-dom';
import Project from './pages/Project';
import Projectdetails from './pages/Projectdetails';
import Postforsell from './pages/Postforsell';
import Thesispaper from './pages/Thesispaper';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Project_equiment from './pages/Project_equiment';
import Buynow from './pages/Buynow';
function App() {


  return (
    <>
      
     
      <BrowserRouter   >
 <Routes>
        <Route extract path="/" element={<Home></Home>} /> 
        <Route  path="/project" element={<Project></Project>} /> 
        <Route  path="/projectdetails" element={<Projectdetails></Projectdetails>} />       
        <Route  path="/thesispaper" element={<Thesispaper></Thesispaper>} /> 
        <Route  path="/signin" element={<Signin></Signin>} /> 
        <Route  path="/signup" element={<Signup></Signup>} />          
        <Route  path="/postforsell" element={<Postforsell></Postforsell>} />  
        <Route  path="/projectequipment" element={<Project_equiment></Project_equiment>} /> 
        <Route  path="/buynow" element={<Buynow></Buynow>} />            
    
      </Routes>
      </BrowserRouter>
  

    </>
  )
}

export default App
