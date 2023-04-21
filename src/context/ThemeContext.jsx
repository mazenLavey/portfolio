import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({children})=>{
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(()=>{
        const themeModeIsDark = localStorage.getItem("darkMode_portfolio");
        if(themeModeIsDark && themeModeIsDark === "true") {
            setIsDarkMode(() => {
                switchTheme(true);
                return true;
            });
        };
    }, []);

    function changeTheme() {
        setIsDarkMode(oldStatus => {
            switchTheme(!oldStatus);
            localStorage.setItem("darkMode_portfolio", !oldStatus);
            return !oldStatus;
        });
    };

    function switchTheme(darkMode) {
        const rootVar = document.documentElement;
        if (!darkMode) {
            rootVar.style.setProperty("--main-color", "#fff");
            rootVar.style.setProperty("--font-color", "#111");
            rootVar.style.setProperty("--elements-color", "#111");
            rootVar.style.setProperty("--elements-font-color", "#fff");
            rootVar.style.setProperty("--shadow-color", "#00000073");

        } else {
            rootVar.style.setProperty("--main-color", "#111");
            rootVar.style.setProperty("--font-color", "#fff");
            rootVar.style.setProperty("--elements-color", "#fff");
            rootVar.style.setProperty("--elements-font-color", "#111");
            rootVar.style.setProperty("--shadow-color", "#000");
        }
    };

    return (
        <ThemeContext.Provider value={{isDarkMode, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export {ThemeContext, ThemeProvider};