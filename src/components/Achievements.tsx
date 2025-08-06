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

            console.log(response);

            if (!response.ok) throw new Error("Server cannot be joined!");

            const projects = await response.json();

            setProjects(projects);

        } catch (err: unknown) {

        }
    }

    useEffect(() => {
        loadProjects();
    }, []);
    return <div id="projects" className="h-screen flex flex-col items-center justify-around">
        <h2 className="text-3xl font-semibold text-center">PROJECTS</h2>
        <div className="flex flex-col items-center space-y-3">

            {projects?.map((project: Project) => {
                return (
                    // TODO: Replace "#projects" with a route to Project page/component
                    <a href="#projects">
                        <div key={project.id} className="flex flex-col items-center">
                            <img src={project.imageUrl} alt={`Preview for project no.${project.id}`} />
                            <h3 className="text-2xl font-semibold tracking-tight">{project.title}</h3>
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

/*
    // <div id="about">
    //     <article className="flex flex-col justify-around items-center w-96 h-9/10">
    //         <p className="text-muted-foreground text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eum deleniti repellendus minima assumenda vitae saepe eos, aperiam, ut at atque? Ipsa consectetur iste laudantium, adipisci quaerat pariatur sequi amet.
    //             Soluta nulla nisi expedita nostrum quaerat atque, dolore libero vero, eligendi harum, non facere quam mollitia vel velit et? Consequuntur nesciunt possimus nostrum eius obcaecati assumenda, unde voluptate optio veritatis.</p>
    //         <p className="text-muted-foreground text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eum deleniti repellendus minima assumenda vitae saepe eos, aperiam, ut at atque? Ipsa consectetur iste laudantium, adipisci quaerat pariatur sequi amet.
    //             Soluta nulla nisi expedita nostrum quaerat atque, dolore libero vero, eligendi harum, non facere quam mollitia vel velit et? Consequuntur nesciunt possimus nostrum eius obcaecati assumenda, unde voluptate optio veritatis.</p>
    //     </article>
    // </div>
*/

