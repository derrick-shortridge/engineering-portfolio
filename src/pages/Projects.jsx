import projects from '../data/projects'
import ProjectCard from '../components/ProjectCard'

function Projects() {
    return(
        <>
            <div>
                <h1>My Engineering Projects</h1>
            </div>
            
            <div>
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project}/>
                ))}
                <h3>Technologies used: </h3>
                {technologies.map((technology) => (
                    <p key={technology}>{technology}</p>
                ))}
            </div>
        </>
    )
}

export default Projects