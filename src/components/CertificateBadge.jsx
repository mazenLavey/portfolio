import badge from '../assets/meta-front-end-developer-certificate.png';
import useMetrics from '../hooks/useMetrics';

const CertificateBadge = ()=>{
    const {sendMetrics} = useMetrics();

    function handleClick() {
        sendMetrics("Button", "onClick", "meta certificate");
    };

    return (
        <a href='https://www.credly.com/badges/3f87ed09-40eb-48ab-94a8-97a4d42c3645/public_url' target='_blank' rel="noreferrer" onClick={handleClick}>
            <img src={badge} alt="meta front-end developer certificate"/>
        </a>
    );
};

export default CertificateBadge;