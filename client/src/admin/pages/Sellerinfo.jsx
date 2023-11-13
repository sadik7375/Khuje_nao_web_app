import React from 'react';

const Sellerinfo = () => {
    return (
        <div>
             <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-32">
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
          Payment Number
        </th>
        <th scope="col" className="px-6 py-3">
          Address
        </th>
        <th scope="col" className="px-6 py-3">
        Product category
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
        
        <th scope="col" className="px-6 py-3">
          Action
        </th>
       
     
      </tr>
    </thead>
    {/* <tbody>
  
    <tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
       Name
      </th>
      <td className="px-6 py-4">{user.email}</td>
      <td className="px-6 py-4">{user.phone}</td>
      <td className="px-6 py-4">{user.address}</td>
      <td className="px-6 py-4">{user.productcategory}</td>
    
   


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
  
    </tr>
  
</tbody> */}

  </table>
</div>
        </div>
    );
};

export default Sellerinfo;