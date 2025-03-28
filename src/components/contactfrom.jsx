// import React from "react";
// import { BiPhoneCall } from "react-icons/bi";
// import { MdOutlineMailOutline } from "react-icons/md";
// import { FaLocationDot } from "react-icons/fa6";
// import img from '../assets/New folder/portrait-businessman-talking-mobile-phone-office.jpg'
// const contact = [
//     {
//         id: 1,
//         icon: <BiPhoneCall className="text-[25px]" />,
//         title: "Call us 24/7",
//         address: "9727168583",
//     },
//     {
//         id: 2,
//         icon: <MdOutlineMailOutline className="text-[25px]" />,
//         title: "Make a Quote",
//         address: "badebazarkadigital@gmail.com",
//     },
//     {
//         id: 3,
//         icon: <FaLocationDot className="text-[25px]" />,
//         title: "Location",
//         address: "103, IT Park, Mota Varachha Main Rd",
//     },
// ];

// const ContactForm = () => {
//     return (
//         <div className=" py-[50px] lg:py-[100px] poppins_thin">
//             <div className="container lg:w-[1500px] px-2 mx-auto">
//                 <div className="flex flex-col items-start lg:flex-row gap-7">
//                     <div className="w-full lg:w-6/12 lg:p-[15px]">
//                         <div className="flex flex-col w-full h-full">
//                             <div className="w-full p-10 bg-orange-600 ">
//                                 {contact.map((item) => (
//                                     <div key={item.id} className="flex flex-col items-center w-full gap-5 py-5 border-b border-white lg:flex-row">
//                                         <div className="flex justify-center items-center text-white w-[50px] h-[50px] border border-white rounded-full">
//                                             {item.icon}
//                                         </div>
//                                         <div className="overflow-hidden text-center lg:text-left ">
//                                             <h5 className="font-bold text-[18px] lg:text-[20px] text-white capitalize">
//                                                 {item.title}
//                                             </h5>
//                                             <p className="text-[16px] text-white">{item.address}</p>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                             <div className="w-full h-[400px]">
//                                 <img src={img} className="object-cover w-full h-full" alt="" />
//                             </div>
//                         </div>
//                     </div>
//                     <div className="w-full lg:w-6/12 lg:p-[15px]">
//                         <div className="w-full h-full mt-[50px] ">
//                             <div className="mb-[30px]">
//                                 <h1 className="font-bold capitalize text-[40px] mb-3" >ready to get started?</h1>
//                                 <p className="text-gray-400" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quasi corporis, deserunt dolores magni repudiandae necessitatibus quos esse voluptate ad laborum, quod doloremque sed quam incidunt laudantium totam aperiam ratione?</p>
//                             </div>
//                             <div className="">
//                                 <from>
//                                     <div className="flex flex-col items-center lg:gap-5 lg:flex-row">

//                                         <div className="flex flex-col w-6/12 w-full ">
//                                             <label className="my-[15px] capitalize" htmlFor="">
//                                                 name
//                                             </label>
//                                             <input type="text" className="px-4 py-2 rounded-xl border w-full  border-[#ef4523] bg-[#f7f7f7]" />
//                                         </div>
//                                         <div className="flex flex-col w-6/12 w-full">
//                                             <label className="my-[15px] capitalize" htmlFor="">
//                                                 email
//                                             </label>
//                                             <input type="text" className="px-4 py-2 rounded-xl border w-full  border-[#ef4523] bg-[#f7f7f7]" />
//                                         </div>
//                                     </div>
//                                     <div className="flex flex-col items-center lg:gap-5 lg:flex-row">
//                                         <div className="flex flex-col w-full">
//                                             <label className="my-[15px] capitalize" htmlFor="">
//                                                 contact number                                            </label>
//                                             <input type="text" className="px-4 py-2 rounded-xl  border w-full   border-[#ef4523] bg-[#f7f7f7]" />
//                                         </div>
//                                         <div className="flex flex-col w-full">
//                                             <label className="my-[15px] capitalize" htmlFor="">
//                                                 subject
//                                             </label>
//                                             <input type="text" className="px-4 py-2 rounded-xl  border w-full   border-[#ef4523] bg-[#f7f7f7]" />
//                                         </div>
//                                     </div>
//                                     <div className="flex flex-col w-full ">
//                                         <label className="my-[15px] capitalize" htmlFor="">
//                                             message
//                                         </label>
//                                         <textarea type="text" className="px-4 py-2 rounded-xl border w-full  border-[#ef4523] bg-[#f7f7f7]" />
//                                     </div>
//                                     <div className="mt-5">
//                                         <button class="bg-[#ef4523] text-[#f7f7f7] border border-[#000000] border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 cursor-pointer hover:border-b active:opacity-75 outline-none duration-300 group capitalize ">
//                                             <span class="bg-[#000000] shadow-[#000000] absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
//                                             send message
//                                         </button>
//                                     </div>
//                                 </from>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="mt-10 w-full h-[400px] lg:h-[500px]">

//                 <iframe
//                     title="WebSolex Infotech Location"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.841972345225!2d72.87119960000001!3d21.234213999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f1bdb2a9af7%3A0xf2671d4491f5d464!2sWebSolex%20Infotech!5e1!3m2!1sen!2sin!4v1740566154024!5m2!1sen!2sin"
//                     width="100%"
//                     height="100%"
//                     style={{ border: 0 }}
//                     allowFullScreen
//                     className="filter brightness-70 contrast-100 "
//                     loading="lazy"
//                     referrerPolicy="no-referrer-when-downgrade"
//                 ></iframe>
//             </div>
//         </div>
//     );
// };

// export default ContactForm;
import React, { useState } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import img from '../assets/New folder/portrait-businessman-talking-mobile-phone-office.jpg';

const contact = [
    { id: 1, icon: <BiPhoneCall className="text-[25px]" />, title: "Call us 24/7", address: "9727168583" },
    { id: 2, icon: <MdOutlineMailOutline className="text-[25px]" />, title: "Make a Quote", address: "badebazarkadigital@gmail.com" },
    { id: 3, icon: <FaLocationDot className="text-[25px]" />, title: "Location", address: "103, IT Park, Mota Varachha Main Rd" },
];

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted with data:", formData);
        alert("Your message has been sent!");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    };

    return (
        <div className="py-[50px] lg:py-[100px] poppins_thin">
            <div className="container lg:w-[1500px] px-2 mx-auto">
                <div className="flex flex-col lg:flex-row gap-7">
                    {/* Contact Info */}
                    <div className="w-full lg:w-6/12 lg:p-[15px]">
                        <div className="w-full p-10 bg-orange-600">
                            {contact.map((item) => (
                                <div key={item.id} className="flex flex-col items-center w-full gap-5 py-5 border-b border-white lg:flex-row">
                                    <div className="flex justify-center items-center text-white w-[50px] h-[50px] border border-white rounded-full">
                                        {item.icon}
                                    </div>
                                    <div className="text-center lg:text-left">
                                        <h5 className="font-bold text-[18px] lg:text-[20px] text-white capitalize">{item.title}</h5>
                                        <p className="text-[16px] text-white">{item.address}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="w-full h-[400px]">
                            <img src={img} className="object-cover w-full h-full" alt="Contact" />
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="w-full lg:w-6/12 lg:p-[15px]">
                        <div className="w-full h-full mt-[50px]">
                            <h1 className="font-bold capitalize text-[40px] mb-3">Ready to get started?</h1>
                            <p className="text-gray-400 mb-[30px]">Fill out the form below and we’ll get back to you.</p>
                            <form onSubmit={handleSubmit}>
                                <div className="flex flex-col lg:flex-row lg:gap-5">
                                    <input name="name" type="text" placeholder="Name" className={`${inputStyle}`} value={formData.name} onChange={handleChange} required />
                                    <input name="email" type="email" placeholder="Email" className={`${inputStyle}`} value={formData.email} onChange={handleChange} required />
                                </div>
                                <div className="flex flex-col lg:flex-row lg:gap-5">
                                    <input name="phone" type="tel" placeholder="Contact Number" className={`${inputStyle}`} value={formData.phone} onChange={handleChange} required />
                                    <input name="subject" type="text" placeholder="Subject" className={`${inputStyle}`} value={formData.subject} onChange={handleChange} />
                                </div>
                                <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} className={`${inputStyle}`} required></textarea>
                                <button type="submit" className={`${submitButton}`}>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Google Map */}
            <div className="mt-10 w-full h-[400px] lg:h-[500px]">
                <iframe
                    title="Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.841972345225!2d72.87119960000001!3d21.234213999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f1bdb2a9af7%3A0xf2671d4491f5d464!2sWebSolex%20Infotech!5e1!3m2!1sen!2sin!4v1740566154024!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    className="filter brightness-70 contrast-100"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default ContactForm;

// Tailwind Utility Classes for Inputs & Button
const inputStyle = "px-4 py-2 rounded-xl border w-full border-[#ef4523] bg-[#f7f7f7] my-2";
const submitButton = "bg-[#ef4523] text-white px-4 py-2 rounded-md hover:brightness-110 transition-all w-full";
