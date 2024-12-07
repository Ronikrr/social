
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/img/logo/Asset 1@4x.png'
const links = [
    // { id: 1, src: "https://www.t3bucket.com/f/0-man1.svg", pagename: "home", path: '/' },
    { id: 2, src: 'https://socialpanga.com/wp-content/themes/socialpanga/assets/images/svg-icons/about-icon.svg', pagename: "about us", path: "/about" },
    { id: 3, src: "https://socialpanga.com/wp-content/themes/socialpanga/assets/images/svg-icons/services-icon.svg", pagename: "services", path: "/services" },
    { id: 4, src: "https://socialpanga.com/wp-content/themes/socialpanga/assets/images/svg-icons/projects-icon.svg", pagename: "our work", path: "/ourwork" },
    { id: 5, src: "https://socialpanga.com/wp-content/themes/socialpanga/assets/images/svg-icons/awards-icon.svg", pagename: "awards", path: "/awards" },
    { id: 6, src: "https://socialpanga.com/wp-content/themes/socialpanga/assets/images/svg-icons/clients-icon.svg", pagename: "clients", path: "/clients" },
    // { id: 7, src: "https://socialpanga.com/wp-content/themes/socialpanga/assets/images/svg-icons/team-icon.svg", pagename: "our team", path: "/team" },
    { id: 8, src: "https://socialpanga.com/wp-content/themes/socialpanga/assets/images/svg-icons/career-icon.svg", pagename: "careers", path: "/career" },
    { id: 9, src: "https://socialpanga.com/wp-content/themes/socialpanga/assets/images/svg-icons/contact-icon.svg", pagename: "contact us", path: "/contact" },
];

const Header = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const location = useLocation();
    const [headerStyle, setHeaderStyle] = useState({
        height: '122px',
        // boxShadow: "0px 4px 4px -2px gray",
    });
    const toggleMenu = () => {
        setIsExpanded((prev) => !prev);
        console.log("Menu is now", !isExpanded ? "expanded" : "collapsed");
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setHeaderStyle({
                    height: "100px",
                    transition: "height 0.5s ease", // Smooth transition
                    // boxShadow: "0px 4px 2px -2px gray",
                });
            } else {
                setHeaderStyle({
                    height: "122px",
                    transition: "height 0.5s ease", // Smooth transition
                    // boxShadow: "0px 4px 2px -2px gray",
                });
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <header className="bg-white header data_cla">
            <nav className="fixed top-0 z-[25] w-full mx-auto overflow-hidden bg-white shadow-lg ">
                <div className="container flex-col items-center justify-between p-4 mx-auto moblie_size md:flex-row ">
                    <div className="flex items-center justify-between w-full md:w-4/12">
                        <Link className="text-lg font-semibold" to="/">
                            <img src={logo} className="w-[220px]" alt="Company Logo" />
                        </Link>
                        <button className="text-gray-700 focus:outline-none md:hidden" aria-label="Toggle navigation" onClick={toggleMenu}>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    {/* Mobile Menu */}
                    <div className={`${isExpanded ? "flex" : "hidden"} md:hidden w-full flex-col items-center mt-4 space-y-2 text-center text-gray-700`}>
                        <ul className="flex flex-col w-full space-y-2">
                            {links.map((item) => (
                                <li className="group" key={item.id}>
                                    <Link
                                        to={item.path}
                                        onClick={() => { scrollToTop(); setIsExpanded(false); }}
                                        className={`flex items-center justify-center text-[16px] p-2 font-medium uppercase ${location.pathname === item.path ? "text-black font-extrabold" : "text-black"
                                            } group-hover:font-extrabold flex flex-col `}
                                    >
                                        <img
                                            src={item.src}
                                            className={`w-[30px] h-[30px] md:w-[80px] ${location.pathname === item.path ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                                                }`}
                                            alt={`Icon for ${item.pagename}`}
                                        />
                                        {item.pagename}
                                    </Link>
                                </li>
                            ))}

                        </ul>
                    </div>
                </div>
                <div style={{ ...headerStyle }} className="container wishlist_  flex-col md:h-[122px] items-center justify-between p-4 mx-auto md:flex-row  ">
                    {/* Desktop Menu */} <div className="flex items-center justify-between w-full md:w-4/12">
                        <Link className="text-lg font-semibold" to="/">
                            <img src={logo} className="w-[220px]" alt="Company Logo" />
                        </Link>
                    </div>
                    <div className="items-center w-auto space-x-6 text-gray-700 wishlist_">
                        <ul className="flex flex-row space-x-6">
                            {links.map((item) => (
                                <li className="group" key={item.id}>
                                    <Link
                                        to={item.path}
                                        onClick={scrollToTop}
                                        className={`flex flex-col items-center uppercase text-black ${location.pathname === item.path ? "font-extrabold" : "font-medium"
                                            } group-hover:font-extrabold`}
                                    >
                                        <img
                                            src={item.src}
                                            className={`w-[50px] h-[50px]  md:w-[80px] ${location.pathname === item.path ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                                                }`}
                                            alt={`Icon for ${item.pagename}`}
                                        />
                                        <span
                                            className={`uppercase ${location.pathname === item.path ? "font-extrabold" : "font-medium"
                                                } group-hover:font-extrabold text-[16px] `}
                                        >
                                            {item.pagename}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </nav>
        </header>
    );
};

export default Header;
