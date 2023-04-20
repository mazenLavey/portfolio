import LinkButtonCSS from './LinkButton.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSatelliteDish } from '@fortawesome/free-solid-svg-icons';

const LinkButton = ({text, link, icon = ""})=>{
    return (
        <a href={link} role='button' target="_blank" rel="noreferrer" className={LinkButtonCSS.btn} data-multilang="viewCode">
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