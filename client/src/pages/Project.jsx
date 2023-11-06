
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';
import Searchbar from '../components/Searchbar';
import hlw from './hlw.png'
const Project = () => {
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
  <select className="py-2 text-black pl-8 pr-2 w-80 mr-1 rounded-full border bg-slate-200 border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500" >
  <option value="someOption">choose department </option>
  <option value="someOption">Software Engineering</option>
  <option value="otherOption">Electrical Engineering</option>
  <option value="otherOption">civil</option>
  <option value="otherOption">Architecture</option>
  <option value="otherOption">Industial Production Engineering</option>
</select>
</div>
<Searchbar></Searchbar>
  </div>
  

          <div className="mt-4 mx-4 ml- p-4">
      <div className="max-w-screen-lg mx-auto">
    
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* First Row */}
          <div className="bg-white shadow-lg p-4 rounded-lg">
            <div className="flex items-center">
              {/* Left side: Project photo */}
              <div className="w-50">
                <img
                  src={hlw}
                  alt="Project Photo"
                  className="w-full h-auto"
                />
              </div>
              {/* Right side: Project information */}
             <Link to='/projectdetails'> <div className="w-3/4 ml-4 p-4">
                <h2 className="text-xl font-bold">WhatNext</h2>
                <p className="text-gray-600 font-semibold">website</p>
                <p className="text-gray-600 font-semibold ">1000 Taka</p>
               
                <button className='bg-white text-semibold'>Details..</button>
              </div>
            
              </Link>
            </div>
            
          </div>

          <div className="bg-gray-100 shadow-lg p-4 rounded-lg">
            <div className="flex items-center">
              {/* Left side: Project photo */}
              <div className="w-1/4">
                <img
                  src="/path/to/project/photo.jpg"
                  alt="Project Photo"
                  className="w-full h-auto"
                />
              </div>
              {/* Right side: Project information */}
              <div className="w-3/4 p-4">
                <h2 className="text-xl font-bold">Project Name</h2>
                <p className="text-gray-600">Location: Location Name</p>
                <p className="text-gray-600">Price: $1000</p>
                <p className="text-gray-600">Institute: Institute Name</p>
              </div>
            </div>
            
          </div>
          

          {/* Second Row */}
          <div className="bg-gray-100 shadow-lg p-4 rounded-lg">
            <div className="flex items-center">
              {/* Left side: Project photo */}
              <div className="w-1/4">
                <img
                  src="/path/to/project/photo.jpg"
                  alt="Project Photo"
                  className="w-full h-auto"
                />
              </div>
              {/* Right side: Project information */}
              <div className="w-3/4 p-4">
                <h2 className="text-xl font-bold">Project Name</h2>
                <p className="text-gray-600">Location: Location Name</p>
                <p className="text-gray-600">Price: $1000</p>
                <p className="text-gray-600">Institute: Institute Name</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 shadow-lg p-4 rounded-lg">
            <div className="flex items-center">
              {/* Left side: Project photo */}
              <div className="w-1/4">
                <img
                  src="/path/to/project/photo.jpg"
                  alt="Project Photo"
                  className="w-full h-auto"
                />
              </div>
              {/* Right side: Project information */}
              <div className="w-3/4 p-4">
                <h2 className="text-xl font-bold">Project Name</h2>
                <p className="text-gray-600">Location: Location Name</p>
                <p className="text-gray-600">Price: $1000</p>
                <p className="text-gray-600">Institute: Institute Name</p>
              </div>
              
            </div>
            
          </div>



          
        </div>
      </div>
    </div>
    <Footer></Footer>
        </div>
    );
};

export default Project;