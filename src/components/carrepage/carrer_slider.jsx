import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Carrer_slider = () => {
    const [active, setactive] = useState(0);
    const handleclick = (index) => {
        setactive(index)
    }
    return (
        <div className='bg-[#e1bb08] py-[3rem]' >
            <div className="container mx-auto lg:w-[1200px]">
                <div className="flex flex-wrap w-full">
                    <div className="w-5/12 md:w-7/12 px-[15px] flex-col justify-center items-center ">
                        <div className="relative flex items-center justify-center w-full h-full list_in">
                            <ul className="block p-0 m-0 ">
                                {/* {['mafiya', 'mafiya', 'mafiya', 'mafiya'].map((item, index) => (
                                    <li key={index} className="">
                                        <Link
                                            to="#"
                                            onMouseEnter={() => setactive(index)} // Set active on hover
                                            onMouseLeave={() => setactive(null)} // Remove active when mouse leaves
                                            className={`text-[130px] leading-none uppercase font-bold ${active === index ? 'active' : ''
                                                }`}
                                            onClick={() => setactive(index)}
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))} */}
                                {['mafiya', 'mafiya', 'mafiya', 'mafiya'].map((item, index) => (
                                    <li
                                        key={index}
                                        className={`group ${active === index ? 'active' : ''}`}
                                        onMouseEnter={() => setactive(index)} // Set active on hover
                                        onMouseLeave={() => setactive(null)} // Remove active when mouse leaves
                                    >
                                        <Link
                                            to="#"
                                            className={`text-[130px] uppercase font-bold leading-none transition-all duration-300 
                                                }`}
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))}


                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carrer_slider