import React, { useState } from "react";

const Ourworkapge = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");

    // Function to filter images based on selected category
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
        { id: 1, text: "ronik", category: "2019" },
        { id: 2, text: "ronik", category: "2020" },
        { id: 3, text: "ronik", category: "2021" },
        { id: 4, text: "ronik", category: "2022" },
        { id: 5, text: "ronik", category: "2023" },
        { id: 6, text: "ronik", category: "2024" },
        { id: 7, text: "ronik", category: "2019" },
        { id: 8, text: "ronik", category: "2020" },
        { id: 9, text: "ronik", category: "2021" },
        { id: 10, text: "ronik", category: "2022" },
        { id: 11, text: "ronik", category: "2023" },
        { id: 12, text: "ronik", category: "2024" },
        { id: 13, text: "ronik", category: "2019" },
        { id: 14, text: "ronik", category: "2020" },
        { id: 15, text: "ronik", category: "2021" },
        { id: 16, text: "ronik", category: "2022" },
        { id: 17, text: "ronik", category: "2023" },
        { id: 18, text: "ronik", category: "2024" },
    ];

    // A utility function to check if the category is selected
    const isSelected = (category) => selectedCategory === category;

    return (
        <div className="py-[105px] data_cla">
            <div className="w-full mx-auto">
                <div className="gallery-container">
                    {/* Filter Buttons */}
                    <div className="container mx-auto">
                        <div className="block text-center mb-[40px] mt-[20px] px-[32px] cursor-pointer">
                            {/* Apply a dynamic class for the active category */}
                            {["all", "2024", "2023", "2021", "2020", "2019"].map((category) => (
                                <button
                                    key={category}
                                    className={`group px-[7px] hover:border-b-2 hover:border-red-500 hover:text-red-500 font-bold uppercase text-[20px] ${isSelected(category) ? "text-red-500 border-b-2 border-red-500" : ""}`}
                                    onClick={() => handleCategoryChange(category)}
                                >
                                    <span className="after:w-0 group-hover:after:w-full super_font">{category}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Displaying Filtered Images */}
                    <div className="flex w-full lg:w-[1440px] mx-auto flex-wrap gallery-images">
                        {filterImages(selectedCategory).map((data) => (
                            <div
                                key={data.id}
                                className="image-item w-full text-center md:w-[33.33%] flex justify-center mb-[25px] text-[20px] space-x-3"
                            >
                                <span>{data.id}</span> <i className="bi bi-x-lg"></i>
                                <span className="font-bold">{data.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ourworkapge;
