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


