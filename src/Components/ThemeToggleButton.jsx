import React from 'react'
import { useTheme } from '../Contexts/ThemeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';


// arriba importamos de fontawesome los icons, y antes descargamos fontawesome x npm

const ThemeToggleButton = () => {
    const {theme, toggleTheme } = useTheme();
  return (
    <>
    <button onClick={toggleTheme}
    className='bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded'>

    {theme === 'light' ? <FontAwesomeIcon icon={faMoon}/> :  <FontAwesomeIcon icon={faSun} />}
    </button>
    </>
    
  )
}

export default ThemeToggleButton