import React from 'react'
import Heart from '../assets/img/clients/Heart-emoji.png'
const Clientsection = () => {
    return (
        <div>
            <div className="container mx-auto lg:max-w-[71.25rem] pt-[1.5rem] pb-[1rem]">
                <div className="w-full lg:w-[1140px] pb-[1rem] px-[1rem] mx-auto flex flex-wrap items-center">
                    <div className="flex items-center flex-col md:flex-row md:pt-[1rem] p-0 md:px-[1rem] w-full">
                        <div className="w-full text-center flex justify-center items-center space-x-5   pt-[1rem]">
                            <h1 className='text-[30px] lg:text-[60px] capitalize leading-[1.2] font-extrabold' > our clients </h1>
                            <img src={Heart} className='object-cover w-[100px] h-[100px] aspect-square' alt="" />
                        </div>

                    </div>
                </div>
            </div></div>
    )
}

export default Clientsection