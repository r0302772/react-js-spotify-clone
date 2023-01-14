import {createContext} from 'react'

const ThemeContext = createContext({
    darkTheme: true,
    toggleDarkTheme: (evt) => {
        console.warn(`Toggle the theme isn't implemented yet, add a provider and try again.`)
    }
})
export default ThemeContext