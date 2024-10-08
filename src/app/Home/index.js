// Import necessary libraries and CSS
"use client"
import React from "react";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


// Define motion variants for the quote symbol
const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
};

const textFadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5, delay: 0.5 } },
};

var herosettings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const Introdocution = () => {
    return (
        <>
            <div className="">
                {/* bg-[url('/images/hero_banner8.webp')] */}

                <section className=" bg-center  bg-no-repeat ">
                    <div className=" mx-auto w-full  text-center">
                        <Slider {...herosettings}>
                            <div className="heroImage1 heroimageCenter w-full ">
                                <h1 className="homeheroLabourtext  bg-opacity-60 bg-black/30 font-bold tracking-tight leading-none text-white ">
                                    A special & unforgettable day
                                </h1>

                            </div>

                            <div className="heroImage2 heroimageCenter w-full flex flex-col justify-center">
                                <h1 className="homeheroLabourtext  bg-opacity-60 bg-black/30 font-bold tracking-tight leading-none text-white ">
                                    Say yes & enjoy your day
                                </h1>
                            </div>

                            <div className="heroImage3 heroimageCenter w-full flex flex-col justify-center">
                                <h1 className="homeheroLabourtext  bg-opacity-60 bg-black/30 font-bold tracking-tight leading-none text-white ">
                                    These memories are precious
                                </h1>
                            </div>
                        </Slider>


                    </div>
                </section>
            </div>
            <div className="bg-white">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center justify-center p-8 dark:bg-gray-800 dark:border-gray-700 text-center"
                >
                    <motion.img
                        src="/images/quote.png"
                        alt="Quote Symbol"
                        className="w-12 h-12 mb-4"
                    />
                    <motion.blockquote
                        className="max-w-2xl mx-auto text-black dark:text-white text-2xl font-semibold"
                    >
                        Life is made of special moments. Turn each into magic with Banquet.
                    </motion.blockquote>

                    <motion.figcaption
                        className="mt-4 text-lg font-bold text-gray-700 dark:text-gray-300"
                    >
                        - Mark Nolan
                    </motion.figcaption>
                </motion.div>
            </div>
        </>
    );
};

export default Introdocution;
