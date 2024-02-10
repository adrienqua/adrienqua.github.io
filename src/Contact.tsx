import React from "react"
import ContactItem from "./ContactItem"
import { gitIcon, linkedInIcon, mailIcon } from "./icons"

interface ContactProps {
    contactRef: React.RefObject<HTMLDivElement>
}

export default function Contact({ contactRef }: ContactProps) {
    const contacts = [
        {
            name: "LinkedIn",
            icon: linkedInIcon(),
            link: "https://www.linkedin.com/in/adrien-quacchia-207716133/",
        },
        {
            name: "adrien.quacchia@gmail.com",
            icon: mailIcon(),
            link: "mailto:adrien.quacchia@gmail.com",
        },
        {
            name: "GitHub",
            icon: gitIcon("1.25rem"),
            link: "https://github.com/adrienqua",
        },
    ]
    return (
        <div ref={contactRef} id="contact" className="text-center mb-20">
            <h2 className="text-3xl font-bold mb-12 uppercase text-center">Contact</h2>
            <div
                className="flex flex-col text-center lg:justify-evenly lg:items-between items-center space-y-4"
                data-aos="fade-up"
            >
                {contacts.map((contact) => (
                    <ContactItem contact={contact} />
                ))}
            </div>
        </div>
    )
}
