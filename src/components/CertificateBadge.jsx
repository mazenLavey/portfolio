import badge from '../assets/meta-front-end-developer-certificate.png';
import useMetrics from '../hooks/useMetrics';

const CertificateBadge = ()=>{
    const {sendMetrics} = useMetrics();

    function handleClick() {
        sendMetrics("Button", "onClick", "meta certificate");
    };

    return (
        <a href='https://coursera.org/share/a7a7eb18613dbeaf38290cb606c76964' target='_blank' rel="noreferrer" onClick={handleClick}>
            <img src={badge} alt="meta front-end developer certificate"/>
        </a>
    );
};

export default CertificateBadge;