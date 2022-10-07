import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../public/heavenLogo.png'

const Header = () => {
  return (
    <div className='bg-white lg:mx-5 border border-hmint border-4 border-t-white shadow-lg rounded-b-full mb-8'>
        <div className='flex justify-center content-center pb-2'>
            <Link href="/">
                {/* <h1 className='cursor-pointer font-bold text-5xl text-white outline-text-hblush'>
                    Heaven
                </h1> */}
                <Image width={225} height={75} alt="Heaven" src={Logo} className='cursor-pointer'/>
            </Link>
        </div>
    </div>
  )
}
export default Header;