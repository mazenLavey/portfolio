import badge from '../assets/meta-front-end-developer-certificate.png';
import useMetrics from '../hooks/useMetrics';

const CertificateBadge = ()=>{
    const {sendMetrics} = useMetrics();

    function handleClick() {
        sendMetrics("Button", "onClick", "meta certificate");
    };

    return (
        <a href='https://www.coursera.org/account/accomplishments/professional-cert/8SLR95GYSYUB' target='_blank' rel="noreferrer" onClick={handleClick}>
            <img src={badge} alt="meta front-end developer certificate"/>
        </a>
    );
};

export default CertificateBadge;