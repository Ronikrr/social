import React from 'react';

const SectionHeader = ({
    title,
    subtitle,
}) => {
    return (
        <div className={`flex flex-col justify-center text-center `}>
            <h1 className="text-[20px] sm:text-[35px] goblin_one_regular">{title}</h1>

            <div className="mx-auto w-full md:w-[600px] relative mb-[25px] lg:mb-[75px]">
                <div className="flex items-center justify-center mx-auto w-full md:w-[600px] mb-[25px] lg:mb-[75px]">
                    {/* Left Line */}
                    <div className="hidden md:block flex-grow h-[1px] bg-black mx-[10px]" />

                    {/* Center Text */}
                    <p className="text-[20px] sm:text-[24px] poppins_thin text-[#ef4523] text-nowrap">
                        {subtitle}
                    </p>

                    {/* Right Line */}
                    <div className="hidden md:block flex-grow h-[1px] bg-black mx-[10px]" />
                </div>

            </div>
        </div>
    );
};

export default SectionHeader;
