import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 , faCss3Alt , faJsSquare, faSass, faReact, faFigma, faUncharted } from '@fortawesome/free-brands-svg-icons';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import SkillCSS from './Skill.module.css';

const Skill = ({skill})=>{
    return (
        <div className={SkillCSS.wrapper}>
            {
                skill === "HTML"?
                <FontAwesomeIcon icon={faHtml5 } style={{color: "#f4470b"}}/>
                :
                skill === "CSS"?
                <FontAwesomeIcon icon={faCss3Alt } style={{color: "#0079c0"}}/>
                :
                skill === "JavaScript"?
                <FontAwesomeIcon icon={faJsSquare } style={{color: "#faaf1e"}} />
                :
                skill === "SASS"?
                <FontAwesomeIcon icon={faSass } style={{color: "#c76494"}} />
                :
                skill === "React"?
                <FontAwesomeIcon icon={faReact } style={{color: "#5ed3f3"}} />
                :
                skill === "Figma"?
                <FontAwesomeIcon icon={faFigma } style={{color: "#9d56f7"}} />
                :
                skill === "API"?
                <FontAwesomeIcon icon={faCodeBranch} style={{color: "#0057ff"}}/>
                :
                <FontAwesomeIcon icon={faUncharted } style={{color: "#f74907"}} />
                
            }
            {skill}
        </div>
    )
};

export default Skill;