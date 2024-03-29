import React from "react"
import { TypeAnimation } from "react-type-animation"

interface AboutProps {
    aboutRef: React.RefObject<HTMLDivElement>
}

export default function About({ aboutRef }: AboutProps) {
    const datas = {
        name: "Adrien Quacchia",
        description:
            "Passionné par les nouvelles technologies, je suis spécialisé dans le développement front-end, notamment sur React. Je maîtrise également le back-end avec Symfony, API Platform et NodeJS. Je recherche un poste de développeur front-end ou fullstack, de préférence sur ces technologies, mais je suis également ouvert à d’autres possibilités.",
        img: "/img/photo.png",
        imgAlt: "photo",
    }
    return (
        <div
            ref={aboutRef}
            id="about"
            className="flex flex-col lg:flex-row items-center space-y-12 lg:space-y-0 dark-border  rounded-2xl mt-5 mx-auto lg:space-x-20   px-16 py-20 relative backdrop-blur-3xl rounded-3xl mb-24 items-middle w-full"
        >
            <div className="skrink-0 basis-1/4 text-center" data-aos="fade-right" data-aos-delay="50">
                <img src={datas.img} alt={datas.imgAlt} width={250} className="opacity-95" />
            </div>
            <div className="basis-3/4">
                <h1
                    className="text-primary my-3 text-5xl inline-block uppercase font-bold bg-gradient-to-r from-indigo-500  to-purple-600 from-20%  text-transparent bg-clip-text"
                    data-aos="fade-up"
                >
                    {datas.name}
                </h1>
                <h2 className="text-3xl font-semibold mb-6 uppercase" data-aos="fade-up" data-aos-delay="50">
                    <span data-aos="fade-up" data-aos-delay="50">
                        <TypeAnimation
                            sequence={[
                                "Développeur web Front-End",
                                4000,
                                "Développeur web Fullstack",
                                4500,
                                "Développeur web Front-End",
                                3500,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </span>
                </h2>
                <p className="text-xl leading-relaxed text-gray-400" data-aos="fade-up" data-aos-delay="100">
                    {datas.description}
                </p>
            </div>
        </div>
    )
}
