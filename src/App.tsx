import { useEffect, useRef } from "react"
import "./App.sass"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Stack from "./Stack"
import Projects from "./Projects"
import About from "./About"
import Contact from "./Contact"

import AOS from "aos"
import "aos/dist/aos.css"

function App() {
    const aboutRef = useRef<HTMLDivElement>(null)
    const stackRef = useRef<HTMLDivElement>(null)
    const projectsRef = useRef<HTMLDivElement>(null)
    const contactRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        AOS.init({
            duration: 300,
            easing: "ease-in-out",
            once: false,
        })
    }, [])
    return (
        <>
            <Navbar aboutRef={aboutRef} stackRef={stackRef} projectsRef={projectsRef} contactRef={contactRef} />
            <div className="container mx-auto flex flex-col justify-center relative pt-20">
                <div className="absolute top-24 right-24 w-48 h-48 rounded-full bg-gradient-to-b  from-indigo-700 via-purple-600 via-50% to-red-700 opacity-25 blur-3xl scale-y-150 rotate-45"></div>
                <div className="absolute top-[38rem] left-72 w-60 h-60 rounded-full bg-gradient-to-b  from-indigo-700 via-purple-600 via-30% to-red-600 blur-3xl opacity-20 rotate-45"></div>
                <div className="absolute bottom-20 left-32 w-80 h-80 rounded-full bg-gradient-to-b  from-indigo-700 via-purple-600 via-30% to-red-600 blur-3xl opacity-20 scale-y-200 scale-x-150 rotate-45"></div>

                <About aboutRef={aboutRef} />

                <Stack stackRef={stackRef} />

                <Projects projectsRef={projectsRef} />

                <Contact contactRef={contactRef} />
            </div>
            <Footer />
        </>
    )
}

export default App
