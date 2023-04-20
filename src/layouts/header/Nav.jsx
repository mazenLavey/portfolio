import { useContext } from 'react';
import { ThemContext } from '../../context/ThemContext';
import NavCSS from './styles/Nav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import LanguageBtn from '../../components/LanguageBtn';
import { LanguageContext } from '../../context/LanguageContext';
import ReactGA from 'react-ga';

const Nav = ()=>{
    const {isDarkMode, changeThem} = useContext(ThemContext);
    const {lang} = useContext(LanguageContext);

    function handleClick() {
        ReactGA.event({
            category: "Button",
            action: "Click",
            label: "linkedin link"
        })
    }
    
    return (
    <nav className={NavCSS.wrapper}>
        <ul>
            <li><a href="#projects" rel="noreferrer" title="Go to Projects Section" >{lang === "en"? "projects": "Проекты"}</a></li>
            <li>
                <a href="https://www.linkedin.com/in/mazen-al-madhage-569886269/" rel="noreferrer" target="_blank" title="Go to Mazen's Linkedin" onClick={handleClick}>
                    <FontAwesomeIcon icon={faLinkedin} style={{fontSize: "var(--font-600)"}}/>
                </a>
            </li>
            <li title={isDarkMode? "Switch to Light Mode" : "Switch to Dark Mode"}>
                <FontAwesomeIcon icon={isDarkMode? faSun : faMoon} style={{fontSize: "var(--font-600)"}} onClick={changeThem}/>
            </li>
            <li ><LanguageBtn /></li>
        </ul>
    </nav>
    )
};

export default Nav;