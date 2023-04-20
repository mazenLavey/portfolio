import { createContext, useState } from "react";

const ThemContext = createContext();

const ThemProvider = ({children})=>{
    const [isDarkMode, setIsDarkMode] = useState(false);

    function changeThem() {
        setIsDarkMode(oldStatus => !oldStatus);
    };

    return (
        <ThemContext.Provider value={{isDarkMode, changeThem}}>
            {children}
        </ThemContext.Provider>
    );
};

export {ThemContext, ThemProvider};