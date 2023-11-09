
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

const Buynow = () => {
    return (
        <div>
            <Navbar></Navbar>
           <div className="w-full  mt-24">
    <div className="container mx-auto py-8">
      <div className="w-96 mx-auto bg-gray-100 rounded shadow">
        <div className="mx-16 ml-18 py-4 px-8 text-black text-xl font-bold border-b border-grey-500">
         <h1>Order Confirm</h1> 
      
        </div>
        <form name="student_application" id="student_application" action="">
          <div className="py-4 px-8">
            <div className='flex justify-between' >
            <div className="mb-4 mr-12">
              <label className="block text-grey-darker text-sm font-bold mb-2">
             Name
              </label>
              <input
                className=" border rounded w-full py-2 px-3 text-grey-darker"
                type="text"
                name="student_id"
                id="student_id"
                defaultValue=""
                placeholder="Your Name"
              />
            </div>
           
            <div className="mb-4">
              <label className="block text-grey-darker text-sm font-bold mb-2">
                Location
              </label>
              <input
                className=" border rounded w-full py-2 px-3 text-grey-darker"
                type="text"
                name="student_name"
                id="student_name"
                defaultValue=""
                placeholder="Full Address"
              />
            </div>
            </div>
            <div className='flex justify-between'>
            <div className="mb-4 mr-12">
              <label className="block text-grey-darker text-sm font-bold mb-2">
                Phone Number
              </label>
              <input
                className=" border rounded w-full py-2 px-3 text-grey-darker"
                type="text"
                name="course_name"
                id="course_name"
                defaultValue=""
                placeholder="Number"
              />
              <p id="error_creater_id" />
            </div>
            <div className="mb-4">
              <label className="block text-grey-darker text-sm font-bold mb-2">
                Payment Method
              </label>
              <input
                className=" border rounded w-full py-2 px-3 text-grey-darker"
                type="text"
                name="addmission_date"
                id="addmission_date"
                defaultValue=""
              />
              <p id="error_intake_year" />
            </div>
            </div>
            <div className="mb-4">
              <button className="mb-2 mr- mx-16 rounded-full py-1 px-24 bg-gradient-to-r from-green-400 to-blue-500 ">
                Confirm
              </button>
              
            </div>
            <span className='text-sm font-semibold'>After Order Confirmation,we will contact you between 24 hour.Thank for your order</span>
          </div>
        </form>
      </div>
    </div>
  </div> 
  <Footer></Footer>
        </div>
    );
};

export default Buynow;