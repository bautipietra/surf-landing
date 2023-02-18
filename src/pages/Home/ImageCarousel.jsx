import React from 'react'
import HeroImage1 from '../../assets/hero/surf.jpg'
import HeroImage2 from '../../assets/hero/kayak.jpg'
import HeroImage3 from '../../assets/hero/kitesurf.jpg'
import HeroImage4 from '../../assets/hero/parasailing.jpg'

const ImageCarousel = ({ activity }) => {
  return (
    <div id="carouselExampleCaptions" className='lg:absolute -z-10 h-[50vh] w-full object-cover lg:h-screen flex overflow-hidden' data-bs-ride="carousel">
      <img src={HeroImage1} alt="" className={`absolute h-[50vh] lg:h-screen object-cover min-w-screen w-full ${activity == 1 ? '-translate-x-0' : '-translate-x-full'} transition-transform duration-500`} />
      <img src={HeroImage2} alt="" className={`absolute h-[50vh] lg:h-screen object-cover min-w-screen w-full ${activity == 2 ? '-translate-x-0' : activity > 2 ? '-translate-x-full' : 'translate-x-full'} transition-transform duration-500`} />
      <img src={HeroImage3} alt="" className={`absolute h-[50vh] lg:h-screen object-cover min-w-screen w-full ${activity == 3 ? '-translate-x-0' : activity > 3 ? '-translate-x-full' : 'translate-x-full'} transition-transform duration-500`} />
      <img src={HeroImage4} alt="" className={`absolute h-[50vh] lg:h-screen object-cover min-w-screen w-full ${activity == 4 ? '-translate-x-0' : activity > 4 ? '-translate-x-full' : 'translate-x-full'} transition-transform duration-500`} />
    </div>
  )
}

export default ImageCarousel