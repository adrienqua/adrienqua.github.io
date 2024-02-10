import React from "react"

interface Technologies {
    name: string
    icon: JSX.Element
}

interface Item {
    title: string
    technologies: Technologies[]
}

interface stackProps {
    item: Item
}

export default function StackItem({ item }: stackProps) {
    return (
        <div className="dark-border p-6 rounded-3xl lg:w-1/4" data-aos="fade-right">
            <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
            <ul>
                {item.technologies.map((technology) => (
                    <li className="flex items-center gap-2" key={technology.name}>
                        {technology.icon}
                        {technology.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}
