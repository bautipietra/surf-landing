import React, { useState } from 'react'
import ActivitySection from './ActivitySection'
import Hero from './Hero'
import Instructors from './Instructors'

const Home = () => {
  const [activity, setActivity] = useState(1)
  return (
    <div className='grid'>
      <Hero activity={activity} setActivity={setActivity}></Hero>
      <ActivitySection activity={activity}></ActivitySection>
      <Instructors></Instructors>
    </div>
  )
}

export default Home