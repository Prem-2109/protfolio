import React, { useEffect } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { useRef, useState } from 'react'
const Navbar = () => {
  const [isScroll, setisScroll] =  useState(false);
  const sideMenuRef = useRef();

  const openSideMenu = () => {
    sideMenuRef.current.style.transform = 'translatex(-16rem)';
  }
  const closeSideMenu = () => {
    sideMenuRef.current.style.transform = 'translatex(16rem)';
  }

  useEffect(()=>{
    window.addEventListener('scroll', () => {
      if(scrollY > 50){
        setisScroll(true);
      }else{
        setisScroll(false);
      }  
  })
  },[])
  return (
    <>
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <Image src={assets.header_bg_color} alt='' className='w-full ' />
      </div>
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}>
        <a href=''>
        <h1 className='text-2xl sm:text-6xl lg:text-[45px] font-Ovo'>Prem</h1>
        </a>

        <ul className={`hidden md:flex item-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50"} `} >
          <li><a href='#top'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#service'>Services</a></li>
          <li><a href='#work'>Work</a></li>
          <li><a href='#contact'>Contact me</a></li>

        </ul>

        <div className='flex items-center gap-4'>
          <button >
            <Image src={assets.moon_icon} className='w-6' alt=''/>
          </button>
          <a href='#contact' className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-400 rounded-full ml-4'>Contact <Image src={assets.arrow_icon} alt='' className='w-3' /></a>
          <button className='block md:hidden ml-3' onClick={openSideMenu}>
            <Image src={assets.menu_black} className='w-6' alt=''/>
          </button>

        </div>
        {/* mobile menus */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500' >
          <div className=' absolute top-5 right-5' onClick={closeSideMenu}>
            <Image src={assets.close_black} alt='' className='w-5 cursor-pointer' />
          </div>


          <li><a href='#top' onClick={closeSideMenu}>Home</a></li>
          <li><a href='#about' onClick={closeSideMenu}>About</a></li>
          <li><a href='#service' onClick={closeSideMenu}> Services</a></li>
          <li><a href='#work' onClick={closeSideMenu}>Work</a></li>
          <li><a href='#contact' onClick={closeSideMenu}>Contact me</a></li>

        </ul>

      </nav>
    </>
  )
}

export default Navbar
