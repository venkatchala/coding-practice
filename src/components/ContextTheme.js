import React, {createContext, useContext, useState, } from 'react';

const ThemeContext = createContext();

const ContextTheme = () => {
    const [theme, setTheme] = useState('light')
    return (
        <ThemeContext.Provider value={theme}>
            <ToolBar />
        </ThemeContext.Provider>
    )
}

const ToolBar = () => {
    return (
        <ThemeButton />
    )
}

const ThemeButton = () => {
    const theme = useContext(ThemeContext);
    return (
        <button>{theme}</button>
    )
}

export default ContextTheme;