import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import axios from 'axios';




const Signup = () => {
  const [name,setName]=useState();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const navigate = useNavigate();
  const handleSubmit=(e)=>{

    e.preventDefault();
    axios.post('http://localhost:8000/api/signup',{name,email,password})
    .then(result=>{
      console.log(result);
      navigate('/signin');
  
    })
   
  
  
  
   }
  


    return (
        <div>
       
       <nav className="bg-gray-800 p-4 flex items-center justify-between fixed w-full top-0 z-10">
      <div className="flex items-center space-x-2 ml-40">
     
        <Link to='/'><span className="text-white font-bold text-lg">KHUJE NAO</span></Link>
      </div>
      <div className="space-x-4 mr-44 ">
        
        <Link to="/signin" className="text-white hover:text-gray-300">Sign In</Link>
      </div>
    </nav>


{/* NAVBAR END */}

            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-gray-100 mt-32  ">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
   
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign Up to your account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6 " action="#"  method="POST">
      <div>
        <label  className="block text-sm font-medium leading-6 text-gray-900">Fullname</label>
        <div className="mt-2">
          <input id="name"  type="text"  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={(e)=>setName(e.target.value)}     
          
          />
        </div>
      </div>
      
      <div>
        <label  className="block text-sm font-medium leading-6 text-gray-900">Email</label>
        <div className="mt-2">
          <input id="email" name="email" type="email"  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={(e)=>setEmail(e.target.value)}   
          
          />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <label  className="block text-sm font-medium leading-6 text-gray-900">Password</label>
        
        </div>
        <div className="mt-2">
          <input id="password" name="password" type="password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
               onChange={(e)=>setPassword(e.target.value)}  
          />
        </div>
       
      </div>
      <div className="mt-4">
          <p className="text-white flex justify-center ">------------OR------------</p>
          <span ><a className="text-black  flex justify-center" href="">Google icon</a></span>
          </div>
      <div>
        <button onClick={handleSubmit} type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>

    <p className="mt-5 text-center text-sm text-gray-500">
    Already have account?
      <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign in</a>
    </p>
  </div>
</div> 
<Footer></Footer>
        </div>
    );
};

export default Signup;