import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img from '../assets/howto/Asset 3@4x 4.png';
import img1 from '../assets/howto/Asset 9@4x 1.png';
import img2 from '../assets/howto/BPH@4x 3.png';
import img3 from '../assets/howto/Group 450.png';
import img4 from '../assets/howto/scc 1.png';
import img5 from '../assets/client/Pragati@4x.png'

const Havealook = () => {
    const images = [
        { id: 1, src: img },
        { id: 2, src: img2 },
        { id: 3, src: img4 },
        { id: 4, src: img1 },
        { id: 5, src: img3 },
        { id: 6, src: img5 }
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className="banner relative pt-[0px] pb-[50px] h-full lg:pb-[50px] lg:pt-0 w-full">
            <div className="container mx-auto mt-[50px]">
                <div className="flex flex-col justify-center text-center head">
                    <h1 className="text-[20px] sm:text-[50px] goblin_one_regular">Have a Look</h1>
                    <div className="mx-auto w-full md:w-[800px] relative mb-[50px]">
                        <div className="absolute hidden md:block bg-black w-[170px] h-[1px] top-[50%] left-[10%] z-50"></div>
                        <p className="text-[20px] sm:text-[25px] poppins_thin text-[#ef4523]">“We’re Working with”</p>
                        <div className="absolute hidden md:block bg-black w-[170px] h-[1px] top-[50%] right-[10%] z-50"></div>
                    </div>
                </div>
                <div className="w-full mx-auto py-[25px]">
                    <Slider {...settings}>
                        {images.map((data) => (
                            <div key={data.id} className="flex justify-center">
                                <img src={data.src} className='object-contain w-full h-[60px] aspect-video' alt="" />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Havealook;
