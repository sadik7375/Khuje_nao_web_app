

const Searchbar = () => {
    return (
        <div className='n' >
            <div></div>
             <div className="relative mt-2">
        {/* Search bar */}
        <input
          type="text"
          placeholder="Search"
          className="py-2 pl-8 pr-3 w-80 mr-16 rounded-full border bg-slate-200 border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
      </div>
        </div>
    );
};

export default Searchbar;