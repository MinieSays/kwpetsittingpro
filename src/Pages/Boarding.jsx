import React, { useEffect } from 'react'
import PagesBanner from '../components/PagesBanner'

import DescriptionTextLeft from '../components/boarding/DescriptionTextLeft'
import DescriptionTextRight from '../components/boarding/DescriptionTextRight'
import ListSection from '../components/boarding/ListSection'
import ParallaxBanner from '../components/ParallaxBanner'
import CallToAction from '../components/CallToAction'


import img from "../assets/dogboarding1.jpg"
import img1 from "../assets/dogboarding2.jpg"

const Boarding = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
    <PagesBanner
      title="Pet Sitting & House Sitting"
      subtitle="Leave your animals in their comfort zone with our pet sitting services"
    />
    <DescriptionTextLeft img={img} />
    <CallToAction />
    <DescriptionTextRight img={img1} />
    <ListSection />
    <ParallaxBanner />
  </>
  )
}

export default Boarding