

const Footer = () => {
    return (
        <div>
            {/* Footer with terms and conditions link and contact form */}
      <footer className="mt-64 p-4 bg-gray-800">
        <div className="max-w-screen-lg mx-auto">
          <div className="flex justify-between mt-3">
            <div>
            
              <h3 className="text-xl font-bold mb-2 ml-32 text-white">Contact Us</h3>
      <form >
        <div className='flex justify-between gap-3' >
        <div className="mb-4">
        
          <label htmlFor="name" className="block text-white text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
           
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
          
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-white text-sm font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            
            className="w-full p-2 border border-gray-300 rounded"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
             
            </div>
            <div className='mt-1'>
              <a href="/terms-and-conditions" className="text-white hover:underline block  pb-1">
                Terms and Conditions
              </a>
              <a href="/terms-and-conditions" className="text-white hover:underline block pb-1">
                Our Vision and scope
              </a>
              <a href="/terms-and-conditions" className="text-white hover:underline block">
                payment policies
              </a>
              {/* Add your address here */}
              {/* Example:
              <p>123 Main Street, City, Country</p>
              */}
            </div>
          </div>
        </div>
      </footer>
        </div>
    );
};

export default Footer;