import React from 'react';

const Card = ({ char }) => { 
  // creo la funcion handleclick
  const handleClick = () => {
    // lo de abajo es una func de js para copiar texto al portapapeles
    navigator.clipboard.writeText(char)
      .then(() => {
        console.log(`${char} copiado al portapapeles`);
      })
      .catch(err => {
        console.error('Error al copiar al portapapeles', err);
      });
  };

  return (
    <div 
      onClick={handleClick} // agrego esto para que cada tarjeta sea clickeable y ejecute la funcion handleClick
      className='h-12 w-12 bg-slate-300 rounded-lg shadow-md flex justify-center items-center hover:-translate-y-1 transition-transform duration-100 cursor-pointer'>
      {/* LE PUSE hover:-translate-y-1 PARA que suba 0.25 rem cuando pasa el cursor por encima, 
      y transition-transform duration-100 para que esa transición dure 100ms así es más suave, y cursor-pointer*/}
      <h2 className='font-body text-xl font-medium flex-wrap dark:text-black'>{char}</h2>
    </div>
  );
}

export default Card;
