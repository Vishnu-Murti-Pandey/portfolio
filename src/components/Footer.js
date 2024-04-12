import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className='w-full bg-black flex justify-between items-center text-white'>
            <div className='p-4 text-xl mx-8'>
                Made with <span className='text-blue-600 font-bold'>Next JS</span> by - <span className='text-red-400 font-bold'> © Vishnu Murti Pandey</span>
            </div>
            <div className='flex flex-wrap p-4 mx-8'>
                <Link href='https://in.linkedin.com/in/vishnu-murti-pandey' target='_blank'
                    className='m-2 bg-white hover:bg-red-300 p-6 md:p-2 rounded-full'>
                    <Image src='/linkedin.png' alt='' height={30} width={30} />
                </Link>
                <Link href='https://github.com/Vishnu-Murti-Pandey' target='_blank'
                    className='m-2 bg-white hover:bg-red-300 p-6 md:p-2 rounded-full'>
                    <Image src='/github.png' alt='' height={30} width={30} />
                </Link>
                <Link href='https://twitter.com/vm_pandey10' target='_blank'
                    className='m-2 bg-white hover:bg-red-300 p-6 md:p-2 rounded-full'>
                    <Image src='/twitter.png' alt='' height={30} width={30} />
                </Link>
                <Link href='https://www.instagram.com/vm_pandey/?igsh=OGQ5ZDc2ODk2ZA%3D%3D' target='_blank'
                    className='m-2 bg-white hover:bg-red-300 p-6 md:p-2 rounded-full'>
                    <Image src='/instagram.png' alt='' height={30} width={30} />
                </Link>
            </div>
        </div>
    )
}

export default Footer