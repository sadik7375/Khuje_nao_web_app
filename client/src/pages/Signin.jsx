import React, { useState } from 'react';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Signin = () => {
  const navigate = useNavigate();
  const [email,setemail]=useState();
  const [password,setpassword]=useState();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    axios
    .post("http://localhost:8000/api/signin", { email, password })
    .then((response) => {
       
      if (response) {
       console.log(response);
       
        navigate('/');
        localStorage.setItem('token',response.data.token)
       
     
      }
    })
    .catch((error) => {
      console.log(error);
    });
  };
  // setTimeout(() => {
  //   localStorage.removeItem('token');

  // }, 50000); 



    return (
        <div>

{/* NAVBAR START */}


<nav className="bg-gray-800 p-4 flex items-center justify-between fixed w-full top-0 z-10">
      <div className="flex items-center space-x-2 ml-40">
     
        <Link to='/'><span className="text-white font-bold text-lg">KHUJE NAO</span></Link>
      </div>
      <div className="space-x-4 mr-44 ">
        
        <Link to="/signup" className="text-white hover:text-gray-300">Sign Up</Link>
      </div>
    </nav>


{/* NAVBAR END */}

            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-gray-100 mt-32  ">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
   
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" action="#" method="POST">
      <div>
        <label  className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
          <input onChange={(e)=>{setemail(e.target.value)}} id="email" name="email" type="email"  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label  className="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div className="text-sm">
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div>
        </div>
        <div className="mt-2">
          <input onChange={(e)=>setpassword(e.target.value)} id="password" name="password" type="password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <button onClick={handleSubmit} type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>
    <div className="flex justify-center mt-8 gap-2 bg-white cursor-pointer w-50 pt-2 font-bold-medium text-black hover:bg-indigo-500 hover:text-white focus:ring-4 md:mx-3 focus:outline-none focus:ring-primary-300 font-sm rounded-lg text-sm px-2 py-2 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
    <span className="text-[2rem] mt-2"><FcGoogle /></span>
    <p className='mt-3'>Login with Google</p>
</div>
 

    <p className="mt-10 text-center text-sm text-gray-500">
      Do not have account?
      <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">SignUp</a>
    </p>
  </div>
</div> 
<Footer></Footer>
        </div>
    );
};

export default Signin;