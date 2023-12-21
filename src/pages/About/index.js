import React from 'react'
import Layout from '@/app/layout'

import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';

export default function About() {
  return (
    <div>
      <AboutSection />
      <Footer />
    </div>
  )
}

About.getLayout = function getLayout(page) { return (<Layout>{page}</Layout>) }  