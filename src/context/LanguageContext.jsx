import { createContext, useEffect, useState } from "react";

const LanguageContext = createContext();

const LanguageProvider = ({children})=>{
    const [lang, setLang] = useState("en");

    useEffect(()=>{
        const favLang = window.navigator.language.slice(0,2);
        if (favLang === "en" || favLang === "ru") {
            setLang(favLang);
        };
    }, []);

    function changeLanguage(lang) {
        setLang(lang);
    };

    return (
        <LanguageContext.Provider value={{lang, changeLanguage}}>
            {children}
        </LanguageContext.Provider>
    );
};

export {LanguageContext, LanguageProvider};