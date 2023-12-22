'use client'
import { useState } from 'react';
import { BiMenu } from "react-icons/bi";
import { Link } from 'react-scroll';

const Header = () => {

    const [navItem, setNavItem] = useState(false);

    return (
        <header className="p-6 justify-between fixed top-0 z-10 bg-red-300 w-full md:flex ">
            <div className='flex justify-between'>
                <h2 className="text-2xl font-bold">Vishnu Murti Pandey</h2>
                <BiMenu
                    size={30}
                    className='md:hidden'
                    onClick={() => setNavItem((prev) => !prev)}
                />
            </div>
            <div className={`mr-8 md:space-x-6 mt-3 md:mt-0 md:block ${navItem ? 'block' : 'hidden'}`}>
                <Link
                    to="home"
                    key={"home"}
                    className='block md:inline-block cursor-pointer font-semibold p-1 hover:bg-red-600 hover:text-white'
                    spy={true}
                    smooth={true}
                >
                    Home
                </Link>
                <Link
                    to="about"
                    key={"about"}
                    className='block md:inline-block cursor-pointer font-semibold p-1 hover:bg-red-600 hover:text-white'
                    spy={true}
                    smooth={true}
                >
                    About
                </Link>
                <Link
                    to="projects"
                    key={"projects"}
                    className='block md:inline-block cursor-pointer font-semibold p-1 hover:bg-red-600 hover:text-white'
                    spy={true}
                    smooth={true}
                >
                    Projects
                </Link>
            </div>
        </header>
    )
}

export default Header