import React, { useEffect } from 'react'
import Hero from '../components/Hero';
import Features from '../components/Features';
import About from '../components/About';
import Description from '../components/Description';
import CallToAction from '../components/CallToAction';
import TestimonialsSection from '../components/Testimonials';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <section id="home">
      <Hero />
      <Features />
      <About />
      <TestimonialsSection />
      <Description />
      <CallToAction />
    </section>
  );
}

export default Home