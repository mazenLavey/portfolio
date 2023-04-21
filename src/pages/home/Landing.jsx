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
            <h1>{lang === "en"? `Joy through \nsimple design.` : `Радость через \nпростой дизайн.`}</h1>
            <span>{lang === "en"? "Mazen Al-Madhage / Front-end Developer": "Аль-Мадхаджи Мазен / Front-end разработчик"}</span>
        </header>
        <p className={LandingCSS.about}>
            {lang === "en" ? 
                "I am a front-end developer with a passion for web development. I have completed the Meta Front-End Developer certification program on Coursera. I have solid skills in HTML, CSS, JavaScript, and React. Moreover, I have hands-on experience with Figma, Sass, Google Analytics, and Firebase. I continue to enhance my skills through free online resources and I am always eager to learn and grow as a developer."
                :
                "Я являюсь фронтенд-разработчиком. Прошел программу сертификации Meta Front-End Developer на Coursera. Обладаю навыками работы с HTML, CSS, JavaScript и React. Более того, имею практический опыт работы с Figma, Sass, Google Analytics и Firebase. В настоящее время я продолжаю улучшать свои знания при помощи открытых онлайн-ресурсов.  Готов учиться и расти как разработчик."
            }
        </p>

        <span className={LandingCSS.certificate}>
            <CertificateBadge />
        </span>

        <a className={LandingCSS.arrow} href="#projects" role='button'>
            <p>{lang === "en"? "some projects" : "Проекты"}</p>
            <FontAwesomeIcon icon={faAnglesDown} />
        </a>
    </section>
    );
};

export default Landing;