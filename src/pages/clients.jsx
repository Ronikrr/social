import React from 'react'
import Clientsection from '../components/clients/clientsection'
import Imageslider from '../components/clients/imageslider'
import Maintitle from '../components/maintitle'
const Clients = () => {
    Maintitle("BadeBazarkaDigital - Clients")
    return (
        <div className='pt-[60px] md:pt-[122px] data_cla' >
            <Clientsection />
            <Imageslider />
        </div>
    )
}

export default Clients