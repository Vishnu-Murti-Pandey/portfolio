import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className='w-full bg-[#19376D] flex justify-between items-center text-white'>
            <div className='p-4 text-2xl mx-8'>
                Made with <span className='text-white font-bold '>Next JS</span> by - <span className='text-red-600 font-bold'> © Vishnu Murti Pandey</span>
            </div>
            <div className='flex flex-wrap p-4 mx-8'>
                <Link href='https://in.linkedin.com/in/vishnu-murti-pandey' target='_blank'
                    className='m-2 bg-white hover:bg-[#b2c1fd] p-6 md:p-2 w-[70px] h-[70px] flex justify-center items-center rounded-full'>
                    <Image src='/linkedin.png' alt='' height={40} width={40} />
                </Link>
                <Link href='https://github.com/Vishnu-Murti-Pandey' target='_blank'
                    className='m-2 bg-white hover:bg-[#b2c1fd] p-6 md:p-2 w-[70px] h-[70px] flex justify-center items-center rounded-full'>
                    <Image src='/github.png' alt='' height={40} width={40} />
                </Link>
                <Link href='https://twitter.com/vm_pandey10' target='_blank'
                    className='m-2 bg-white hover:bg-[#b2c1fd] p-6 md:p-2 w-[70px] h-[70px] flex justify-center items-center rounded-full'>
                    <Image src='/twitter.png' alt='' height={40} width={40} />
                </Link>
                <Link href='https://www.instagram.com/vm_pandey/?igsh=OGQ5ZDc2ODk2ZA%3D%3D' target='_blank'
                    className='m-2 bg-white hover:bg-[#b2c1fd] p-6 md:p-2 w-[70px] h-[70px] flex justify-center items-center rounded-full'>
                    <Image src='/instagram.png' alt='' height={40} width={40} />
                </Link>
            </div>
        </div>
    )
}

export default Footer