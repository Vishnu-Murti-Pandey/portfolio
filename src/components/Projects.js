import Image from "next/image"
import { projects } from "@/constants/constant"

const Projects = () => {
    return (
        <section id='projects' className="flex flex-col text-center justify-center items-center md:my-40 my-80">
            <h1 className="text-6xl my-6 text-blue-600">Projects</h1>
            <div className="flex flex-wrap justify-evenly items-center">
                <div className="max-w-sm rounded overflow-hidden shadow-lg m-2">
                    <Image src="/excel.png" alt="" width={300} height={500} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-red-400">Excel Clone</div>
                        <a href="https://vishnu-murti-pandey.github.io/Excel-Clone/" target="_blank"
                            className="text-teal-600 text-base font-semibold hover:text-red-400 cursor-pointer ">
                            Link
                        </a>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg m-2">
                    <Image src="/webcam.png" alt="" width={320} height={500} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-red-400">WebCam App</div>
                        <a href="https://vishnu-murti-pandey.github.io/Web-Cam/index.html" target="_blank"
                            className="text-teal-600 text-base font-semibold hover:text-red-400 cursor-pointer ">
                            Link
                        </a>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg m-2">
                    <Image src="/sketch.png" alt="" width={320} height={500} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-red-400">Sketch Board App</div>
                        <a href="https://github.com/Vishnu-Murti-Pandey/Sketch-Board" target="_blank"
                            className="text-teal-600 text-base font-semibold hover:text-red-400 cursor-pointer ">
                            Link
                        </a>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg m-2">
                    <Image src="/movieapp.png" alt="" width={320} height={500} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-red-400">Movie App</div>
                        <a href="https://next-movie-app-smoky.vercel.app/" target="_blank"
                            className="text-teal-600 text-base font-semibold hover:text-red-400 cursor-pointer ">
                            Link
                        </a>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Projects