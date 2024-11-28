// import React, { useState, useEffect } from "react";
// import Slider_data_1 from "../../assets/img/awards/1-1.jpg"
// import Slider_data_2 from "../../assets/img/awards/2-1.jpg"
// import Slider_data_3 from "../../assets/img/awards/3-1.jpg"
// import Slider_data_4 from "../../assets/img/awards/4-1.jpg"
// import Slider_data_5 from "../../assets/img/awards/5-1.jpg"
// const Slider = () => {
//     const images = [
//         Slider_data_1,
//         Slider_data_2,
//         Slider_data_3, // Replace with your image paths
//         Slider_data_4, // Replace with your image paths
//         Slider_data_5, // Replace with your image paths
//     ];

//     const [currentIndex, setCurrentIndex] = useState(0);

//     useEffect(() => {
//         const autoSlide = setInterval(() => {
//             setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//         }, 3000); // 1000ms = 1 second

//         return () => clearInterval(autoSlide); // Cleanup interval on component unmount
//     }, [images.length]);


//     return (
//         <div className="relative w-full overflow-hidden">
//             <div
//                 className="flex transition-transform duration-500"
//                 style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//             >
//                 {images.map((image, index) => (
//                     <div className="w-3/12" key={index}>
//                         <img
//                             src={image}
//                             alt={`Slide ${index + 1}`}
//                             className="w-10/12 h-auto"
//                         />
//                     </div>
//                 ))}
//             </div>

//         </div>
//     );
// };

// export default Slider;

// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// import slider_image_01 from '../../assets/img/clients/new/1.jpg'
// import slider_image_02 from '../../assets/img/clients/new/2.jpg'
// import slider_image_03 from '../../assets/img/clients/new/3.png'
// import slider_image_04 from '../../assets/img/clients/new/4.png'
// import slider_image_05 from '../../assets/img/clients/new/5.jpg'
// import slider_image_06 from '../../assets/img/clients/new/6.png'
// import slider_image_07 from '../../assets/img/clients/new/7.png'
// import slider_image_08 from '../../assets/img/clients/new/8.png'
// import slider_image_09 from '../../assets/img/clients/new/9.png'
// import slider_image_010 from '../../assets/img/clients/new/10.png'
// import { Link } from 'react-router-dom';
// console.log(slider_image_01)
// // Slick settings
// const slide_datas = [
//     {
//         id: 1,
//         src: slider_image_01,
//     }, {
//         id: 2,
//         src: slider_image_02,
//     }, {
//         id: 3,
//         src: slider_image_03,
//     }, {
//         id: 4,
//         src: slider_image_04,
//     }, {
//         id: 5,
//         src: slider_image_05,
//     }, {
//         id: 6,
//         src: slider_image_06,
//     }, {
//         id: 7,
//         src: slider_image_07,
//     }, {
//         id: 8,
//         src: slider_image_08,
//     }, {
//         id: 9,
//         src: slider_image_09,
//     }, {
//         id: 10,
//         src: slider_image_010,
//     },
// ]
// const settings = {
//     margin: 10,
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//         {
//             breakpoint: 640,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//             },
//         },
//         {
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//             },
//         },
//         {
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1,
//             },
//         },
//         {
//             breakpoint: 1280,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 1,
//             },
//         },
//         {
//             breakpoint: 1536,
//             settings: {
//                 slidesToShow: 4,
//                 slidesToScroll: 1,
//             },
//         },
//     ],
// };

// const SliderComponent = () => {
//     return (
//         <div className='relative' >
//             <section className="relative py-24 overflow-x-hidden categury ">

//                 {/* <div className="container mx-auto "> */}
//                 <div className="z-10 flex flex-col w-full space-y-10 text-sm text-center small_head ">
//                     <span className='text-xl uppercase md:text-[25px] font-semibold text-[#4f282b]' >Shop by Category</span>
//                     <div className="main_head">
//                         <span className='text-5xl text-[#4f282b] capitalize prociono-regular md:text-[80px] font-semibold ' >Makeup & Skin Care</span>
//                     </div>
//                 </div>
//                 <div className="flex items-center w-full my-[50px]">
//                     <Slider className='w-full owl-theme' {...settings}>
//                         {slide_datas.map((data, id) => {
//                             console.log(data.src)
//                             return (
//                                 <div className="w-full h-full item" key={id} >
//                                     <div className="flex items-center ">
//                                         <div className="w-[400px] rounded-full flex items-center   justify-center h-[400px] bg-[#FCEADE] ">
//                                             <img src={data.src} alt="img_1" />
//                                         </div>

//                                     </div>
//                                 </div>
//                             )
//                         }
//                         )}
//                         {/* <div className="w-full h-full item"  >
//                             <div className="flex items-center ">
//                                 <div className="w-[400px] rounded-full flex items-center   justify-center h-[400px] bg-[#FCEADE] ">
//                                     <img src={slider_image_01} alt="img_1" />
//                                 </div>

//                             </div>
//                         </div> */}

//                     </Slider>
//                 </div>

//                 {/* </div> */}
//             </section>

//         </div>
//     );
// };

// export default SliderComponent;
import React from 'react';
import slider_image_01 from '../../assets/img/clients/new/1.jpg';
import slider_image_02 from '../../assets/img/clients/new/2.jpg';
import slider_image_03 from '../../assets/img/clients/new/3.png';
import slider_image_04 from '../../assets/img/clients/new/4.png';
import slider_image_05 from '../../assets/img/clients/new/5.jpg';
import slider_image_06 from '../../assets/img/clients/new/6.png';
import slider_image_07 from '../../assets/img/clients/new/7.png';
import slider_image_08 from '../../assets/img/clients/new/8.png';
import slider_image_09 from '../../assets/img/clients/new/9.png';
import slider_image_010 from '../../assets/img/clients/new/10.png';

const slide_datas = [
    { id: 1, src: slider_image_01 },
    { id: 2, src: slider_image_02 },
    { id: 3, src: slider_image_03 },
    { id: 4, src: slider_image_04 },
    { id: 5, src: slider_image_05 },
    { id: 6, src: slider_image_06 },
    { id: 7, src: slider_image_07 },
    { id: 8, src: slider_image_08 },
    { id: 9, src: slider_image_09 },
    { id: 10, src: slider_image_010 },
];

const SliderComponent = () => {
    return (
        <div className="relative py-[50px]  bg-[#cfcfcf] ">
            {/* Heading */}
            <div className="mb-8 text-center">

                <h1 className="text-4xl pb-[1rem] mb-[0.5rem] md:text-[60px] font-extrabold capitalize">
                    Makeup & Skin Care
                </h1>
            </div>

            {/* Slider */}
            <div className="flex px-4 space-x-6 overflow-x-hidden slider-container scrollbar-hide">
                {slide_datas.map((data) => (
                    <div
                        key={data.id}
                        className="flex items-center justify-center flex-shrink-0 w-48 h-48 md:w-96 md:h-96"
                    >
                        <img
                            src={data.src}
                            alt={`slide-${data.id}`}
                            className="object-contain w-36 h-36 md:w-80 md:h-80"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SliderComponent;


