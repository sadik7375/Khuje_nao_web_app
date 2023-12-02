import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import axios from 'axios';
import { Formik, Field, Form, ErrorMessage } from 'formik';

import { toast} from 'react-toastify';






const Signup = () => {
  const [name,setName]=useState();
  const [email,setEmail]=useState();
  const [emailError,setEmailError]=useState();
  const [password,setPassword]=useState();
  const navigate = useNavigate();
  
  const handleSubmit=(e)=>{
  


  e.preventDefault();
    axios.post('http://localhost:8000/api/signup', { name, email, password })
    .then((result) => {
      console.log(result);
      navigate('/signin');
      toast.success('Signup successfully done', { autoClose: 3000 });
    })
    .catch((err)=>{
          console.log(err);
          if(err.response.status==400)
          {
            toast.error("Email already exits",{ autoClose: 3000 })
          }else{
            toast.error("signup failed",{ autoClose: 3000 })

          }
        
      });
 


}


   //email validation

const validateEmail=(value)=>{

  const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(value);


}




const handleEmailChange=(e)=>{

  const newEmail=e.target.value;
  setEmail(newEmail);
  if(!validateEmail(newEmail))
  {
    setEmailError("invalid Email");
  }
  else{

    setEmailError('');
  }



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

<>
  {/* component */}
  <>
  {/* component */}
  <div className="h-screen md:flex">
    <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-300 to-purple-900 i justify-around items-center hidden">
      <div>
        <h1 className="text-white font-bold text-4xl font-sans">Find Your need</h1>
        <p className="text-white mt-1">
          1000+ active post
        </p>
       
      </div>
    
      <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
      <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
    </div>
    <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
      <form className="bg-white">
        <h1 className="text-gray-800  font-bold text-2xl mb-3">Create Your Account</h1>
   
        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
          <input
            className="pl-2 outline-none border-none"
            type="text"
            name=""
            id=""
            placeholder="Full name"
            onChange={(e)=>{setName(e.target.value)}}
            required
            
          />
        </div>
       
        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
            />
          </svg>
          <input
            className="pl-2 outline-none border-none"
            type="text"
            value={email}
            placeholder="Email Address"
            onChange={handleEmailChange}
            required
          />
           
        </div>
        {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
        <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clipRule="evenodd"
            />
          </svg>
          <input
            className="pl-2 outline-none border-none"
            type="text"
            name=""
            id=""
            placeholder="Password"
            onChange={(e)=>{setPassword(e.target.value)}}
            required
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
        >
          Create Account
        </button>
       
      </form>
    </div>
  </div>
</>

</>

<Footer></Footer>
        </div>
    );
};

export default Signup;