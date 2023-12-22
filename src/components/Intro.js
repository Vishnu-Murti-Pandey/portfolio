'use client'
import Image from "next/image"
import { userInfo, projects } from "@/constants/constant"
import { Link } from "react-scroll"
import { FaChevronDown } from 'react-icons/fa';

const Intro = () => {
    return (
        <section id='home'
            className="h-screen flex flex-col text-center justify-center items-center md:flex-row md:text-start">
            <div>
                <Image
                    src="/profile.png"
                    alt="profile"
                    height={300}
                    width={300}
                    className="rounded-full shadow-2xl mt-10"
                />
            </div>
            <div className="md:ml-20 sm:ml-12 md:w-1/2">
                <h1 className="text-7xl uppercase hidden md:block">Software Developer</h1>
                <h1 className="text-2xl mt-5 md:text-3xl">
                    Hi, I&#39;m <span className="text-red-600 text-3xl md:text-4xl"> Vishnu Murti Pandey</span>
                </h1>
                <p className="mt-4 mb-4"
                    dangerouslySetInnerHTML={{ __html: userInfo.heading }}
                />
                <div className="flex items-center">
                    <Link
                        to="projects"
                        key={"projects"}
                        className='bg-teal-600 rounded font-semibold text-neutral-100 flex w-28 h-10 m-auto items-center justify-center md:m-0 hover:bg-teal-500 cursor-pointer'
                        spy={true}
                        smooth={true}
                    >
                        Projects
                    </Link>

                    <a href='#'
                        className='bg-teal-600 w-28 flex justify-center items-center rounded text-neutral-100 p-2 mx-4 font-semibold hover:bg-teal-500 cursor-pointer'>
                        Resume
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Intro