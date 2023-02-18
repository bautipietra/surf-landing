import React from 'react';
import InstructorCard from './InstructorCard';

const Instructors = () => {
  return (
    <div className='relative max-w-5xl p-8 min-h-screen  m-auto w-full my-12 grid'>
      <h2 className='text-surf font-semibold text-6xl w-64'>
        Instructor Courses
      </h2>
      <span className='absolute top-20  right-28 text-cyan-400 w-56  font-semibold before:absolute before:h-0.5 before:w-16 before:bg-cyan-400 before:-left-20 before:top-6'>
        COURSES TO SOUIT YOUR SKILL, ABILITY AND PASSION
      </span>
      <div className='grid md:grid-cols-2 items-stretch justify-center gap-16'>
        <InstructorCard
          name='Doug Callander'
          job='Manager Of Training'
          activity='Parasailing'
          index='1'></InstructorCard>
        <InstructorCard
          name='Mary Harris'
          job='Manager Of Training'
          activity='Parasailing'
          index='2'></InstructorCard>
      </div>
    </div>
  );
};

export default Instructors;
