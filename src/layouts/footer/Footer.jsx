import { useContext, useState } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import FooterCSS from './styles/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import useMetrics from '../../hooks/useMetrics';

const Footer = ()=>{
    const [copied, setCopied] = useState(false);
    const {lang} = useContext(LanguageContext);
    const {sendMetrics} = useMetrics();


    function handleClick() {
        window.navigator.clipboard.writeText("mazen.fp@gmail.com");
        setCopied(true);
        setTimeout(()=>{
            setCopied(false);
        }, 1000);

        sendMetrics("Button", "Click", "copy email address");
    };

    return (
    <footer className={`${FooterCSS.footer} container`}>
            <p>{lang === "en"? "Connect with Me" : "Свяжитесь со мной"}</p>
            <div title='Copy email address' className={FooterCSS.emailAddress} onClick={handleClick}>
                <span>mazen.fp@gmail.com </span>
                <FontAwesomeIcon icon={faCopy} />
                {copied && <span className={FooterCSS.toolTip}>{lang === "en"? "Copied" : "Скопировано"}</span>}
            </div>
    </footer>
    )
};

export default Footer;