
import Home from './pages/Home'
import './index.css'
import {  Routes, Route, useNavigate,BrowserRouter } from 'react-router-dom';
import Project from './pages/project/Project';
import Projectdetails from './pages/Projectdetails';
import Postforsell from './pages/project/Postforsell';
import Thesispaper from './pages/Thesispaper';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Project_equiment from './pages/Project_equiment';
import Buynow from './pages/Buynow';
import Admindashbroad from './admin/pages/Admindashbroad';
import Projectorder from './admin/pages/Projectorder';
import Sellerinfo from './admin/pages/Sellerinfo';
import Profile from './pages/profile/Profile';
import Hireforhelp from './pages/HireforHelp/Hireforhelp.jsx';
import Useruploadproducts from './pages/Useruploadproducts';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const user=localStorage.getItem('token');
  console.log(user);

  return (
    <>
      
     
      <BrowserRouter   >
 <Routes>
        <Route extract path="/" element={<Home></Home>} /> 
        <Route  path="/project" element={<Project></Project>} /> 
        <Route  path="/projectdetails/:id" element={<Projectdetails></Projectdetails>} />       
        <Route  path="/thesispaper" element={<Thesispaper></Thesispaper>} /> 
        <Route  path="/signin" element={<Signin></Signin>} /> 
        <Route  path="/signup" element={<Signup></Signup>} />          
        <Route  path="projectforsell" element={<Postforsell></Postforsell>} />  
        <Route  path="/projectequipment" element={<Project_equiment></Project_equiment>} /> 
        <Route  path="/buynow/:id" element={<Buynow></Buynow>} />
        <Route  path="/" element={<Buynow></Buynow>} />   
        <Route  path="/admin" element={<Admindashbroad></Admindashbroad>} /> 

        <Route path='/projectorder' element={<Projectorder></Projectorder>}  /> 
        <Route path='/productinfo/:id' element={<Sellerinfo></Sellerinfo>}  /> 
          { user && <Route path='/profile' element={<Profile></Profile>}   /> }
        <Route path='/uploadedprodcuts' element={<Useruploadproducts></Useruploadproducts>}  /> 
        <Route path='/hireforhelp' element={<Hireforhelp></Hireforhelp>}  /> 
                          
    
      </Routes>
      <ToastContainer></ToastContainer>
      </BrowserRouter>
  
   
    </>
  )
}

export default App
