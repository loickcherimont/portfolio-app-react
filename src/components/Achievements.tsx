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
        loadProjects();
    }, []);
    return <div id="projects" className="h-screen flex flex-col items-center space-y-3 md:space-y-10">
        <h2 className="text-3xl font-semibold text-center">PROJECTS</h2>
        <div className="flex flex-wrap justify-center space-y-5 md:space-x-10 md:space-y-10">

            {projects?.map((project: Project) => {
                return (
                    // TODO: Replace "#projects" with a route to Project page/component
                    <a href="#projects" key={project.id}>
                        <div className="flex flex-col items-center">
                            <img src={project.imageUrl} alt={`Preview for project no.${project.id}`} className="rounded-lg" />
                            <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
                            {/* <p>{project.description}</p> */}
                            {/* <ul>
                            {project.techs.map((tech, index) => <li key={index}>{tech}</li>)}
                        </ul> */}
                            {/* <p>{project.githubUrl}</p> */}
                            {/* <p>{project.imageUrl}</p> */}
                        </div>
                    </a>

                );
            })}
        </div>
    </div>


}