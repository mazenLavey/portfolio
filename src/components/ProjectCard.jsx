import { useState } from 'react';
import ProjectCardCSS from './ProjectCard.module.css';
import LinkButton from './LinkButton';
import Skill from './Skill';
import { nanoid } from 'nanoid';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useInView } from 'react-intersection-observer';
import AuthorCredits from './AuthorCredits';

const ProjectCard = ({data, lang})=> {
    const [imgIsLoaded, setImgIsLoaded] = useState(false);

    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true
    });

    function handleLoading(e) {
        if (e.target.complete) {
            setTimeout(()=>{
                setImgIsLoaded(true);
            }, 200);
        }
    }

    return (
    <div className={ProjectCardCSS.wrapper} ref={ref}>
        <div className={ProjectCardCSS.images}>
            {imgIsLoaded ? null: <Skeleton containerClassName="flex-1" height={"100%"} width={"100%"} style={{position: "absolute"}} />}
            {inView && <img src={data.image.src} alt={data.image.alt} onLoad={handleLoading}/>}
        </div>
        <article className={ProjectCardCSS.info}>
            <h3>{data.title}</h3>
            <p data-multilang="gamingWorld">{data.description}</p>
            {data.authorCredits && <AuthorCredits credits={data.authorCredits} />}
            <div className={ProjectCardCSS.tools}>
                <h4 data-multilang="tools">{lang === "en"? "Tools": "Инструменты"}:</h4>
                <ul>
                    {data.tools.map(el => <li key={nanoid()}><Skill skill={el}/></li>)}
                </ul>
            </div>
            <div className={ProjectCardCSS.links}>
                <LinkButton text={lang === "en"? "view code" : "Посмотреть Код"} link={data.links.github} icon={"github"}/>
                <LinkButton text={lang === "en"? "live demo" : "Демо Демонстрация"} link={data.links.demo} icon={"live"}/>
            </div>
        </article>
    </div>
    );
};

export default ProjectCard;