import React from 'react'
import Awardssection from '../components/awardssection/awardssection'
import Maintitle from '../components/maintitle'
import Slider from '../components/awardssection/slider'
import Awardrec from '../components/awardssection/awardrec'
const Awards = () => {
    Maintitle('Social panga - Awards')
    return (
        <div className='pt-[60px] data_cla md:pt-[100px]' >
            <Awardssection />
            <Slider />
            <Awardrec />
        </div>
    )
}

export default Awards