import React from 'react'
import Image from 'next/image'
import Layout from '@/app/layout'

export default function Art() {
  return (
    <div className='h-screen'>
    </div>
  )
}

Art.getLayout = function getLayout(page) { return (<Layout>{page}</Layout>) }  