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

import React from 'react';
import Slider from 'react-slick';
import slider_image_01 from '../../assets/img/clients/Icons-13 (1).jpg'
// Slick settings
const settings = {
    infinite: false,
    slidesToShow: 3,  // Number of slides to display at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    arrows: false,      // Display arrows
    dots: false,        // Display dots
    autoplay: true,    // Enable autoplay
    autoplaySpeed: 2000, // Speed of autoplay
    responsive: [
        {
            breakpoint: 1024, // Adjust settings for screens less than 1024px
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true,
                dots: true
            }
        },
        {
            breakpoint: 600, // Adjust settings for screens less than 600px
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const SliderComponent = () => {
    return (
        <div className="container py-10 mx-auto">
            <Slider {...settings}>
                <div className="flex flex-wrap w-full">
                    <div className="w-full">
                        <img src={slider_image_01} alt="Slide 1" className="w-full h-auto rounded-lg" />
                    </div>
                    <div className="w-full">
                        <img src={slider_image_01} alt="Slide 2" className="w-full h-auto rounded-lg" />
                    </div>
                    <div className="w-full">
                        <img src={slider_image_01} alt="Slide 3" className="w-full h-auto rounded-lg" />
                    </div>
                    <div className="w-full">
                        <img src={slider_image_01} alt="Slide 4" className="w-full h-auto rounded-lg" />
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default SliderComponent;
