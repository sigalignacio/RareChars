import React from 'react'
import { useContext, useState,createContext } from 'react'

// creo contexto para el Theme
const ThemeContext = createContext();

// Proveedor del contexto
export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
        // ACA, se crea la funcion toggleTheme, que se usa para alternar entre dark y light.
        // con setTheme, usamos una funcion de callback que recibe
        // prevTheme como nombre para evaluar el estado actual de "theme"
        // como argumento, y se usa el operador ternario, si prevTheme es light se cambia a dark, y sino es light
    };

    return (

        // themeContext es el contexto creado usando createContext()
        // y el Provider: Este componente envuelve a los componentes hijos que necesitan acceder al contexto.
        // Todo lo que esté dentro del Provider tendrá acceso al valor del contexto.
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {/* value={{ theme, toggleTheme }}: Aquí defines qué datos estarán disponibles para los componentes consumidores del contexto. */}
            {children}
            {/* y children es una manera de pasar los componentes hijos al 'Provider' 
            todo componente envuelto por el Themecontext.Provider puede acceder al contexto proporcionado*/}
        </ThemeContext.Provider>
    )

}
// y aca el hook export para usar el contexto del theme
export const useTheme = () => useContext(ThemeContext);
