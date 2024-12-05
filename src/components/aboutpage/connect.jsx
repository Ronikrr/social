// import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import Flickity from "flickity";
// import "flickity/dist/flickity.min.css";


// const galleryItems = [
//     {
//         type: "type1",
//         title: "Work Space, Mind Space : Always Bright",
//         imgUrl:
//             "https://socialpanga.com/wp-content/uploads/2021/04/socialpanga-about-gallery1.jpg",
//     },
//     {
//         type: "type2",
//         title: "Dedicated Nom Nom Station",
//         imgUrl:
//             "https://socialpanga.com/wp-content/uploads/2021/04/socialpanga-about-gallery4.jpg",
//     },
//     {
//         type: "type1",
//         title: "Housing Mafias of Creativity",
//         imgUrl:
//             "https://socialpanga.com/wp-content/uploads/2021/04/socialpanga-about-gallery2.jpg",
//     },
//     {
//         type: "type2",
//         title: "Peddling Quality Content Only",
//         imgUrl:
//             "https://socialpanga.com/wp-content/uploads/2021/04/socialpanga-about-gallery5.jpg",
//     },
//     {
//         type: "type1",
//         title: "Panga around every corner",
//         imgUrl:
//             "https://socialpanga.com/wp-content/uploads/2021/04/socialpanga-about-gallery3.jpg",
//     },
//     {
//         type: "type2",
//         title: "Uno Rules Us, We Don't Uno Rules",
//         imgUrl:
//             "https://socialpanga.com/wp-content/uploads/2021/04/socialpanga-about-gallery6.jpg",
//     },
// ];
// // import 'swiper/swiper-bundle.min.css';

// // Import Swiper core and required modules
// const scrollToTop = () => {
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//     });
// };

// const Connect = () => {
//     useEffect(() => {
//         const elem = document.querySelector(".gallery-slideshow");
//         new Flickity(elem, {
//             cellAlign: "left",
//             contain: true,
//             autoPlay: true,
//                 dots: false,
//             });
//         }, [])
//         return (
//             <section className='py-5 px-[15px] text-black' >
//                 <div className="container mx-auto">
//                     <div className="flex flex-row-reverse items-center justify-center py-[5rem]">
//                         <div className="w-full text-center md:w-[62.88%] pb-[3rem] px-[15px]">
//                             <div className="title_wrap">
//                                 <span className='text-[32px] md:text-[60px] font-bold' >Plan, Create and Connect.</span>
//                             </div>
//                             <div className="text-center wrap pl-[1rem] relative ">
//                                 <p className='py-[1rem] text-[18px] font-semibold' >We are an award-winning creative marketing and advertising agency. We ideate, curate and execute marketing strategies to engage with our clients’ intended audience, all while integrating their brand with the digital world.</p>
//                                 <p className='py-[1rem] text-[18px] font-semibold' >We take thoughts for ideas and create remarkable moments. We are always well prepared – with a bunch of crazy people, endless cups of chai and beautiful hideouts in Bengaluru, Delhi and Mumbai.</p>
//                                 <Link onClick={scrollToTop} to="/services" className='absolute right-[-2%] bottom-[-100px] z-0 bg-[#f8d200] border border-[#f8d200] text-black rounded-full p-[22.5px] flex items-center justify-center box_button' >
//                                     <img src="https://socialpanga.com/wp-content/themes/socialpanga/assets/images/svg-icons/arrow-right.svg" className='w-[42px]' alt="" />
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="flex flex-wrap">
//                     <div className="w-full px-0 pt-[3rem]">
//                         <div className="w-full outline-none into_gallary">
//                             <div className="h-[500px] w-full touch-auto overflow-x-hidden">
//                                 <div id="page h-full" className="site">
//                                     <main id="primary" className="h-full site-main about-us_page">
//                                         <section className="h-full py-5 container-fluid intro-sec">
//                                             <div className="h-full row">
//                                                 <div className="h-full px-0 pt-5 col-12">
//                                                     <div className="h-full intro-gallery-wrap gallery-slideshow">
//                                                         {galleryItems.map((item, index) => (
//                                                             <div className=" slide slide-gallery-item" key={index}>
//                                                                 <div
//                                                                     className={`gallery-item_inn h-full ${item.type}`}
//                                                                     style={{
//                                                                         background: `url(${item.imgUrl}) no-repeat center/cover`,
//                                                                     }}
//                                                                 >
//                                                                     <div className="gallery-content-wrap">
//                                                                         <div className="gallery-content">
//                                                                             <h3 className="gallery-title">{item.title}</h3>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         ))}
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </section>
//                                     </main>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         )
//     }

// export default Connect




// import React, { useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import Flickity from "flickity";
// import "flickity/dist/flickity.min.css";

// const galleryItems = [
//     {
//         type: "type1",
//         title: "Work Space, Mind Space : Always Bright",
//         imgUrl:
//             "https://socialpanga.com/wp-content/uploads/2021/04/socialpanga-about-gallery1.jpg",
//     },
//     {
//         type: "type2",
//         title: "Dedicated Nom Nom Station",
//         imgUrl:
//             "https://socialpanga.com/wp-content/uploads/2021/04/socialpanga-about-gallery4.jpg",
//     },
//     {
//         type: "type1",
//         title: "Housing Mafias of Creativity",
//         imgUrl:
//             "https://socialpanga.com/wp-content/uploads/2021/04/socialpanga-about-gallery2.jpg",
//     },
//     {
//         type: "type2",
//         title: "Peddling Quality Content Only",
//         imgUrl:
//             "https://socialpanga.com/wp-content/uploads/2021/04/socialpanga-about-gallery5.jpg",
//     },
//     {
//         type: "type1",
//         title: "Panga around every corner",
//         imgUrl:
//             "https://socialpanga.com/wp-content/uploads/2021/04/socialpanga-about-gallery3.jpg",
//     },
//     {
//         type: "type2",
//         title: "Uno Rules Us, We Don't Uno Rules",
//         imgUrl:
//             "https://socialpanga.com/wp-content/uploads/2021/04/socialpanga-about-gallery6.jpg",
//     },
// ];

// const scrollToTop = () => {
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//     });
// };

// const Connect = () => {
//     const flickityRef = useRef(null);

//     useEffect(() => {
//         if (flickityRef.current) {
//             new Flickity(flickityRef.current, {
//                 cellAlign: "left",
//                 contain: true,
//                 autoPlay: true,
//                 wrapAround: true,
//                 pageDots: true,
//             });
//         }
//     }, []);

//     return (
//         <section className="py-5 px-[15px] text-black">
//             <div className="container mx-auto">
//                 <div className="flex flex-row-reverse items-center justify-center py-[5rem]">
//                     <div className="w-full text-center md:w-[62.88%] pb-[3rem] px-[15px]">
//                         <div className="title_wrap">
//                             <span className="text-[32px] md:text-[60px] font-bold">
//                                 Plan, Create and Connect.
//                             </span>
//                         </div>
//                         <div className="text-center wrap pl-[1rem] relative">
//                             <p className="py-[1rem] text-[18px] font-semibold">
//                                 We are an award-winning creative marketing and advertising
//                                 agency. We ideate, curate and execute marketing strategies to
//                                 engage with our clients’ intended audience, all while
//                                 integrating their brand with the digital world.
//                             </p>
//                             <p className="py-[1rem] text-[18px] font-semibold">
//                                 We take thoughts for ideas and create remarkable moments. We are
//                                 always well prepared – with a bunch of crazy people, endless
//                                 cups of chai and beautiful hideouts in Bengaluru, Delhi and
//                                 Mumbai.
//                             </p>
//                             <Link
//                                 onClick={scrollToTop}
//                                 to="/services"
//                                 className="absolute right-[-2%] bottom-[-100px] z-0 bg-[#f8d200] border border-[#f8d200] text-black rounded-full p-[22.5px] flex items-center justify-center box_button"
//                             >
//                                 <img
//                                     src="https://socialpanga.com/wp-content/themes/socialpanga/assets/images/svg-icons/arrow-right.svg"
//                                     className="w-[42px]"
//                                     alt=""
//                                 />
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="flex flex-wrap">
//                 <div className="w-full px-0 pt-[3rem]">
//                     <div className="w-full outline-none into_gallary">
//                         <div className="h-[500px] w-full touch-auto overflow-x-hidden">
//                             <div id="page h-full" className="site">
//                                 <main id="primary" className="h-full site-main about-us_page">
//                                     <section className="h-full py-5 container-fluid intro-sec">
//                                         <div className="h-full row">
//                                             <div className="h-full px-0 pt-5 col-12">
//                                                 <div
//                                                     className="h-full intro-gallery-wrap gallery-slideshow"
//                                                     ref={flickityRef}
//                                                 >
//                                                     {galleryItems.map((item, index) => (
//                                                         <div
//                                                             className="slide slide-gallery-item h-[100%] w-6/12"
//                                                             key={index}
//                                                         >
//                                                             <div
//                                                                 className={`gallery-item_inn h-full ${item.type}`}
//                                                                 style={{
//                                                                     background: `url(${item.imgUrl}) no-repeat center/cover`,
//                                                                 }}
//                                                             >
//                                                                 <div className="gallery-content-wrap">
//                                                                     <div className="gallery-content">
//                                                                         <h3 className="gallery-title">
//                                                                             {item.title}
//                                                                         </h3>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     ))}
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </section>
//                                 </main>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Connect;


import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Flickity from "flickity";
import "flickity/dist/flickity.min.css";

const galleryItems = [
    {
        type: "type1",
        title: "Work Space, Mind Space : Always Bright",
        imgUrl:
            "https://socialpanga.com/wp-content/uploads/2021/04/socialpanga-about-gallery1.jpg",
    },
    {
        type: "type2",
        title: "Dedicated Nom Nom Station",
        imgUrl:
            "https://socialpanga.com/wp-content/uploads/2021/04/socialpanga-about-gallery4.jpg",
    },
    {
        type: "type1",
        title: "Housing Mafias of Creativity",
        imgUrl:
            "https://socialpanga.com/wp-content/uploads/2021/04/socialpanga-about-gallery2.jpg",
    },
    {
        type: "type2",
        title: "Peddling Quality Content Only",
        imgUrl:
            "https://socialpanga.com/wp-content/uploads/2021/04/socialpanga-about-gallery5.jpg",
    },
    {
        type: "type1",
        title: "Panga around every corner",
        imgUrl:
            "https://socialpanga.com/wp-content/uploads/2021/04/socialpanga-about-gallery3.jpg",
    },
    {
        type: "type2",
        title: "Uno Rules Us, We Don't Uno Rules",
        imgUrl:
            "https://socialpanga.com/wp-content/uploads/2021/04/socialpanga-about-gallery6.jpg",
    },
];

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

const Connect = () => {
    const flickityRef = useRef(null);

    useEffect(() => {
        if (flickityRef.current) {
            new Flickity(flickityRef.current, {
                cellAlign: "left",
                contain: true,
                autoPlay: 2000, // Set the autoplay interval to 2000ms (2 seconds)
                wrapAround: true, // Allow looping
                prevNextButtons: false, // Remove previous and next buttons
                pageDots: false, // Remove page dots for navigation
                pauseAutoPlayOnHover: true, // Pause autoplay on hover (optional)
            });
        }
    }, []);

    return (
        <section className="py-5 px-[15px] text-black">
            <div className="container mx-auto">
                <div className="flex flex-row-reverse items-center justify-center py-[5rem]">
                    <div className="w-full text-center md:w-[62.88%] pb-[3rem] px-[15px]">
                        <div className="title_wrap">
                            <span className="text-[32px] md:text-[60px] font-bold">
                                Plan, Create and Connect.
                            </span>
                        </div>
                        <div className="text-center wrap pl-[1rem] relative">
                            <p className="py-[1rem] text-[18px] font-semibold">
                                We are an award-winning creative marketing and advertising
                                agency. We ideate, curate and execute marketing strategies to
                                engage with our clients’ intended audience, all while
                                integrating their brand with the digital world.
                            </p>
                            <p className="py-[1rem] text-[18px] font-semibold">
                                We take thoughts for ideas and create remarkable moments. We are
                                always well prepared – with a bunch of crazy people, endless
                                cups of chai and beautiful hideouts in Bengaluru, Delhi and
                                Mumbai.
                            </p>
                            <Link
                                onClick={scrollToTop}
                                to="/services"
                                className="absolute right-[-2%] bottom-[-100px] z-0 bg-[#f8d200] border border-[#f8d200] text-black rounded-full p-[22.5px] flex items-center justify-center box_button"
                            >
                                <img
                                    src="https://socialpanga.com/wp-content/themes/socialpanga/assets/images/svg-icons/arrow-right.svg"
                                    className="w-[42px]"
                                    alt=""
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className="w-full px-0 pt-[3rem]">
                    <div className="w-full outline-none into_gallary">
                        <div className="h-[500px] w-full touch-auto overflow-x-hidden">
                            <div id="page h-full" className="site">
                                <main id="primary" className="h-full site-main about-us_page">
                                    <section className="h-full py-5 container-fluid intro-sec">
                                        <div className="h-full row">
                                            <div className="h-full px-0 pt-5 col-12">
                                                <div
                                                    className="h-full intro-gallery-wrap gallery-slideshow"
                                                    ref={flickityRef}
                                                >
                                                    {galleryItems.map((item, index) => (
                                                        <div
                                                            className="slide slide-gallery-item h-[100%] w-6/12"
                                                            key={index}
                                                        >
                                                            <div
                                                                className={`gallery-item_inn h-full ${item.type}`}
                                                                style={{
                                                                    background: `url(${item.imgUrl}) no-repeat center/cover`,
                                                                }}
                                                            >
                                                                <div className="gallery-content-wrap">
                                                                    <div className="gallery-content">
                                                                        <h3 className="gallery-title">
                                                                            {item.title}
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </main>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Connect;
