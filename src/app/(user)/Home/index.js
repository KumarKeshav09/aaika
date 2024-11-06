// Import necessary libraries and CSS
"use client";
import React from "react";

import Slider from "react-slick";

import Link from "next/link";
import { ImageSlider } from "@/components/ImageSlider";
import QueryComp from "@/components/Common/query";
import useFetch from "../../../utils/useFetch";
import { Spinner } from "flowbite-react";
import { API_BASE_URL } from "@/utils/constants";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import WhatsAppButton from "@/components/Common/Whatsapp";

const companySettings = {
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 100,
  autoplaySpeed: 5000,
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 3,
};
const tetimonialSettings = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 100,
  autoplaySpeed: 5000,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
};
const Introdocution = () => {
  const {
    data: bannerData,
    loading,
    error,
  } = useFetch(`${API_BASE_URL}/getAllBanners`);
  console.log("data", bannerData);

  return (
    <>
      <Navbar />
      {loading ? (
        <>
          <div className="w-screen h-screen flex justify-center items-center">
            <Spinner
              color="purple"
              aria-label="Purple spinner example"
              size="lg"
            />
            <p className="mx-2">Loading...</p>
          </div>
        </>
      ) : (
        <ImageSlider />
      )}

      <div className="">
        <div
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center p-8 dark:bg-gray-800 dark:border-gray-700 text-center"
        >
          <img
            src="/images/h1-img-1.png"
            alt="Quote Symbol"
            className="w-12 h-12 mb-4"
          />
          <blockquote className="max-w-2xl mx-auto text-[#3e3930] dark:text-white text-6xl font-normal italic">
            Savor the flavor, where every bite delights.
          </blockquote>
          <figcaption className="mt-4 text-lg font-normal samarkan-font dark:text-gray-300">
             Aaika
          </figcaption>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-10 px-2 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-widest">catering</p>
            <h2 className="text-5xl text-[#3e3930]  italic font-normal mb-4">
              House parties
            </h2>
            <p className="text-gray-500 mb-6 text-justify">
              Hosting a house party? Consider catering to elevate your event!
              With a variety of delicious options and the convenience of
              professional setup and cleanup, you can focus on enjoying time
              with your guests. Custom menus allow you to cater to everyone&apos;s
              tastes, making for a memorable and stress-free gathering. Cheers
              to effortless entertaining!
            </p>
            <p className="text-grey-500">Read More</p>
          </div>
          <div className="overflow-hidden  shadow-lg">
            <img
              src="../../../images/house.jpg"
              alt="Social Event"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-10 px-5 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="overflow-hidden shadow-lg">
            <img
              src="https://images.pexels.com/photos/13033658/pexels-photo-13033658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Social Event"
              className="w-full h-auto object-cover"
            />
          </div>

          <div>
            <p className="uppercase tracking-widest">catering</p>
            <h2 className="text-5xl text-[#3e3930]  italic font-normal mb-4">
              Social events
            </h2>
            <p className="mb-6 text-justify">
              Host your special moments with us! From birthdays to corporate
              gatherings, we offer the perfect setting with customized menus to
              suit every occasion. Let us make your event memorable with
              delightful food and exceptional service.
            </p>
            <p className="text-grey-500">Read More</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-10 px-2 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-widest">catering</p>
            <h2 className="text-5xl text-[#3e3930]  italic font-normal mb-4">
              Corporate parties
            </h2>
            <p className="text-gray-500 mb-6 text-justify">
              Make your corporate events unforgettable with our exceptional
              catering and ambiance. We offer tailored menus to suit every
              occasion, ensuring a perfect blend of flavors. Elevate your office
              parties with a unique dining experience that impresses your team
              and clients alike.
            </p>
            <p className="text-grey-500">Read More</p>
          </div>
          <div className="overflow-hidden  shadow-lg">
            <img
              src="https://images.pexels.com/photos/8818723/pexels-photo-8818723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Social Event"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-10 px-5 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="overflow-hidden  shadow-lg">
            <img
              src="https://images.pexels.com/photos/11479023/pexels-photo-11479023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Social Event"
              className="w-full h-auto object-cover"
            />
          </div>

          <div>
            <p className="uppercase tracking-widest">catering</p>
            <h2 className="text-5xl text-[#3e3930]  italic font-normal mb-4">
              Weddings
            </h2>
            <p className="text-gray-500 mb-6 text-justify">
              Make your special day unforgettable with our exquisite wedding
              catering. From personalized menus to flawless service, we ensure
              every detail is perfect. Celebrate love with a feast that leaves
              lasting memories
            </p>
            <p className="text-grey-500">Read More</p>
          </div>
        </div>
      </div>
      <div className="slider-container max-w-7xl mx-auto py-10 px-2 lg:px-10">
        <Slider {...tetimonialSettings}>
          {/* <div className="item">
                        <div className="bg-yellow-400 max-w-lg w-full  shadow-lg p-6 relative overflow-hidden">

                            <div className="absolute -left-8 top-0 bg-red-500 w-1/3 h-full  flex flex-col items-center justify-center py-6">

                                <div className="bg-white rounded-full p-2 mb-4">
                                    <img src="https://rezista.in/wp-content/uploads/2020/07/testimonial-avatar-female-1-ux-builder.jpg" alt="Profile" className="w-20 h-20 object-cover rounded-full" />
                                </div>

                                <p className="text-white text-center text-sm font-bold">Dharmendra <br /> Neelu Jain</p>
                            </div>


                            <div className="ml-32">

                                <h2 className="text-black font-bold text-xl">Hi Ashish</h2>

                                <p className="text-black text-sm mt-4">
                                    “I highly recommend Aaika Homemade for an exceptional dining experience where taste, hygiene, and presentation are paramount. I've had the pleasure of savoring their cuisine for four years now, and I'm impressed that the quality and flavor have not only consistently met but exceeded my expectations...”
                                </p>


                                <div className="flex justify-center mt-4">
                                    <div className="bg-white px-4 py-2 rounded-full flex items-center">
                                        <span className="text-red-500 text-lg">★ ★ ★ ★ ★</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div> */}
          <div className="item">
            <img
              src="/images/t1.jpeg"
              alt="testimonial"
              className="max-w-96 max-h-96"
            />
          </div>
          <div className="item">
            <img
              src="/images/t2.jpeg"
              alt="testimonial"
              className="max-w-96 max-h-96"
            />
          </div>
          <div className="item">
            <img
              src="/images/t3.jpeg"
              alt="testimonial"
              className="max-w-96 max-h-96"
            />
          </div>
          <div className="item">
            <img
              src="/images/t5.jpeg"
              alt="testimonial"
              className="max-w-96 max-h-96"
            />
          </div>
        </Slider>
      </div>
      <div className="parallax"></div>

      <div className="max-w-7xl mx-auto py-16 px-5 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-widest">meet our expert</p>
            <h2 className="text-5xl text-[#3e3930]  italic font-normal mb-4">
              Kitchen True Master
            </h2>

            <p className="text-gray-500 mb-6 text-justify">
              At the heart of every dish is our masterful kitchen. With
              precision, passion, and expertise, our chefs craft meals that
              celebrate authenticity. Every recipe is a blend of tradition and
              innovation, perfected over time. Trust the true masters to serve
              you flavors that linger long after the last bite.
            </p>
          </div>

          <div className="overflow-hidden">
            <img
              src="https://banquet.qodeinteractive.com/wp-content/uploads/2019/11/h1-img-6.jpg"
              alt="Event Master"
              className=" shadow-lg max-w-[448px] max-h-[610px] object-cover"
            />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-16 px-5 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="hover-container overflow-hidden">
            <img
              src="https://images.pexels.com/photos/17223836/pexels-photo-17223836/free-photo-of-food-on-plate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image 1"
              className="hover-image"
            />
            <div className="hover-bg"></div>
            <div className="hover-text">
              <p className="uppercase tracking-widest">Event</p>
              <p className="italic font-normal text-2xl">Fabulous thali</p>
              {/* <p className="text-md">Read more</p> */}
            </div>
          </div>

          <div className="hover-container overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1051399/pexels-photo-1051399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image 2"
              className="hover-image"
            />
            <div className="hover-bg"></div>
            <div className="hover-text">
              <p className="uppercase tracking-widest">Party</p>
              <p className="italic font-normal text-2xl">
                Taste like home food{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-16 px-5 lg:px-10 p-6">
        <QueryComp />
      </div>
      {/* <div className="max-w-7xl mx-auto py-16 px-5 lg:px-10 p-6">
                <div className="flex">
                    <div className="item mr-3">
                        <img src="https://banquet.qodeinteractive.com/wp-content/uploads/2019/11/blog-1-img-1.jpg" className="max-w-1xl" />
                        <p className="uppercase tracking-widest mt-2">
                            SEPTEMBER 2 , 2019
                        </p>
                        <p className="text-3xl  italic font-normal my-3">
                            Firework of emotions for any event you make
                        </p>
                        <p className="uppercase tracking-widest text-sm">
                            Read more
                        </p>

                    </div>
                    <div className="item mr-3">
                        <img src="https://banquet.qodeinteractive.com/wp-content/uploads/2019/11/blog-1-img-1.jpg" className="max-w-1xl" />
                        <p className="uppercase tracking-widest mt-2">
                            SEPTEMBER 2 , 2019
                        </p>
                        <p className="text-3xl  italic font-normal my-3">
                            Firework of emotions for any event you make
                        </p>
                        <p className="uppercase tracking-widest text-sm">
                            Read more
                        </p>

                    </div>
                    <div className="item mr-3">
                        <img src="https://banquet.qodeinteractive.com/wp-content/uploads/2019/11/blog-1-img-1.jpg" className="max-w-1xl" />
                        <p className="uppercase tracking-widest mt-2">
                            SEPTEMBER 2 , 2019
                        </p>
                        <p className="text-3xl  italic font-normal my-3">
                            Firework of emotions for any event you make
                        </p>
                        <p className="uppercase tracking-widest text-sm">
                            Read more
                        </p>

                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto py-16 px-5 lg:px-10 p-6">
                <div className="flex">
                    <div className="item mr-3">
                        <img src="https://banquet.qodeinteractive.com/wp-content/uploads/2019/11/blog-1-img-1.jpg" className="max-w-1xl" />
                        <p className="uppercase tracking-widest mt-2">
                            SEPTEMBER 2 , 2019
                        </p>
                        <p className="text-3xl  italic font-normal my-3">
                            Firework of emotions for any event you make
                        </p>
                        <p className="uppercase tracking-widest text-sm">
                            Read more
                        </p>

                    </div>
                    <div className="item mr-3">
                        <img src="https://banquet.qodeinteractive.com/wp-content/uploads/2019/11/blog-1-img-1.jpg" className="max-w-1xl" />
                        <p className="uppercase tracking-widest mt-2">
                            SEPTEMBER 2 , 2019
                        </p>
                        <p className="text-3xl  italic font-normal my-3">
                            Firework of emotions for any event you make
                        </p>
                        <p className="uppercase tracking-widest text-sm">
                            Read more
                        </p>

                    </div>
                    <div className="item mr-3">
                        <img src="https://banquet.qodeinteractive.com/wp-content/uploads/2019/11/blog-1-img-1.jpg" className="max-w-1xl" />
                        <p className="uppercase tracking-widest mt-2">
                            SEPTEMBER 2 , 2019
                        </p>
                        <p className="text-3xl  italic font-normal my-3">
                            Firework of emotions for any event you make
                        </p>
                        <p className="uppercase tracking-widest text-sm">
                            Read more
                        </p>

                    </div>
                </div>
            </div> */}
      <div className="slider-container max-w-7xl mx-auto py-10 px-2 lg:px-10">
        <Slider {...companySettings}>
          <div>
            <img src="https://banquet.qodeinteractive.com/wp-content/uploads/2019/11/h1-client-3-hover.png" />
          </div>
          <div>
            <img src="https://banquet.qodeinteractive.com/wp-content/uploads/2019/11/h1-client-3-hover.png" />
          </div>
          <div>
            <img src="https://banquet.qodeinteractive.com/wp-content/uploads/2019/11/h1-client-2-hover.png" />
          </div>
          <div>
            <img src="https://banquet.qodeinteractive.com/wp-content/uploads/2019/11/h1-client-3-hover.png" />
          </div>
          <div>
            <img src="https://banquet.qodeinteractive.com/wp-content/uploads/2019/11/h1-client-2-hover.png" />
          </div>
          <div>
            <img src="https://banquet.qodeinteractive.com/wp-content/uploads/2019/11/h1-client-3-hover.png" />
          </div>
        </Slider>
      </div>
      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default Introdocution;
