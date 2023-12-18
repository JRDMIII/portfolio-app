import AboutMe from '@/components/AboutmE'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <div className='h-screen snap-mandatory overflow-y-scroll z-0'>
      <Hero />
      <AboutMe />
    </div>
  )
}
