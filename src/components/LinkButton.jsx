import LinkButtonCSS from './LinkButton.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSatelliteDish } from '@fortawesome/free-solid-svg-icons';
import useMetrics from '../hooks/useMetrics';


const LinkButton = ({text, link, icon = ""})=>{
    const {sendMetrics} = useMetrics();

    function handleClick() {
        sendMetrics("Button", "onClick", link);
    };

    return (
        <a href={link} role='button' target="_blank" rel="noreferrer" className={LinkButtonCSS.btn} onClick={handleClick}>
            {text}
            {
                icon === "github"?
                <FontAwesomeIcon icon={faGithub} />
                :
                icon === "live"?
                <FontAwesomeIcon icon={faSatelliteDish} />
                :
                null
            }
        </a> 
    );
};

export default LinkButton;