
// import React from 'react';

// import box from '../assets/New folder/boxes (1).png';

// const WhyChooseItem = ({ title, description, extraClasses = "", subextraClasses = "" }) => {
//     return (
//         <div className={`relative my-10 lg:my-0 flex items-center w-full poppins_thin justify-center ${extraClasses} flex-col sm:flex-row`}>
//             <div className={`flex flex-col relative right-0 justify-center w-full text-center xl:w-[525px] 2xl:w-[754px] ${subextraClasses} head`}>
//                 <img src={"https://www.t3bucket.com/f/0-image178.webp"} className="hidden lg:block xl:w-[180px] xl:h-[180px] 2xl:w-[306px] sm:w-[106px] 2xl:h-[306px] sm:h-[206px] left-[-40%] lg:left-0 absolute" alt="" />
//                 <h1 className="text-[18px] sm:text-[24px]">✅ {title}</h1>
//                 <div className="mx-auto w-full md:w-[400px] xl:w-[300px] 2xl:w-[400px] relative xl:mt-[75px] 2xl:mt-[150px]">
//                     <p className="text-[14px] sm:text-[18px] poppins_thin text-black">{description}</p>
//                 </div>
//                 <img src={"https://www.t3bucket.com/f/0-image178.webp"} className="hidden lg:block xl:w-[180px] xl:h-[180px] 2xl:w-[306px] sm:w-[106px] 2xl:h-[306px] sm:h-[206px] right-[-40%] lg:right-0 absolute" alt="" />
//             </div>
//         </div>
//     );
// };

// const Whychoose = () => {
//     return (
//         <section className="banner relative py-[25px] lg:py-[40px] w-full">
//             <div className="absolute w-full h-[100vh] 2xl:h-[175vh] -z-10">
//                 <img src={box} className="w-full h-full -rotate-6" alt="Background" />
//             </div>
//             <div className="container mx-auto">
//                 {/* Heading Section */}
//                 <div className="flex flex-col justify-center text-center head">
//                     <h1 className="text-[20px] sm:text-[35px] goblin_one_regular">Why Choose Us..!</h1>
//                     <div className="mx-auto w-full md:w-[600px] relative mb-[25px] lg:mb-[75px]">
//                         <div className="absolute hidden md:block bg-black w-[170px] h-[1px] top-[50%] z-50"></div>
//                         <p className="text-[20px] sm:text-[24px] poppins_thin text-[#ef4523]">"Why Choose BBD ?"</p>
//                         <div className="absolute hidden md:block bg-black w-[170px] h-[1px] top-[50%] right-0 z-50"></div>
//                     </div>
//                 </div>

//                 {/* Image Section */}
//                 <div className="flex flex-col relative pb-[50px] lg:pb-[95px] xl:absolute xl:left-32 4xl:top-[200px] 4xl:left-[100px] justify-center w-full mx-auto text-center md:w-[436px] h-full lg:h-[506px] head">
//                     <img src={"https://www.t3bucket.com/f/0-rb_86609.webp"} className="xl:w-[300px] xl:h-[365px] 4xl:w-[436px] 4xl:h-[506px]" alt="Boy" />
//                 </div>

//                 {/* Dynamic Sections */}
//                 <WhyChooseItem
//                     title="Expert Digital Marketers"
//                     description="Skilled professionals crafting winning marketing strategies"
//                     extraClasses="xl:justify-center lg:pt-[95px]"
//                 />

//                 <WhyChooseItem
//                     title="Cutting-Edge Tools"
//                     description="Utilizing advanced marketing technologies for the best results"
//                     extraClasses="xl:justify-end lg:pt-[150px] xl:pt-[80px] 2xl:pt-[150px]"
//                     subextraClasses="xl:mr-[75px] 2xl:mr-0"
//                 />

//                 <WhyChooseItem
//                     title="Customized Strategies"
//                     description="Tailored marketing plans that fit your business needs"
//                     extraClasses="xl:top-[54%] 2xl:top-[52%] xl:justify-start lg:pt-[0px] xl:ml-[75px] 2xl:ml-0"
//                 />

//                 <WhyChooseItem
//                     title="24/7 Support"
//                     description="Dedicated assistance whenever you need it"
//                     extraClasses="xl:justify-center lg:pt-[300px] xl:pt-[80px] 2xl:pt-[150px]"
//                 />
//             </div>
//         </section>
//     );
// };

// export default Whychoose;

import React, { useState, useEffect } from 'react';
import box from '../assets/New folder/boxes (1).png';
import SectionHeader from './extra/SectionHeader';
import { cn } from '../utils/cn';
import bookMan from '../assets/avif/0-rb_86609.webp'

const WhyChooseItem = ({ title, description, extraClasses = "", subextraClasses = "" }) => {
    return (
        <div className={`relative my-10 lg:my-0 flex items-center w-full poppins_thin justify-center ${extraClasses} flex-col sm:flex-row`}>
            <div className={`flex flex-col relative justify-center w-full text-center xl:w-[525px] 2xl:w-[754px] ${subextraClasses} head`}>
                <img
                    src={"https://www.t3bucket.com/f/0-image178.webp"}
                    className="hidden lg:block xl:w-[180px] xl:h-[180px] 2xl:w-[306px] sm:w-[106px] 2xl:h-[306px] sm:h-[206px] left-[-40%] lg:left-0 absolute"
                    alt=""
                />
                <h1 className="text-[18px] sm:text-[24px]">✅ {title}</h1>
                <div className="mx-auto w-full md:w-[400px] xl:w-[300px] 2xl:w-[400px] relative xl:mt-[75px] 2xl:mt-[150px]">
                    <p className="text-[14px] sm:text-[18px] poppins_thin text-black">{description}</p>
                </div>
                <img
                    src={"https://www.t3bucket.com/f/0-image178.webp"}
                    className="hidden lg:block xl:w-[180px] xl:h-[180px] 2xl:w-[306px] sm:w-[106px] 2xl:h-[306px] sm:h-[206px] right-[-40%] lg:right-0 absolute"
                    alt=""
                />
            </div>
        </div>
    );
};

const Whychoose = () => {
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = box;
        img.onload = () => setIsLoaded(true);
    }, []);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // List of features
    const features = [
        { title: "Expert Digital Marketers", description: "Skilled professionals crafting winning marketing strategies", extraClasses: "xl:justify-center lg:pt-[95px]" },
        { title: "Cutting-Edge Tools", description: "Utilizing advanced marketing technologies for the best results", extraClasses: "xl:justify-end lg:pt-[150px] xl:pt-[80px] 2xl:pt-[150px]", subextraClasses: "xl:mr-[75px] 2xl:mr-0" },
        { title: "Customized Strategies", description: "Tailored marketing plans that fit your business needs", extraClasses: "xl:top-[54%] 2xl:top-[52%] xl:justify-start lg:pt-[0px] xl:ml-[75px] 2xl:ml-0" },
        { title: "24/7 Support", description: "Dedicated assistance whenever you need it", extraClasses: "xl:justify-center lg:pt-[300px] xl:pt-[80px] 2xl:pt-[150px]" }
    ];

    return (
        <section className="banner lg:h-screen 2xl:h-full relative py-[25px] lg:py-[40px] w-full">
            {/* Background Image */}
            <div
                className={cn(
                    "absolute inset-0 h-full  w-full lg:w-[250vh]   lg:left-[-10%] lg:h-[200vh] lg:-rotate-6 4xl:h-[90vh] ",
                    "[background-size:40px_40px]",
                    "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                    "dark:[background-image:linear-gradient(to_right,#26262620_1px,transparent_1px),linear-gradient(to_bottom,#26262620_1px,transparent_1px)]",
                )}
            />
            <div className="container mx-auto">
                {/* Heading Section */}

                <SectionHeader
                    title="Why Choose Us..!"
                    subtitle="Why Choose BBD ?"
                />
                {/* Image Section */}
                <div className="flex flex-col relative pb-[50px] lg:pb-[95px] xl:absolute xl:left-32 4xl:top-[200px] 4xl:left-[100px] justify-center w-full mx-auto text-center md:w-[436px] h-full lg:h-[506px] head">
                    <img src={bookMan} loading='lazy' className="xl:w-[300px] xl:h-[365px] 4xl:w-[436px] 4xl:h-[506px]" alt="Boy" />
                </div>

                {/* Dynamic Sections */}
                {features.map((feature, index) => (
                    <WhyChooseItem key={index} {...feature} />
                ))}
            </div>
        </section>
    );
};

export default Whychoose;
