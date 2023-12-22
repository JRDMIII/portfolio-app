import Project from '@/components/Project'
import ProjectHero from '@/components/ProjectHero'
import Layout from '@/app/layout'
import React from 'react'

export default function Projects() {
  return (
    <div className='snap snap-y-mandatory'>
        
        <ProjectHero />

        {/* Projects section */}
        <Project />
        <Project />
        <Project />
        <Project />
    </div>
  )
}

Projects.getLayout = function getLayout(page) { return (<Layout>{page}</Layout>) }  