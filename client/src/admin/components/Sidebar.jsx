import React from 'react';
import { FaUserTie,FaRegCopy,FaMoneyBillAlt} from 'react-icons/fa';
import { MdOutlinePayment } from 'react-icons/md';
import { FcManager } from "react-icons/fc";
import { BiLogOut,BiHomeAlt } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Sidebar = () => {
  const navigate=useNavigate();
  function handleLogout(){
    axios.get("/logout")
    .then(()=>{
        navigate('/login')
           



    })
    .catch((error)=>{

        console.log(error);
    })





 }
    return (
       
            <div className="fixed flex flex-col top-0 left-0 w-55 bg-gray-800 shadow-lg   h-full border-r ">
            <div className="flex items-center justify-center h-14 border-b  ">
      <div className='text-white shadow-inner font-semibold '>Track My Money</div>
      
    </div>
    <div className="overflow-y-auto overflow-x-hidden flex-grow scrollbar-hide">
      <ul className="flex flex-col py-4 space-y-1 list-none text-decoration-line:none ">
    
        <li className="px-5">
          <div className="flex flex-row items-center h-8">
          
          </div>
        </li>
        <li className="text-decoration-line:none no-underline">
          <div
            
            className="relative flex flex-row items-center h-11 no-underline 	text-decoration-line:none focus:outline-none hover:bg-gray-50 text-white hover:text-gray-800 border-l-4 border-transparent pr-6"
          >
           
          
             <Link  className="relative flex flex-row items-center h-11 no-underline 	text-decoration-line:none focus:outline-none hover:bg-gray-50 text-white hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6" to="/">Dashboard</Link> 
          
          </div>
        </li>
        {/* <li>
          <a
            href="#"
            className="relative flex flex-row items-center no-underline h-11 focus:outline-none hover:bg-gray-50 text-white hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
          >
            <span className="inline-flex justify-center items-center ml-4">
            <FaUserTie/>
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">
           
            <Link  className="relative flex flex-row items-center h-11 no-underline 	text-decoration-line:none focus:outline-none hover:bg-gray-50 text-white hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6" to="/addmember">Add Member</Link> 
            </span>
            <span></span>
          </a>
        </li> */}
        
      
        <li>
          <a
            href="#"
            className="relative flex flex-row items-center h-11 no-underline focus:outline-none hover:bg-gray-50 text-white hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
          >
           
          
            <Link  className="relative flex flex-row items-center h-11 no-underline 	text-decoration-line:none focus:outline-none hover:bg-gray-50 text-white hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6" to="/projectorder">Project oder</Link> 
            
          </a>
        </li>
        <li>
          <a
            href="#"
            className="relative flex flex-row items-center no-underline h-11 focus:outline-none hover:bg-gray-50 text-white hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
          >
           
             <Link  className="relative flex flex-row items-center h-11 no-underline 	text-decoration-line:none focus:outline-none hover:bg-gray-50 text-white hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6" to="/paymentinfo">Payment Info</Link> 
            
          </a>
        </li>
        <li>
          <a
            href="#"
            className="relative flex flex-row no-underline items-center h-11 focus:outline-none hover:bg-gray-50 text-white hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
          >
            
          
            <Link  className="relative flex flex-row items-center h-11 no-underline 	text-decoration-line:none focus:outline-none hover:bg-gray-50 text-white hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6" to="/expense">Expense</Link> 
        
            
          </a>
        </li>
    
        <li>
          <a
            href="#"
            className="relative flex flex-row items-center no-underline h-11 focus:outline-none hover:bg-gray-50 text-white hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
          >
            
            <span className="ml-1 text-sm tracking-wide truncate"> Logout</span>
            <span className="inline-flex justify-center items-center ml-2">
              <BiLogOut/>
            </span>
          </a>
        </li>
      </ul>
    </div>
  </div>


       
    );
};

export default Sidebar;