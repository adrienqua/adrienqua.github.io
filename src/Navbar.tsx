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
        <div className="navbar bg-background/60 fixed z-20 backdrop-blur-lg border-b border-slate-800/50">
            <div className="navbar-start">
                <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
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
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl" onClick={() => scrollToDiv(aboutRef)}>
                        <img src="/img/photo.png" alt="photo" width={40} />
                    </a>
                </div>
            </div>

            <div className="navbar-end lg:flex hidden">
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
