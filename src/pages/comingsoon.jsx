import React from 'react';

const ComingSoon = () => {
    return (
        <div className="flex items-center w-screen h-screen ">
            <header>
                <section className="flex flex-col items-center hero-banner">

                    <div
                        className="hero-image bg-cover bg-center h-[376px] w-full"
                        style={{
                            backgroundImage: "url('https://assets.codepen.io/6060109/athlete-girl.png')",
                        }}
                    ></div>
                </section>
            </header>
            <main>
                <article className="flex flex-col items-center w-full px-10 text-center text-info">
                    <h2 className="pb-4 font-normal text-red-600 pt-7">We're</h2>
                    <h2 className="text-5xl font-bold tracking-wide uppercase text-brown-600">
                        Coming
                        <br />
                        Soon
                    </h2>
                    <p className="leading-6 text-black">
                        Hello friends! We are currently building our new sports and comfort
                        clothing store. Add your email address below to stay up-to-date with
                        announcements and our launch proposals.
                    </p>
                    <section className="relative w-full my-4 mb-24 email-signup">
                        <form>
                            <input
                                className="w-full px-6 py-4 border rounded-md opacity-50 email-input border-black/70 focus:outline-2 focus:outline-black focus:opacity-100"
                                type="email"
                                required
                                placeholder="Email Address"
                                name="email-address"
                            />
                            <input
                                className="absolute z-10 px-6 py-4 font-bold text-white bg-black rounded-md cursor-pointer email-submit right-10"
                                value="Go"
                                type="submit"
                                text="Go"
                                for="email-address"
                            />
                        </form>
                    </section>
                </article>
            </main>
            <div className="hero-image-desktop  lg:block w-[55vw] h-full">
                <img
                    src="https://assets.codepen.io/6060109/athlete-big.png"
                    alt="Female athlete squinting towards the camera"
                    className="object-cover w-full h-full clip-path-[polygon(0_0,_100%_0,_100%_100%,_30%_100%)]"
                />
            </div>
        </div>
    );
};

export default ComingSoon;
