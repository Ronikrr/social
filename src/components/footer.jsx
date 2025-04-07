import React, { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { BsEnvelope } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/avif/logo.webp";

const Footer = () => {
    const [socialLinks] = useState([
        { id: 1, icon: <FaLinkedinIn />, path: "" },
        { id: 2, icon: <FaXTwitter />, path: "" },
        { id: 3, icon: <FaFacebookF />, path: "https://www.facebook.com/profile.php?id=61570416716691" },
        { id: 4, icon: <FaInstagram />, path: "https://www.instagram.com/officialsbbd/" }
    ]);

    const [quickLinks] = useState(["home", "about", "service", "blog"]);
    const [supportLinks] = useState(["contact us", "terms & conditions", "career", "help"]);

    return (
        <div className="relative overflow-hidden capitalize bg-white shadow-lg footer poppins_thin">
            <div className="container mx-auto">
                <div className="pt-[60px] flex flex-wrap border-t w-full border-[#999999] gap-[30px]">
                    <div className="lg:p-[10px] mb-[30px] w-full flex flex-col lg:flex-row items-center gap-[30px]">
                        <div className="flex flex-col w-full lg:w-4/12 gap-[30px]">
                            <Link className="w-full cursor-pointer">
                                <img src={Logo} className="h-[51px] w-[191px]" alt="Logo" />
                            </Link>
                            <Link to="tel:8200845977" target="_blank" className="w-full flex-col lg:flex-row cursor-pointer flex items-center gap-[15px]">
                                <div className="w-[30px] h-[30px] border-2 rounded-full border-black flex items-center justify-center">
                                    <FaPhoneAlt />
                                </div>
                                <p className="text-[15px] lg:text-[22px] font-medium">8200845977</p>
                            </Link>
                            <Link to="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNsvPlSsZhhPWFrZkbXxpdStntxfHlpnVVJBSlmXLZSmLcnWlkdkPrRBgXNsqzhfzTvqbq" className="w-full flex-col lg:flex-row cursor-pointer flex items-center gap-[15px]" target="_blank">
                                <div className="w-[30px] h-[30px] border-2 rounded-full border-black flex items-center justify-center">
                                    <BsEnvelope />
                                </div>
                                <p className="text-[15px] lg:text-[20px] font-medium">badebazarkadigital@gmail.com</p>
                            </Link>
                        </div>
                        <div className="flex flex-col w-full lg:w-2/12">
                            <h4 className="mb-[20px] text-[22px]">Quick Links</h4>
                            <div className="flex flex-col w-full">
                                {quickLinks.map((link) => (
                                    <div className="mb-4">
                                        <Link key={link} to={`/${link}`} className="mb-4 cursor-pointer hover:text-[#ef4532] capitalize">
                                            {link}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col w-full lg:w-2/12">
                            <h4 className="mb-[20px] text-[22px]">Support Us</h4>
                            <div className="flex flex-col ">
                                {supportLinks.map((link) => (
                                    <div className="mb-4">
                                        <Link key={link} to={`/${link.replace(/\s+/g, "-").toLowerCase()}`} className="mb-4  hover:text-[#ef4532] capitalize cursor-pointer">
                                            {link}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col w-full lg:w-4/12">
                            <h4 className="mb-[20px] text-[15px] lg:text-[22px]">Subscribe to Our Newsletter</h4>
                            <form className="flex w-full items-center gap-3 mb-[20px] flex-row">
                                <input type="text" className="px-4 py-2 rounded-xl border w-6/12 lg:w-7/12 border-[#ef4523] bg-[#f7f7f7]" />
                                <button className="bg-[#ef4523] text-[#f7f7f7] border border-[#000000] border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 cursor-pointer hover:border-b active:opacity-75 outline-none duration-300 group">
                                    <span className="bg-[#000000] shadow-[#000000] absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                                    Subscribe
                                </button>
                            </form>
                            <div className="flex items-center justify-center gap-4 lg:justify-normal">
                                {socialLinks.map((item) => (
                                    <Link key={item.id} to={item.path} target="_blank" className="cursor-pointer w-[40px] h-[40px] border-2 transition-all duration-1000 border-black flex items-center justify-center rounded-full hover:bg-[#ef4523]">
                                        {item.icon}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="text-center w-full border-t border-[#999999] py-[25px]">
                        <p>Copyright © {new Date().getFullYear()} All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
