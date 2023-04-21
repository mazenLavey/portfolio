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
        <header className={LandingCSS.header}>
            <h1>{lang === "en"? `Joy through simple design.` : "Радость через простой дизайн."}</h1>
            <span>{lang === "en"? "Mazen Al-Madhage / Front-end Developer": "Аль-Мадхаджи Мазен / Front-end разработчик"}</span>
        </header>
        <p className={LandingCSS.about}>
            {lang === "en" ? 
                "I am a front-end developer with a passion for web development. I have solid skills in HTML, CSS, JavaScript, and React, and have completed the Meta Front-End Developer certification program on Coursera. I continue to enhance my skills through free online resources and hands-on experience with Figma, Sass, Google Analytics, and Firebase. I am always eager to learn and grow as a developer."
                :
                "Я являюсь фронтенд-разработчиком с увлечением к веб-разработке. У меня крепкие навыки в HTML, CSS, JavaScript и React, а также я прошел программу сертификации Meta Front-End Developer на Coursera. Я продолжаю улучшать свои навыки через бесплатные онлайн-ресурсы и практический опыт работы с Figma, Sass, Google Analytics и Firebase. Я всегда готов учиться и расти как разработчик."
            }
        </p>

        <span className={LandingCSS.certificate}>
            <CertificateBadge />
        </span>

        <a className={LandingCSS.arrow} href="#projects">
            <p>{lang === "en"? "some projects" : "Проекты"}</p>
            <FontAwesomeIcon icon={faAnglesDown} />
        </a>
    </section>
    );
};

export default Landing;