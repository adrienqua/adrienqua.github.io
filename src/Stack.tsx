import React from "react"
import {
    tailwindIcon,
    sassIcon,
    storybookIcon,
    typescriptIcon,
    reactIcon,
    nextJsIcon,
    nodeJsIcon,
    symfonyIcon,
    laravelIcon,
    apiPlatformIcon,
    postgresqlIcon,
    dockerIcon,
    githubActionsIcon,
    vercelIcon,
    awsIcon,
    terraformIcon,
    ansibleIcon,
    openaiIcon,
    claudeIcon,
    n8nIcon,
} from "./icons"
import StackItem from "./StackItem"

interface StackProps {
    stackRef: React.RefObject<HTMLDivElement>
}

export default function Stack({ stackRef }: StackProps) {
    const stack = [
        {
            title: "Front-end",
            technologies: [
                {
                    name: "Typescript",
                    icon: typescriptIcon(),
                },
                {
                    name: "React",
                    icon: reactIcon(),
                },
                {
                    name: "Next.js",
                    icon: nextJsIcon(),
                },
                {
                    name: "Tailwind",
                    icon: tailwindIcon(),
                },
                {
                    name: "SCSS, SASS",
                    icon: sassIcon(),
                },
                {
                    name: "Storybook",
                    icon: storybookIcon(),
                },
            ],
        },
        {
            title: "Back-end",
            technologies: [
                {
                    name: "Node.js",
                    icon: nodeJsIcon(),
                },
                {
                    name: "Symfony",
                    icon: symfonyIcon(),
                },
                {
                    name: "Laravel",
                    icon: laravelIcon(),
                },
                {
                    name: "Api platform",
                    icon: apiPlatformIcon(),
                },
                {
                    name: "PostgreSQL",
                    icon: postgresqlIcon(),
                },
            ],
        },
        {
            title: "Devops",
            technologies: [
                {
                    name: "Docker",
                    icon: dockerIcon(),
                },
                {
                    name: "CI / CD  GitHub Actions",
                    icon: githubActionsIcon(),
                },
                {
                    name: "Terraform",
                    icon: terraformIcon(),
                },
                {
                    name: "Ansible",
                    icon: ansibleIcon(),
                },
                {
                    name: "AWS",
                    icon: awsIcon(),
                },
                {
                    name: "Vercel",
                    icon: vercelIcon(),
                },
            ],
        },
        {
            title: "IA & automatisation",
            technologies: [
                {
                    name: "OpenAI agents",
                    icon: openaiIcon(),
                },
                {
                    name: "Claude AI MCP",
                    icon: claudeIcon(),
                },
                {
                    name: "Workflows n8n",
                    icon: n8nIcon(),
                },
            ],
        },
    ]
    return (
        <div ref={stackRef} id="stack" className="mb-32">
            <h2 className="text-3xl font-bold mb-12 uppercase text-center">Stack</h2>
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 space-x-0 lg:space-x-8 justify-between leading-loose font-semibold">
                {stack.map((stackItem) => (
                    <StackItem item={stackItem} key={stackItem.title} />
                ))}
            </div>
        </div>
    )
}
