import React from 'react'
import { useTheme } from '../Contexts/ThemeContext'

const Footer = () => {

    const {theme} = useTheme();
  return (
    <div className={`font-body cursor-pointer font-bold text-xl ${theme === 'light' ? 'text-blue-900' : 'text-yellow-500'}`}>Ignacio Sigal</div>
  )
}

export default Footer