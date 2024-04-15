import Image from "next/image"

const Projects = () => {
    return (
        <section id='projects' className="flex flex-col text-center justify-center items-center md:my-40 my-[10rem]">
            <h1 className="text-6xl my-6 text-white">Projects</h1>
            <div className="flex flex-wrap justify-evenly items-center">
                <div className="max-w-sm w-[350px] h-[auto] p-4 rounded-lg overflow-hidden m-2 bg-gradient-to-r from-slate-900 to-blue-950">
                    <Image src="/code.png" alt="" width={320} height={500} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-white">Spotify Music App</div>
                        <div className="flex items-center justify-evenly">
                            <div className="text-white text-sm p-1 m-1 w-[95px] rounded-full bg-blue-900">
                                NextJs
                            </div>
                            <div className="text-white text-sm  p-1 m-1 w-[95px] rounded-full bg-blue-900">
                                Tailwind
                            </div>
                            <div className="text-white text-sm  p-1 m-1 w-[95px] rounded-full bg-blue-900">
                                Stripe
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-between items-center">
                            <div className="w-[125px] mt-4 bg-[#576CBC] p-1 rounded-full">
                                <a href="https://spotify-songs-app.vercel.app/" target="_blank"
                                    className="text-white text-sm cursor-pointer hover:underline">
                                    Demo
                                </a>
                            </div>
                            <div className="w-[125px] mt-4 bg-[#576CBC] p-1 rounded-full">
                                <a href="https://github.com/Vishnu-Murti-Pandey/spotify-clone" target="_blank"
                                    className="text-white text-sm hover:underline cursor-pointer">
                                    Source
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-sm w-[350px] h-[auto] p-4 rounded-lg overflow-hidden m-2 bg-gradient-to-r from-slate-900 to-blue-950">
                    <Image src="/code.png" alt="" width={320} height={500} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-white ">Chat App</div>
                        <div className="flex items-center justify-evenly">
                            <div className="text-white text-sm p-1 m-1 w-[95px] rounded-full bg-blue-900">
                                React
                            </div>
                            <div className="text-white text-sm  p-1 m-1 w-[95px] rounded-full bg-blue-900">
                                ExpressJS
                            </div>
                            <div className="text-white text-sm  p-1 m-1 w-[95px] rounded-full bg-blue-900">
                                Socket.io
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-between items-center">
                            <div className="w-[125px] mt-4 bg-[#576CBC] p-1 rounded-full">
                                <a href="https://chit-chat-puqa.onrender.com/" target="_blank"
                                    className="text-white text-sm cursor-pointer hover:underline">
                                    Demo
                                </a>
                            </div>
                            <div className="w-[125px] mt-4 bg-[#576CBC] p-1 rounded-full">
                                <a href="https://github.com/Vishnu-Murti-Pandey/chit-chat-app" target="_blank"
                                    className="text-white text-sm hover:underline cursor-pointer">
                                    Source
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-sm w-[350px] h-[auto] p-4 rounded-lg overflow-hidden m-2 bg-gradient-to-r from-slate-900 to-blue-950">
                    <Image src="/code.png" alt="" width={320} height={500} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-white">Excel App</div>
                        <div className="flex items-center justify-evenly">
                            <div className="text-white text-sm p-1 m-1 w-[95px] rounded-full bg-blue-900">
                                HTML
                            </div>
                            <div className="text-white text-sm  p-1 m-1 w-[95px] rounded-full bg-blue-900">
                                CSS
                            </div>
                            <div className="text-white text-sm  p-1 m-1 w-[95px] rounded-full bg-blue-900">
                                Javascript
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-between items-center">
                            <div className="w-[125px] mt-4 bg-[#576CBC] p-1 rounded-full">
                                <a href="https://vishnu-murti-pandey.github.io/Excel-Clone/" target="_blank"
                                    className="text-white text-sm cursor-pointer hover:underline">
                                    Demo
                                </a>
                            </div>
                            <div className="w-[125px] mt-4 bg-[#576CBC] p-1 rounded-full">
                                <a href="https://github.com/Vishnu-Murti-Pandey/Excel-Clone" target="_blank"
                                    className="text-white text-sm hover:underline cursor-pointer">
                                    Source
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-sm w-[350px] h-[auto] p-4 rounded-lg overflow-hidden m-2 bg-gradient-to-r from-slate-900 to-blue-950">
                    <Image src="/code.png" alt="" width={320} height={500} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-white">WebCam App</div>
                        <div className="flex items-center justify-evenly">
                            <div className="text-white text-sm p-1 m-1 w-[95px] rounded-full bg-blue-900">
                                HTML
                            </div>
                            <div className="text-white text-sm  p-1 m-1 w-[95px] rounded-full bg-blue-900">
                                Javascript
                            </div>
                            <div className="text-white text-sm  p-1 m-1 w-[95px] rounded-full bg-blue-900">
                                ExpressJS
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-between items-center">
                            <div className="w-[125px] mt-4 bg-[#576CBC] p-1 rounded-full">
                                <a href="https://vishnu-murti-pandey.github.io/Web-Cam/index.html" target="_blank"
                                    className="text-white text-sm cursor-pointer hover:underline">
                                    Demo
                                </a>
                            </div>
                            <div className="w-[125px] mt-4 bg-[#576CBC] p-1 rounded-full">
                                <a href="https://github.com/Vishnu-Murti-Pandey/Web-Cam" target="_blank"
                                    className="text-white text-sm hover:underline cursor-pointer">
                                    Source
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-sm w-[350px] h-[auto] p-4 rounded-lg overflow-hidden m-2 bg-gradient-to-r from-slate-900 to-blue-950">
                    <Image src="/code.png" alt="" width={320} height={500} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-white">Sketch Board App</div>
                        <div className="flex items-center justify-evenly">
                            <div className="text-white text-sm p-1 m-1 w-[95px] rounded-full bg-blue-900">
                                HTML
                            </div>
                            <div className="text-white text-sm  p-1 m-1 w-[95px] rounded-full bg-blue-900">
                                Javascript
                            </div>
                            <div className="text-white text-sm  p-1 m-1 w-[95px] rounded-full bg-blue-900">
                                Socket.io
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-between items-center">
                            <div className="w-[125px] mt-4 bg-[#576CBC] p-1 rounded-full">
                                <a href="https://sketch-board-uuyh.onrender.com/" target="_blank"
                                    className="text-white text-sm cursor-pointer hover:underline">
                                    Demo
                                </a>
                            </div>
                            <div className="w-[125px] mt-4 bg-[#576CBC] p-1 rounded-full">
                                <a href="https://github.com/Vishnu-Murti-Pandey/Sketch-Board" target="_blank"
                                    className="text-white text-sm hover:underline cursor-pointer">
                                    Source
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects