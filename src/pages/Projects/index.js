import Project from '@/components/Project'
import ProjectHero from '@/components/ProjectHero'
import Layout from '@/app/layout'
import React from 'react'
import Footer from '@/components/Footer'

import { client } from '../../../sanity/lib/client'

export async function getStaticProps() {
  const projects = await client.fetch(`*[_type == "project"]`)

  return {
      props: {
          projects,
      }
  }
}

export default function Projects({ projects }) {
  return (
    <div className='snap snap-y-mandatory'>
        
        <ProjectHero />

        {
          projects.map(({ title, description, link }) => (
            <Project title={title} description={description} link={link} />
          ))
        }
        <Footer />
    </div>
  )
}

Projects.getLayout = function getLayout(page) { return (<Layout>{page}</Layout>) }  