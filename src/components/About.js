import Image from "next/image"

const About = () => {
    return (
        <section id='about'
            className="h-screen flex flex-col text-center justify-center items-center md:flex-row md:text-start my-[68rem] md:my-0">
            <div className="m-4 md:ml-20 sm:ml-12 md:w-1/2 rounded-md bg-gradient-to-r from-slate-900 to-blue-950 p-4">
                <h1 className="text-6xl my-6 font-bold text-white">About</h1>
                <div className="flex mt-8 items-center bg-gradient-to-r from-blue-900 to-slate-900 rounded-2xl md:min-h-[140px] w-[100%] h-[auto]">
                    <Image
                        src="/cursor.png"
                        alt="cursor"
                        height={70}
                        width={70}
                        className="m-4"
                    />
                    <div className="flex flex-col p-6 md:p-1 item-center justify-center">
                        <p className="text-lg font-semibold text-white">
                            I’m a front-end developer with experience
                            in building responsive and optimized sites.
                        </p>
                    </div>
                </div>
                <div className="flex mt-8 items-center bg-gradient-to-r from-blue-900 to-slate-900 rounded-2xl w-[100%] md:min-h-[140px] h-[auto]">
                    <Image
                        src="/exp.png"
                        alt="exp"
                        height={70}
                        width={70}
                        className="m-4"
                    />
                    <div className="flex flex-col item-center p-6 md:p-1 justify-center">
                        <p className="text-lg font-semibold text-white">
                            Proficient in <span className="text-blue-300">HTML, CSS, JavaScript, React, Redux, NextJS, NodeJS, ExpressJS. </span>
                            My journey has been defined by a passion for coding, innovation, and continuous learning.
                        </p>
                    </div>
                </div>
                <p className="text-white text-2xl mt-8 mb-2">Experience</p>
                <div className="flex items-center bg-gradient-to-r from-blue-900 to-slate-900 rounded-2xl w-[100%] md:min-h-[140px] h-[auto]">
                    <Image
                        src="/magic.png"
                        alt="magic"
                        height={70}
                        width={70}
                        className="m-4"
                    />
                    <div className="flex flex-col item-center p-6 md:p-1 justify-center">
                        <p className="text-lg font-semibold text-white">Software Engineer, MagicEdtech</p>
                        <p className="text-sm text-gray-300">June, 2022 - Present</p>
                    </div>
                </div>

            </div>
            <div className="flex flex-wrap justify-center items-center break-words w-3/4">
                <div className="w-[120px]  h-[120px] p-6 m-4 flex items-center justify-center bg-[#19376D] rounded-full">
                    <Image
                        src="/html.png"
                        alt="html"
                        height={75}
                        width={75}
                    />
                </div>
                <div className="w-[120px] h-[120px] p-6 m-4 flex items-center justify-center bg-[#19376D] rounded-full">
                    <Image
                        src="/css.png"
                        alt="css"
                        height={75}
                        width={75}
                    />
                </div>
                <div className="w-[120px] h-[120px] p-6 m-4 flex items-center justify-center bg-[#19376D] rounded-full">
                    <Image
                        src="/javascript.png"
                        alt="javascript"
                        height={75}
                        width={75}
                    />
                </div>
                <div className="w-[120px] h-[120px] p-6 m-4 flex items-center justify-center bg-[#19376D] rounded-full">
                    <Image
                        src="/react.png"
                        alt="react"
                        height={75}
                        width={75}
                    />
                </div>
                <div className="w-[120px] h-[120px] p-6 m-4 flex items-center justify-center bg-[#19376D] rounded-full">
                    <Image
                        src="/nextjs.png"
                        alt="nextjs"
                        height={75}
                        width={75}
                    />
                </div>
                <div className="w-[120px] h-[120px] p-6 m-4 flex items-center justify-center bg-[#19376D] rounded-full">
                    <Image
                        src="/redux.png"
                        alt="redux"
                        height={75}
                        width={75}
                    />
                </div>
                <div className="w-[120px] h-[120px] p-6 m-4 flex items-center justify-center bg-[#19376D] rounded-full">
                    <Image
                        src="/tailwindCSS.png"
                        alt="tailwindCSS"
                        height={75}
                        width={75}
                    />
                </div>
                <div className="w-[120px] h-[120px] p-6 m-4 flex items-center justify-center bg-[#19376D] rounded-full">
                    <Image
                        src="/node.png"
                        alt="node"
                        height={75}
                        width={75}
                    />
                </div>
                <div className="w-[120px] h-[120px] p-6 m-4 flex items-center justify-center bg-[#19376D] rounded-full">
                    <Image
                        src="/express.png"
                        alt="express"
                        height={75}
                        width={75}
                    />
                </div>
                <div className="w-[120px] h-[120px] p-6 m-4 flex items-center justify-center bg-[#19376D] rounded-full">
                    <Image
                        src="/mongo.png"
                        alt="mongo"
                        height={75}
                        width={75}
                    />
                </div>
            </div>
        </section>
    )
}

export default About