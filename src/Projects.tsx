import React from "react"
import ProjectItem from "./ProjectItem"
interface ProjectsProps {
    projectsRef: React.RefObject<HTMLDivElement>
}

export default function Projects({ projectsRef }: ProjectsProps) {
    const projects = [
        {
            id: 1,
            title: "Minuseek",
            img: "/img/projects/project_minuseek.png",
            imgAlt: "Minuseek",
            description:
                "Plateforme SaaS multi-tenant d'investigation par comparaison d'empreintes digitales, avec un comparateur d'images interactif (zoom, calques, annotations) construit avec Konva. API NestJS en architecture DDD/hexagonale avec authentification multi-tenant Keycloak.",
            stack: ["React", "TypeScript", "NestJS", "Prisma", "PostgreSQL", "Docker", "Keycloak"],
            hostedLink: "",
            gitLinks: [
                { url: "https://github.com/MT5-fingerprint-project/front-minuseek", label: "Front-end" },
                { url: "https://github.com/MT5-fingerprint-project/back-minuseek", label: "Back-end" },
            ],
        },
        {
            id: 2,
            title: "NextJS Ecommerce",
            img: "/img/projects/project1.png",
            imgAlt: "NextJS Ecommerce",
            description:
                "Une application e-commerce complète créée de zéro avec Next.js. Comprend un back-office et toutes les fonctionnalités dignes des plus grands sites e-commerce.",
            stack: ["Next.js", "React", "Node.js", "Prisma", "Tailwind", "DaisyUI", "Zod", "Stripe"],
            hostedLink: "https://nextjs-ecommerce-rho-steel.vercel.app/",
            gitLinks: [{ url: "https://github.com/adrienqua/nextjs-ecommerce", label: "Code source" }],
        },
        {
            id: 3,
            title: "Readit",
            img: "/img/projects/project2.png",
            imgAlt: "Readit",
            description:
                "Application React / Symfony / Api Platform inspirée par reddit avec son fameux système de votes et de commentaires imbriqués infinis.",
            stack: ["React", "Symfony", "Api Platform", "Bootstrap", "Zod"],
            hostedLink: "http://readit.eu-west-3.elasticbeanstalk.com/#/",
            gitLinks: [{ url: "https://github.com/adrienqua/readit", label: "Code source" }],
        },
    ]

    return (
        <div ref={projectsRef} id="projects" className="mb-32">
            <h2 className="text-3xl font-bold mb-12 uppercase text-center">Sélection de projets</h2>

            <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-4 lg:space-y-0 items-center lg:items-stretch">
                {projects.map((project) => (
                    <ProjectItem project={project} key={project.id} />
                ))}
            </div>
        </div>
    )
}
