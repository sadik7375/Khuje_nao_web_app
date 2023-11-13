import React, { useState, useEffect } from 'react';

import { AiFillDelete } from 'react-icons/ai';
import { GrUpdate } from 'react-icons/gr';
import axios from 'axios';
import { Link } from 'react-router-dom';

const itemsPerPage = 10; // Number of items to display per page

const Projectorder = () => {
  const [usersinfo, setUsersinfo] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  //when app com. render the useeffect call..when you add fee this useeffect call automatically
  //addfee occurs sideeffect
  useEffect(() => {
    axios.get("http://localhost:8000/api/orderinfo")
      .then(result => {
        setUsersinfo(result.data);
        console.log(result);
      })
      .catch(err => console.log(err));
  }, []);

  // Calculate the total number of pages
  const totalPages = Math.ceil(usersinfo.length / itemsPerPage);

  // Get the items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = usersinfo.slice(startIndex, endIndex);

const handleDelete=(id)=>{

  console.log(id);
  axios.delete(`http://localhost:8000/api/deleteorder/${id}`)
  .then(res=>{
    window.location.reload();
    console.log(res);
  })
  .catch(err=>console.log(err));

}


  return (
    <div>


      <div className="flex justify-center font-bold mt-10 text-indigo-500"><p>MEMBER INFORMATION</p></div>
      <div className="flex items-center justify-center ml-1">
        <label htmlFor="voice-search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="flex absolute mr-8 inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            type="text"
            id="voice-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
            placeholder="Search member by phone number"
            required=""
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
       
        <th scope="col" className="px-6 py-3">
          Product name
        </th>
        
        <th scope="col" className="px-6 py-3">
         Email
        </th>
        <th scope="col" className="px-6 py-3">
   Phone Number
        </th>
        <th scope="col" className="px-6 py-3">
          Address
        </th>
        <th scope="col" className="px-6 py-3">
        Product category
        </th>
        <th scope="col" className="px-6 py-3">
          Product Ref ID
        </th>
        <th scope="col" className="px-6 py-3">
         Date
        </th>
       
        <th scope="col" className="px-6 py-3">
          Action
        </th>
        <th scope="col" className="px-6 py-3">
          status
        </th>
     
      </tr>
    </thead>
    <tbody>
  {currentItems.map((user, index) => (
    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {user.fullname}
      </th>
      <td className="px-6 py-4">{user.email}</td>
      <td className="px-6 py-4">{user.phone}</td>
      <td className="px-6 py-4">{user.address}</td>
      <td className="px-6 py-4">{user.productcategory}</td>
      <td className="px-6 py-4">{user.productref}</td>
   
      <td className="px-6 py-4">{new Date(Date.now()).toLocaleDateString('en-GB')}</td>

      <td className="flex items-center px-6 py-4">
        <Link
        //   to={`/confirmation/${user._id}`}
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Confirmation
        </Link>
        <a
          href="#"
         onClick={() =>  handleDelete(user._id)}
          className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
        >
          Delete
        </a>
      </td>
      <td className="px-3 py-2">
        <select
          required
          id="country"
          name="country"
          autoComplete="country"
          className="px-3 py-2 text-green-700"
          
          
        >
          <option value="">Choose category</option>
          <option value="Done">Done</option>
          <option value="Stack">Stack</option>
          <option value="Working">Working</option>
        </select>
      </td>
    </tr>
  ))}
</tbody>

  </table>
</div>


      {/* Pagination Controls */}
      <div className="flex justify-center mt-4">
        <div className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
                 
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-3 py-1 cursor-pointer rounded-full ${currentPage === index + 1 ? 'bg-indigo-500 text-white' : 'text-indigo-500 hover:bg-indigo-100'}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projectorder;