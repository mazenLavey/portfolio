import { LanguageContext } from '../../context/LanguageContext';
import { useContext } from 'react';
import LandingCSS from './styles/Landing.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import CertificateBadge from '../../components/CertificateBadge';

const Landing = () => {
    const { lang } = useContext(LanguageContext);

    return (
        <section className={`${LandingCSS.wrapper} container`}>
            <header className={LandingCSS.header}>
                <h1>{lang === "en" ? `Turning ideas \ninto interactive reality.` : `Превращение идей \nв интерактивную реальность.`}</h1>
                <span>{lang === "en" ? "Mazen Al-Madhage / Front-end Developer" : "Аль-Мадхаджи Мазен / Front-end разработчик"}</span>
            </header>
            <span className={LandingCSS.certificate}>
                <CertificateBadge />
            </span>
            <a className={LandingCSS.arrow} href="#projects" role='button'>
                <p>{lang === "en" ? "some projects" : "Проекты"}</p>
                <FontAwesomeIcon icon={faAnglesDown} />
            </a>
        </section>
    );
};

export default Landing;