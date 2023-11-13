
import { Link } from 'react-router-dom';
import project from '../assets/project.jpeg'
import thesis from '../assets/thesis.jpg'
import projectequipment from '../assets/projectequipment.png'
import notes from '../assets/notes.jpg'
import books from '../assets/books.png'
import ppt from '../assets/ppt.jpg'
const Mainsection = () => {
    return (
        <div>
               <div className="mt-32 mx-4 p-4">
                
      <div className="max-w-screen-lg mx-auto">
      <div className='mb-12'>
      <h1 className="mb-1 font-mono text-2xl text-gray-800 md:text-4xl">
   
    <span
      className="inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform"
    >
    Welcome to Khuje Nao
    </span>
 
  
    
  </h1>
  <p
      className="inline-flex h-20 text-2xl pt-2 overflow-x-hidden "
    >
    Bangladesh Largest Student Skill Buying selling Platform
    </p>
  {/* <div className="text-sm font-lg md:text-1xl">Find Your Need</div> */}
  </div>
 

        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-4">
            
          {/* First Row */}
         <Link to="/project"> <div className="bg-white shadow-lg p-4 rounded-lg cursor-pointer">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <i className="fa fa-icon">
                <img
                  src={project}
                  alt="Project Photo"
                  
                />
                </i>
              </div>
              <div className="ml-4">
                <h3 className="text-xl text-black font-bold">Project</h3>
                <p className="text-black  ">1000+ project</p>
              </div>
            </div>
          </div>
          </Link>

         <Link to="/thesispaper"> <div className="bg-white shadow-lg p-4 rounded-lg">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <i className="fa fa-icon"><img
                  src={thesis}
                  alt="Project Photo"
                  className='roundded-full'
                /></i>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold">Thesis paper</h3>
                <p className="text-gray-600">700+ papers</p>
              </div>
            </div>
           
          </div>
          </Link>

         <Link to="/projectequipment"> <div className="bg-white shadow-lg p-4 rounded-lg">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <i className="fa fa-icon"><img
                  src={projectequipment}
                  alt="Project Photo"
                  className='roundded-full'
                /></i>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold">Project Equipment</h3>
                <p className="text-gray-600">400+ Equipment</p>
              </div>
            </div>
          </div>
          </Link>
         

          {/* Second Row */}
         <Link to="notes"> <div className="bg-white shadow-lg p-4 rounded-lg">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <i className="fa fa-icon"><img
                  src={notes}
                  alt="Project Photo"
                  className='roundded-full'
                /></i>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold">Notes</h3>
                <p className="text-gray-600">600+ Notes</p>
              </div>
            </div>
          </div>
          </Link>

         <Link to="books"><div className="bg-white shadow-lg p-4 rounded-lg">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <i className="fa fa-icon"><img
                  src={books}
                  alt="Project Photo"
                  className='roundded-full'
                /></i>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold">Books</h3>
                <p className="text-gray-600">200+ books</p>
              </div>
            </div>
          </div>
          </Link> 

        <Link to="presentationsilde">  <div className="bg-white shadow-lg p-4 rounded-lg">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <i className="fa fa-icon"><img
                  src={ppt}
                  alt="Project Photo"
                  className='roundded-full'
                /></i>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold">Presentation Silde</h3>
                <p className="text-gray-600">430+ slide</p>
              </div>
            </div>
          </div>
          </Link>
        </div>
      </div>
    </div>
         
        </div>
    );
};

export default Mainsection;