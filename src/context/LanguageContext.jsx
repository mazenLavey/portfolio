import { createContext, useState } from "react";

const LanguageContext = createContext();

const LanguageProvider = ({children})=>{
    const [lang, setLang] = useState("en");

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