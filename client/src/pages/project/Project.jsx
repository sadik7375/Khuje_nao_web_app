
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer';
import { Link } from 'react-router-dom';
import Searchbar from '../../components/Searchbar';
import hlw from '../hlw.png'
import { useEffect, useState } from 'react';
import axios from 'axios';
const Project = () => {
  const [postdetail,setpostdetail]=useState([])
const [selectedCategory,setSelectedCategory]=useState();


useEffect(()=>{

axios.get("http://localhost:8000/api/projects")
.then(result=>{
  setpostdetail(result.data);
  console.log(result.data);
})
.catch(err=>console.log(err));


},[]);



const filterPosts=selectedCategory  ?  postdetail.filter(item=>item.category===selectedCategory)
: postdetail;
    return (
        <div>
            <Navbar></Navbar>
           
            <div className='mb-4 ml-5 flex justify-center mt-32 gap-3'>
      <h1 className="mb-1 font-mono text-2xl text-gray-800 md:text-4xl">
     hey,  <br className="block md:hidden" />
    <span
      className="inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform"
    >
      Find Your project   
    </span>
  
  </h1>
  <div  className="relative mt-2" >
  <select value={selectedCategory} onChange={(e)=>setSelectedCategory(e.target.value)}    className="py-2 text-black pl-8 pr-2 w-80 mr-1 rounded-full border bg-slate-200 border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500" >
  <option value=""  >choose department </option>
  <option value="Software Engineering">Software Engineering</option>
  <option value="Electrical Engineering">Electrical Engineering</option>
  <option value="civil">civil</option>
  <option value="Architecture">Architecture</option>
  <option value="Industial Production Engineering">Industial Production Engineering</option>
</select>
</div>
<Searchbar></Searchbar>

  </div>
  <Link to='/projectforsell'><button className='ml-60 bg-sky-700 text-white pl-3 pr-3 pt-2 pb-2' >Post For Sell</button></Link> 

  {Array.isArray(filterPosts) && filterPosts.length>0 ? (
 filterPosts.map((item, index) => (
    <Link to={`/projectdetails/${item._id}`} key={index}>
      {console.log(item)}
      <div className="mt-4 mx-4 ml- p-4">
        <div className="max-w-screen-lg mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
            {/* First Row */}
            <div className="bg-gray-100 shadow-lg p-4 rounded-lg">
              <div className="flex justify-between gap-4">
                {/* Left side: Project photo */}
                <div className="w-1/2">
                  <img
                    src={hlw}
                    alt="Project Photo"
                    className="w-full h-auto"
                  />
                </div>
                {/* Right side: Project information */}
                <div className="w-full ml-12 p-4">
                  <h2 className="text-xl font-bold">{item.productname}</h2>
                  <p className="text-gray-600">{item.category} </p>
                  <p className="text-gray-600">{item.price} Taka</p>
                  <p className="text-gray-600">200+ sales</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  ))
) : (
  <p>No posts available</p>
)}
 
        </div>
    );
};

export default Project;