import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehanceSquare } from '@fortawesome/free-brands-svg-icons';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import useMetrics from '../hooks/useMetrics';
import AuthorCreditsCSS from './AuthorCredits.module.css';

const AuthorCredits = ({credits})=>{
    const {sendMetrics} = useMetrics();

    function handleClick() {
        sendMetrics("Button", "Click", credits.link);
    };

    return (
        <div className={AuthorCreditsCSS.wrapper}>
            <h4>{credits.type} Credits</h4>
            <a href={credits.link} target="_blank" rel="noreferrer" onClick={handleClick} className={AuthorCreditsCSS.credits}>
            {
                credits.type === "api"?
                <FontAwesomeIcon icon={faCodeBranch} style={{color: "#0057ff"}}/>
                :
                <FontAwesomeIcon icon={faBehanceSquare} size='2x' style={{color: "#0057ff"}}/>
            }

            <p>{credits.name}</p>
            </a>
        </div>
    );
};

export default AuthorCredits;