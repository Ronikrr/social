import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Carrer_slider = () => {
    const [active, setactive] = useState(0);

    const disandname = [
        {
            id: 1,
            name: 'mafiya',
            dis: "Would you be the good old Thakur who’s remembered only in Gabbar’s dialogues or would you rather be Gabbar himself whose name is scary enough to put children to sleep, and whose iconic character is sought after by heroes even till date?"
        }, {
            id: 2,
            name: 'how',
            dis: "Cause we know how frustrating it is to sit for long hours in boring corporate office cubicles, doing the same thing over and over again, and still going unnoticed, forget getting recognition!"
        }, {
            id: 3,
            name: 'why',
            dis: "Since we value individuality, creativity, originality and a lil bit of a lot of quirkiness, we promise we will value that… at times more than we value you!"
        }, {
            id: 4,
            name: 'what',
            dis: "If you don't want to be a dead fish going with the flow, why won't you drop us a mail? We will get back to you and see what you have got to show."
        },
    ]
    return (
        <div className='bg-[#e1bb08] py-[3rem]' >
            <div className="container mx-auto lg:w-[1140px]">
                <div className="flex flex-wrap w-full">
                    <div className="w-5/12 flex md:w-7/12 px-[15px] flex-col justify-center items-center ">
                        <div className="relative flex items-center w-full h-full justify-left list_in py-[0.25rem]">
                            <ul className="block w-full p-0 m-0 ">

                                {disandname.map((item, index) => (
                                    <li
                                        key={index}
                                        className={` relative w-full`}
                                        onMouseEnter={() => setactive(index)} // Set active on hover
                                        // Remove active when mouse leaves
                                    >
                                        <Link
                                            to="#"
                                            className={`text-[36px] lg:text-[130px] w-full uppercase font-bold leading-none transition-all duration-300 ${active === index ? 'active' : ''}`}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}


                            </ul>
                        </div>
                    </div>
                    <div className="w-7/12 md:w-5/12 px-[15px] flex-col justify-center items-center ">
                        <div className="w-full h-full bg-white rounded-b-[30px] rounded-l-none rounded-r-[30px] rounded-bl-[30px] ">
                            <div className="relative tab_content">

                                {disandname.map((item, index) => (
                                    <div className={` ${active === index ? 'block' : 'hidden'}`}>
                                        <div className="text-center content_box">
                                            <div className="title">
                                                <p className="p-[20px] md:p-[60px] text-[11px] md:text-[22px] text-left text-black font-medium leading-[1.5] m-0">{item.dis}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carrer_slider