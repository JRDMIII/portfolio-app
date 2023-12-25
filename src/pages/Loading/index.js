import React from 'react'

export default function Loading() {
  return (
    <div className='bg-black text-white'>
      Loading Page
    </div>
  )
}

Loading.getLayout = function getLayout(page) { return (<Layout>{page}</Layout>) }  