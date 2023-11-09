
import Navbar from '../components/Navbar';
import sellbuy from '../assets/sellbuy.jpg'
import { useState } from 'react'
import Allpost from '../components/allpost';
import { useNavigate } from 'react-router-dom';
const Postforsell = () => {

const [productname,setproductname]=useState("");
const [institute,setinstitute]=useState("");
const [address,setaddress]=useState("");
const [producttype,setproducttype]=useState("");
const [category,setcategory]=useState("");
const [price,setprice]=useState("");
const [description,setdescription]=useState("");
const [photo,setphoto]=useState([]);
const [postdetail,setpostdetail]=useState([])


const handleImageChange=(e)=>{

  const selectedImages=Array.from(e.target.files);
  setphoto(...selectedImages);




}




const navigate = useNavigate();

const handleAddpost=()=>{
   



  const newPost = {
    productname: productname,
    institute: institute,
    address: address,
    category: category,
    price: price,
    description: description,
    photo: photo,
  };

  setpostdetail((prevPostDetail) => [...prevPostDetail, newPost]);

setproductname('');
setinstitute('');
setaddress('');
setproducttype('');
setcategory('');
setprice('');
setdescription('');
setphoto([]);
navigate('/project');

}
console.log(postdetail);
<Allpost postdetail={postdetail} ></Allpost>

console.log(photo);
    return (
        <div>
            <>
            <Navbar></Navbar>
           
  {/* component */}
  <div className="min-h-screen p-6 mt-12 bg-white flex items-center justify-center">
    <div className="container max-w-screen-lg mx-auto">
      <div>
        
        <div className="bg-gray-100 rounded shadow-lg p-4 px-4 md:p-8 mb-6">
          <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
            <div className="text-gray-600">
              <p className="font-medium text-lg"> fill out all information</p>
              <p>Please give good photo and description for customer understanding.If you feel any query,please contact us</p>
              <img
                  src={sellbuy}
                  alt="Project Photo"
                  className="w-full h-auto"
                />
            </div>
            <div className="lg:col-span-2">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1   md:grid-cols-5">
                <div className="md:col-span-5">
                  <label htmlFor="full_name">Product Name</label>
                  <input
                    type="text"
                    name="full_name"
                    id="full_name"
                    className="h-10 border mt-1 rounded border-solid shadow-md px-4 w-full bg-gray-50"
                    value={productname}
                    onChange={(e)=>setproductname(e.target.value)}

                  />
                </div>
             
                <div className="md:col-span-3">
                  <label htmlFor="address">Institute Name</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    className="h-10 border-solid shadow-md mt-1 rounded px-4 w-full bg-gray-50"
                    value={institute}
                    onChange={(e)=>setinstitute(e.target.value)}
                    placeholder=""
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="city">Location</label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    className="h-10 border-solid shadow-md mt-1 rounded px-4 w-full bg-gray-50"
                    value={address}
                    onChange={(e)=>setaddress(e.target.value)}
                    placeholder=""
                  />
                </div>
               
                {/* <div className="md:col-span-2">
                  <label htmlFor="state">Product Type</label>
                  <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <selectc value={producttype} onChange={(e)=>setproducttype(e.target.value)} className=" px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" >
  <option value="someOption"> Select Product Type </option>
  <option value="someOption">Project</option>
  <option value="otherOption">Thesis Paper</option>
  <option value="otherOption">Project Equipment</option>
  <option value="otherOption">Notes</option>
  <option value="otherOption">Books</option>
  <option value="otherOption">Presentation Slide</option>
  <option value="otherOption">CV</option>
</selectc>
                    
                  
                  </div>
                </div> */}
                <div className="md:col-span-2">
                  <label htmlFor="state">Category</label>
                  <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <select value={category} onChange={(e)=>setcategory(e.target.value)} className=" px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" >
  <option value="">choose category </option>
  <option value="Software Engineering">Software Engineering</option>
  <option value="Electrical Engineering">Electrical Engineering</option>
  <option value="civil">civil</option>
  <option value="Architecture">Architecture</option>
  <option value="Industial Production Engineering">Industial Production Engineering</option>
  <option value="Pharmacy">Pharmacy</option>
  <option value="BBA">BBA</option>
</select>
                    
                  
                  </div>
                </div>
                <div className="md:col-span-2">
  <label htmlFor="country">Photo</label>
  <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
  <input
        type="file"
        accept="image/*" // Specify accepted file types (e.g., images)
        multiple // Allow multiple file selection
        onChange={handleImageChange}
      />
  </div>
  <div>
    {Array.from(photo).map((file, index) => (
      <img
        key={index}
        src={URL.createObjectURL(file)}
        alt={`Uploaded Image ${index}`}
        className="w-12 h-24 object-contain"
      />
    ))}
  </div>
</div>

                <div className="md:col-span-1">
                  <label htmlFor="zipcode">Price</label>
                  <input
                    type="text"
                    name="zipcode"
                    id="zipcode"
                    className=" border-solid shadow-md transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    placeholder=""
                    value={price}
                    onChange={(e)=>setprice(e.target.value)}
                  />
                </div>
                <div className="md:col-span-5">
                  <label htmlFor="email">Description</label>
                  <textarea
                    type="text"
                    name="email"
                    id="email"
                    className="h-40 border-solid shadow-md mt-1 rounded px-4 w-full bg-gray-50  "
                    value={description}
                    onChange={(e)=>setdescription(e.target.value)}

                    placeholder="Explain about your product"
                  />
                </div>
            
                <div className="md:col-span-5 text-right">
                  <div className="inline-flex items-end">
                    <button onClick={handleAddpost} className="bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold py-2 px-20 rounded">
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
       
    
    </div>
  </div>
</>

        </div>
    );
};

export default Postforsell;