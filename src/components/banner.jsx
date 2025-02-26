import React from 'react';
import boy1 from '../assets/banner/Group_4.png';
import boy2 from '../assets/banner/Group_5.png';
import image_1 from '../assets/imag/rb_115959.png';
import image_2 from '../assets/imag/rb_115959_1.png';
import vector_1 from '../assets/banner/Vector.png';
import vector_2 from '../assets/banner/Vector_2.png';
import vector_3 from '../assets/banner/Vector_3.png';

const Banner = () => {

    return (
        <section
            className="banner relative pt-[100px] xl:pt-[313px] before:absolute before:top-0 before:left-0 before:w-screen before:h-screen before:bg-[url('https://uithemez.com/i/artech/home6_modernAgency/assets/img/boxes.png')] before:bg-cover before:bg-center">

            <div className="absolute hidden xl:block w-[203px] h-[475px] top-[444px] left-[39px]">
                <img src={boy2} className='w-full h-full' alt="Boy Image" />
            </div>
            <div className="absolute hidden xl:block 2xl:top-[105px] xl:top-[175px] w-[20%] 2xl:left-[14px]">
                <img src={image_1} className='w-full' alt="Image 1" />
                <div className="xl:text-[30px] 4xl:text-[34px] w-[40%] absolute xl:top-[30%] 4xl:top-[117px] 4xl:right-[86px] xl:right-[70px] germania_one_regular">
                    kya kar <br /> rahe ho..
                </div>
            </div>
            <div className="absolute hidden xl:block 2xl:top-[105px] xl:top-[175px] w-[37%]  right-[-7%] 2xl:right-[-50px]">
                <img src={image_2} className='w-full' alt="Image 2" />
                <div className="xl:text-[30px] 4xl:text-[34px] text-center w-[50%] absolute lg:top-[32%] lg:right-[24%] xl:top-[32%] 4xl:top-[210px] xl:right-[25%] 4xl:right-[165px] germania_one_regular">
                    kuch nahi <br />
                    digital agency dundh <br />
                    raha hu.!
                </div>
            </div>
            <div className="container px-[15px] pb-[20px] mx-auto xl:w-[1320px]">
                <div className="relative flex items-center justify-center w-full mx-auto title">
                    <h1 className="relative justify-center text-[40px] sm:text-[60px] lg:text-[100px] xl:text-[300px] 2xl:text-[350px] w-full lg:w-[1016px] uppercase flex flex-wrap">
                        <div className="cursor-pointer relative h-full w-[100px] lg:w-[200px] xl:w-[301.9px] xl:h-[328.18px] group flex items-center justify-end">
                            <img src={vector_1} className='w-full h-full' alt="Vector 1" />
                            <div className="absolute w-[100px] md:w-[270px] duration-1000 h-[25px] md:h-[63px] shadow-xl bg-white group-hover:opacity-100 opacity-0 rotate-[15.32deg] bottom-2 md:bottom-[36px] left-[4px] rounded-xl text-[15px] md:text-[50px] capitalize text-center font-bold geostar_regular">boost</div>
                        </div>
                        <div className="cursor-pointer w-[100px] lg:w-[200px] xl:w-[327.56px] relative xl:mt-[-70px] h-full xl:h-[354.96px] group flex items-end justify-center">
                            <img src={vector_2} className='w-full h-full' alt="Vector 2" />
                            <div className="absolute w-[100px] md:w-[270px] duration-1000 h-[25px] md:h-[63px] shadow-xl rounded-[10px] bg-white group-hover:opacity-100 opacity-0 rotate-[-28deg] top-3 lg:top-[50px] lg:left-[20px] text-[15px] md:text-[50px] capitalize text-center geostar_regular"><p>build</p></div>
                        </div>
                        <div className="cursor-pointer ml-[10px] w-[100px] lg:w-[200px] xl:w-[351.25px] mt-1 relative h-full xl:h-[319.12px] group flex items-center justify-start">
                            <img src={vector_3} className='w-full h-full' alt="Vector 3" />
                            <div className="absolute w-[100px] md:w-[346px] duration-1000 h-[25px] md:h-[63px] shadow-xl rounded-[10px] bg-white group-hover:opacity-100 opacity-0 rotate-[-7.47deg] bottom-[0px] left-[0px] text-[15px] md:text-[50px] capitalize text-center geostar_regular font-semibold text-black">dominate</div>
                        </div>
                    </h1>
                </div>
            </div>

            <div className="container px-auto lg:px-0 z-20 relative 2xl:w-[1320px] mx-auto">
                <h1 className='text-[50px] sm:text-[70px] lg:text-[100px] xl:text-[125px] 4xl:text-[180px] leading-none capitalize text-center'>
                    <span className='text-[#ef4523]'>delivers</span> results!
                </h1>
            </div>

            <div className="absolute hidden xl:block  top-[623px] w-[185px] h-[457px] right-[46px]">
                <img src={boy1} className='w-full h-full' alt="Boy 1" />
            </div>
        </section>
    )
}

export default Banner;
