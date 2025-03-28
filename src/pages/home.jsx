import React, { Suspense } from 'react'
// import Banner from '../components/banner'
// import Whychoose from '../components/whychoose'
// import Aboutsectoion from '../components/aboutsectoion'
// import HomeVision from '../components/extra/homevision'
// import Contactbutton from '../components/extra/contactbutton'
// import Exportservice from '../components/exportservice'
// import Havelook from '../components/havelook'
const Banner = React.lazy(() => import("../components/banner"))
const Whychoose = React.lazy(() => import("../components/whychoose"))
const Aboutsectoion = React.lazy(() => import("../components/aboutsectoion"))
const Exportservice = React.lazy(() => import("../components/exportservice"))
const Havelook = React.lazy(() => import("../components/havelook"))
const Home = () => {
  return (
    <div>
      <Suspense fallback={<p>loading...</p>} >
        <Banner />
        <Aboutsectoion />
        <Whychoose />
        <Exportservice />
        <Havelook />
      </Suspense>
      {/* <HomeVision /> */}
      {/* <Contactbutton /> */}
    </div>
  )
}

export default Home