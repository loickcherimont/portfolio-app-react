import { useEffect, useState } from "react"

type Project = {
    id: number
    title: string,
    description: string,
    techs: string[],
    githubUrl: string,
    imageUrl: string,
}

export default function Achievements() {
    const [projects, setProjects] = useState<Project[]>();
    const loadProjects = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_API}/projects`);

            if (!response.ok) throw new Error("Server cannot be joined!");

            const projects = await response.json();

            setProjects(projects);

        } catch (err: unknown) {

        }
    }

    useEffect(() => {
        loadProjects()
    }, []);
    if(!projects) {
            return <div>
        <h2>PROJECTS</h2>
        <div>Loading projects...</div>
    </div>
    } else {
        return <div>
        <h2>PROJECTS</h2>
        <div className="projects">
            
            { projects.map((project: Project) => {
                return (
                    <div key={project.id}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <ul>
                            {project.techs.map((tech, index) => <li key={index}>{tech}</li>)}
                        </ul>
                        <p>{project.githubUrl}</p>
                        <p>{project.imageUrl}</p>
                    </div>
                );
            })}
        </div>
    </div>
    } 
}