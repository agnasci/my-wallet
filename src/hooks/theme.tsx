import React, { createContext, useState, useContext } from 'react'

import dark from '../styles/themes/dark'
import light from '../styles/themes/light'

type Theme = {
    title: string;

    colors: {
        primary: string;
        secondary: string;
        tertiary: string;

        white: string;
        black: string;
        grey: string;

        success: string;
        info: string;
        warning: string;
    }
}

type TypeThemeContecxt = {
    toggleTheme(): void;
    theme: Theme;
}

const ThemeContext = createContext<TypeThemeContecxt>({} as TypeThemeContecxt)

type Props = {
    children: React.ReactNode;
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(() => {
        const themeSaved = localStorage.getItem('@my-wallet:theme')

        if (themeSaved) {
            return JSON.parse(themeSaved)
        } else {
            return dark
        }
    })

    const toggleTheme = () => {
        if (theme.title === 'dark') {
            setTheme(light)
            localStorage.setItem('@my-wallet:theme', JSON.stringify(light))
        } else {
            setTheme(dark)
            localStorage.setItem('@my-wallet:theme', JSON.stringify(dark))
        }
    }

    return (
        <ThemeContext.Provider value={{ toggleTheme, theme}}>
            {children}
        </ThemeContext.Provider>
    )
}

function useTheme(): TypeThemeContecxt {
    const context = useContext(ThemeContext)

    return context
}

export { ThemeProvider, useTheme }