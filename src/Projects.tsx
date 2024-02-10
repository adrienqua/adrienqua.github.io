import React from "react"
import ProjectItem from "./ProjectItem"
interface ProjectsProps {
    projectsRef: React.RefObject<HTMLDivElement>
}

export default function Projects({ projectsRef }: ProjectsProps) {
    const projects = [
        {
            id: 1,
            title: "NextJS Ecommerce",
            img: "/img/projects/project1.png",
            imgAlt: "NextJS Ecommerce",
            description:
                "Une application e-commerce complète créée de zéro avec Next.js. Comprend un back-office et toutes les fonctionnalités digne des plus grands sites e-commerce.",
            stack: ["Next.js", "React", "Node.js", "Prisma", "Tailwind", "DaisyUI", "Zod", "Stripe"],
            hostedLink: "https://nextjs-ecommerce-rho-steel.vercel.app/",
            gitLink: "https://github.com/adrienqua/nextjs-ecommerce",
        },
        {
            id: 2,
            title: "Readit",
            img: "/img/projects/project2.png",
            imgAlt: "Readit",
            description:
                "Application React / Symfony / Api Platform inspirée par reddit avec son fameux système de votes et de commentaires imbriqués infinis.",
            stack: ["React", "Symfony", "Api Platform", "Bootstrap", "Zod"],
            hostedLink: "http://readit.eu-west-3.elasticbeanstalk.com/#/",
            gitLink: "https://github.com/adrienqua/readit",
        },
        {
            id: 3,
            title: "La boutique française",
            img: "/img/projects/project3.png",
            imgAlt: "La boutique française",
            description: "Une application e-commerce créée avec Symfony / Twig.",
            stack: ["Symfony", "Twig", "Bootstrap", "Zod", "Stripe"],
            hostedLink: "",
            gitLink: "https://github.com/adrienqua/la-boutique-francaise",
        },
    ]

    return (
        <div ref={projectsRef} id="projects" className="mb-24">
            <h2 className="text-3xl font-bold mb-12 uppercase text-center">Sélection de projets</h2>

            <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 items-center lg:items-stretch">
                {projects.map((project) => (
                    <ProjectItem project={project} key={project.id} />
                ))}
            </div>
        </div>
    )
}
