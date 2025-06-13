import { useState } from "react";
import { Link } from "react-scroll";

const intialState = {
    fullname: "",
    email: "",
    phoneno: "",
    message: "",
};

const ContactForm = () => {
    const [fromdata, setfromdata] = useState(intialState);
    const Onchange = (e) => {
        const { name, value } = e.target;
        setfromdata((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const Onsubmit = (e) => {
        e.preventDefault()
        console.log(fromdata)
        setfromdata(intialState)
    }

    return (
        <div className=" py-[50px] lg:py-[50px] poppins_thin" id="contact">
            <div className="container mx-auto lg:max-w-7xl">
                <div className="flex flex-col w-full gap-3 lg:flex-row">
                    <div className=" w-full  lg:w-4/12   border border-[5px] border-primary rounded-tr-[100px] flex justify-center items-center ">
                        <div className="w-full p-10">
                            <h1 className="font-bold  text-[30px] text-left">
                                Get in touch
                            </h1>
                            <p className="flex flex-col text-primary" >
                                Or just reach out manually to

                                <Link className="text-black" href="">
                                    badebazarkadigital@gmail.com
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="w-full lg:w-8/12 ">
                        <form onSubmit={Onsubmit} className="w-full p-5">
                            <div className="flex flex-col gap-3 lg:gap-6 lg:flex-row ">
                                <div className="flex flex-col w-full mb-3 lg:w-6/12">
                                    <label className="mb-2 font-bold" htmlFor="fullname">
                                        FullName
                                    </label>
                                    <input
                                        type="text"
                                        name="fullname"
                                        id="fullname"
                                        onChange={Onchange}
                                        value={fromdata.fullname}
                                        className="px-4 py-2 border border-black"
                                        placeholder="Enter your fullname"
                                    />
                                </div>
                                <div className="flex flex-col w-full mb-3 lg:w-6/12">
                                    <label className="mb-2 font-bold" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        onChange={Onchange}
                                        value={fromdata.email}
                                        className="px-4 py-2 border border-black"
                                        placeholder="Enter your email"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col w-full mb-3">
                                <label className="mb-2 font-bold" htmlFor="phoneno">
                                    Phoneno
                                </label>
                                <input
                                    type="tel"
                                    name="phoneno"
                                    id="phoneno"
                                    onChange={Onchange}
                                    value={fromdata.phoneno}
                                    className="px-4 py-2 border border-black"
                                    placeholder="Enter your phoneno"
                                />
                            </div>
                            <div className="flex flex-col w-full mb-3">
                                <label className="mb-2 font-bold" htmlFor="message">
                                    message
                                </label>
                                <textarea
                                    type="text"
                                    rows={5}
                                    onChange={Onchange}
                                    value={fromdata.message}
                                    name="message"
                                    id="message"
                                    className="px-4 py-2 border border-black"
                                    placeholder="Enter your message"
                                />
                            </div>

                            <button type="submit" className="bg-primary text-[#f7f7f7] border border-[#000000] border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 cursor-pointer hover:border-b active:opacity-75 outline-none duration-300 group">
                                <span className="bg-[#000000] shadow-[#000000] absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
