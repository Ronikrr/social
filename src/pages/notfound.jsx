// src/components/NotFound.js

import React from 'react';
import { Link } from 'react-router-dom';
import Maintitle from '../components/maintitle';

const NotFound = () => {
    Maintitle('Sorry page not found')
    return (
        <section className="flex items-center justify-center w-screen h-screen page_404 arvo-regular ">
            <div className="container h-full mx-auto ">
                <div className="h-full row ">
                    <div className="w-full h-full ">
                        <div className="w-full lg:w-10/12 h-full mx-auto text-center mt-[50px]">
                            <h1 className="text-center text-[90px] ">404</h1>
                            <div className="four_zero_four_bg">
                            </div>
                            <div className="contant_box_404">
                                <h3 className="h2">Look like you're lost</h3>
                                <p>Sorry, we can't find the page you're looking for. It may have been removed or the URL might be incorrect.</p>
                                <div className="my-10">
                                    <Link to="/" className="px-6 py-4 text-white bg-[#ef4523] hover:bg-[#d66652] ">
                                        Go to Home
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default NotFound;
