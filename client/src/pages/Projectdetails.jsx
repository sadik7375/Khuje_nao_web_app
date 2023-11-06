
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import hlw from './hlw.png'
const Projectdetails = () => {
   
    
      // Slick settings
    




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
              <h2 className="text-xl font-bold">Project Name</h2>
              <p className="text-gray-600 font-bold">Price:1000 BDT</p>
              <p className="text-gray-600 font-bold">Total Sale: 20+</p>
              <p className="text-gray-600 font-bold">Institute</p>
              <Link to='/buynow'>  <button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 mb-6 mt-6 px-4 rounded ml-1  ">Buy Now</button></Link>
              <p className="text-gray-600 text-lg font-bold">Description:</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor veniam laborum expedita officia numquam eos! Perspiciatis nesciunt qui autem, nulla maxime accusantium harum rem quaerat recusandae mollitia incidunt fugit sit.lorem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor veniam laborum expedita officia numquam eos! Perspiciatis nesciunt qui autem, nulla maxime accusantium harum rem quaerat recusandae mollitia incidunt fugit sit.lorem
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor veniam laborum expedita officia numquam eos! Perspiciatis nesciunt qui autem, nulla maxime accusantium harum rem quaerat recusandae mollitia incidunt fugit sit.lorem
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor veniam laborum expedita officia numquam eos! Perspiciatis nesciunt qui autem, nulla maxime accusantium harum rem quaerat recusandae mollitia incidunt fugit sit.lorem
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor veniam laborum expedita officia numquam eos! Perspiciatis nesciunt qui autem, nulla maxime accusantium harum rem quaerat recusandae mollitia incidunt fugit sit.lorem
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor veniam laborum expedita officia numquam eos! Perspiciatis nesciunt qui autem, nulla maxime accusantium harum rem quaerat recusandae mollitia incidunt fugit sit.lorem
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor veniam laborum expedita officia numquam eos! Perspiciatis nesciunt qui autem, nulla maxime accusantium harum rem quaerat recusandae mollitia incidunt fugit sit.lorem
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