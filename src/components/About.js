import Image from "next/image"
import { userInfo } from "@/constants/constant"

const About = () => {
    return (
        <section id='about'
            className="h-screen flex flex-col text-center justify-center items-center md:flex-row md:text-start my-56 md:my-0">
            <div className="m-4 md:ml-20 sm:ml-12 md:w-1/2">
                <h1 className="text-6xl my-6">About</h1>
                <h2 className="text-3xl my-4">
                    Get to know me!
                </h2>
                <p className="[&>p]:mt-5"
                    dangerouslySetInnerHTML={{ __html: userInfo.about }}
                />
            </div>
            <div className="flex flex-col justify-center items-center text-center">
                <Image
                    src="/profile.png"
                    alt="profile"
                    height={300}
                    width={300}
                    className="m-auto"
                />
                <div className="break-words w-3/4 mt-3">
                    {
                        userInfo.skills.map(skill => (
                            // <div key={skill} className={"bg-gray-200 m-1 p-2 rounded-md inline-block text-sm"}>
                            //     <Image src='/react_logo.svg' alt="" height={30} width={30} />
                            //     <div>{skill}</div>
                            // </div>

                            <span key={skill} className={"bg-gray-200 m-1 p-2 rounded-md inline-block text-sm text-red-600 font-semibold"}>{skill}</span>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default About