import { LanguageContext } from '../../context/LanguageContext';
import { useContext } from 'react';
import LandingCSS from './styles/Landing.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import CertificateBadge from '../../components/CertificateBadge';

const Landing = ()=> {
    const {lang} = useContext(LanguageContext);

    return (
    <section className={`${LandingCSS.wrapper} container`}>
        <div>
            <h1>{lang === "en"? `Joy through simple design.` : "Радость через простой дизайн."}</h1>
            <p>{lang === "en"? "Mazen Al-Madhage / Front-end Developer": "Аль-Мадхаджи Мазен / Front-end разработчик"}</p>
        </div>

        <div className={LandingCSS.certificate}>
            <CertificateBadge />
        </div>

        <a className={LandingCSS.arrow} href="#projects">
            <p>{lang === "en"? "some projects" : "Проекты"}</p>
            <FontAwesomeIcon icon={faAnglesDown} />
        </a>
    </section>
    );
};

export default Landing;