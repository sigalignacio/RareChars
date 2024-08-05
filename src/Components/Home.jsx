// src/Components/Home.jsx
import React from 'react';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div className={`min-h-screen bg-site-bg-color dark:bg-gray-900 text-black dark:text-white`}>
      <div className="container mx-auto p-4">
        <Navbar />
        <h1 className="text-center text-3xl">Hello, World!</h1>
      </div>
    </div>
  );
}

export default Home;
