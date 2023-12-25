import Project from '@/components/Project'
import ProjectHero from '@/components/ProjectHero'
import Layout from '@/app/layout'
import React from 'react'
import Footer from '@/components/Footer'

import { client } from '../../../sanity/lib/client'
import { GoArrowUp } from 'react-icons/go'

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
    <div className='h-screen snap-y snap-mandatory overflow-y-scroll text-white'>
      <ProjectHero />
      
      {
        projects.map(({ title, description, link, projectgif }) => (
          <Project title={title} description={description} link={link} projectgif={projectgif} />
        ))
      }

      <Footer/>
    </div>
  )
}

Projects.getLayout = function getLayout(page) { return (<Layout>{page}</Layout>) }  