import React from "react"

interface NavbarProps {
    aboutRef: React.RefObject<HTMLDivElement>
    stackRef: React.RefObject<HTMLDivElement>
    projectsRef: React.RefObject<HTMLDivElement>
    contactRef: React.RefObject<HTMLDivElement>
}

export default function Navbar({ aboutRef, stackRef, projectsRef, contactRef }: NavbarProps) {
    const scrollToDiv = (div: React.RefObject<HTMLDivElement>) => {
        if (div.current) {
            window.scrollTo({
                behavior: "smooth",
                top: div.current?.getBoundingClientRect().top + window.scrollY - 90,
            })
        }
    }

    return (
        <div className="navbar bg-slate-950/60 fixed z-20 backdrop-blur-lg border-b border-slate-800/50">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl" onClick={() => scrollToDiv(aboutRef)}>
                    <img src="/img/photo.png" alt="photo" width={40} />
                </a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <a onClick={() => scrollToDiv(aboutRef)}>A propos</a>
                    </li>
                    <li>
                        <a onClick={() => scrollToDiv(stackRef)}>Stack</a>
                    </li>
                    <li>
                        <a onClick={() => scrollToDiv(projectsRef)}>Projets</a>
                    </li>
                    <li>
                        <a onClick={() => scrollToDiv(contactRef)}>Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
