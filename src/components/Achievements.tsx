import { useEffect, useState } from "react"
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from "./ui/card";
import { Button } from "./ui/button";
import { useNavigate } from "react-router";
import type { Project } from "@/lib/type/Project";
import { AlertTriangle, Loader2 } from "lucide-react";

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
            console.error("Error from Achivements.tsx: ", err);
        }
    }

    const handleSeeProject = (id: number) => {
        navigate(`/project/${id}`);
    }

    const handleRetry = () => {
        window.location.reload();
    }

    useEffect(() => {
        loadProjects();
    }, []);

    if (!projects) return <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-4 space-y-3" id="projects">
        <h2 className="text-3xl font-semibold text-center">PROJECTS</h2>

      <Card className="max-w-md w-full shadow-lg border border-slate-200">
        <CardHeader className="flex flex-col items-center text-center space-y-2">
          <Loader2 className="w-12 h-12 animate-spin text-blue-500" />
          <CardTitle className="text-2xl">Loading Projects...</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <CardDescription>
            Please wait while we fetch your projects from the server.
          </CardDescription>
        </CardContent>
      </Card>
    </div>
    return <div id="projects" className="flex flex-col items-center space-y-3 md:space-y-10 min-h-screen my-10">
        <h2 className="text-3xl font-semibold text-center">PROJECTS</h2>
        <div className="flex flex-wrap justify-center items-baseline space-y-5 md:space-x-10 md:space-y-10">

            {projects?.map((project: Project) => {
                return (
                    <Card key={project.id} className="w-80">
                        <CardHeader>
                            <CardTitle className="text-lg font-semibold tracking-tight">{project.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <img src={project.imageUrl} alt={`Preview for project no.${project.id}`} className="rounded-lg" />
                        </CardContent>
                        <CardFooter>
                            <Button className="cursor-pointer" onClick={() => handleSeeProject(project.id)}>Know more</Button>
                        </CardFooter>
                    </Card>
                );
            })}
        </div>
    </div>


}

// todo: find why the '.h-screen' break "PROJECTS" and "CONTACT" sections.