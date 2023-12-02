import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    setIsLoggedIn(false);
  };
  const token = localStorage.getItem('token');
  const email = localStorage.getItem('email');




 useEffect(()=>{
 if(!token)
 {
  setIsLoggedIn(false);
 }


 },[token])



  

  return (
    <nav className="bg-gray-800 p-4 flex items-center justify-between fixed w-full top-0 z-10">
      <div className="flex items-center space-x-2 ml-4">
        <Link to='/'>
          <span className="text-white font-bold text-lg">খুজে নাও.com</span>
        </Link>
      </div>
      <div className="space-x-4 md:mr-4">
        {isLoggedIn ? (
          <>
           <Link to='/hireforhelp' className="text-white hover:text-gray-300">Hire For Help</Link>
           <Link to='/profile' className="text-white hover:text-gray-300">Profile</Link>
            <button className="text-white hover:text-gray-300" onClick={handleLogout}>Sign Out</button>
         
          </>
        ) : (
          <>
            <Link to='/hireforhelp' className="text-white hover:text-gray-300">Hire For Help</Link>
            <Link to='/signin' className="text-white hover:text-gray-300">Sign In</Link>
            <Link to='/signup' className="text-white hover:text-gray-300">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
