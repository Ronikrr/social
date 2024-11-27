import React, { useState, useEffect } from "react";
import Slider_data_1 from "../../assets/img/awards/1-1.jpg"
import Slider_data_2 from "../../assets/img/awards/2-1.jpg"
import Slider_data_3 from "../../assets/img/awards/3-1.jpg"
import Slider_data_4 from "../../assets/img/awards/4-1.jpg"
import Slider_data_5 from "../../assets/img/awards/5-1.jpg"
const Slider = () => {
    const images = [
        Slider_data_1,
        Slider_data_2,
        Slider_data_3, // Replace with your image paths
        Slider_data_4, // Replace with your image paths
        Slider_data_5, // Replace with your image paths
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const autoSlide = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // 1000ms = 1 second

        return () => clearInterval(autoSlide); // Cleanup interval on component unmount
    }, [images.length]);


    return (
        <div className="relative w-full overflow-hidden">
            <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <div className="min-w-full" key={index}>
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-auto"
                        />
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Slider;
