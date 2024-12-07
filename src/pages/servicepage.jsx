import React from 'react'
import Ourservices from '../components/services/ourservices'
import Maintitle from '../components/maintitle'
const Servicepage = () => {
    Maintitle('BadeBazarkaDigital - Service')
    return (    
        <div className='pt-[60px]  md:pt-[122px] data_cla' >
            <Ourservices />
        </div>
    )
}

export default Servicepage