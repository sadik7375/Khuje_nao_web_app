
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import hlw from './hlw.png'
import { useEffect,useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const Projectdetails = () => {
  
 const {id}=useParams(); 
const[projectdetail,setprojectdetail]=useState();
      // Slick settings
    
//get data depende on id

useEffect(()=>{

  axios.get(`http://localhost:8000/api/projects/${id}`)
  .then(result=>{
    setprojectdetail(result.data);
    console.log(result.data);
  })
  .catch(err=>console.log(err));
  
  
  },[id]);


  if(!projectdetail)
  {
        return (

          <div>
          <div>
        <Navbar />
        <p>Loading...</p>
       
      </div>
          </div>


        )





  }



    return (
<>
        <div>
            <Navbar></Navbar>
            <div className="mt-32 mx-4 p-4">
      <div className="max-w-screen-lg mx-auto">
        <div className="bg-gray-100 shadow-lg p-4 rounded-lg">
          <div className=" h-80 ">
            {/* Left side: Project photo */}
            <div className="w-full block ">
              <img
                src={hlw}
                alt="Project Photo"
                className="w-full h-auto"
              />
            </div>
            {/* Right side: Project information */}
            <div className="w-3/4 p-4">
              <h2 className="text-xl font-bold">{projectdetail.productname}</h2>
              <p className="text-gray-600 font-bold">{projectdetail.price} Taka</p>
              <p className="text-gray-600 font-bold">Total Sale:200+</p>
              {/* <p className="text-gray-600 font-bold">Institute{projectdetail.institute}</p> */}
             
              <p className="text-gray-600 font-bold">Category:{projectdetail.category}</p>

              <Link    to={`/buynow/${id}`} > <button  className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 mb-6 mt-6 px-4 rounded ml-1  ">Buy Now</button></Link>
              <p className="text-gray-600 text-lg font-bold">Description:</p> <p>
              {projectdetail.description}
              </p>
            </div>
         
          </div>
        
        </div>
      </div>
    
    </div>
    
    </div>
  
    </>
       
    );
};

export default Projectdetails;