
import Navbar from '../components/Navbar';
import Mainsection from '../components/Mainsection';
import Footer from '../components/footer';
import Searchbar from '../components/Searchbar';
import Curosel from '../components/Curosel';

const Home = () => {
    return (
        <div className='bg-gray-100' >
            <Navbar></Navbar>
           
            
            <Mainsection></Mainsection>

            <Curosel></Curosel>
         
           <Footer></Footer>
            
        </div>
    );
};

export default Home;