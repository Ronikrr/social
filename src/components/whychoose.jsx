// import React from 'react';
// import boy_3 from '../assets/banner/rb_86609.png';
// import plus from '../assets/banner/image 178.png';
// import box from '../assets/New folder/boxes (1).png'
// const Whychoose = () => {
//     return (
//         <section className="banner relative  py-[25px] lg:py-[100px] w-full ">
//             <div className="absolute w-full h-[200vh] -z-10">
//                 <img src={box} className="w-full h-full -rotate-6" alt="" />
//             </div>
//             <div className="container mx-auto">
//                 {/* Heading Section */}
//                 <div className="flex flex-col justify-center text-center head">
//                     <h1 className="text-[20px] sm:text-[50px] goblin_one_regular">Why Choose Us..!</h1>
//                     <div className="mx-auto w-full md:w-[600px] relative mb-[25px] lg:mb-[75px]">
//                         <div className="absolute hidden md:block bg-black w-[170px] h-[1px] top-[50%] z-50"></div>
//                         <p className="text-[20px] sm:text-[25px] poppins_thin text-[#ef4523]">"Why Choose BBD ?"</p>
//                         <div className="absolute hidden md:block bg-black w-[170px] h-[1px] top-[50%] right-0 z-50"></div>
//                     </div>
//                 </div>

//                 {/* First Section */}
//                 <div className="flex flex-col relative pb-[50px] lg:pb-[95px] lg:pb-0 xl:absolute xl:left-32 4xl:top-[200px] 4xl:left-[100px] justify-center w-full mx-auto text-center md:w-[436px] h-full lg:h-[506px] head">
//                     <img src={boy_3} className=" xl:w-[300px] xl:h-[365px] 4xl:w-[436px] 4xl:h-[506px]" alt="" />
//                 </div>
//                 <div className="relative my-10 lg:my-0 flex items-center w-full poppins_thin justify-center xl:justify-start lg:pt-[95px]  flex-col sm:flex-row">
//                     <div className="flex flex-col relative right-0  xl:top-[57px] xl:left-[500px] justify-center w-full text-center xl:w-[525px] 2xl:w-[754px] head">
//                         <img src={plus} className="hidden lg:block xl:w-[180px] xl:h-[180px]  2xl:left-0 2xl:w-[306px] sm:w-[106px]  2xl:h-[306px] sm:h-[206px] left-[-40%] lg:left-0 absolute" alt="" />
//                         <h1 className="text-[18px] sm:text-[24px]">✅ Expert Digital Marketers</h1>
//                         <div className="mx-auto w-full md:w-[400px] relative xl:mt-[75px] 2xl:mt-[150px]">
//                             <p className="text-[14px] sm:text-[18px] poppins_thin text-black">Skilled professionals crafting winning <br /> marketing strategies</p>
//                         </div>
//                         <img src={plus} className="hidden lg:block xl:w-[180px] xl:h-[180px]  2xl:right-0 2xl:w-[306px] sm:w-[106px]  2xl:h-[306px] sm:h-[206px] right-[-40%] lg:right-0 absolute" alt="" />
//                     </div>
//                 </div>
//                 <div className="relative my-10 lg:my-20 flex items-center  w-full poppins_thin justify-center xl:justify-end lg:pt-[95px]  flex-col sm:flex-row">
//                     <div className="flex flex-col relative right-0  xl:right-0 2xl:right-[-3%] justify-center w-full text-center xl:w-[525px] 2xl:w-[754px] head">
//                         <img src={plus} className="hidden lg:block xl:w-[180px] xl:h-[180px]  2xl:left-0 2xl:w-[306px] sm:w-[106px]  2xl:h-[306px] sm:h-[206px] left-[-40%] lg:left-0 absolute" alt="" />
//                         <h1 className="text-[18px] sm:text-[24px]">✅ Expert Digital Marketers</h1>
//                         <div className="mx-auto w-full md:w-[400px] relative xl:mt-[75px] 2xl:mt-[150px]">
//                             <p className="text-[14px] sm:text-[18px] poppins_thin text-black">Skilled professionals crafting winning <br /> marketing strategies</p>
//                         </div>
//                         <img src={plus} className="hidden lg:block xl:w-[180px] xl:h-[180px]  2xl:right-0 2xl:w-[306px] sm:w-[106px]  2xl:h-[306px] sm:h-[206px] right-[-40%] lg:right-0 absolute" alt="" />
//                     </div>
//                 </div>
//                 <div className="relative xl:absolute xl:top-[54%]  2xl:top-[52%] top-0 my-10 lg:my-0 flex items-center w-full poppins_thin justify-center xl:justify-start lg:pt-[50px]  flex-col sm:flex-row">
//                     <div className="flex flex-col relative  right-0 xl:left-[10%] xl:left-0 2xl:left-[2.5%]  justify-center w-full text-center xl:w-[525px] 2xl:w-[754px] head">
//                         <img src={plus} className="hidden lg:block xl:w-[180px] xl:h-[180px]  2xl:left-0 2xl:w-[306px] sm:w-[106px]  2xl:h-[306px] sm:h-[206px] left-[-40%] lg:left-0 absolute" alt="" />
//                         <h1 className="text-[18px] sm:text-[24px]">✅ Expert Digital Marketers</h1>
//                         <div className="mx-auto w-full md:w-[400px] relative xl:mt-[75px] 2xl:mt-[150px]">
//                             <p className="text-[14px] sm:text-[18px] poppins_thin text-black">Skilled professionals crafting winning <br /> marketing strategies</p>
//                         </div>
//                         <img src={plus} className="hidden lg:block xl:w-[180px] xl:h-[180px]  2xl:right-0 2xl:w-[306px] sm:w-[106px]  2xl:h-[306px] sm:h-[206px] right-[-40%] lg:right-0 absolute" alt="" />
//                     </div>
//                 </div>
//                 <div className="relative my-10 lg:my-0 flex items-center w-full poppins_thin justify-center xl:justify-center lg:pt-[300px] xl:pt-[200px]  2xl:pt-[300px] flex-col sm:flex-row">
//                     <div className="flex flex-col relative right-0 xl:left-[5%] 2xl:left-[2.8%]   justify-center w-full text-center xl:w-[525px] 2xl:w-[754px] head">
//                         <img src={plus} className="hidden lg:block xl:w-[180px] xl:h-[180px]  2xl:left-0 2xl:w-[306px] sm:w-[106px]  2xl:h-[306px] sm:h-[206px] left-[-40%] lg:left-0 absolute" alt="" />
//                         <h1 className="text-[18px] sm:text-[24px]">✅ Expert Digital Marketers</h1>
//                         <div className="mx-auto w-full md:w-[400px] relative xl:mt-[75px] 2xl:mt-[150px]">
//                             <p className="text-[14px] sm:text-[18px] poppins_thin text-black">Skilled professionals crafting winning <br /> marketing strategies</p>
//                         </div>
//                         <img src={plus} className="hidden lg:block xl:w-[180px] xl:h-[180px]  2xl:right-0 2xl:w-[306px] sm:w-[106px]  2xl:h-[306px] sm:h-[206px] right-[-40%] lg:right-0 absolute" alt="" />
//                     </div>
//                 </div>


//             </div>
//         </section>
//     );
// };

// export default Whychoose;
import React from 'react';
import boy_3 from '../assets/banner/rb_86609.png';
import plus from '../assets/banner/image 178.png';
import box from '../assets/New folder/boxes (1).png';

const WhyChooseItem = ({ title, description, extraClasses = "" }) => {
    return (
        <div className={`relative my-10 lg:my-0 flex items-center w-full poppins_thin justify-center ${extraClasses} flex-col sm:flex-row`}>
            <div className="flex flex-col relative right-0 justify-center w-full text-center xl:w-[525px] 2xl:w-[754px] head">
                <img src={plus} className="hidden lg:block xl:w-[180px] xl:h-[180px] 2xl:w-[306px] sm:w-[106px] 2xl:h-[306px] sm:h-[206px] left-[-40%] lg:left-0 absolute" alt="" />
                <h1 className="text-[18px] sm:text-[24px]">✅ {title}</h1>
                <div className="mx-auto w-full md:w-[400px] relative xl:mt-[75px] 2xl:mt-[150px]">
                    <p className="text-[14px] sm:text-[18px] poppins_thin text-black">{description}</p>
                </div>
                <img src={plus} className="hidden lg:block xl:w-[180px] xl:h-[180px] 2xl:w-[306px] sm:w-[106px] 2xl:h-[306px] sm:h-[206px] right-[-40%] lg:right-0 absolute" alt="" />
            </div>
        </div>
    );
};

const Whychoose = () => {
    return (
        <section className="banner relative py-[25px] lg:py-[100px] w-full">
            <div className="absolute w-full h-[200vh] -z-10">
                <img src={box} className="w-full h-full -rotate-6" alt="Background" />
            </div>
            <div className="container mx-auto">
                {/* Heading Section */}
                <div className="flex flex-col justify-center text-center head">
                    <h1 className="text-[20px] sm:text-[50px] goblin_one_regular">Why Choose Us..!</h1>
                    <div className="mx-auto w-full md:w-[600px] relative mb-[25px] lg:mb-[75px]">
                        <div className="absolute hidden md:block bg-black w-[170px] h-[1px] top-[50%] z-50"></div>
                        <p className="text-[20px] sm:text-[25px] poppins_thin text-[#ef4523]">"Why Choose BBD ?"</p>
                        <div className="absolute hidden md:block bg-black w-[170px] h-[1px] top-[50%] right-0 z-50"></div>
                    </div>
                </div>

                {/* Image Section */}
                <div className="flex flex-col relative pb-[50px] lg:pb-[95px] xl:absolute xl:left-32 4xl:top-[200px] 4xl:left-[100px] justify-center w-full mx-auto text-center md:w-[436px] h-full lg:h-[506px] head">
                    <img src={boy_3} className="xl:w-[300px] xl:h-[365px] 4xl:w-[436px] 4xl:h-[506px]" alt="Boy" />
                </div>

                {/* Dynamic Sections */}
                <WhyChooseItem
                    title="Expert Digital Marketers"
                    description="Skilled professionals crafting winning marketing strategies"
                    extraClasses="xl:justify-center lg:pt-[95px]"
                />

                <WhyChooseItem
                    title="Cutting-Edge Tools"
                    description="Utilizing advanced marketing technologies for the best results"
                    extraClasses="xl:justify-end lg:pt-[150px]"
                />

                <WhyChooseItem
                    title="Customized Strategies"
                    description="Tailored marketing plans that fit your business needs"
                    extraClasses="xl:top-[54%] 2xl:top-[52%] xl:justify-start lg:pt-[50px]"
                />

                <WhyChooseItem
                    title="24/7 Support"
                    description="Dedicated assistance whenever you need it"
                    extraClasses="xl:justify-center lg:pt-[300px] xl:pt-[200px] 2xl:pt-[150px]"
                />
            </div>
        </section>
    );
};

export default Whychoose;

