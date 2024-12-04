import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sliderdata = () => {
    const [currentslide, setcurrentsilde] = useState(0);
    const [activeindex, setactiveindeax] = useState(null);

    const slides = [
        {
            text: "kitkat",
            sub_text: "kitkat",
            image: "https://socialpanga.com/wp-content/uploads/2024/03/KITKAT.png",
            images:
                "https://socialpanga.com/wp-content/uploads/2024/03/Kitkat-Thumbnail-1.jpeg",
        },
        {
            text: "manipal hospital",
            sub_text: "manipal-doctors-day",
            image: "https://socialpanga.com/wp-content/uploads/2021/07/Juski_UI.jpg",
            images: "https://socialpanga.com/wp-content/uploads/2021/07/manipal.png",
        },
        {
            text: "lifestyle",
            sub_text: 'life-style-performance-marketing',
            image:
                "https://socialpanga.com/wp-content/uploads/2021/04/SP-website-design-project-0328.png",
            images:
                "https://socialpanga.com/wp-content/uploads/2020/12/SP-HomePage-Design-Images-11.jpg",
        },
        {
            text: "bengaluru airport",
            sub_text: "bengaluru-airport",
            image:
                "https://socialpanga.com/wp-content/uploads/2021/04/SP-website-design-project-0338.png",
            images:
                "https://socialpanga.com/wp-content/uploads/2021/04/bengaluru.png",
        },
        {
            text: "mamaearth",
            sub_text: "mama-earth",
            image:
                "https://socialpanga.com/wp-content/uploads/2021/07/SP_Shoot-thumbnail-03-1.png",
            images:
                "https://socialpanga.com/wp-content/uploads/2021/07/MamaEarth_LeftSide-1.jpg",
        },
        {
            text: "tata health",
            sub_text: "tata_health",
            image: "https://socialpanga.com/wp-content/uploads/2021/08/05.png",
            images: "https://socialpanga.com/wp-content/uploads/2021/08/tint.png",
        },
        {
            text: "pepperfry",
            sub_text: "pepperfry-wow-womania",
            image:
                "https://socialpanga.com/wp-content/uploads/2021/06/Pepperfry_CaseStudy.png",
            images:
                "https://socialpanga.com/wp-content/uploads/2021/04/SP-HomePage-Design-Images-09.jpg",
        },
        {
            text: "curefit",
            sub_text: "curefit-interactive-experience",
            image:
                "https://socialpanga.com/wp-content/uploads/2021/06/SP-website-design-project-0337.png",
            images:
                "https://socialpanga.com/wp-content/uploads/2021/02/cult-featured-large.jpg",
        },
    ];
    const handletextclick = (index) => {
        setcurrentsilde(index);
        setactiveindeax(index === activeindex ? null : index);
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <section className="slidertext">
            <div className="flex flex-wrap items-center w-full h-full">
                <div className="flex flex-col items-center justify-center h-full w-full md:w-6/12 py-[35px] md:py-[100px] px-[50px]  md:px-[180px] relative ">
                    <img
                        src={slides[currentslide].images}
                        className="absolute z-0 object-cover w-full h-full opacity-100 aspect-square "
                        alt=""
                    />
                    <div className="bg-[#00000080] absolute z-10 w-full h-full"></div>
                    {slides.map((slide, index) => (
                        <Link
                            key={index}
                            onClick={() => handletextclick(index)}
                            className={`slider-text text-stroke uppercase cursor-pointer text-[36px] text-[#fff] font-extrabold w-full text-center rounded-sm z-40 
            ${activeindex === index ? "active" : ""}`}
                        >
                            {slide.text}
                        </Link>
                    ))}
                </div>
                <div className="flex flex-col items-center justify-center w-full md:w-6/12">
                    <div className="head py-[35px] md:py-[75px] px-[50px]  md:px-[180px">
                        <div className="text-center head_text">
                            <span className="text-center text-[32px] font-bold leading-3 text-[#f8d200] uppercase">
                                {slides[currentslide].text}
                            </span>
                            <Link onClick={scrollToTop} to={`/ourwork/${slides[currentslide].sub_text}`} > <img
                                src={slides[currentslide].image}
                                className=" w-full h-full md:h-[400px] block mt-[20px]"
                                alt={slides[currentslide].text}
                            /></Link>
                        </div>
                        <div className="text-center pt-[15px] head_text">
                            <span className="text-center text-[32px] font-bold leading-3 text-[#f8d200] uppercase">
                                {slides[currentslide].text}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sliderdata;
