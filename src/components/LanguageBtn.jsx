import { useContext, useEffect, useRef, useState } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import LanguageBtnCSS from './LanguageBtn.module.css';

const LanguageBtn = ()=>{
    const [dropMenu, setDropMenu] = useState(false);
    const {lang, changeLanguage} = useContext(LanguageContext);

    const dropMenuRef = useRef();

    function handleClick() {
        setDropMenu(oldStatus => !oldStatus);
    };

    useEffect(()=>{
        function closeDropMenu(e) {
            if (dropMenu && dropMenuRef.current !== e.target) {
                setDropMenu(false);
            };
        };
        
        if (dropMenu) {
            window.addEventListener('click', closeDropMenu);
        };

        return ()=>{
            window.removeEventListener('click', closeDropMenu);
        }
    }, [dropMenu]);

    return (
        <>
            <div lang="ru" className={LanguageBtnCSS.wrapper} ref={dropMenuRef} onClick={handleClick} title={lang === "en"? "Перейти на русский язык": "Switch to English"}>
                <FontAwesomeIcon icon={faGlobe} />
            </div>
            {
                dropMenu &&
                <ul className={LanguageBtnCSS.dropmenu} >
                    <li onClick={(e) => {
                        e.stopPropagation();
                        changeLanguage("en"); 
                        handleClick();
                        }}
                    >En</li>

                    <li onClick={(e) => {
                        e.stopPropagation();
                        changeLanguage("ru");
                        handleClick();
                        }}
                    >Ru</li>
                </ul>
            }
        </>
    );
};

export default LanguageBtn;