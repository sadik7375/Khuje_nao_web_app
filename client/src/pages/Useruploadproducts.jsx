import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Useruploadproducts = () => {
    return (
        
        <div >

  <Navbar></Navbar>

              <table className="w-1/2 ml-32 mt-32 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
       
        <th scope="col" className="px-6 py-3">
          Product name
        </th>
        
       
       
        <th scope="col" className="px-6 py-3">
       Price
        </th>
        <th scope="col" className="px-6 py-3">
        Product category
        </th>
        <th scope="col" className="px-6 py-3">
          Product Ref ID
        </th>
        {/* <th scope="col" className="px-6 py-3">
         Date
        </th> */}
       
        <th scope="col" className="px-6 py-3">
          Action
        </th>
        
     
      </tr>
    </thead>
    <tbody>
  
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        
      </th>
      
    
      <td className="px-6 py-4"></td>
      <td className="px-6 py-4"></td>
   
      <td className="px-6 py-4"></td>

      <td className="flex items-center px-6 py-4">
        <Link
         
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Update
        </Link>
        <a
          href="#"
  
          className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
        >
          Delete
        </a>
      </td>
   
    </tr>

</tbody>

  </table>
        </div>
    );
};

export default Useruploadproducts;