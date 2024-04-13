'use client'
import Image from "next/image"
import { Link } from "react-scroll"

const Intro = () => {
    return (
        <section id='home'
            className="h-screen flex flex-col text-center justify-center items-center md:flex-row md:text-start">
            <div>
                <Image
                    src="/Me.png"
                    alt="profile"
                    height={300}
                    width={300}
                    className="rounded-full shadow-2xl md:mt-[1rem] mt-[15rem]"
                />
            </div>
            <div className="md:ml-20 sm:ml-12 md:w-1/2">
                <h1 className="text-7xl uppercase hidden md:block text-white font-bold ">FrontEnd Engineer</h1>
                <h1 className="text-2xl mt-5 md:text-3xl text-white font-semibold">
                    Hey, I&#39;m <span className="text-red-600 text-3xl md:text-4xl font-semibold"> Vishnu Murti Pandey</span>
                </h1>
                <p className="mt-4 mb-4 text-white font-semibold text-lg">
                    {`I'm a Frontend Engineer based in India, with a passion for creating elegant and efficient solutions that seamlessly integrate user-friendly experiences. 
                    I've built websites, and corporate software, leveraging cutting-edge technologies to drive innovation and enhance business processes.`}
                </p>
                <div className="flex flex-col md:flex-row items-center ">
                    <Link
                        to="projects"
                        key={"projects"}
                        className='bg-[#576CBC] text-lg rounded font-semibold text-neutral-100 m-2 flex w-36 h-12 items-center justify-center md:m-0 hover:underline cursor-pointer'
                        spy={true}
                        smooth={true}
                    >
                        Projects
                    </Link>
                    <a href='#'
                        className='bg-[#576CBC] text-lg w-36 h-12 flex justify-center items-center m-2 rounded text-neutral-100 p-2 mx-4 font-semibold hover:underline cursor-pointer'>
                        My Resume
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Intro