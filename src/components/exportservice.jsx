import React from 'react'
import box from '../assets/New folder/boxes (1).png'
const Exportservice = () => {
    const data = [
        { id: 1, title: "Social Media Optimization", subtitle: "Boost engagement & visibility with expert social media strategies." },
        { id: 2, title: "Digital Marketing Campaigns", subtitle: "Drive results with targeted, highimpact marketing campaigns." },
        { id: 3, title: "SEO & Content Marketing", subtitle: "Rank higher, attract traffic & convert leads with powerful content." },
        { id: 4, title: "PPC Advertising", subtitle: "Maximize ROI with data-driven, high-converting paid ads." },
        { id: 5, title: "Brand Strategy & Consulting", subtitle: "Build a strong brand identity & long-term business growth." }
    ]

    return (
        <section className="banner relative  pt-[50px] pb-[50px] h-full lg:pt-[80px] lg:pb-[50px] w-full ">
            <div className="absolute w-full h-[135vh] -z-10">
                <img src={box} className="w-full h-full opacity-100 rotate-6" alt="" />
            </div>
            <div className="container mx-auto">
                <div className="flex flex-col justify-center text-center head">
                    <h1 className="text-[20px] sm:text-[35px] goblin_one_regular">Our Expert Services</h1>
                    <div className="mx-auto w-full md:w-[800px] relative mb-[25px] lg:mb-[50px]">
                        <div className="absolute hidden md:block bg-black w-[170px] h-[1px] top-[50%] left-[-20%] z-50"></div>
                        <p className="text-[15px] sm:text-[24px] poppins_thin text-[#ef4523]">“We help brands grow with customized marketing strategies.”</p>
                        <div className="absolute hidden md:block bg-black w-[170px] h-[1px] top-[50%] right-[-20%] z-50"></div>
                    </div>
                </div>
                <div className="flex flex-wrap items-center justify-center w-full ">
                    {data.map((data, index) => {
                        return (
                            <div className="w-full py-[25px] text-center my-[20px] me-0 lg:me-[20px] rounded-[20px] h-[150px] space-y-[10px] xl:w-[514px] border border-black " key={index}>
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
