'Use Client'

import HomeSectionOne from '@/Components/HomeComp/HomeSectionOne'
import HomeSectionTwo from '@/Components/HomeComp/HomeSectionTwo'
import HomeSectionThree from '@/Components/HomeComp/HomeSectionThree'

import React from 'react'
import { FaRegHandPointer } from "react-icons/fa6";


const page = () => {
  
  return (
    <section id='MoveTop'>
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeSectionThree />

    <a href='#MoveTop'>
       <p className='pointer'><FaRegHandPointer /></p>
    </a>
    </section>
  )
}

export default page
