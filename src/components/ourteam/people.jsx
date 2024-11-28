import React from "react";
import image_bg from "../../assets/img/ourteam/box-border.svg";


const onwr = [
    {
        id: 1,
        src: image_bg,
        name: "Himanshu Arora",
        post: "Co-Founder",
        blood: "Selling,Customer Delight, Entrepreneurship, Old Bollywood Songs, Cycling, and Talking.",
        wepon: "Phone, Client Emails, Sense of Humour, Killer Beard, Bollywood Movie Situations, etc."
    }, {
        id: 2,
        src: image_bg,
        name: "Himanshu Arora",
        post: "Co-Founder",
        blood: "Selling,Customer Delight, Entrepreneurship, Old Bollywood Songs, Cycling, and Talking.",
        wepon: "Phone, Client Emails, Sense of Humour, Killer Beard, Bollywood Movie Situations, etc."
    }, {
        id: 3,
        src: image_bg,
        name: "Himanshu Arora",
        post: "Co-Founder",
        blood: "Selling,Customer Delight, Entrepreneurship, Old Bollywood Songs, Cycling, and Talking.",
        wepon: "Phone, Client Emails, Sense of Humour, Killer Beard, Bollywood Movie Situations, etc."
    }, {
        id: 4,
        src: image_bg,
        name: "Himanshu Arora",
        post: "Co-Founder",
        blood: "Selling,Customer Delight, Entrepreneurship, Old Bollywood Songs, Cycling, and Talking.",
        wepon: "Phone, Client Emails, Sense of Humour, Killer Beard, Bollywood Movie Situations, etc."
    }, {
        id: 5,
        src: image_bg,
        name: "Himanshu Arora",
        post: "Co-Founder",
        blood: "Selling,Customer Delight, Entrepreneurship, Old Bollywood Songs, Cycling, and Talking.",
        wepon: "Phone, Client Emails, Sense of Humour, Killer Beard, Bollywood Movie Situations, etc."
    }, {
        id: 6,
        src: image_bg,
        name: "Himanshu Arora",
        post: "Co-Founder",
        blood: "Selling,Customer Delight, Entrepreneurship, Old Bollywood Songs, Cycling, and Talking.",
        wepon: "Phone, Client Emails, Sense of Humour, Killer Beard, Bollywood Movie Situations, etc."
    },
]

const People = () => {
    return (
        <div className="py-[3rem]">
            {/* <div className="container mx-auto"> */}

            {/* </div> */}
            <div className="flex items-center flex-wrap mx-auto px-[0px] md:px-[3rem] w-full md:w-[1200px] min-h-screen ">
                {onwr.map((item, id) => {
                    return (
                        <div className="w-full md:w-4/12 px-[15px] pb-[1rem] bg-white" key={id} >
                            {/* Profile Image Section */}
                            <div className="w-full ownrwe_img">
                                <img
                                    src='https://socialpanga.com/wp-content/uploads/2021/06/Shreyas_Kashyap.jpg'
                                    className="w-full"
                                    alt=""
                                />
                            </div>

                            {/* Content Section */}
                            <div className="pt-[1rem] text-left ">
                                <h1 className="text-xl font-bold"> {item.name} </h1>
                                <p className="mb-4 text-gray-500"> {item.post} </p>
                                <p className="text-sm font-semibold">
                                    <span className="text-gray-800">Blood Group:</span> {item.blood}
                                </p>
                                <p className="mt-2 text-sm font-semibold">
                                    <span className="text-gray-800">Weapons:</span> {item.wepon}
                                </p>
                            </div>

                            {/* Next Button */}
                            <div className="py-4 text-center">
                                <button className="relative w-full font-bold text-blue-500 text-[24px]">
                                    next
                                    <img
                                        src={image_bg}
                                        className="h-[53px] top-[-25%] absolute w-full"
                                        alt=""
                                    />
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default People;
