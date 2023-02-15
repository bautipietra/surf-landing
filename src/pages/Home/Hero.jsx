import React, { useState } from 'react'
import heroImage from '../../assets/hero.jpg'
import ActivityCard from './ActivityCard'

const Hero = () => {

  const [activity, setActivity] = useState(1)

  return (
    <div className='min-h-screen relative'>
      <img src={heroImage} alt="Boy surfing" className='lg:absolute -z-10 h-1/2 w-full object-cover lg:h-full' />
      <div className='relative w-full h-full max-w-5xl px-8 flex flex-col lg:justify-center m-auto gap-4 lg:gap-2 font-semibold my-4 lg:my-0'>
        <h2 className='text-surf text-center lg:text-start'>NEXT COURSE  STARTS <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-cyan-800'>12 JANUARY 2023</span></h2>
        <h1 className='text-surf font-bold text-7xl max-w-sm mx-auto text-center lg:text-start lg:mx-0'>Let's Ride A <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-cyan-800'>Wave</span></h1>
        <ActivityCard activity={activity} setActivity={setActivity}></ActivityCard>
      </div>
    </div>
  )
}

export default Hero