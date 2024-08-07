import React from 'react';
import Navbar from './Navbar';
import arrayChars from "../utils/arrayChars"
import Card from './Card';
const Home = () => {
  return (
    <div className="min-h-screen bg-site-bg-color dark:bg-gray-900 text-black dark:text-white">
      <div className="container mx-auto p-4">
        <Navbar />
        
      </div>

      <div className='flex gap-4 justify-center mt-20 flex-wrap w-7/12 mx-auto '>
         {arrayChars.map((char, index) => (
          <Card key = {index} char={char}></Card>
         ))}
       </div>
    </div>
  );
}

export default Home;
