function ProjectCard({ projects }) {
    return (
        <div>
            {projects.map((project) => (
                // Always add a unique 'key' to the top element inside a map loop
                <div key={project.id || project.title}>
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                    <h3>Technologies used:</h3>
                    <p>{project.technologies}</p>
                </div>
            ))}
        </div>
    );
}

export default ProjectCard;