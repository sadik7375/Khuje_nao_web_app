
import Navbar from '../components/Navbar';
import Mainsection from '../components/Mainsection';
import Footer from '../components/footer';
import Searchbar from '../components/Searchbar';

const Home = () => {
    return (
        <div className='bg-gray-100' >
            <Navbar></Navbar>
           <Searchbar></Searchbar>
            
            <Mainsection></Mainsection>
         
           {/* <Footer></Footer> */}
            
        </div>
    );
};

export default Home;