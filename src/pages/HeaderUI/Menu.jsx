import React from 'react'

const Menu = ({ menu }) => {
  return (
    <div className={`fixed ${!menu ? 'translate-x-full' : 'block translate-x-0'} h-full w-full top-0 bg-white z-10 lg:hidden flex flex-col items-center justify-center gap-4 transition-all duration-300`}>
      <a href="/course" className='lg:hidden lg:inline relative py-2 text-teal-700 font-semibold text-lg hover:text-teal-400 transition-colors before:absolute before:h-0.5 before:w-0 before:bg-teal-700 hover:before:bg-teal-400 hover:before:w-full before:bottom-0 before:transition-all before:left-1/2 before:-translate-x-1/2'>COURSE</a>
      <a href="/tools" className='lg:hidden relative py-2 text-teal-700 font-semibold text-lg hover:text-teal-400 transition-colors before:absolute before:h-0.5 before:w-0 before:bg-teal-700 hover:before:bg-teal-400 hover:before:w-full before:bottom-0 before:transition-all before:left-1/2 before:-translate-x-1/2'>TOOLS</a>
      <a href="/about" className='lg:hidden relative py-2 text-teal-700 font-semibold text-lg hover:text-teal-400 transition-colors before:absolute before:h-0.5 before:w-0 before:bg-teal-700 hover:before:bg-teal-400 hover:before:w-full before:bottom-0 before:transition-all before:left-1/2 before:-translate-x-1/2'>ABOUT US</a>
      <a href="/news" className='lg:hidden relative py-2 text-teal-700 font-semibold text-lg hover:text-teal-400 transition-colors before:absolute before:h-0.5 before:w-0 before:bg-teal-700 hover:before:bg-teal-400 hover:before:w-full before:bottom-0 before:transition-all before:left-1/2 before:-translate-x-1/2'>NEWS</a>
      <a href="/support" className='lg:hidden relative py-2 text-teal-700 font-semibold text-lg hover:text-teal-400 transition-colors before:absolute before:h-0.5 before:w-0 before:bg-teal-700 hover:before:bg-teal-400 hover:before:w-full before:bottom-0 before:transition-all before:left-1/2 before:-translate-x-1/2'>SUPPORT</a>
    </div>
  )
}

export default Menu