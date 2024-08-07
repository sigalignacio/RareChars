import React from 'react'



const Card = ({ char }) => { // le pasamos para que acepte una prop llamada 'char'
  return (
    <div className='h-12 w-12 bg-slate-300 rounded-lg shadow-md flex justify-center items-center'>
    <h2 className='font-body text-xl font-medium flex-wrap'>{char}</h2>
    </div>
  )
}

export default Card