import React from 'react'
import Layout from '@/app/layout'

import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';

import { client } from '../../../sanity/lib/client';

export async function getStaticProps() {
  const skills = await client.fetch(`*[_type == "skill"]`)
  const images = await client.fetch(`*[_type == "artimages"].images`)
  const interestArray = await client.fetch(`*[_type == "interestArray"].interests`)

  return {
      props: {
          skills,
          images,
          interestArray
      }
  }
}

export default function About({ skills, images, interestArray }) {
  return (
    <div className='w-full bg-black text-white'>
      <AboutSection skills={skills} images={images} interestArray={interestArray} />
      <Footer />
    </div>
  )
}

About.getLayout = function getLayout(page) { return (<Layout>{page}</Layout>) }  