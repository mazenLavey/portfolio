import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({children})=>{
    const [isDarkMode, setIsDarkMode] = useState(false);

    function changeTheme() {
        setIsDarkMode(oldStatus => !oldStatus);
    };

    return (
        <ThemeContext.Provider value={{isDarkMode, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export {ThemeContext, ThemeProvider};