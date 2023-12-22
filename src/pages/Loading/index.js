import React from 'react'

export default function Loading() {
  return (
    <div>Loading Page</div>
  )
}

Loading.getLayout = function getLayout(page) { return (<Layout>{page}</Layout>) }  