import React from "react"
import { TypeAnimation } from "react-type-animation"
import { gitIcon, linkedInIcon, mailIcon } from "./icons"
import { scrollToDiv } from "./utils/scroll"

interface AboutProps {
    aboutRef: React.RefObject<HTMLDivElement>
    stackRef: React.RefObject<HTMLDivElement>
}

export default function About({ aboutRef, stackRef }: AboutProps) {
    const datas = {
        name: "Adrien <br> Quacchia",
        description:
            "Actuellement Software Engineer Fullstack chez Meilleursbiens, je conçois et fais évoluer des applications web de bout en bout (React/Next.js, Node.js, Laravel) tout en développant des solutions d'automatisation et des agents IA (OpenAI, Claude, n8n) pour fluidifier les processus métier. Je m'intéresse également au déploiement d'infrastructures (Docker, CI/CD, Terraform, AWS). Je recherche à allier robustesse technique et gains de productivité grâce à l'IA et à l'automatisation.",
        img: "/img/photo.png",
        imgAlt: "photo",
    }
    return (
        <div
            ref={aboutRef}
            id="about"
            className="min-h-screen flex items-center justify-center  space-y-12 lg:space-y-0 dark-border rounded-2xl mx-auto lg:space-x-20 relative backdrop-blur-3xl rounded-3xl mb-32 w-full border-none shadow-none relative z-10"
        >
            <div className=" min-h-screen container flex flex-col justify-center items-center">
                <div className="flex flex-col lg:flex-row items-center space-y-16 lg:space-y-0 lg:space-x-6">
                    <div className="skrink-0 basis-1/4 text-center" data-aos="fade-right" data-aos-delay="150">
                        <img
                            src={datas.img}
                            alt={datas.imgAlt}
                            width={250}
                            className="brightness-[95%] contrast-[105%]"
                        />
                    </div>
                    <div className="basis-3/4 text-center lg:text-left">
                        <h1
                            className="text-primary text-5xl mb-3 lg:mb-5 lg:text-7xl inline-block uppercase font-bold bg-gradient-to-r from-indigo-500  to-purple-600 from-20%  text-transparent bg-clip-text"
                            data-aos="fade-up"
                            data-aos-delay="150"
                            dangerouslySetInnerHTML={{ __html: datas.name }}
                        ></h1>
                        <h2
                            className="text-3xl mb-6 lg:text-4xl lg:mb-8 font-semibold uppercase min-h-[72px] lg:min-h-0 px-3 lg:px-0"
                            data-aos="fade-up"
                            data-aos-delay="250"
                        >
                            <span>
                                <TypeAnimation
                                    sequence={[
                                        "Software Engineer Fullstack",
                                        3500,
                                        "Automatisation & IA",
                                        4500,
                                        "Software Engineer Fullstack",
                                        4000,
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    repeat={Infinity}
                                />
                            </span>
                        </h2>
                        <p
                            className="text-xl leading-loose lg:leading-10 text-gray-400 lg:w-3/4 mb-6"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            {datas.description}
                        </p>
                        <div className="contact mb-12" data-aos="fade-up" data-aos-delay="350">
                            <ul className="flex space-x-3 z-20 relative z-50 justify-center lg:justify-start">
                                <li className="hover:-translate-y-0.5 duration-200">
                                    <a href="https://www.linkedin.com/in/adrien-quacchia-207716133/" target="_blank">
                                        {linkedInIcon("1.5rem")}
                                    </a>
                                </li>
                                <li className="hover:-translate-y-0.5 duration-200">
                                    <a href="mailto:adrien.quacchia@gmail.com" target="_blank">
                                        {mailIcon("1.5rem")}
                                    </a>
                                </li>
                                <li className="hover:-translate-y-0.5 duration-200">
                                    <a href="https://github.com/adrienqua" target="_blank">
                                        {gitIcon("1.5rem")}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div
                    className="flex scroll-arrow mb-20"
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-duration="1500"
                >
                    <div
                        onClick={() => scrollToDiv(stackRef)}
                        className="bg-transparent duration-300 ease-in-out border-2 border-gray-400 rounded-full h-[90px] w-[50px] cursor-pointer text-center  bottom-[2rem] mx-auto  text-center flex items-start justify-center text-gray-300 hover:bg-indigo-800/90 hover:border-indigo-500 hover:text-indigo-500"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-8 h-8  mt-2 arrow"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}
