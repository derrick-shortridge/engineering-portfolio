import {projects} from '../data/projects'
import ProjectCard from '../components/ProjectCard'

function Projects() {
    return(
        <>
            <div>
                <h1>My Engineering Projects</h1>
            </div>
            
            <div>
                {projects.map((project) => (
                    <ProjectCard key={projects.id} project={project}/>
                ))}
            </div>
        </>
    )
}