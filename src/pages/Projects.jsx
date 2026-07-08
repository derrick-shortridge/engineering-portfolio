import Navbar from '../components/Navbar'
import projects from '../data/projects'
import ProjectCard from '../components/ProjectCard'

function Projects() {
    return(
        <div>
        <Navbar />
            <div>
                <h1>My Engineering Projects</h1>
            </div>
            
            <div>
                {projects.map((project) => (
                    <ProjectCard key={project.id} projects={projects}/>
                ))}
                <h3>Technologies used: </h3>
            </div>
        </div>
    )
} 

export default Projects