import LinkButtonCSS from './LinkButton.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSatelliteDish } from '@fortawesome/free-solid-svg-icons';
import ReactGA from 'react-ga';

const LinkButton = ({text, link, icon = ""})=>{
    function handleClick() {
        ReactGA.event({
            category: 'Button',
            action: 'Click',
            label: link,
        })
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