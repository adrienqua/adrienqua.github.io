interface ContactItemProps {
    contact: {
        name: string
        icon: JSX.Element
        link: string
    }
}

export default function ContactItem({ contact }: ContactItemProps) {
    return (
        <div className="flex gap-2 ">
            <a
                href={contact.link}
                target="_blank"
                className="btn btn-neutral bg-opacity-40 flex gap-2 rounded-3xl duration-300 text-gray-400 hover:bg-indigo-800/90 hover:border-indigo-500 hover:text-white"
            >
                {contact.icon}
                {contact.name}
            </a>
        </div>
    )
}
