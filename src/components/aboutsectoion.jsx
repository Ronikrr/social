import React from 'react'
// import SectionHeader from './extra/SectionHeader'
const Aboutsectoion = () => {
    return (
        <section
            className="banner relative pt-[50px] pb-[50px] md:pt-[150px] md:pb-[0px]   " id='aboutpage'>
            <div className="container mx-auto">
                <div className="flex flex-col justify-center text-center head">
                    <h1 className=' text-[20px] lg:text-[35px] goblin_one_regular' >About BBD (Who We Are)</h1>
                    <div className="  mx-auto w-full md:w-[600px]  relative mb-[15px] lg:mb-[40px] ">
                        <div className="absolute hidden md:block bg-black w-[153px] h-[2px] top-[50%] left-[-59px] z-50">
                        </div>
                        <p className='text-base lg:text-[24px] instrument text-[#ef4523]' >"Your Trusted Digital Growth Partner"</p>
                        <div className="absolute hidden md:block bg-black w-[153px] h-[2px] top-[50%] right-[-59px] z-50">
                        </div>
                    </div>
                    <p className='text-base font-medium lg:text-[18px] instrument'>
                        BBD (BadeBazarkaDigital) offers cutting-edge digital marketing and social media optimization solutions to drive your business growth.</p>
                </div>
            </div>
        </section>
    )
}
export default Aboutsectoion