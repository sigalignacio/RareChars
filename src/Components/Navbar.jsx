import React, { useEffect } from 'react';
import logo from "../assets/RareCharsLogoJPG__1_-removebg-preview.png";
import ThemeToggleButton from './ThemeToggleButton';
import { useTheme } from '../Contexts/ThemeContext';
import { Link }from "react-router-dom"

const Navbar = () => {
  const { theme } = useTheme();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className='flex items-center h-20 justify-between px-2 -ml-20'> 
    <Link to="/">
        <img src={logo} alt="RareChars Logo" className="h-28 w-36 object-contain" />
    </Link>

    <Link to="/about">
      <p className={`flex-grow text-center font-bold text-lg ${theme === 'light' ? 'text-blue-900' : 'text-yellow-500'}`}>About Us</p> 
      </Link>
 
      {/* la classname de arriba es para que cuando se apreta el boton para cambiar el theme, tenga el blue si es light, y si es dark el yellow */}
      <ThemeToggleButton />
    </div>
  )
}

export default Navbar;
