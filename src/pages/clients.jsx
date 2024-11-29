import React from 'react'
import Clientsection from '../components/clients/clientsection'
import Imageslider from '../components/clients/imageslider'
const Clients = () => {
    return (
        <div className='py-[60px] md:py-[122px] data_cla' >
            <Clientsection />
            <Imageslider />
        </div>
    )
}

export default Clients