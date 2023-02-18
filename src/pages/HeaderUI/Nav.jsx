import React, { useState } from 'react'
import { CgMenuLeft, CgClose } from 'react-icons/cg'
import Announce from './Announce'
import Menu from './Menu'

const Nav = () => {

  const [menu, setMenu] = useState(false)

  return (
    <>
      <Announce></Announce>
      <div className='absolute w-full grid items-center top-12'>
        <nav className='max-w-5xl w-full px-4 sm:px-8 m-auto flex justify-between items-center z-20'>
          <a href='/' className='text-surf font-extrabold text-5xl cursor-pointer tracking-[-0.2em]'>RW</a>
          <a href="#" className='hidden lg:inline relative py-2 text-surf font-semibold text-base hover:text-teal-400 transition-colors before:absolute before:h-0.5 before:w-0 before:bg-teal-700 hover:before:bg-teal-400 hover:before:w-full before:bottom-0 before:transition-all before:left-1/2 before:-translate-x-1/2'>COURSE</a>
          <a href="#" className='hidden lg:inline relative py-2 text-surf font-semibold text-base hover:text-teal-400 transition-colors before:absolute before:h-0.5 before:w-0 before:bg-teal-700 hover:before:bg-teal-400 hover:before:w-full before:bottom-0 before:transition-all before:left-1/2 before:-translate-x-1/2'>TOOLS</a>
          <a href="#" className='hidden lg:inline relative py-2 text-surf font-semibold text-base hover:text-teal-400 transition-colors before:absolute before:h-0.5 before:w-0 before:bg-teal-700 hover:before:bg-teal-400 hover:before:w-full before:bottom-0 before:transition-all before:left-1/2 before:-translate-x-1/2'>ABOUT US</a>
          <a href="#" className='hidden lg:inline relative py-2 text-surf font-semibold text-base hover:text-teal-400 transition-colors before:absolute before:h-0.5 before:w-0 before:bg-teal-700 hover:before:bg-teal-400 hover:before:w-full before:bottom-0 before:transition-all before:left-1/2 before:-translate-x-1/2'>NEWS</a>
          <a href="#" className='hidden lg:inline relative py-2 text-surf font-semibold text-base hover:text-teal-400 transition-colors before:absolute before:h-0.5 before:w-0 before:bg-teal-700 hover:before:bg-teal-400 hover:before:w-full before:bottom-0 before:transition-all before:left-1/2 before:-translate-x-1/2'>SUPPORT</a>
          {menu ?
            <button name='menu' className='lg:hidden'>
              <CgClose className='text-cyan-900 cursor-pointer' size={'40px'} onClick={() => setMenu(!menu)}></CgClose>
            </button> :
            <button name='menu' className='lg:hidden'>
              <CgMenuLeft className='text-cyan-900 cursor-pointer' size={'40px'} onClick={() => setMenu(!menu)}></CgMenuLeft>
            </button>}
        </nav>
      </div>
      <Menu menu={menu}></Menu>
    </>
  )
}

export default Nav