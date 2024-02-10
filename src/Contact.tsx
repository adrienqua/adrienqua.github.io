import React from "react"

interface ContactProps {
    contactRef: React.RefObject<HTMLDivElement>
}

export default function Contact({ contactRef }: ContactProps) {
    return (
        <div ref={contactRef} id="contact" className="text-center mb-20">
            <h2 className="text-3xl font-bold mb-12 uppercase text-center">Contact</h2>
            <div
                className="flex flex-col text-center lg:justify-evenly lg:items-between items-center space-y-4"
                data-aos="fade-up"
            >
                <div className="flex gap-2 ">
                    <a
                        href="https://www.linkedin.com/in/adrien-quacchia-207716133/"
                        className="btn btn-neutral bg-opacity-40 flex gap-2 rounded-3xl duration-300"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="currentColor"
                            fill="currentColor"
                            height="1.25rem"
                            width="1.25rem"
                            viewBox="0 0 24 24"
                        >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                        LinkedIn
                    </a>
                </div>
                <div className="flex gap">
                    <a
                        href="mailto:adrien.quacchia@gmail.com"
                        className="btn btn-neutral bg-opacity-40 flex gap-2 rounded-3xl duration-300"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            height="1.25rem"
                            width="1.25rem"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                            />
                        </svg>{" "}
                        adrien.quacchia@gmail.com
                    </a>
                </div>
                <div className="flex gap-2">
                    <a
                        href="https://www.linkedin.com/in/adrien-quacchia-207716133/"
                        className="btn btn-neutral bg-opacity-40 flex gap-2 rounded-3xl duration-300"
                    >
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            height="1.25rem"
                            width="1.25rem"
                            viewBox="0 0 48 48"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>github</title>
                            <g id="Layer_2" data-name="Layer 2">
                                <g id="invisible_box" data-name="invisible box">
                                    <rect width="48" height="48" fill="none" />
                                    <rect width="48" height="48" fill="none" />
                                </g>
                                <g id="icons_Q2" data-name="icons Q2">
                                    <path d="M24,1.9a21.6,21.6,0,0,0-6.8,42.2c1,.2,1.8-.9,1.8-1.8V39.4c-6,1.3-7.9-2.9-7.9-2.9a6.5,6.5,0,0,0-2.2-3.2C6.9,31.9,9,32,9,32a4.3,4.3,0,0,1,3.3,2c1.7,2.9,5.5,2.6,6.7,2.1a5.4,5.4,0,0,1,.5-2.9C12.7,32,9,28,9,22.6A10.7,10.7,0,0,1,11.9,15a6.2,6.2,0,0,1,.3-6.4,8.9,8.9,0,0,1,6.4,2.9,15.1,15.1,0,0,1,5.4-.8,17.1,17.1,0,0,1,5.4.7,9,9,0,0,1,6.4-2.8,6.5,6.5,0,0,1,.4,6.4A10.7,10.7,0,0,1,39,22.6C39,28,35.3,32,28.5,33.2a5.4,5.4,0,0,1,.5,2.9v6.2a1.8,1.8,0,0,0,1.9,1.8A21.7,21.7,0,0,0,24,1.9Z" />
                                </g>
                            </g>
                        </svg>
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    )
}
