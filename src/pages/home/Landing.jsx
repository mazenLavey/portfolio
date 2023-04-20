import { LanguageContext } from '../../context/LanguageContext';
import { useContext } from 'react';
import LandingCSS from './styles/Landing.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import badge from '../../assets/meta-front-end-developer-certificate.png';

const Landing = ()=> {
    const {lang} = useContext(LanguageContext);

    return (
    <section className={`${LandingCSS.wrapper} container`}>
        <div>
            <h1>{lang === "en"? `Joy through simple design.` : "Радость через простой дизайн."}</h1>
            <p>{lang === "en"? "Mazen Al-Madhage / Front-end Developer": "Аль-Мадхаджи Мазен / Front-end разработчик"}</p>
        </div>
        <a href='https://www.credly.com/badges/3f87ed09-40eb-48ab-94a8-97a4d42c3645/public_url' target='_blank' rel="noreferrer" className={LandingCSS.certificate}>
            <img src={badge} alt="meta front-end developer certificate" width={160}/>
        </a>
        <a className={LandingCSS.arrow} href="#projects">
            <p>{lang === "en"? "some projects" : "Проекты"}</p>
            <FontAwesomeIcon icon={faAnglesDown} />
        </a>
    </section>
    );
};

export default Landing;