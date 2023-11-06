
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex items-center justify-between fixed w-full top-0 z-10">
      <div className="flex items-center space-x-2 ml-40">
     
        <Link to='/'><span className="text-white font-bold text-lg">KHUJE NAO</span></Link>
      </div>
      <div className="space-x-4 mr-44 ">
      <Link to='/postforsell' className="text-white hover:text-gray-300">Post For Sell</Link>
        <Link to='/signin' href="#" className="text-white hover:text-gray-300">Sign In</Link>
        <Link to='/signup' className="text-white hover:text-gray-300">Sign Up</Link>
  
      </div>
    </nav>
  );
};

export default Navbar;
