// import React from 'react'

// const Position = () => {
//     return (
//         <div className='pt-[3rem]' >
// <div className="container mx-auto py-[3rem] data_cla">
//     <div className="flex flex-wrap w-full mx-auto lg:w-10/12 ">
//         <div className="w-full">
//             <div className="text-center">
//                 <h1 className='pb-[3rem] md:text-[48px] font-extrabold capitalize ' >open positions</h1>
//             </div>
//         </div>
//     </div>
// </div>
//         </div>
//     )
// }

// export default Position

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./modal";
const Ourworkapge = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [isModelopen, setismodelopen] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);
    const handleApplyClick = (job) => {
        setSelectedJob(job); // Set the selected job object
        setismodelopen(true);
    };
    const filterImages = (category) => {
        if (category === "all") return images;
        return images.filter((image) => image.category === category);
    };

    // Handle category change
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };


    // Sample images data
    const images = [

        {
            "id": 1,
            "category": "bengaluru",
            "position": "Motion Graphics Artist",
            "experience": "0-1 year",
            "type": "Full Time",
            "department": "Design",
            "description": {
                "summary": "An opportunity to work in an exciting and passionate environment in the field of social media marketing, with a focus on creativity, design, and execution.",
                "quote": "Do you want to sell sugar water for the rest of your life, or do you want to come with me and change the world?",
                "pitch": "Join Social Panga and work with passionate individuals to change the world of social media marketing."
            },
            "responsibilities": [
                "Proficient in Adobe After Effects, Premiere, Photoshop, and Illustrator.",
                "Create storyboards from scratch based on concepts and scripts.",
                "Animate storyboards and collaborate with others.",
                "Follow industry trends to remain creative in animation and design.",
                "Manage multiple projects and meet tight deadlines.",
                "Deliver high-quality 2D motion graphics and animations."
            ],
            "requirements": {
                "experience": "1-2 years in the industry producing 2D motion graphics/animations.",
                "skills": [
                    "Strong design sensibilities.",
                    "Ability to conceptualize and execute creative directions.",
                    "Quick understanding of briefs.",
                    "Proficient in producing storyboards and animations."
                ],
                "portfolio": "An excellent showreel showcasing a range of work with different brands."
            },
            "must_have_attributes": [
                "Intelligent and articulate.",
                "Fresh perspectives.",
                "T-shaped skills.",
                "Passion for craftsmanship.",
                "Dedication to hard work and grit."
            ],
            "advantages": [
                "Work with a passionate and creative team.",
                "Relaxed office environment with no cubicles or dress codes.",
                "Appreciation for work-life balance and social gatherings.",
                "Opportunities for growth in a young, fast-growing company."
            ]
        },
        {
            "id": 2,
            "category": "delhi",
            "position": "Brand Solutions Manager",
            "experience": "1-3 years",
            "type": "Full Time",
            "department": "Marketing",
            "description": {
                "summary": "An opportunity to manage and create social media campaigns, engage with clients, and contribute to the growth of innovative brand communication.",
                "quote": "Do you want to sell sugar water for the rest of your life, or do you want to come with me and change the world?",
                "pitch": "Join Social Panga to work with passionate individuals and change the world of social media marketing."
            },
            "responsibilities": [
                "Manage accounts, gather requirements, monitor feedback, and optimize engagement.",
                "Plan and execute monthly campaign calendars, schedule posts, and manage Facebook page boosts.",
                "Create and execute paid campaigns across various social media platforms.",
                "Develop and compile content for platforms like Facebook, Twitter, LinkedIn, Instagram, Pinterest, YouTube, and blogs.",
                "Collaborate with design teams to create and use creative content as per account requirements.",
                "Strategize and execute blogger outreach programs."
            ],
            "requirements": {
                "experience": "1-3 years in account, campaign, and content management.",
                "skills": [
                    "Excellent oral and written communication.",
                    "Strong soft skills for client interaction, including briefings and feedback sessions.",
                    "Proficiency in copy and content writing for various marketing collateral.",
                    "Expertise in social media platforms such as Facebook, Twitter, LinkedIn, and YouTube.",
                    "Strong time management to meet multiple deadlines.",
                    "Creative thinking for innovative brand communication strategies."
                ]
            },
            "must_have_attributes": [
                "Strong communication and writing skills.",
                "Ability to manage deadlines effectively.",
                "Proficiency in social media platforms.",
                "Creative and out-of-the-box thinking."
            ],
            "advantages": [
                "Work with a team passionate about communication and content.",
                "Relaxed office environment with no cubicles or dress codes.",
                "Appreciation for work-life balance and social outings.",
                "Opportunities for growth in a young and fast-growing company."
            ]
        }

        ,
        {
            "id": 3,
            "category": "mumbai",
            "position": "Senior Graphic Designer",
            "experience": "3-4 years",
            "type": "Full Time",
            "department": "Design",
            "description": {
                "summary": "Looking for a Senior Graphic Designer passionate about typography, colors, and creative design to bring stunning visuals to digital and print media campaigns.",
                "pitch": "Join Social Panga to unleash your creativity and collaborate on innovative design solutions for client content and strategies."
            },
            "responsibilities": [
                "Brainstorm with the copy team to generate ideas and concepts.",
                "Understand client business needs and develop design concepts to suit their purpose.",
                "Submit rough layouts for approval and obtain client feedback.",
                "Think creatively to produce innovative ideas and concepts.",
                "Present finalized ideas and concepts to clients or account managers.",
                "Stay updated on emerging technologies, particularly Adobe Suite programs.",
                "Work with a wide range of media to create engaging designs.",
                "Design layouts, concepts, and sample materials using layout principles and aesthetic design.",
                "Develop interactive designs, graphics, and layouts for various products, logos, and websites.",
                "Determine appropriate arrangements, font styles, and sizes for illustrative and textual content."
            ],
            "requirements": {
                "experience": "Minimum 3+ years in graphic design.",
                "skills": [
                    "Ability to translate spoken or written ideas into compelling designs.",
                    "Proficiency in creating illustrations, logos, and other designs using software.",
                    "Expertise in selecting appropriate colors, layouts, and typography.",
                    "A keen eye for aesthetics and color palettes."
                ]
            },
            "must_have_attributes": [
                "Creative thinking and conceptualization skills.",
                "Strong proficiency with design tools and software.",
                "Attention to detail in layouts and designs.",
                "A strong portfolio demonstrating diverse design work."
            ],
            "advantages": [
                "Collaborate with a team passionate about design and branding.",
                "Work in a creative, non-traditional office environment.",
                "Enjoy work-life balance with social outings and team bonding activities.",
                "Opportunities for growth in a fast-paced and dynamic company."
            ]
        }

    ];

    return (
        <>
            <div className="pt-[105px] data_cla">
                <div className="container mx-auto lg:max-w-[71.25rem] pt-[1.5rem] pb-[1rem]">
                    <div className="container mx-auto py-[1rem] data_cla">
                        <div className="flex flex-wrap w-full mx-auto lg:w-10/12 ">
                            <div className="w-full">
                                <div className="text-center">
                                    <h1 className='pb-[1rem] text-[24px] md:text-[48px] font-extrabold capitalize ' >open positions</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full mx-auto">
                    <div className="gallery-container">
                        {/* Filter Buttons */}
                        <div className="container mx-auto">
                            <div className="block text-center mb-[40px] mt-[20px] px-[32px] cursor-pointer">
                                {["bengaluru", "mumbai", "delhi"].map((category) => (
                                    <button
                                        key={category}
                                        className={`group px-[7px] my-[10px] mr-[10px] sm:mr-[40px] font-bold capitalize text-[12px] sm:text-[20px] hover:text-[#cc121c] hover:border-b-2 hover:border-[#cc121c] ${selectedCategory === category ? 'text-[#cc121c] border-b-2 border-[#cc121c]' : ''}`}
                                        onClick={() => handleCategoryChange(category)}
                                    >
                                        <span className="after:w-0 group-hover:after:w-full super_font">{category}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Displaying Filtered Images */}
                        <div className="flex w-full lg:w-[1400px] px-[15px] mx-auto flex-wrap gallery-images">

                            {filterImages(selectedCategory).map((images) => (
                                <div className="py-[10px] border-b-2 border-[#b5b5b5] w-full mb-[21px] relative " key={images.id} >
                                    <div className="w-full heading text-[16px] sm:text-[24px] font-extrabold leading-[1.2] mb-0 ">
                                        <span>{images.position} {`(${images.experience})`} </span>
                                    </div>
                                    <p className="text-[14px] sm:text-[16px] inline-block capitalize mr-[10px] mb-[1rem]" >{images.type}</p>
                                    <p className="text-[14px] sm:text-[16px] inline-block capitalize mr-[10px] mb-[1rem] leading-none ">
                                        <span className="text-[24px] leading-[1.2] font-extrabold " >•</span>
                                        {images.department}
                                    </p>
                                    <Link onClick={() => handleApplyClick(images)} className="relative w-[67%] items-center  sm:w-[210px] sm:absolute   sm:right-[20px] text-[15px] sm:text-[20px] z-10 font-extrabold bg-[#e1bb08] py-[10px] px-[30px] leading-none rounded-[25px] sm:top-[20px] flex  hover:bg-[#f8d200]  " >
                                        Apply now
                                        <img className="w-[25px] ml-2 h-[25px]" src="https://socialpanga.com/wp-content/themes/socialpanga/assets/images/svg-icons/arrow-right.svg" alt="" />
                                    </Link>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={isModelopen}
                onClose={() => setismodelopen(false)}
                job={selectedJob} // Pass the selected job object to the modal
            />
        </>
    );
};

export default Ourworkapge;