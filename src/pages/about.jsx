import React from 'react'
import Banner from '../components/aboutpage/banner'
import Connect from '../components/aboutpage/connect'
import Delight from '../components/aboutpage/delight'
import Maintitle from '../components/maintitle'
const About = () => {
  Maintitle('BadeBazarkaDigital - About Us')
  return (
    <div className='pt-[100px] data_cla data_cla' >
      <Banner />
      <Connect />
      <Delight />
      </div>
  )
}

export default About