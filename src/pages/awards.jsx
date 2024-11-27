import React from 'react'
import Awardssection from '../components/awardssection/awardssection'
import Maintitle from '../components/maintitle'
import Slider from '../components/awardssection/slider'
const Awards = () => {
    Maintitle('Social panga - awards')
    return (
        <div className='pt-[60px] md:pt-[100px]' >
            <Awardssection />
            <Slider />
        </div>
    )
}

export default Awards