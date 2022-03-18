import React from 'react'
import {prodAPI} from '../utils/api'
import {BsLink} from 'react-icons/bs';

const ProjectList = () => {



    const [projects,setProjects] = React.useState([]);
    const getProjects = async () => {
        const result = await fetch(prodAPI);
        const data = await result.json();
        setProjects(data.data.projects)
    }

    React.useEffect(() => {
        getProjects();
    },[])

    return (
        <div className="project-list">
            {projects.map((project,index) =>{
                return (
                    <article key={index} className="project">
                        <div className="img-container">
                            <img src={project.image} alt="" />
                            <a href={project.link} className="link" target="_blank" rel="noreferrer"><BsLink></BsLink></a>
                        </div>
                        <div className="info-project">
                            <h4 className="title">{project.name}</h4>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}

export default ProjectList
