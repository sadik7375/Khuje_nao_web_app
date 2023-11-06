
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import hlw from './hlw.png'
import Searchbar from '../components/Searchbar';
const Thesispaper = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='mb-4 ml-5 flex justify-center mt-32 gap-3'>
      <h1 className="mb-1 font-mono text-2xl text-gray-800 md:text-4xl">
     hey,  <br className="block md:hidden" />
    <span
      className="inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform"
    >
      Find Your Paper  
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
  <option value="otherOption">Pharmacy</option>
  <option value="otherOption">BBA</option>
</select>
</div>
<Searchbar></Searchbar>
  </div>
  
       
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
                <h2 className="text-xl font-bold">Vedio website for Learning and making vedio for your project</h2>
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
                <h2 className="text-xl font-bold">paper Name</h2>
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
                <h2 className="text-xl font-bold">paper Name</h2>
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
                <h2 className="text-xl font-bold">Paper Name</h2>
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

export default Thesispaper;