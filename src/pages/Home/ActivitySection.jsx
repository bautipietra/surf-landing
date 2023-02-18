import React from 'react'
import surfImage from '../../assets/activities/surf.jpg'
import surfVideo from '../../assets/activities/surf.mp4'
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi'

const ActivitySection = ({ activity }) => {
  return (
    <div className='grid max-w-5xl px-8 m-auto'>
      <div className='grid lg:grid-cols-2 items-stretch bg-zinc-100'>
        <img src={surfImage} alt="" className='h-full w-full object-cover' />
        <div className='flex flex-col justify-center h-full p-12 min-h-[40em] gap-4'>
          <span className='text-cyan-400 text-xl'>LEVEL {activity}</span>
          <h4 className='text-surf text-6xl font-medium'>Best Beaches On The Coast</h4>
          <p className='text-gray-600'>We create a fun, relaxed and supportive environment where we teach the art of surfing including technical skills.</p>
          <div className='grid grid-cols-2 grid-rows-2  items-center gap-y-4'>
            <a href="#" className='bg-cyan-400 w-1/2 text-white font-medium col-span-2 text-center p-4'>BOOK NOW</a>
            <div className='grid grid-cols-2 w-full'>
              <div className='bg-white w-full p-3'>
                <HiOutlineArrowNarrowLeft size={'30px'} className='stroke-zinc-400 m-auto'></HiOutlineArrowNarrowLeft>
              </div>
              <div className='bg-cyan-400 w-full p-3'>
                <HiOutlineArrowNarrowRight size={'30px'} className='stroke-white m-auto'></HiOutlineArrowNarrowRight>
              </div>
            </div>
            <div className='flex gap-4 ml-8'>
              <span className='font-semibold text-cyan-400'>1</span>
              <span className='font-semibold text-gray-600'>2</span>
              <span className='font-semibold text-gray-600'>3</span>
            </div>
          </div>
        </div>
      </div>
      <div className='grid lg:grid-cols-2  items-stretch bg-zinc-100'>
        <video src={surfVideo} autoPlay muted loop className='h-full w-full object-cover lg:order-1'></video>
        <div className='flex flex-col justify-center h-full p-12 min-h-[40em] gap-4'>
          <span className='text-cyan-400 text-xl'>LEVEL {activity}</span>
          <h4 className='text-surf text-6xl font-medium'>Best Beaches On The Coast</h4>
          <p className='text-gray-600'>We create a fun, relaxed and supportive environment where we teach the art of surfing including technical skills.</p>
          <div className='grid grid-cols-2 grid-rows-2  items-center gap-y-4'>
            <a href="#" className='bg-cyan-400 w-1/2 text-white font-medium col-span-2 text-center p-4'>BOOK NOW</a>
            <div className='grid grid-cols-2 w-full'>
              <div className='bg-white w-full p-3'>
                <HiOutlineArrowNarrowLeft size={'30px'} className='stroke-zinc-400 m-auto'></HiOutlineArrowNarrowLeft>
              </div>
              <div className='bg-cyan-400 w-full p-3'>
                <HiOutlineArrowNarrowRight size={'30px'} className='stroke-white m-auto'></HiOutlineArrowNarrowRight>
              </div>
            </div>
            <div className='flex gap-4 ml-8'>
              <span className='font-semibold text-cyan-400'>1</span>
              <span className='font-semibold text-gray-600'>2</span>
              <span className='font-semibold text-gray-600'>3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActivitySection