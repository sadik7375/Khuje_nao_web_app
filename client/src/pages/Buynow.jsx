import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import { Navigate, useParams } from 'react-router-dom';
const Buynow = () => {

  const {id}=useParams(); 
  const [fullname,setfullname]=useState();
  const [email,setemail]=useState();
  const [phone,setphone]=useState();
  const [address,setaddress]=useState();
  // const [paymentmethod,setpaymentmethod]=useState();
  const [productcategory,setproductcategory]=useState();
  const [productref,setproductref]=useState();


const handleOrderConfirm=(e)=>{

  e.preventDefault();

 

    const order = {
    
      fullname,
      email,
      phone,
      address,
      productcategory,
      productref,
    };

    const response =axios.post('http://localhost:8000/api/oderconfirm', order)
    .then(result=>{

      console.log(response);

      
      
      })
      
      .catch(err=>{console.log(err)});
       window.location.reload();
       setproductref("");

}




  useEffect(()=>{

   setproductref(id);
    
    
    },[id]);

    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-32 sm:mt-0">
  <div className="md:grid md:grid-cols-3 md:gap-6 mt-48 mr-96 ">
    <div className="md:col-span-1">
  
    </div>
    <div className="mt-5 md:mt-0 md:col-span-2">
      
      <form action="#" method="POST">
        <div className="shadow overflow-hidden sm:rounded-md">
      
          <div className="px-4 py-5 bg-gray-100 sm:p-6">
          <label
                  htmlFor="first_name"
                  className="block text-lg font-medium mb-4 text-gray-700"
                >
                 Confirm your order
                </label>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="first_name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full name
                </label>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  autoComplete="given-name"
                  className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  placeholder='Full Name'
                  value={fullname}
                  onChange={(e)=>setfullname(e.target.value)} 
                />
                 <div className="col-span-6">
                <label
                  htmlFor="street_address"
                  className="block text-sm font-medium text-gray-700"
                >
                 Address
                </label>
                <input
                  type="address"
                  name="street_address"
                  id="street_address"
                  autoComplete="street-address"
                  className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-60 shadow-sm sm:text-sm border-gray-300 rounded-md"
                  value={address}
                  onChange={(e)=>setaddress(e.target.value)} 
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                 Product Category
                </label>
                <select
                 required
                  id="country"
                  name="country"
                  autoComplete="country"
                  
                  value={productcategory}
                  onChange={(e)=>setproductcategory(e.target.value)} className="mt-1 block w-60 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >  <option value="" >choose category</option>
                  <option value="Software Project">Software Project</option>
                  <option  value="Hardware project">Hardware project</option>
                  <option  value="Papers">Papers</option>
                </select>
              </div>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="last_name"
                  className="block text-sm font-medium text-gray-700"
                >
                 Email
                </label>
                <input
                  type="email"
                  name="last_name"
                  id="last_name"
                  autoComplete="family-name"
                  
                  value={email}
                  onChange={(e)=>setemail(e.target.value)} className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
                 <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="email_address"
                  className="block text-sm font-medium text-gray-700"
                >
                 Phone number
                </label>
                <input
                  type="phonenumber"
                  name="email_address"
                  id="email_address"
                  autoComplete="email"
                  
                  value={phone}
                  onChange={(e)=>setphone(e.target.value)} className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-76 shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="email_address"
                  className="block text-sm font-medium text-gray-700"
                >
                Product Ref ID
                </label>
                <input
                  type="text"
                  name="email_address"
                  id="email_address"
                  autoComplete="email"
                  
                  value={productref}
                  className="mt-1 p-3  focus:ring-indigo-500 focus:border-indigo-500 block w-96 shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              
            
              </div>
             
             
             
              {/* <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div> */}
              {/* <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  htmlFor="state"
                  className="block text-sm font-medium text-gray-700"
                >
                  State / Province
                </label>
                <input
                  type="text"
                  name="state"
                  id="state"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div> */}
              {/* <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  htmlFor="postal_code"
                  className="block text-sm font-medium text-gray-700"
                >
                  ZIP / Postal
                </label>
                <input
                  type="text"
                  name="postal_code"
                  id="postal_code"
                  autoComplete="postal-code"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div> */}
            </div>
          </div>
          <div className="px-4 py-3 flex bg-gray-50 text-right sm:px-6">
            <div>
            <button
            onClick={handleOrderConfirm}
              type="submit"
              className=" py-1 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              confirm order
            </button>
            </div>
            <div className='ml-16'>
              <p className='text-sm'>After order Confirmation,we will contact between 24 hours</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

  <Footer></Footer>
        </div>
    );
};

export default Buynow;