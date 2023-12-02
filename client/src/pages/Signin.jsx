import React, { useState } from 'react';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';
import { toast} from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Profile from './profile/Profile';
import GoogleSignInButton from '../components/GoogleSignInButton';
const Signin = () => {
  const navigate = useNavigate();
  const [email,setemail]=useState();
  const [password,setpassword]=useState();
  const [token,settoken]=useState();


  const handleSubmit = (e) => {
    e.preventDefault();
  
    axios
    .post("http://localhost:8000/api/signin", { email, password })
    .then((response) => {
       
      if (response) {
       console.log(response);
       
        navigate('/');
        localStorage.setItem('token',response.data.token)
        settoken(response.data.token);
        // setemail(response.data.email)
     
      }
    })
    .catch((error) => {
      console.log(error);
      if(error.response.status==404)
      {
        toast.error('Email not found', { autoClose: 3000 });  
      }



    });
  };
  // setTimeout(() => {
  //   localStorage.removeItem('token');

  // }, 50000); 



    return (
        <div>
<nav className="bg-gray-800 p-4 flex items-center justify-between fixed w-full top-0 z-10">
      <div className="flex items-center space-x-2 ml-40">
     
        <Link to='/'><span className="text-white font-bold text-lg">KHUJE NAO</span></Link>
      </div>
      <div className="space-x-4 mr-44 ">
        
        <Link to="/signup" className="text-white hover:text-gray-300">Sign Up</Link>
      </div>
    </nav>


{/* NAVBAR END */}
<>
  {/* component */}
  <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
      <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <div className="max-w-md mx-auto">
          <div>
            <h1 className="text-3xl font-semibold">
              Login Your Account
            </h1>
          </div>
          <div className="divide-y divide-gray-200">
            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <div className="relative">
                <input
                  autoComplete="off"
                  id="email"
                  name="email"
                  type="text"
                  className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                  placeholder="Email address"
                  onChange={(e)=>{setemail(e.target.value)}}
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Email Address
                </label>
              </div>
              <div className="relative">
                <input
                  autoComplete="off"
                  id="password"
                  name="password"
                  type="password"
                  className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                  placeholder="Password"
                  onChange={(e)=>setpassword(e.target.value)}
                />
                <label
                  htmlFor="password"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Password
                </label>
              </div>
              <div className="relative">
                <button onClick={handleSubmit} className="bg-blue-500 text-white rounded-md px-2 py-1">
                 Login
                </button>
                <GoogleSignInButton></GoogleSignInButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

          
<Footer></Footer>
        </div>
    );
};

export default Signin;
