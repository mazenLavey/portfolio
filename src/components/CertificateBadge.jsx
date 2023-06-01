import { useState } from 'react';
import badge from '../assets/meta-front-end-developer-certificate.png';
import useMetrics from '../hooks/useMetrics';

const CertificateBadge = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { sendMetrics } = useMetrics();

    function handleClick() {
        sendMetrics("Button", "onClick", "meta certificate");
    };

    function handleLoading(e) {
        setIsLoading(!e.target.complete)
    }

    return (
        <a href='https://www.coursera.org/account/accomplishments/specialization/certificate/8SLR95GYSYUB' target='_blank' rel="noreferrer" onClick={handleClick}>
            <img src={badge} alt="meta front-end developer certificate" onLoad={handleLoading} style={isLoading ? { visibility: "hidden" } : { visibility: "visible" }} className='fadeIn-animation' />
        </a>
    );
};

export default CertificateBadge;