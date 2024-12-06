import React from 'react'
import Banner from '../components/banner/banner'
import Sliderdata from '../components/sliderdata/sliderdata'
import Localsection from '../components/localsection/localsection'
import Sliderbox from '../components/slider_box/slider_box'
import Maintitle from '../components/maintitle'

const Home = () => {
  Maintitle("BadeBazarkaDigital - Home")
  return (
    <div className='data_cla z-9999' >
      <Banner />
      <Sliderdata />
      <Localsection />
      <Sliderbox />
    </div>
  )
}

export default Home