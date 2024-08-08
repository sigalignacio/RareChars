import React from 'react';
import Navbar from './Navbar';
import arrayChars from "../utils/arrayChars"
import Card from './Card';
import Footer from './Footer'


const Home = () => {
  return (
    <div className="min-h-screen bg-site-bg-color dark:bg-gray-900 text-black dark:text-white">
      <div className="container mx-auto p-4">
        <Navbar />
      </div>
      <div>
        <h4 className='flex justify-center mt-6 font-body font-bold font-medium text-lg ml-1'>Click on any Char to copy it!</h4>
      </div>

      <div className='flex gap-4 justify-center mt-20 flex-wrap w-7/12 mx-auto'>
         {arrayChars.map((char, index) => (
          <Card key = {index} char={char}></Card>
         ))}
       </div>
       <div onClick={() => window.open("https://github.com/sigalignacio", "_blank")}

       className='flex justify-center mt-20'>
        <Footer></Footer>
       </div>
       
    </div>
  );
}

export default Home;
