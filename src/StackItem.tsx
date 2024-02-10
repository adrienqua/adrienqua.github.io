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
            <h3 className="text-primary text-2xl font-semibold bg-gradient-to-r from-indigo-500  via-purple-600 from-20% via-60% text-transparent bg-clip-text mb-2 ">
                {item.title}
            </h3>
            <ul>
                {item.technologies.map((technology) => (
                    <li className="flex items-center gap-2 text-gray-400" key={technology.name}>
                        {technology.icon}
                        {technology.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}
