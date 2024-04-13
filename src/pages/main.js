
import About from "@/components/About"
import Intro from "@/components/Intro"
import Projects from "@/components/Projects"

const Main = () => {
    return (
        <div className="md:mx-4 ">
            <Intro />
            <About />
            <Projects />
        </div>
    )
}

export default Main