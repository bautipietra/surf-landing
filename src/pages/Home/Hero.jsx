import React, { useState } from 'react'
import ActivityCard from './ActivityCard'
import ImageCarousel from './ImageCarousel'

const Hero = ({ activity, setActivity }) => {

  return (
    <div className='min-h-screen relative'>
      <ImageCarousel activity={activity}></ImageCarousel>
      <div className='relative w-full h-full max-w-5xl px-8 flex flex-col lg:justify-center m-auto gap-4 lg:gap-2 font-semibold my-4 lg:my-0'>
        <h1 className='text-surf font-bold text-4xl lg:text-8xl max-w-md mx-auto text-center lg:text-start lg:mx-0'>Let's Ride A <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-cyan-800'>Wave</span></h1>
        <ActivityCard activity={activity} setActivity={setActivity}></ActivityCard>
      </div>
    </div>
  )
}

export default Hero