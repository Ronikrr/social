import React from 'react'
import Heart from '../../assets/img/clients/Heart-emoji.png'
import logo_1 from '../../assets/img/clients/1mg.png'
import logo_2 from '../../assets/img/clients/3M.png'
import logo_3 from '../../assets/img/clients/Amazon-Logo.png'
import logo_4 from '../../assets/img/clients/Bajaj-logo.png'
import logo_5 from '../../assets/img/clients/Bosch.png'
import logo_6 from '../../assets/img/clients/CISCO.png'
import logo_7 from '../../assets/img/clients/Canara-Bank-logo.png'
import logo_8 from '../../assets/img/clients/Chola-MS.png'
import logo_9 from '../../assets/img/clients/DLF.png'
import logo_10 from '../../assets/img/clients/Fujifilm.png'
const Clientsection = () => {
    const logo_imge = [
        {
            id: 1,
            src: logo_1,
        }, {
            id: 2,
            src: logo_2,
        }, {
            id: 3,
            src: logo_3,
        }, {
            id: 4,
            src: logo_4,
        }, {
            id: 5,
            src: logo_5,
        }, {
            id: 6,
            src: logo_6,
        }, {
            id: 7,
            src: logo_7,
        }, {
            id: 8,
            src: logo_8,
        }, {
            id: 9,
            src: logo_9,
        }, {
            id: 10,
            src: logo_10,
        },
    ]
    return (
        <div>
            <div className="container mx-auto lg:max-w-[71.25rem] pt-[1.5rem] pb-[1rem]">
                <div className="w-full lg:w-[1140px] pb-[1rem] px-[1rem] mx-auto flex flex-wrap items-center">
                    <div className="flex items-center flex-col md:flex-row md:pt-[1rem] p-0 md:px-[1rem] w-full">
                        <div className="w-full flex-col md:flex-row text-center flex justify-center items-center space-y-4 md:space-y-0 md:space-x-5   pt-[1rem]">
                            <h1 className='text-[30px] lg:text-[60px] capitalize leading-[1.2] font-extrabold' > our clients </h1>
                            <img src={Heart} className='object-cover w-[100px] h-[100px] aspect-square' alt="" />
                        </div>
                    </div>
                </div>
                <div className="w-full py-[100px] lg:w-[1140px] pb-[1rem] px-[1rem] mx-auto flex flex-wrap items-center">
                    {logo_imge.map((items) => (
                        <div className="w-full md:w-[25%] px-[25px] pb-[70px]" key={items.id} >
                            <div className="flex justify-center w-11/12">
                                <img src={items.src} className='' alt={items.id} />
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Clientsection