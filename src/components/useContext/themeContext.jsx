/* eslint-disable react/prop-types */
import {createContext, useContext, useState} from 'react'

const ThemeContext= createContext()
const ToggleThemeContext = createContext()

export function useTheme() {
    return useContext(ThemeContext)
} 
export function useToggleTheme() {
    return useContext(ToggleThemeContext)
} 

export function ThemeProvider({children}) {
    const [theme, setTheme] = useState(true)

    const changeThemeFun = () => {
        setTheme(!theme)
    }

    return (
        <ThemeContext.Provider value={theme}>
            <ToggleThemeContext.Provider value={changeThemeFun}>
                {children}
            </ToggleThemeContext.Provider>
        </ThemeContext.Provider>

    )
}