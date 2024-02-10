import React from "react"

interface Contact {
    name: string
    icon: JSX.Element
    link: string
}

interface ContactItemProps {
    contact: Contact
}

export default function ContactItem({ contact }: ContactItemProps) {
    return (
        <div className="flex gap-2 ">
            <a
                href={contact.link}
                target="_blank"
                className="btn btn-neutral bg-opacity-40 flex gap-2 rounded-3xl duration-300"
            >
                {contact.icon}
                {contact.name}
            </a>
        </div>
    )
}
