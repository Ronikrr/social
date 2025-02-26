// import React, { useRef, useEffect, useState } from 'react'

// const Contactbutton = () => {
//     const canvasRef = useRef(null)
//     const contextRef = useRef(null)
//     const [isdrawing, setisdrawing] = useState(false)
//     useEffect(() => {
//         const canvas = canvasRef.current;
//         canvas.width = window.innerWidth * 2;
//         canvas.height = window.innerHeight * 2
//         canvas.style.width = `${window.innerWidth}px`;
//         canvas.style.height = `${window.innerHeight}px`;


//         const context = canvas.getContext("2d");
//         context.scale(2, 2)
//         context.line = "round"
//         context.strokeStyle = "black"
//         context.linewidth = 5

//         canvasRef.current = context;
//     }, [])
//     const startdrawing = ({ nativeEvent }) => {
//         const { offsetX, offsetY } = nativeEvent
//         contextRef.current.beginPath();
//         contextRef.current.moveTo(offsetX, offsetY);
//         setisdrawing(true)
//     }
//     const finishdrawing = () => {
//         contextRef.current.closePath();
//         setisdrawing(false)

//     }
//     const draw = ({ nativeEvent }) => {
//         if (!isdrawing) {
//             return
//         }
//         const { offsetX, offsetY } = nativeEvent
//         contextRef.current.lineTo(offsetX, offsetY);
//         contextRef.current.stroke()
//     }
//     return (
//         <div className=' py-[100px] relative flex flex-col items-center scale-[1] justify-start w-full' >
//             <div className="flex relative justify-center cursor-default z-[10001] relative flex-col items-center">
//                 <div className="relative text-[8rem] uppercase tracking-wide  font-bold Impact_Regular leading-[6rem] whitespace-nowrap ">contact me</div>
//                 <img src="https://www.jiejoe.com/img/icon_email.c560b1a6.svg" className='absolute top-[-3.5rem] left-[7rem] w-[4.5rem] rotate-[15deg]' alt="" />
//                 <img src="https://www.jiejoe.com/img/icon_address.6dede179.svg" className='absolute right-[2rem] bottom-[-3rem] w-[5rem] rotate-[-5deg]' alt="" />
//                 <img src="https://www.jiejoe.com/img/icon_qq.256d3151.svg" className='absolute top-[-2rem] right-[8rem] w-[4rem] rotate-[-15deg]' alt="" />
//                 <img src="https://www.jiejoe.com/img/icon_wechat.096b5d17.svg" className='absolute bottom-[-3rem] left-0 w-[4rem] rotate-[5deg]' alt="" />
//             </div>
//             <div className="relative flex w-[30rem] h-[20rem] mb-[-15rem] justify-center cursor-pointer z-[10001]">
//                 <canvas
//                     onMouseDown={startdrawing}
//                     onMouseUp={finishdrawing}
//                     onMouseMove={draw}
//                     ref={canvasRef}
//                 />
//             </div>
//         </div>
//     )
// }

// export default Contactbutton

import React, { useRef, useEffect, useState } from 'react';

const Contactbutton = () => {
    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth * 2;
        canvas.height = window.innerHeight * 2;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;

        // Set up the 2D context
        const context = canvas.getContext("2d");
        context.scale(2, 2);
        context.lineCap = "round"; // Corrected property name
        context.strokeStyle = "black";
        context.lineWidth = 5; // Corrected property name
        contextRef.current = context; // Assign the context to contextRef
    }, []);

    const startDrawing = ({ nativeEvent }) => {
        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX, offsetY);
        setIsDrawing(true);
    };

    const finishDrawing = () => {
        if (!contextRef.current) return; // Safety check
        contextRef.current.closePath();
        setIsDrawing(false);
    };

    const draw = ({ nativeEvent }) => {
        if (!isDrawing) return;
        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();
    };

    return (
        <div className="py-[100px] relative flex flex-col items-center scale-[1] justify-start w-full">
            <div className="flex relative justify-center cursor-default z-[10001] flex-col items-center">
                <div className="relative text-[8rem] uppercase tracking-wide font-bold Impact_Regular leading-[6rem] whitespace-nowrap">
                    contact me
                </div>
                <img
                    src="https://www.jiejoe.com/img/icon_email.c560b1a6.svg"
                    className="absolute top-[-3.5rem] left-[7rem] w-[4.5rem] rotate-[15deg]"
                    alt=""
                />
                <img
                    src="https://www.jiejoe.com/img/icon_address.6dede179.svg"
                    className="absolute right-[2rem] bottom-[-3rem] w-[5rem] rotate-[-5deg]"
                    alt=""
                />
                <img
                    src="https://www.jiejoe.com/img/icon_qq.256d3151.svg"
                    className="absolute top-[-2rem] right-[8rem] w-[4rem] rotate-[-15deg]"
                    alt=""
                />
                <img
                    src="https://www.jiejoe.com/img/icon_wechat.096b5d17.svg"
                    className="absolute bottom-[-3rem] left-0 w-[4rem] rotate-[5deg]"
                    alt=""
                />
            </div>

        </div>
    );
};

export default Contactbutton;
