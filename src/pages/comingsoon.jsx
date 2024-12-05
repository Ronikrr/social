
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

// import React from "react";

// const ComingSoon = () => {
//     return (
//         <div
//             style={{
//                 backgroundColor: "#f8f9fa",
//                 color: "#333",
//                 textAlign: "center",
//                 height: "100vh",
//                 overflow: "hidden",
//                 position: "relative",
//                 fontFamily: "'Poppins', sans-serif",
//             }}
//         >
//             {/* Animated Cartoon Elements */}
//             <div
//                 style={{
//                     position: "absolute",
//                     top: "20%",
//                     left: "10%",
//                     animation: "float 3s ease-in-out infinite",
//                 }}
//             >
//                 <img
//                     src="https://cdn.pixabay.com/photo/2021/06/22/12/39/robot-6355446_960_720.png"
//                     alt="cartoon1"
//                     style={{ width: "150px" }}
//                 />
//             </div>
//             <div
//                 style={{
//                     position: "absolute",
//                     bottom: "10%",
//                     right: "15%",
//                     animation: "float 4s ease-in-out infinite",
//                 }}
//             >
//                 <img
//                     src="https://cdn.pixabay.com/photo/2021/04/04/09/32/robot-6147705_960_720.png"
//                     alt="cartoon2"
//                     style={{ width: "150px" }}
//                 />
//             </div>

//             {/* Main Text */}
//             <div
//                 style={{
//                     position: "relative",
//                     zIndex: 1,
//                     top: "50%",
//                     transform: "translateY(-50%)",
//                 }}
//             >
//                 <h1
//                     style={{
//                         fontSize: "3.5rem",
//                         marginBottom: "20px",
//                         animation: "fadeIn 2s ease-in-out",
//                     }}
//                 >
//                     Bade Bazar Ke Digital
//                 </h1>
//                 <p
//                     style={{
//                         fontSize: "1.2rem",
//                         marginBottom: "30px",
//                         animation: "fadeIn 3.5s ease-in-out",
//                     }}
//                 >
//                     Turning your marketing ideas into reality! 🚀
//                 </p>
//                 <div
//                     style={{
//                         width: "100px",
//                         height: "100px",
//                         border: "10px solid #ccc",
//                         borderTop: "10px solid #ff5733",
//                         borderRadius: "50%",
//                         animation: "spin 1s linear infinite",
//                         margin: "0 auto",
//                     }}
//                 ></div>
//             </div>

//             {/* Floating Animations */}
//             <style>{`
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes float {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-15px); }
//         }
//         @keyframes spin {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }
//       `}</style>
//         </div>
//     );
// };

// export default ComingSoon;