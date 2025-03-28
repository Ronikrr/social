// import React, { useEffect, useState } from 'react'
// import Logo from '../assets/avif/logo.webp'
// import { FaBars, FaTimes } from 'react-icons/fa'
// import { Link, useLocation } from 'react-router-dom';
// const Header = () => {
//     const [isopenmenu, setisopenmenu] = useState(false);
//     const location = useLocation()
//     const [scrolled, setScrolled] = useState(false);
//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > 0) {
//                 setScrolled(true);
//             } else {
//                 setScrolled(false);
//             }
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);
//     const hantogglemenu = () => {
//         setisopenmenu(!isopenmenu);
//     }
//     const handleToggleMenu = () => {
//         setisopenmenu(false)
//     }

//     const scrollToTop = () => {
//         window.scrollTo({ top: 0, behavior: "smooth" });
//     };
//     const onclick = () => {
//         setisopenmenu(false)
//         window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//     const links = [
//         { id: 1, labal: "about us", path: "/aboutpage" },
//         { id: 2, labal: "service", path: "/service" },
//         { id: 3, labal: "our work", path: "/ourwork" },
//         { id: 4, labal: "awards", path: "/awards" },
//         { id: 5, labal: "clients", path: "/client" },
//         { id: 6, labal: "careers", path: "/carrers" },
//         { id: 7, labal: "contact us", path: "/contact" },
//     ]

//     return (
//         <div className="instrument">
//             <div
//                 className={`fixed top-0 hidden lg:flex left-0 w-full h-auto  z-[99]  xl:py-[10px] px-[3vw]  ${scrolled ? 'bg-[#fff] py-[0px] shadow-md top-0 h-[80px] items-center ' : 'bg-transparent'}`}
//             >
//                 <div className="w-full">
//                     <div className="relative flex items-center justify-between z-[5]">
//                         <a className=" cursor-pointer inline-block me-[16px] py-[8px]" href="/">
//                             <img src={Logo} className="h-[60px]" alt="Logo" />
//                         </a>
//                         <div className="items-center flex-grow hidden lg:flex">
//                             <ul className="flex flex-row ml-auto mr-[3rem]">
//                                 {links.map((link, id) => {
//                                     const isActive = location.pathname === link.path;
//                                     return (
//                                         <li className="relative" key={id}>
//                                             <Link className={`cursor-pointer 4xl:text-[20px]  xl:text-[17px] capitalize duration-1000 my-[5px] lg:mx-[5px] lg:p-[10px] xl:mx-[15px] font-medium xl:p-[15px] ${isActive
//                                                 ? 'text-[#ef4523] border-b-[2px] border-[#ef4523]'
//                                                 : 'hover:text-[#ef4523] hover:border-b-[2px] hover:border-[#ef4523]'
//                                                 }`}
//                                                 onClick={scrollToTop}
//                                                 to={link.path}>
//                                                 {link.labal}
//                                             </Link>
//                                         </li>
//                                     );
//                                 })}
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="fixed top-0 flex lg:hidden bg-[#f6f6f6] left-0 w-full h-auto z-[99] py-[15px] px-[15px]">
//                 <div className="container mx-auto">
//                     <div className="relative flex items-center flex-col justify-between z-[5]">
//                         <div className="flex items-center justify-between w-full">
//                             <a className='inline-block me-[16px] py-[8px]' href="/">
//                                 <img src={Logo} className='h-[30px]' alt="" />
//                             </a>
//                             <div className="menu">
//                                 {isopenmenu ? (
//                                     <FaTimes onClick={handleToggleMenu} />
//                                 ) : (
//                                         <FaBars onClick={hantogglemenu} />
//                                 )}


//                             </div>
//                         </div>
//                         {isopenmenu && (
//                             <div
//                                 className={`flex items-center flex-grow w-full transition-all duration-1000 ease-in-out opacity-100 ${isopenmenu ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
//                             >
//                                 <ul className='flex flex-col w-full text-center'>
//                                     {links.map((link, id) => {
//                                         const isActive = location.pathname === link.path
//                                         return (
//                                             <li className='relative py-[7px]' key={id}>
//                                                 <Link className={`text-[20px] capitalize   duration-1000 my-[5px] mx-[15px] font-medium p-[15px] ${isActive ? 'text-[#ef4523] border-b-[2px] border-[#ef4523]' : 'hover:text-[#ef4523] hover:border-b-[2px] hover:border-[#ef4523]'} `} onClick={onclick} to={link.path}>
//                                                     {link.labal}
//                                                 </Link>
//                                             </li>
//                                         )
//                                     })}
//                                 </ul>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Header
import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/avif/logo.webp';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Handle scrolling event
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 0);
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle menu toggle
    const handleToggleMenu = () => setIsMenuOpen((prev) => !prev);

    // Close menu and scroll to top
    const handleMenuClick = () => {
        setIsMenuOpen(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const links = [
        { id: 1, label: "About Us", path: "/aboutpage" },
        { id: 2, label: "Service", path: "/service" },
        { id: 3, label: "Our Work", path: "/ourwork" },
        { id: 4, label: "Awards", path: "/awards" },
        { id: 5, label: "Clients", path: "/client" },
        { id: 6, label: "Careers", path: "/careers" },
        { id: 7, label: "Contact Us", path: "/contact" },
    ];

    return (
        <header className="instrument">
            {/* Desktop Navigation */}
            <nav className={`fixed top-0 hidden lg:flex left-0 w-full h-auto z-[99] px-[3vw] ${scrolled ? 'bg-[#fff] shadow-md h-[80px] py-0 items-center' : 'bg-transparent'}`}>
                <div className="flex items-center justify-between w-full">
                    {/* Logo */}
                    <Link to="/" className="inline-block py-[8px]">
                        <img src={Logo} className="h-[60px]" alt="Logo" />
                    </Link>

                    {/* Nav Links */}
                    <ul className="flex flex-row ml-auto mr-[3rem]">
                        {links.map(({ id, label, path }) => {
                            const isActive = location.pathname === path;
                            return (
                                <li key={id} className="relative">
                                    <Link
                                        to={path}
                                        className={`cursor-pointer 4xl:text-[20px] xl:text-[17px] capitalize duration-300 my-[5px] lg:mx-[5px] lg:p-[10px] xl:mx-[15px] font-medium xl:p-[15px] ${isActive
                                            ? 'text-[#ef4523] border-b-[2px] border-[#ef4523]'
                                            : 'hover:text-[#ef4523] hover:border-b-[2px] hover:border-[#ef4523]'}
                                        `}
                                        onClick={handleMenuClick}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>

            {/* Mobile Navigation */}
            <div className="fixed top-0 flex lg:hidden bg-[#f6f6f6] left-0 w-full h-auto z-[99] py-[15px] px-[15px]">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link to="/" className="inline-block py-[8px]">
                            <img src={Logo} className="h-[30px]" alt="Logo" />
                        </Link>

                        {/* Mobile Menu Button */}
                        <div className="menu">
                            {isMenuOpen ? <FaTimes onClick={handleToggleMenu} /> : <FaBars onClick={handleToggleMenu} />}
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <ul className="flex flex-col w-full text-center transition-all duration-300 ease-in-out opacity-100">
                            {links.map(({ id, label, path }) => {
                                const isActive = location.pathname === path;
                                return (
                                    <li key={id} className="relative py-[7px]">
                                        <Link
                                            to={path}
                                            className={`text-[20px] capitalize duration-300 my-[5px] mx-[15px] font-medium p-[15px] ${isActive
                                                ? 'text-[#ef4523] border-b-[2px] border-[#ef4523]'
                                                : 'hover:text-[#ef4523] hover:border-b-[2px] hover:border-[#ef4523]'}
                                            `}
                                            onClick={handleMenuClick}
                                        >
                                            {label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
