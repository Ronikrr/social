// import React from 'react'
// import { Link, useLocation } from 'react-router-dom'
// // import bgimage from '../assets/img/aboutus page/bgimage.png'
// const Breadcrumb = () => {
//     const location = useLocation();
//     const pathename = location.pathname.split('/').filter((x) => x);

//     const capitalizeWords = (str) => {
//         return str
//             .split('-')
//             .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//             .join(' ')
//     }
//     return (
//         <section className='h-[300px] w-full relative ' >
//             <div className="absolute top-0 left-0 h-full -z-10 ">
//                 <img src={""} className='h-full ' alt="" />
//             </div>
//             <div className=" w-full h-[300px] top-0 bg-[#ef452311] opacity-[0.5] flex items-center justify-center flex-col">
//                 <span>
//                     <nav aria-label='breadcrumb' className='text-[#4F282B]' >
//                     <ol className="flex space-x-2">
//                         <li>
//                             <Link to='/' className='uppercase hover:underline' >home</Link>
//                         </li>
//                         {pathename.map((v, i) => {
//                             const to = `/${pathename.slice(0, i + 3).join('/')}`;
//                             const isLast = i === pathename.length - 1;
//                             const disname = capitalizeWords(decodeURIComponent(v))
//                             return (
//                                 <li key={to} className='flex items-center ' >
//                                     <span className='mx-2' ></span>
//                                     {isLast ? (
//                                         <span area-current="page" className='uppercase' > {disname} </span>
//                                     ) : (
//                                         <Link to="" className='hover:underline ' >
//                                             {disname}
//                                         </Link>
//                                     )}
//                                 </li>
//                             )
//                         })}
//                     </ol>
//                     </nav>
//                 </span>
//             </div>
//         </section>
//     )
// }

// export default Breadcrumb
// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// // import bgimage from '../assets/img/aboutus page/bgimage.png'

// import { FaAngleRight } from "react-icons/fa";

// const Breadcrumb = () => {
//     const location = useLocation();
//     const pathname = location.pathname.split("/").filter((x) => x);

//     const capitalizeWords = (str) => {
//         return str
//             .split("-")
//             .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//             .join(" ");
//     };

//     return (
//         <section className="h-[300px] w-full relative">
//             <div className="absolute top-0 left-0 h-full -z-10">
//                 <img src={""} className="object-cover w-full h-full" alt="Background" />
//             </div>
//             <div className="w-full h-[300px] bg-[#ef452311] opacity-[0.5] flex items-center justify-center flex-col">
//                 <nav aria-label="breadcrumb" className="text-[#4F282B]">
//                     <ol className="flex space-x-2">
//                         <li>
//                             <Link to="/" className="uppercase hover:underline">
//                                 Home
//                             </Link>
//                         </li>
//                         {pathname.map((v, i) => {
//                             const to = `/${pathname.slice(0, i + 1).join("/")}`;
//                             const isLast = i === pathname.length - 1;
//                             const displayName = capitalizeWords(decodeURIComponent(v));
//                             return (
//                                 <li key={to} className="flex items-center">
//                                     <span className="mx-2"> <FaAngleRight /></span>
//                                     {isLast ? (
//                                         <span aria-current="page" className="uppercase">
//                                             {displayName}
//                                         </span>
//                                     ) : (
//                                         <Link to={to} className="hover:underline">
//                                             {displayName}
//                                         </Link>
//                                     )}
//                                 </li>
//                             );
//                         })}
//                     </ol>
//                 </nav>
//             </div>
//         </section>
//     );
// };

// export default Breadcrumb;
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import main_boc from '../../assets/New folder/service-desk-consultant-talking-on-260nw-333196652.jpg'
const PageBreadcrumb = () => {
    const location = useLocation();
    const pathname = location.pathname.split("/").filter((x) => x);

    const capitalizeWords = (str) => {
        return str
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    };

    return (
        <section className="h-[300px] w-full relative">
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <img src={main_boc} className="object-cover w-full h-full bg-current bg-center bg-no-repeat aspect-video" alt="Background" />
            </div>
            <div className="w-full h-full bg-[#ef452366] opacity-[0.5] flex items-center justify-center flex-col">
                {/* Main Page Title */}
                <h1 className="text-2xl font-bold text-[#fff] capitalize mb-2">
                    {pathname.length > 0 ? capitalizeWords(pathname[0]) : "Home"}
                </h1>

                {/* Breadcrumb Navigation */}
                <nav aria-label="breadcrumb" className="text-[#fff]">
                    <ol className="flex space-x-2">
                        <li>
                            <Link to="/" className="uppercase hover:underline">
                                Home
                            </Link>
                        </li>
                        {pathname.map((v, i) => {
                            const to = `/${pathname.slice(0, i + 1).join("/")}`;
                            const isLast = i === pathname.length - 1;
                            const displayName = capitalizeWords(decodeURIComponent(v));
                            return (
                                <li key={to} className="flex items-center">
                                    <span className="mx-2">
                                        <FaAngleRight />
                                    </span>
                                    {isLast ? (
                                        <span aria-current="page" className="uppercase">
                                            {displayName}
                                        </span>
                                    ) : (
                                        <Link to={to} className="hover:underline">
                                            {displayName}
                                        </Link>
                                    )}
                                </li>
                            );
                        })}
                    </ol>
                </nav>
            </div>
        </section>
    );
};

export default PageBreadcrumb;

