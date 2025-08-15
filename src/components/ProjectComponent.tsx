import type { Project } from "@/lib/type/Project";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router"

export default function ProjectComponent() {
    const [project, setProject] = useState<Project | null>(null)
    const params = useParams();
    const loadProject = async (id: string) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_API}/project/${id}`);
            if (!response.ok) throw new Error("Project not found");
            const data = await response.json();
            setProject(data);
            console.log(project, data);
        } catch (error) {
            console.error("From ProjectComponent: ", error);
        }
    }
    useEffect(() => {
        if (!params.id) {
            console.error(`From ProjectComponent: Project ID (${params.id}) not found!`)
            return;
        }
        loadProject(params.id);
    }, [])
    return (
        <>
            <div className="flex flex-col items-center p-4 max-w-screen-lg mx-auto">
                {/* Title */}
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-center">
                    {project?.title}
                </h1>

                {/* Image */}
                <img
                    src={project?.imageUrl}
                    alt={`Preview for project no.${project?.id}`}
                    className="rounded-lg w-full max-w-xs md:max-w-md lg:max-w-lg object-cover mb-4"
                />

                {/* Description */}
                <p className="text-sm md:text-base lg:text-lg text-center mb-4">
                    {project?.description}
                </p>

                {/* Tech list */}
                <ul className="flex flex-wrap gap-2 justify-center mb-4">
                    {project?.techs?.map((tech, index) => (
                        <li
                            key={index}
                            className="px-3 py-1 bg-gray-200 rounded-full text-xs md:text-sm lg:text-base"
                        >
                            {tech}
                        </li>
                    ))}
                </ul>

                {/* Links */}
                <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center">
                    <a
                        href={project?.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline break-all"
                    >
                        {project?.githubUrl}
                    </a>
                    <span className="text-gray-400 text-xs md:text-sm lg:text-base break-all">
                        {project?.imageUrl}
                    </span>
                </div>
                <NavLink to={"/"} end>Return to Home</NavLink>
            </div>
        </>

    )
}

