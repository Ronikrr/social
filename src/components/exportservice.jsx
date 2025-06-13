import React from 'react'

import { cn } from '../utils/cn'
const Exportservice = () => {
    const data = [
        { id: 1, title: "Social Media Optimization", subtitle: "Boost engagement & visibility with expert social media strategies." },
        { id: 2, title: "Digital Marketing Campaigns", subtitle: "Drive results with targeted, highimpact marketing campaigns." },
        { id: 3, title: "SEO & Content Marketing", subtitle: "Rank higher, attract traffic & convert leads with powerful content." },
        { id: 4, title: "PPC Advertising", subtitle: "Maximize ROI with data-driven, high-converting paid ads." },
        { id: 5, title: "Brand Strategy & Consulting", subtitle: "Build a strong brand identity & long-term business growth." }
    ]

    return (
        <section className="banner relative  py-[50px]  h-full  lg:pb-[50px] lg:pt-[40px]  w-full " id='service'>

            <div
                className={cn(
                    "absolute inset-0 -z-20 h-full w-full lg:w-[250vh]   lg:left-[-5%] lg:h-[100vh] lg:rotate-6 lg:top-[20%] 4xl:top-[20%] 4xl:h-[50vh]",
                    "[background-size:40px_40px]",
                    "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                    "dark:[background-image:linear-gradient(to_right,#26262620_1px,transparent_1px),linear-gradient(to_bottom,#26262620_1px,transparent_1px)]",
                )}
            />
            <div className="container mx-auto">
                <div className="flex flex-col justify-center text-center head">
                    <h1 className="text-[20px] sm:text-[35px] goblin_one_regular">Our Expert Services</h1>
                    <div className="mx-auto w-full md:w-[800px] relative mb-[25px] ">
                        <div className="absolute hidden md:block bg-black w-[170px] h-[1px] top-[50%] left-[-20%] z-50"></div>
                        <p className="text-[15px] sm:text-[24px] poppins_thin text-primary">“We help brands grow with customized marketing strategies.”</p>
                        <div className="absolute hidden md:block bg-black w-[170px] h-[1px] top-[50%] right-[-20%] z-50"></div>
                    </div>
                </div>
                {/* <SectionHeader
                    title="Our Expert Services"
                    subtitle="“We help brands grow with customized marketing strategies.”"
                /> */}
                <div className="flex flex-wrap items-center justify-center w-full ">
                    {data.map((data, index) => {
                        return (
                            <div className="w-full hover:bg-primary transition duration-300 hover:text-white hover:shadow-lg hover:shadow-gray-500  py-[25px] text-center my-[20px] me-0 lg:me-[20px] rounded-[20px] h-[150px] space-y-[10px] xl:w-[514px] border border-black " key={index}>
                                <h1 className='poppins_thin text-[17px] lg:text-[24px] font-medium'> {data.title} </h1>
                                <p className='poppins_thin px-5 text-[14px] sm:text-[18px]  lg:px-[75px]' > {data.subtitle} </p>
                            </div>
                        )
                    })}
                </div>
            </div>

        </section>
    )
}

export default Exportservice
