import React from 'react'
// import Contactfrom from '../components/contactfrom'
// import Mainbox from '../components/extra/mainbox'

const Contactfrom = React.lazy(() => import("../components/contactfrom"))
const Mainbox = React.lazy(() => import("../components/extra/mainbox"))
const Contact = () => {
    return (
        <div className="pt-[75px] lg:pt-[100px]" >
            <Mainbox />
            <Contactfrom />
        </div>
    )
}

export default Contact