import React from "react";
import img from "../assets/howto/Asset 3@4x 4.png";
import img1 from "../assets/howto/Asset 9@4x 1.png";
import img2 from "../assets/howto/BPH@4x 3.png";
import img3 from "../assets/howto/Group 450.png";
import img4 from "../assets/howto/scc 1.png";
import img5 from "../assets/client/Pragati@4x.png";
import img6 from '../assets/client/Asset 2@4x.png'
import img7 from '../assets/client/Star-Round@4x.png'

const images = [img, img2, img4, img1, img3, img5, img6, img7];

const Havealook = () => {
    return (
        <section className="relative w-full pt-0 pb-10 overflow-hidden bg-white">
            <div className="container mx-auto mt-10">
                <div className="flex flex-col justify-center text-center">
                    <h1 className="text-xl font-bold goblin_one_regular sm:text-[35px] mb-2">Have a Look</h1>
                    <div className="mx-auto w-full md:w-[800px] relative mb-8">
                        <div className="absolute hidden md:block bg-black w-[170px] h-[1px] top-[50%] left-[16%]"></div>
                        <p className="text-base sm:text-[18px] poppins_thin  text-[#ef4523]">“We’re Working with”</p>
                        <div className="absolute hidden md:block bg-black w-[170px] h-[1px] top-[50%] right-[16%]"></div>
                    </div>
                </div>

                {/* Image Slider Container */}
                <div className="relative w-full py-10 overflow-hidden">
                    <div className="flex items-center gap-8 slider-track">
                        <div className="flex items-center gap-[50px]">
                            {images.concat(images).map((src, index) => (
                                <div key={index} className="w-[100px] h-[100px] flex-shrink-0">
                                    <img src={src} className="object-contain w-full h-full" alt="Brand" />
                                </div>
                            ))}  {images.concat(images).map((src, index) => (
                                <div key={index} className="w-[100px] h-[100px] flex-shrink-0">
                                    <img src={src} className="object-contain w-full h-full" alt="Brand" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Animation Style */}
            <style>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .slider-track {
                    display: flex;
                    white-space: nowrap;
                    width: max-content;
                    animation: scroll 20s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default Havealook;
