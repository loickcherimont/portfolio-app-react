import { useEffect, useState } from "react"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { useNavigate } from "react-router";
import type { Project } from "@/lib/type/Project";

export default function Achievements() {
    const navigate = useNavigate()
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

    const handleSeeProject = (id: number) => {
       navigate(`/project/${id}`);
    }

    useEffect(() => {
        loadProjects();
    }, []);
    return <div id="projects" className="flex flex-col items-center space-y-3 md:space-y-10">
        <h2 className="text-3xl font-semibold text-center">PROJECTS</h2>
        <div className="flex flex-wrap justify-center items-baseline space-y-5 md:space-x-10 md:space-y-10">

            {projects?.map((project: Project) => {
                return (
                    <Card key={project.id}>
                        <CardHeader>
                            <CardTitle className="text-lg font-semibold tracking-tight">{project.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <img src={project.imageUrl} alt={`Preview for project no.${project.id}`} className="rounded-lg" />
                        </CardContent>
                        <CardFooter>
                            <Button className="cursor-pointer" onClick={() => handleSeeProject(project.id)}>See Project</Button>
                        </CardFooter>
                    </Card>
                );
            })}
        </div>
    </div>


}

// todo: find why the '.h-screen' break "PROJECTS" and "CONTACT" sections.