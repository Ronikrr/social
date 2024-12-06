import React from 'react'
import Carrerslider from '../components/carrepage/carrer_slider'
import Position from '../components/carrepage/position'
import Maintitle from '../components/maintitle'
const Carrer = () => {
    Maintitle("BadeBazarkaDigital - Career Page")
    return (
        <div className='py-[60px] md:py-[122px] z-[99]' >
            <Carrerslider />
            <Position />
        </div>
    )
}

export default Carrer