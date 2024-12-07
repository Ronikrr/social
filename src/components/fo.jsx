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
//                 autoPlay: 2000, // Set the autoplay interval to 2000ms (2 seconds)
//                 wrapAround: true, // Allow looping
//                 prevNextButtons: false, // Remove previous and next buttons
//                 pageDots: false, // Remove page dots for navigation
//                 pauseAutoPlayOnHover: true, // Pause autoplay on hover (optional)
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
//                                                                 className={`gallery-item_inn even:w-6/12 odd:w-full aspect-auto object-contain h-full ${item.type}`}
//                                                                 style={{
//                                                                     background: `url(${item.imgUrl}) no-repeat center/contain`,
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

// import React, { useEffect, useRef } from "react";
// import Award_2 from "../../assets/img/award-bg-new.svg";
// import Award_1 from "../../assets/img/award-bg-mob-new.svg";
// import Monkey_glass from "../../assets/img/award-monkey-glass.svg";
// import Monkey from "../../assets/img/monkys1.svg";

// import Award_imge1 from '../../assets/img/Awards-image1.png'
// // import Award_imge2 from '../../assets/img/Awards-image2.png'
// // import Award_imge3 from '../../assets/img/Awards-image3.png'
// // import Award_imge4 from '../../assets/img/Awards-image4.png'
// // import Award_imge5 from '../../assets/img/Awards-image5.png'
// // import Award_imge6 from '../../assets/img/Awards-image6.png'
// // import Award_imge7 from '../../assets/img/Awards-image7.png'
// import Award_imge8 from '../../assets/img/Awards-image8.png'
// // import Award_imge9 from '../../assets/img/Awards-image9.png'
// // import Award_imge10 from '../../assets/img/Awards-image10.png'
// // import Award_imge11 from '../../assets/img/Awards-image11.png'
// import man from '../../assets/img/award-man.svg'
// import gsap from 'gsap';
// import award_logo from '../../assets/img/Awards-Manipal-logo.png'
// import man_glass from '../../assets/img/award-man-glass.svg'
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Flickity from 'flickity';
// gsap.registerPlugin(ScrollTrigger);

// const Slider_box = () => {
//     // const [currentindex, setcurrntindex] = useState(0)
//     const manGlassRefs = useRef([]);
//     const monkeyGlassRefs = useRef([]);
//     const flickityRef = useRef(null); // Ref for the Flickity instance

//     // Track if the section is in view


//     useEffect(() => {
//         // Ensure manGlassRefs is an array and not undefined
//         const revealManG = manGlassRefs.current;

//         revealManG.forEach((text, i) => {
//             ScrollTrigger.create({
//                 trigger: text,
//                 toggleClass: 'active',
//                 start: 'bottom 80%',
//                 // Uncomment and adjust `end` if necessary
//                 end: 'top 30%',
//                 marker: true
//             });
//         });

//         return () => {
//             // Cleanup ScrollTriggers on component unmount
//             ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//         };
//     }, []);

//     useEffect(() => {
//         const revealMonkeyG = monkeyGlassRefs.current;
//         revealMonkeyG.forEach((text, i) => {
//             ScrollTrigger.create({
//                 trigger: text,
//                 toggleClass: 'active',
//                 start: 'top 50%',
//             });
//         });

//         return () => {
//             ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//         };
//     }, []);

//     useEffect(() => {
//         // Initialize Flickity
//         const flkty = new Flickity(flickityRef.current, {
//             cellAlign: 'left',
//             contain: true,
//             wrapAround: true,
//             autoPlay: true,
//             prevNextButtons: true,
//             pageDots: false,
//         });

//         return () => {
//             flkty.destroy(); // Cleanup Flickity instance on unmount
//         };
//     }, []);

//     const slide_data = [
//         {
//             id: 1,
//             heading: "Nothing Short(y)  of Amazing!",
//             src: Award_imge1,
//             head_name: 'SHORTYS 23',
//             dis_head: 'Audience Honour -',
//             dis: 'Physical & Digital Convergence',
//             logo: award_logo,
//         }, {
//             id: 2,
//             heading: "Nothing Short(y)  of Amazing!",
//             src: Award_imge1,
//             head_name: 'SHORTYS 23',
//             dis_head: 'Audience Honour -',
//             dis: 'Physical & Digital Convergence',
//             logo: award_logo,
//         },
//     ];

//     return (
//         <section id="slider-section" className="h-full relative md:pt-[100px]">
//             <div className="absolute imges_calss -z-10 w-[95%] lg:w-[100%] xl:w-[95%] 2xl:w-[95%] top-[-15%] md:top-[15%] 2xl:top-[55%] xl:top-[60%] xl:left-[50%] lg:top-[5%] left-[3%] lg:left-[0%] h-full cratives">
//                 <img src={Award_2} className="bg_box" alt="Award Background 2" />
//                 <img src={Award_1} className="bg_box_thow" alt="Award Background 1" />
//             </div>
//             <div className="container relative h-full mx-auto">
//                 <div className="flex flex-col items-center justify-center w-full h-full mx-auto">
//                         {/* <div ref={flickityRef} className="flex carousel "> */}
//                         <div className="carousel-cell" >
//                             {slide_data.map((slide) => (
//     <div className="flex justify-center w-full lg:w-10/12">
//             <div className="flex flex-wrap w-full" key={slide.id} >
//                 <div className="flex-row items-start justify-center w-full pt-10 pb-0 pl-10 pr-10 desktop_lenth">
//                     <div className="w-6/12">
//                         <div className="pt-[10vw] pl-[50px] text-left h-full">
//                             <span className="text-[2.8rem] font-extrabold text-[#030200]">{slide.heading}</span>
//                         </div>
//                     </div>
//                 <div className="flex justify-center w-6/12">
//                     <div className="w-full">
//                         <img src={slide.src} className="w-full h-full object-fit" alt="Nothing Short(y) of Amazing!" />
//                     </div>
//                 </div>
//             </div>
//             <div className="desktop_lenth flex-col box_data space-y-6 px-[100px] w-full pb-[100px] h-full">
//                 <div className="w-4/12">
//                     <span>{slide.head_name}</span>
//                 </div>
//                 <div className="w-4/12">
//                     <h6>{slide.dis_head}</h6>
//                     <span>{slide.dis}</span>
//                 </div>
//                 <div className="w-4/12">
//                     <img src={slide.logo} className="w-[100px]" alt="" />
//                 </div>
//                 <div className="w- 4/12"></div>
//             </div>
//         </div>
// </div>
//                         ))}
//                         </div>
//                         {/* </div> */}
//                     <div className="absolute monky w-[30vw] md:w-[17vw] lg:w-[17vw] md:top-[5%] top-[-15%] lg:top-[0] left-[-1.8vw] md:left-[-5vw] lg:left-[0.5vw] z-10">
//                         <img src={Monkey} className="w-full" alt="Monkey Image" />
//                         <img
//                             src={Monkey_glass}
//                             ref={el => monkeyGlassRefs.current[1] = el}
//                             className="absolute w-[21%] monky active top-[27%] left-[30.5%] translate-y-0"
//                             alt="Monkey Glass"
//                         />
//                     </div>
//                     <div className="absolute man_glass w-[30.1vw] md:w-[17vw] lg:w-[17vw] bottom-[-8.2vw] md:bottom-[6.0vw] lg:bottom-[2.35vw] right-0 md:right-[-3.5vw] lg:right-[0.5vw] z-10">
//                         <img src={man} className="w-full" alt="Man Image" />
//                         <img
//                             src={man_glass}
//                             ref={el => manGlassRefs.current[1] = el}
//                             className="absolute w-[40%] man_glass active bottom-[62%] right-[15%] translate-y-0"
//                             alt="Man Glass"
//                         />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Slider_box;