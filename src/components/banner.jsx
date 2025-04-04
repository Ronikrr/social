// import React from 'react';
// const image_1 = require('../assets/imag/rb_115959.webp');
// const image_2 = require('../assets/imag/rb_115959_1.webp');
// const vector_1 = require('../assets/avif/banner/Vector.webp');
// const vector_2 = require('../assets/avif/banner/Vector_2.webp');
// const vector_3 = require('../assets/avif/banner/Vector_3.webp');
// const boy1 = require('../assets/avif/banner/Group_4.webp');
// const boy2 = require('../assets/avif/banner/Group_5.webp');

// const Banner = () => {

//     return (
//         <section
//             className="banner relative pt-[100px] xl:pt-[213px] before:absolute before:top-0 before:left-0 before:w-screen before:h-screen before:bg-[url('https://www.t3bucket.com/f/0-boxes.webp')] before:bg-cover before:bg-center"
//         >

//             <div className="absolute hidden xl:block w-[203px] h-[475px] top-[327px] 3xl:top-[350px] left-[39px]">
//                 <img src={boy2} className='w-full h-full' alt="Boy Image" loading='lazy' />
//             </div>
//             <div className="absolute hidden xl:block 2xl:top-[40px] xl:top-[70px] w-[20%] 2xl:left-[14px]">
//                 <img src={image_1} className='w-full' alt="Image 1" loading='lazy' />
//                 <div className="xl:text-[30px] 4xl:text-[34px] w-[40%] absolute xl:top-[30%] 4xl:top-[117px] 4xl:right-[86px] xl:right-[70px] germania_one_regular">
//                     kya kar <br /> rahe ho..
//                 </div>
//             </div>
//             <div className="absolute hidden xl:block 2xl:top-[10px] xl:top-[40px] w-[32%]  right-[-7%] 2xl:right-[-50px]">
//                 <img src={image_2} className='w-full' alt="Image 2" loading='lazy' />
//                 <div className="xl:text-[25px] 4xl:text-[26px] text-center w-[50%] absolute lg:top-[32%] lg:right-[24%] xl:top-[32%] 4xl:top-[210px] xl:right-[25%] 4xl:right-[165px] germania_one_regular">
//                     kuch nahi <br />
//                     digital agency dundh <br />
//                     raha hu.!
//                 </div>
//             </div>
//             <div className="container px-[15px] pb-[20px] mx-auto xl:w-[1320px]">
//                 <div className="relative flex items-center justify-center w-full mx-auto title">
//                     <h1 className="relative justify-center text-[40px] sm:text-[60px] lg:text-[100px] xl:text-[300px] 2xl:text-[350px] w-full lg:w-[1016px] uppercase flex flex-wrap">
//                         <div className="cursor-pointer relative h-full w-[100px] lg:w-[200px] xl:w-[301.9px] xl:h-[328.18px] group flex items-center justify-end">
//                             <img src={vector_1} className='w-full h-full' alt="Vector 1" loading='lazy' />
//                             <div className="absolute w-[100px] md:w-[270px] duration-1000 h-[25px] md:h-[63px] shadow-xl bg-white group-hover:opacity-100 opacity-0 rotate-[15.32deg] bottom-2 md:bottom-[36px] left-[4px] rounded-xl text-[15px] md:text-[50px] capitalize text-center font-bold geostar_regular">boost</div>
//                         </div>
//                         <div className="cursor-pointer w-[100px] lg:w-[200px] xl:w-[327.56px] relative xl:mt-[-70px] h-full xl:h-[354.96px] group flex items-end justify-center">
//                             <img src={vector_2} className='w-full h-full' alt="Vector 2" loading='lazy' />
//                             <div className="absolute w-[100px] md:w-[270px] duration-1000 h-[25px] md:h-[63px] shadow-xl rounded-[10px] bg-white group-hover:opacity-100 opacity-0 rotate-[-28deg] top-3 lg:top-[50px] lg:left-[20px] text-[15px] md:text-[50px] capitalize text-center geostar_regular"><p>build</p></div>
//                         </div>
//                         <div className="cursor-pointer ml-[10px] w-[100px] lg:w-[200px] xl:w-[351.25px] mt-1 relative h-full xl:h-[319.12px] group flex items-center justify-start">
//                             <img src={vector_3} className='w-full h-full' alt="Vector 3" loading='lazy' />
//                             <div className="absolute w-[100px] md:w-[346px] duration-1000 h-[25px] md:h-[63px] shadow-xl rounded-[10px] bg-white group-hover:opacity-100 opacity-0 rotate-[-7.47deg] bottom-[0px] left-[0px] text-[15px] md:text-[50px] capitalize text-center geostar_regular font-semibold text-black">dominate</div>
//                         </div>
//                     </h1>
//                 </div>
//             </div>

//             <div className="container px-auto lg:px-0 z-20 relative 2xl:w-[1320px] mx-auto">
//                 <h1 className='text-[50px] sm:text-[70px] lg:text-[100px] xl:text-[125px] 4xl:text-[180px] leading-none capitalize text-center'>
//                     <span className='text-[#ef4523]'>delivers</span> results!
//                 </h1>
//             </div>

//             <div className="absolute hidden xl:block  xl:top-[429px] 2xl:top-[475px] w-[185px] h-[457px] right-[46px]">
//                 <img src={boy1} className='w-full h-full' alt="Boy 1" loading='lazy' />
//             </div>
//         </section>
//     )
// }

// export default Banner;

import React, { useState } from 'react';
import { cn } from '../utils/cn';

const Banner = () => {
    const [images] = useState({
        image_1: require('../assets/imag/rb_115959.webp'),
        image_2: require('../assets/imag/rb_115959_1.webp'),
        vector_1: require('../assets/avif/banner/Vector.webp'),
        vector_2: require('../assets/avif/banner/Vector_2.webp'),
        vector_3: require('../assets/avif/banner/Vector_3.webp'),
        boy1: require('../assets/avif/banner/Group_4.webp'),
        boy2: require('../assets/avif/banner/Group_5.webp')
    });

    return (
        <section className="banner md:h-screen 2xl:h-full w-full  relative pt-[100px] xl:pt-[213px] ">
            <div
                className={cn(
                    "absolute inset-0 h-full w-full lg:w-[250vh]   left-[-2%] lg:h-[125vh] lg:rotate-6 top-[-10%] 4xl:h-[75vh]",
                    "[background-size:40px_40px]",
                    "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                    "dark:[background-image:linear-gradient(to_right,#26262620_1px,transparent_1px),linear-gradient(to_bottom,#26262620_1px,transparent_1px)]",
                )}
            />
            <div className="absolute hidden xl:block w-[203px] h-[475px] top-[327px] 3xl:top-[350px] left-[39px]">
                <img src={images.boy2} className='w-full h-full' alt="Boy Image" loading='lazy' />
            </div>
            <div className="absolute hidden xl:block 2xl:top-[40px] xl:top-[70px] w-[20%] 2xl:left-[14px]">
                <img src={images.image_1} className='w-full' alt="Image 1" loading='lazy' />
                <div className="xl:text-[30px] 4xl:text-[34px] w-[40%] absolute xl:top-[30%] 4xl:top-[117px] 4xl:right-[86px] xl:right-[70px] germania_one_regular">
                    kya kar <br /> rahe ho..
                </div>
            </div>
            <div className="absolute hidden xl:block 2xl:top-[10px] xl:top-[40px] w-[32%] right-[-7%] 2xl:right-[-50px]">
                <img src={images.image_2} className='w-full' alt="Image 2" loading='lazy' />
                <div className="xl:text-[25px] 4xl:text-[26px] text-center w-[50%] absolute lg:top-[32%] lg:right-[24%] xl:top-[32%] 4xl:top-[210px] xl:right-[25%] 4xl:right-[165px] germania_one_regular">
                    kuch nahi <br /> digital agency dundh <br /> raha hu.!
                </div>
            </div>
            <div className="container px-[15px] pb-[20px] mx-auto xl:w-[1320px]">
                <div className="relative flex items-center justify-center w-full mx-auto title">
                    <h1 className="relative justify-center text-[40px] sm:text-[60px] lg:text-[100px] xl:text-[300px] 2xl:text-[350px] w-full lg:w-[1016px] uppercase flex flex-wrap">
                        <div className="cursor-pointer relative h-full w-[100px] lg:w-[200px] xl:w-[301.9px] xl:h-[328.18px] group flex items-center justify-end">
                            <img src={images.vector_1} className='w-full h-full' alt="Vector 1" loading='lazy' />
                            <div className="absolute w-[100px] md:w-[270px] duration-1000 h-[25px] md:h-[63px] shadow-xl bg-white group-hover:opacity-100 opacity-0 rotate-[15.32deg] bottom-2 md:bottom-[36px] left-[4px] rounded-xl text-[15px] md:text-[50px] capitalize text-center font-bold geostar_regular">boost</div>
                        </div>
                        <div className="cursor-pointer w-[100px] lg:w-[200px] xl:w-[327.56px] relative xl:mt-[-70px] h-full xl:h-[354.96px] group flex items-end justify-center">
                            <img src={images.vector_2} className='w-full h-full' alt="Vector 2" loading='lazy' />
                            <div className="absolute w-[100px] md:w-[270px] duration-1000 h-[25px] md:h-[63px] shadow-xl rounded-[10px] bg-white group-hover:opacity-100 opacity-0 rotate-[-28deg] top-3 lg:top-[50px] lg:left-[20px] text-[15px] md:text-[50px] capitalize text-center geostar_regular"><p>build</p></div>
                        </div>
                        <div className="cursor-pointer ml-[10px] w-[100px] lg:w-[200px] xl:w-[351.25px] mt-1 relative h-full xl:h-[319.12px] group flex items-center justify-start">
                            <img src={images.vector_3} className='w-full h-full' alt="Vector 3" loading='lazy' />
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
            <div className="absolute hidden xl:block xl:top-[429px] 2xl:top-[475px] w-[185px] h-[457px] right-[46px]">
                <img src={images.boy1} className='w-full h-full' alt="Boy 1" loading='lazy' />
            </div>
        </section>
    );
};

export default Banner;
