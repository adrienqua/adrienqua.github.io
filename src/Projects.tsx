import React from "react"
interface ProjectsProps {
    projectsRef: React.RefObject<HTMLDivElement>
}

export default function Projects({ projectsRef }: ProjectsProps) {
    return (
        <div ref={projectsRef} id="projects" className="mb-24">
            <h2 className="text-3xl font-bold mb-12 uppercase text-center">Sélection de projets</h2>

            <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 items-center lg:items-stretch">
                <a
                    href="https://nextjs-ecommerce-rho-steel.vercel.app/"
                    target="blank"
                    className="card w-full bg-opacity-5 dark-border lg:w-96 bg-base-100 shadow-xl group text-white hover:text-white"
                    data-aos="fade-up"
                >
                    <figure>
                        <img
                            className="group-hover:scale-110 transition duration-300"
                            src="/img/projects/project1.png"
                            alt="NextJs Ecommerce"
                        />
                    </figure>
                    <div className="card-body">
                        <div className="flex flex-row">
                            <h2 className="card-title w-full bg-gradient-to-r from-indigo-500  via-purple-600 from-20% via-60%  text-transparent bg-clip-text">
                                NextJS Ecommerce
                            </h2>
                            <div className="flex space-x-4">
                                <a href="https://nextjs-ecommerce-rho-steel.vercel.app/">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                                        />
                                    </svg>
                                </a>
                                <a href="https://github.com/adrienqua/nextjs-ecommerce">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        role="img"
                                        viewBox="0 0 24 24"
                                        className="w-6 h-6"
                                    >
                                        <title></title>
                                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <p>Une application e-commerce complète créée de zéro avec Next.js</p>
                        <div className="card-actions justify-end mt-3">
                            <div className="badge badge-outline">Next.js</div>
                            <div className="badge badge-outline">React</div>
                            <div className="badge badge-outline">Node.js</div>
                            <div className="badge badge-outline">Prisma</div>
                            <div className="badge badge-outline">Tailwind</div>
                            <div className="badge badge-outline">DaisyUI</div>
                            <div className="badge badge-outline">Zod</div>
                            <div className="badge badge-outline">Stripe</div>
                        </div>
                    </div>
                </a>

                <a
                    href="http://readit.eu-west-3.elasticbeanstalk.com/#/"
                    target="blank"
                    className="card w-full bg-opacity-5 dark-border  lg:w-96 bg-base-100 shadow-xl group text-white hover:text-white"
                    data-aos="fade-up"
                    data-aos-delay="50"
                >
                    <figure>
                        <img
                            className="group-hover:scale-110 transition duration-300"
                            src="/img/projects/project2.png"
                            alt="Readit"
                        />
                    </figure>
                    <div className="card-body">
                        <div className="flex flex-row">
                            <h2 className="card-title w-full bg-gradient-to-r from-indigo-500  via-purple-600 from-20% via-60%  text-transparent bg-clip-text">
                                Readit
                            </h2>
                            <div className="flex space-x-4">
                                <a href="http://readit.eu-west-3.elasticbeanstalk.com/#/">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                                        />
                                    </svg>
                                </a>
                                <a href="https://github.com/adrienqua/readit">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        role="img"
                                        viewBox="0 0 24 24"
                                        className="w-6 h-6"
                                    >
                                        <title></title>
                                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <p>
                            Application inspirée par reddit avec son fameux système de votes et de commentaires
                            imbriqués infinis.
                        </p>
                        <div className="card-actions justify-end mt-3">
                            <div className="badge badge-outline">React</div>
                            <div className="badge badge-outline">Symfony</div>
                            <div className="badge badge-outline">Api Platform</div>
                            <div className="badge badge-outline">Bootstrap</div>
                            <div className="badge badge-outline">Zod</div>
                        </div>
                    </div>
                </a>

                <a
                    href="https://github.com/adrienqua/la-boutique-francaise"
                    target="blank"
                    className="card w-full bg-opacity-5 dark-border  lg:w-96 bg-base-100 shadow-xl group text-white hover:text-white"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <figure>
                        <img
                            className="group-hover:scale-110 transition duration-300"
                            src="/img/projects/project3.png"
                            alt="Readit"
                        />
                    </figure>
                    <div className="card-body">
                        <div className="flex flex-row">
                            <h2 className="card-title w-full bg-gradient-to-r from-indigo-500  via-purple-600 from-20% via-60%  text-transparent bg-clip-text">
                                La boutique française
                            </h2>
                            <div className="flex space-x-4">
                                <a href="https://github.com/adrienqua/la-boutique-francaise">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        role="img"
                                        viewBox="0 0 24 24"
                                        className="w-6 h-6"
                                    >
                                        <title></title>
                                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <p>Une application e-commerce créée avec Symfony / Twig </p>
                        <div className="card-actions justify-end mt-3">
                            <div className="badge badge-outline">Symfony</div>
                            <div className="badge badge-outline">Twig</div>
                            <div className="badge badge-outline">Bootstrap</div>
                            <div className="badge badge-outline">Zod</div>
                            <div className="badge badge-outline">Stripe</div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}
