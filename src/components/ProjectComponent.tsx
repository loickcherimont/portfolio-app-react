import type { Project } from "@/lib/type/Project";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router";
import StarryBackground from "./StarryBackground";

export default function ProjectComponent() {
    const [project, setProject] = useState<Project | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const params = useParams();

    const loadProject = async (id: string) => {
        try {
            setIsLoading(true);
            const response = await fetch(`${import.meta.env.VITE_BACKEND_API}/project/${id}`);
            if (!response.ok) throw new Error("Project not found");
            const data = await response.json();
            setProject(data);
            setError(null);
        } catch (err: unknown) {
            console.error("From ProjectComponent:", err);
            setError(`The route "/${params.id}"  could not be loaded. It may not exist or the server is unreachable.`);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (!params.id) {
            setError("No project ID provided.");
            setIsLoading(false);
            return;
        }

        loadProject(params.id);
    }, [params.id]);

    if (isLoading) {
        return (
            <div className="relative min-h-screen">
                <StarryBackground />
                <div className="relative z-10 flex flex-col items-center justify-center h-screen">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 mb-4" />
                    <p className="text-slate-200">Loading project...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="relative min-h-screen">
                <StarryBackground />
                <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center p-4 gap-y-5">
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-slate-200">
                        Project not found
                    </h2>
                    <p className="text-slate-400">{error}</p>
                    <NavLink
                        to="/"
                        className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm text-slate-200 rounded-md hover:bg-slate-700/50 transition bg-violet-700 text-black hover:bg-violet-500 transition ease-in duration-300"
                    >
                        Return to Home
                    </NavLink>
                </div>
            </div>
        );
    }

    return (
        <div className="relative min-h-screen">
            <StarryBackground />
            <div className="relative z-10 flex flex-col items-center p-4 max-w-screen-lg mx-auto">
                {/* Title */}
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-center text-slate-200">
                    {project?.title}
                </h1>

                {/* Image */}
                <img
                    src={project?.imageUrl}
                    alt={`Preview for project no.${project?.id}`}
                    className="rounded-lg w-full max-w-xs md:max-w-md lg:max-w-lg object-cover mb-4 shadow-lg"
                />

                {/* Description */}
                <p className="text-sm md:text-base lg:text-lg text-justify mb-4 text-slate-300">
                    {project?.description}
                </p>

                {/* Tech list */}
                <ul className="flex flex-wrap gap-2 justify-center mb-4">
                    {project?.techs?.map((tech, index) => (
                        <li
                            key={index}
                            className="px-3 py-1 bg-slate-800/50 backdrop-blur-sm rounded-full text-xs md:text-sm lg:text-base bg-violet-700 text-black"
                        >
                            {tech}
                        </li>
                    ))}
                </ul>

                {/* Links */}
                <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center mb-4">
                    <a
                        href={project?.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-300 hover:text-blue-400 transition-colors underline break-all"
                    >
                        {project?.githubUrl}
                    </a>
                </div>

                <NavLink
                    to="/"
                    className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm text-slate-200 rounded-md hover:bg-slate-700/50 transition bg-violet-700 text-black hover:bg-violet-500 transition ease-in duration-300"
                >
                    Return to Home
                </NavLink>
            </div>
        </div>
    );
}
