// src/components/GridComponent.js

import Navbar from "../../components/Navbar";
import sadik from "./sadik.png"

const Hireforhelp= () => {
  const data = [
    {
      id: 1,
      name: 'John Doe',
      expertise: 'Web Developer',
      experience: '5 years of experience',
      image:sadik,
    },
    {
        id: 1,
        name: 'John Doe',
        expertise: 'Web Developer',
        experience: '5 years of experience',
        image:sadik,
      },
      {
        id: 1,
        name: 'John Doe',
        expertise: 'Web Developer',
        experience: '5 years of experience',
        image:sadik,
      },
       {
        id: 1,
        name: 'John Doe',
        expertise: 'Web Developer',
        experience: '5 years of experience',
        image:sadik,
      },
      {
        id: 1,
        name: 'John Doe',
        expertise: 'Web Developer',
        experience: '5 years of experience',
        image:sadik,
      },
      {
        id: 1,
        name: 'John Doe',
        expertise: 'Web Developer',
        experience: '5 years of experience',
        image:sadik,
      },
      {
        id: 1,
        name: 'John Doe',
        expertise: 'Web Developer',
        experience: '5 years of experience',
        image:sadik,
      },
      {
        id: 1,
        name: 'John Doe',
        expertise: 'Web Developer',
        experience: '5 years of experience',
        image:sadik,
      },
    // Add more data for other cards
  ];

  return (
    <div>
        <Navbar></Navbar>
      
        <div  className="relative mt-20 ml-10 flex justify-between" >
  <select value=""  className="py-2 text-black pl-8 pr-2 w-80 mr-1 rounded-full border bg-slate-200 border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500" >
  <option value=""  >choose department </option>
  <option value="Software Engineering">Software Engineering</option>
  <option value="Electrical Engineering">Electrical Engineering</option>
  <option value="civil">civil</option>
  <option value="Architecture">Architecture</option>
  <option value="Industial Production Engineering">Industial Production Engineering</option>
</select>
<input
          type="text"
          placeholder="Search keywords...."
          className="py-2 pl-8 pr-3 w-80 mr-16 rounded-full border bg-slate-200 border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
</div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-8 p-4 sha">
  {data.map((card) => (
    <div key={card.id} className="flex flex-col items-center rounded-lg p-3 shadow-lg bg-gray-100">
      <img
        className="w-20 h-20 rounded-full mb-4"
        src={card.image}
        alt={card.name}
      />
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-2">{card.name}</h2>
        <p className="text-gray-600 mb-2">{card.expertise}</p>
        <p className="text-gray-600 mb-4">{card.experience}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-1 px-4 rounded">
          Hire Me
        </button>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default Hireforhelp;
