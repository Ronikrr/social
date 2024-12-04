import React from 'react'
import { Link } from 'react-router-dom'
import Maintitle from '../components/maintitle'
const Contact = () => {
    Maintitle('Social Panga - Contact Page')
    return (
        <div className='py-[60px] md:py-[125px] relative data_cla ' >


            <div className="relative px-[15px] w-full py md:py-[8rem] ">
                {/* <div className="container mx-auto "> */}
                <div className="w-full px-[15px]  lg:p-[3rem] md:w-5/12 md:ml-[8.33%] bg-[#f8d200]">
                    <div className="title_data pb-[1rem]">
                        <h1 className='text-[24px] font-extrabold' >Aapke Ek Ek Sawal <br /> Humaare Do Do Jawab</h1>
                    </div>
                    <div className="">
                        <form action="">
                            <p className='text-[12px] mb-[1rem] ' >
                                <strong>Higa Digital Pvt. Ltd.</strong>
                            </p>
                            <p className='text-[12px] mb-[1rem] ' >
                                One of the leading digital marketing agency in Bangalore. Write to us about any doubts, We would be glad to discuss your business targets and how we can achieve them through our digital marketing services in Bangalore, Delhi and Mumbai. We'll get back to you at the earliest.
                            </p>
                            <div className="w-full ">
                                <div className="flex flex-wrap">
                                    <div className="w-full pt-[1rem]">
                                        <input type="text" className='mb-[1rem] focus:border-b-[5px] focus:border-[#000]  w-full bg-transparent border-2 border-[#000] py-[10px] px-[15px] font-medium text-[18px] placeholder:text-[#000] ' placeholder='Name' />
                                    </div>
                                    <div className="w-full md:w-6/12 pt-[1rem] md:pr-[0.5rem]">
                                        <input type="text" className='mb-[1rem] focus:border-b-[5px] focus:border-[#000]  w-full bg-transparent border-2 border-[#000] py-[10px] px-[15px] font-medium text-[18px] placeholder:text-[#000] ' placeholder='Email' />
                                    </div>
                                    <div className="w-full md:w-6/12 pt-[1rem] md:pl-[0.5rem]">
                                        <input type="text" className='mb-[1rem] focus:border-b-[5px] focus:border-[#000]  w-full bg-transparent border-2 border-[#000] py-[10px] px-[15px] font-medium text-[18px] placeholder:text-[#000]  ' placeholder='Phone Number' />
                                    </div>
                                    <div className="w-full pt-[1rem]">
                                        <textarea type="text" cols={40} rows={5} maxLength={2000} className='mb-[1rem] focus:border-b-[5px] focus:border-[#000]  w-full bg-transparent border-2 border-[#000] py-[10px] px-[15px] font-medium text-[18px] placeholder:text-[#000] ' placeholder='how can we help?' >
                                        </textarea>
                                    </div>
                                    <div className="w-full text-right pt-[1rem] relative ">
                                        <button className='absolute cursor-pointer w-[92px] right-0 bottom-0 bg-[#e1e1e1] flex justify-center items-center rounded-full  h-[92px] ' >
                                            <img src="https://socialpanga.com/wp-content/themes/socialpanga/assets/images/right-arrow-icon.png" className='w-[45px]' alt="" />
                                        </button>
                                    </div>
                                    <div className="w-full pt-[1rem]">
                                        <div className="flex flex-wrap w-full ">
                                            <div className="w-full md:w-6/12 px-[15px]">
                                                <p className='mb-[1rem] text-center text-[16px]' >
                                                    <strong>Business Enquiries</strong>
                                                    <br />
                                                    <Link className='text-[#cc121c]' >+911234567889</Link>
                                                    <br />
                                                    <Link className='font-medium' >hello@socialpanga.com</Link>
                                                </p>
                                            </div>
                                            <div className="w-full md:w-6/12 px-[15px]">
                                                <p className='mb-[1rem] text-center text-[16px]' >
                                                    <strong>Career Opportunities</strong>
                                                    <br />
                                                    <Link className='text-[#cc121c]' >+911234567889</Link>
                                                    <br />
                                                    <Link className='font-medium' >coffee@socialpanga.com</Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {/* </div> */}
            </div>
            <div className="top-0 pt-[80px] md:pt-[0px] bottom-0 left-0 right-0 w-full md:absolute -z-10 map_wrapper">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.840447495227!2d72.86865777540311!3d21.234272480467006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fbe056894ef%3A0x7bfc941e108f23a5!2sIT%20Park!5e1!3m2!1sen!2sin!4v1732956586227!5m2!1sen!2sin"

                    style={{ border: 0 }}
                    className='w-full h-full'
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                ></iframe>
            </div>
        </div>
    )
}

export default Contact