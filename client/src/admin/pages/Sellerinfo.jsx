import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Sellerinfo = () => {
  const { id } = useParams();
  const [sellerproductinfo, setsellerproduct] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/projects/${id}`)
      .then(result => {
        setsellerproduct(result.data);
        console.log(result.data);
      })
      .catch(err => console.log(err));
  }, [id]);



  

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
                seller name
              </th>
              <th scope="col" className="px-6 py-3">
               Contact Email
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
          <tbody>
            
              <tr key={sellerproductinfo._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {sellerproductinfo.productname}
                </td>
                <td className="px-6 py-4">{sellerproductinfo.name}</td>
                <td className="px-6 py-4">{sellerproductinfo.email}</td>
                <td className="px-6 py-4">{sellerproductinfo.phonenumber}</td>
                <td className="px-6 py-4">{sellerproductinfo.location}</td>
                <td className="px-6 py-4">{sellerproductinfo.category}</td>
                <td className="px-6 py-4">{sellerproductinfo.price}</td>
                <td className="flex items-center px-6 py-4">
                <a
          href="#"
         onClick={() =>  handleDelete(sellerproductinfo._id)}
          className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
        >
          Delete
        </a>
                </td>
              </tr>
     
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sellerinfo;
