import Image from "next/image"
import { projects } from "@/constants/constant"

const Projects = () => {
    return (
        <section id='projects' className="flex flex-col text-center justify-center items-center my-40">
            <h1 className="text-6xl my-6 ">Projects</h1>
            <div className="flex break-words flex-wrap text-center justify-center items-center">
                {
                    Object.keys(projects).map(project => (
                        <Image
                            src={projects[project].image}
                            alt="project"
                            height={300}
                            width={300}
                            key={project}
                            className={"mt-4 md:m-1 cursor-pointer"}>
                        </Image>
                    ))
                }
            </div>
        </section>
    )
}

export default Projects