import React from 'react'
import Ourservices from '../components/services/ourservices'
import Maintitle from '../components/maintitle'
const Servicepage = () => {
    Maintitle('Social Panga - Service')
    return (    
        <div className='data_cla' >
            <Ourservices />
        </div>
    )
}

export default Servicepage