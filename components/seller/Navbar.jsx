import React from 'react'
import { assets } from '../../assets/assets'
import Image from 'next/image'
import { useAppContext } from '@/context/AppContext'

const Navbar = () => {

  const { router } = useAppContext()

  return (
    <div className='flex items-center px-4 md:px-8 py-3 justify-between bg-sky-950'>
      <h1 onClick={() => router.push('/')} className="text-2xl lg:text-3xl font-bold cursor-pointer text-neutral-300 logo">Comfit Optics</h1>
      <button className='bg-rose-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar