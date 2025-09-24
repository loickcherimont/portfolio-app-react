import { useEffect, useState } from "react"
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from "./ui/card";
import { Button } from "./ui/button";
import { useNavigate } from "react-router";
import type { Project } from "@/lib/type/Project";
import { Loader2 } from "lucide-react";

export default function Achievements() {
    const navigate = useNavigate()
    const [projects, setProjects] = useState<Project[]>();
    const loadProjects = async () => {
        try {
            // PROD
            const response = await fetch(`https://portfolio-api-v1j0.onrender.com/api/projects`);

            // DEV
            // const response = await fetch(`http://localhost:8080/api/projects`);

            if (!response.ok) throw new Error("Server cannot be joined!");

            const projects = await response.json();

            setProjects(projects);

        } catch (err: unknown) {
            console.error("Error from Achivements.tsx: ", err);
        }
    }

    const handleSeeProject = (id: number) => {
        navigate(`/portfolio/projects/${id}`);
    }

    // const handleRetry = () => {
    //     window.location.reload();
    // }

    useEffect(() => {
        loadProjects();
    }, []);

    if (!projects) return <div className="min-h-screen flex flex-col items-center justify-center p-4 space-y-3" id="projects">
        <h2 className="border-b p-3 text-3xl font-semibold text-center">PROJECTS</h2>

      <Card className="max-w-md w-full shadow-lg bg-black border-0">
        <CardHeader className="flex flex-col items-center text-center space-y-2">
          <Loader2 className="w-12 h-12 animate-spin text-violet-700" />
          <CardTitle className="text-2xl text-violet-700 animate-pulse">Loading Projects...</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <CardDescription>
            Please wait while we fetch projects from the server.
          </CardDescription>
        </CardContent>
      </Card>
    </div>
    return <div id="projects" className="flex flex-col items-center space-y-3 md:space-y-10 min-h-screen my-10">
        <h2 className="border-b p-3 text-3xl font-semibold text-center">PROJECTS</h2>
        <div className="flex flex-wrap justify-center items-baseline space-y-5 md:space-x-10 md:space-y-10">

            {projects?.map((project: Project) => {
                return (
                    <Card key={project.id} className="w-80 bg-black border-0 hover:-translate-y-2 transition ease-in duration-300">
                        <CardHeader>
                            <CardTitle className="text-lg font-semibold tracking-tight text-violet-700">{project.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <img src={project.imageUrl} alt={`Preview for project no.${project.id}`} className="rounded-lg" />
                        </CardContent>
                        <CardFooter>
                            <Button className="cursor-pointer bg-violet-700 text-black hover:bg-violet-500 transition ease-in duration-300" onClick={() => handleSeeProject(project.id)}>Know more</Button>
                        </CardFooter>
                    </Card>
                );
            })}
        </div>
    </div>


}