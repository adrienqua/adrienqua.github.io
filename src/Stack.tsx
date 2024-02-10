import React from "react"
import {
    tailwindIcon,
    bootstrapIcon,
    sassIcon,
    typescriptIcon,
    reactIcon,
    nextJsIcon,
    nodeJsIcon,
    symfonyIcon,
    apiPlatformIcon,
    mySQLIcon,
    gitIcon,
    vercelIcon,
    postmanIcon,
} from "./icons"
import StackItem from "./StackItem"

interface StackProps {
    stackRef: React.RefObject<HTMLDivElement>
}

export default function Stack({ stackRef }: StackProps) {
    const stack = [
        {
            title: "Design",
            technologies: [
                {
                    name: "Tailwind",
                    icon: tailwindIcon(),
                },
                {
                    name: "Bootstrap",
                    icon: bootstrapIcon(),
                },
                {
                    name: "SCSS, SASS",
                    icon: sassIcon(),
                },
            ],
        },
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
                    name: "Api platform",
                    icon: apiPlatformIcon(),
                },
                {
                    name: "MySQL",
                    icon: mySQLIcon(),
                },
            ],
        },
        {
            title: "Autre",
            technologies: [
                {
                    name: "Github",
                    icon: gitIcon(),
                },
                {
                    name: "Vercel",
                    icon: vercelIcon(),
                },
                {
                    name: "Postman",
                    icon: postmanIcon(),
                },
            ],
        },
    ]
    return (
        <div ref={stackRef} id="stack" className="mb-24">
            <h2 className="text-3xl font-bold mb-12 uppercase text-center">Stack</h2>
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 space-x-0 lg:space-x-4 justify-between leading-loose font-semibold">
                {stack.map((stackItem) => (
                    <StackItem item={stackItem} key={stackItem.title} />
                ))}
            </div>
        </div>
    )
}
