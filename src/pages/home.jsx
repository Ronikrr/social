import React, { Suspense } from 'react'

const Banner = React.lazy(() => import("../components/banner"))
const Whychoose = React.lazy(() => import("../components/whychoose"))
const Aboutsectoion = React.lazy(() => import("../components/aboutsectoion"))
const Exportservice = React.lazy(() => import("../components/exportservice"))
const Havelook = React.lazy(() => import("../components/havelook"))
const Review = React.lazy(() => import("../components/Review"))
const Loading = React.lazy(() => import('../components/extra/Loading'))
const OurService = React.lazy(() => import('../components/Ourservice'))
const Contactfrom = React.lazy(() => import('../components/contactfrom'))
const Home = () => {
  return (
    <div>
      <Suspense fallback={<Loading />} >
        <Banner />
        <Aboutsectoion />
        <Whychoose />
        <Exportservice />
        <Havelook />
        <OurService />  
        <Review />
        <Contactfrom />
      </Suspense>
    </div>
  )
}

export default Home