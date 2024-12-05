
import React, { useState, useEffect } from 'react';
// You can skip the external CSS since we're using Tailwind now.

const ComingSoon = () => {
    const [timeLeft, setTimeLeft] = useState({});

    // Set the target date for the countdown
    const targetDate = new Date("2024-12-31T23:59:59");

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000),
                });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen text-gray-900 bg-gray-100">
            <h1 className="mb-8 text-4xl font-bold text-center">Coming Soon!</h1>

            <div className="flex gap-8">
                <div className="p-6 text-center text-white bg-gray-800 rounded-lg shadow-lg">
                    <span className="text-3xl font-bold">{timeLeft.days || '00'}</span>
                    <p className="mt-2 text-sm">Days</p>
                </div>
                <div className="p-6 text-center text-white bg-gray-800 rounded-lg shadow-lg">
                    <span className="text-3xl font-bold">{timeLeft.hours || '00'}</span>
                    <p className="mt-2 text-sm">Hours</p>
                </div>
                <div className="p-6 text-center text-white bg-gray-800 rounded-lg shadow-lg">
                    <span className="text-3xl font-bold">{timeLeft.minutes || '00'}</span>
                    <p className="mt-2 text-sm">Minutes</p>
                </div>
                <div className="p-6 text-center text-white bg-gray-800 rounded-lg shadow-lg">
                    <span className="text-3xl font-bold">{timeLeft.seconds || '00'}</span>
                    <p className="mt-2 text-sm">Seconds</p>
                </div>
            </div>

            <p className="mt-10 text-lg text-center text-gray-600">
                We're working hard to get this site ready for you. Stay tuned!
            </p>
        </div>
    );
};

export default ComingSoon;
