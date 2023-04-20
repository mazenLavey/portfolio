import { useContext, useState } from "react";
import ProjectCard from "../../components/ProjectCard";
import projectsData from '../../database/projectsData.json';
import { nanoid } from "nanoid";
import { LanguageContext } from "../../context/LanguageContext";

const ProjectsList = ()=>{
    const [data] = useState(projectsData);
    const {lang} = useContext(LanguageContext);

    const projects = data.map(el => {
        const projectData = lang === "en" ? el.en : el.ru;
        return (
            <ProjectCard key={nanoid()} data={projectData} lang={lang}/>
        )}
    );

    return (
        <section id="projects" className="container">
            {projects}
        </section>
    )
};

export default ProjectsList;