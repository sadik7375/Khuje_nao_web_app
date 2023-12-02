import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {signInWithPopup} from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
const GoogleSignInButton = ({token}) => {
    const navigate = useNavigate();
const firebaseConfig = {
  apiKey: "AIzaSyCRoDgOw9q8X2eDUedF5TaBJljZtEYz4zU",
  authDomain: "projectsellbuy.firebaseapp.com",
  projectId: "projectsellbuy",
  storageBucket: "projectsellbuy.appspot.com",
  messagingSenderId: "1062251370155",
  appId: "1:1062251370155:web:b095a6fe153c7ad07fc9ee",
  measurementId: "G-9VEBJ2TYZF"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const [value,setValue] = useState('')


const handleClick =()=>{
    signInWithPopup(auth,provider).then((data)=>{
        setValue(data.user.email)
        localStorage.setItem("email",data.user.email)
        navigate('/')
       
    })
}

useEffect(()=>{
    setValue(localStorage.getItem('email'))
})


    return (
        <div>
             <p className='mt-2 ml-16'>Login with Google</p>
    <div className="flex justify-center mt-2 gap-2 bg-gray-300 cursor-pointer w-50 pt-2 font-bold-medium text-black hover:bg-indigo-500 hover:text-white focus:ring-4 md:mx-3 focus:outline-none focus:ring-primary-300 font-sm rounded-lg text-sm px-2 py-2 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
    <button onClick={handleClick} ><span className="text-[2rem] mt-1"><FcGoogle /></span>
   </button>
</div>

        </div>
    );
};

export default GoogleSignInButton;