// src/components/NotFound.js

import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen p-8 font-sans text-center text-white bg-orange-200">
            <h1 className="font-extrabold text-[300px] text-shadow-lg">404</h1>
            <h2 className="mt-4 text-2xl font-semibold text-shadow-sm">Page Not Found</h2>
            <p className="mt-5 text-lg opacity-80">Oops! The page you're looking for doesn't exist.</p>
            <Link
                to="/"
                className="px-6 py-3 mt-8 text-lg font-semibold text-orange-600 transition-all duration-300 bg-white rounded-md hover:bg-orange-400"
            >
                Go back to Home
            </Link>
        </div>
    );
};

export default NotFound;
