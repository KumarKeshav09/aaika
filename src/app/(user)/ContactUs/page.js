"use client";
import { useState, useRef } from "react";
import styles from "./contact.module.css";
import { addData } from "../../../utils/getPostApi";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import QueryComp from "@/components/Common/query";
import WhatsAppButton from "@/components/Common/Whatsapp";

export default function Contact() {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const messageRef = useRef("");
  const phoneRef = useRef("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef?.current?.value,
      phone: phoneRef?.current?.value,
    };
    const addRes = await addData("https", payload);
    if (addRes?.success) {
    } else {
    }
    setLoading(false);
  };
  return (
    <>
      <Navbar />
      <main className="">
        {/* overview */}
        <div>
          <section className="bg-white dark:bg-gray-900">
            <div className="pt-8 px-4 mx-auto max-w-screen-xl lg:pt-16 lg:px-6">
              <div className="">
                <div className="text-center max-w-xl mx-auto">
                  <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800">
                    Contact Us
                  </h1>
                  <div className="text-center mb-5">
                    <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                    <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                    <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                    <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                    <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-2 md:gap-2 max-w-7xl mx-auto py-16 px-5 lg:px-10 p-6`}
        >
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.3169137861814!2d75.81665257596869!3d26.79803596500826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc991c28dea79%3A0x89d2d80de85318a1!2sSector%2010%2C%20Sector%206%2C%20Pratap%20Nagar%2C%20Jaipur%2C%20Rajasthan%20302033!5e0!3m2!1sen!2sin!4v1729493534317!5m2!1sen!2sin"
              width="600"
              height="400"
              className={`${styles.mapSize}`}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className=" mx-auto max-w-screen-xl content-center ">
            <div className=" grid grid-cols-1 md:grid-cols-2 md:border-indigo-600 border-white px-4 py-6">
              <div className="mb-8 mx-8 mt-4 text-center text-black contactDetail">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-8"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>

                  <div className="ml-4 w-full">
                    <div className="flex justify-center">
                      <h6 className="text-gray-700  ml-3 text-xl font-bold leading-5 pb-3  text-center">
                        Address
                      </h6>
                    </div>
                    <hr />
                    <h3 className="mt-4 text-gray-900 hover:text-black text-md font-semibold leading-8  text-center cursor-pointer">
                      Jaipur, Rajasthan (India)
                    </h3>
                  </div>
                </div>
              </div>
              <div className="mb-8 mx-8 mt-4 text-center  text-black contactDetail">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-8"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                  <div className="ml-4 w-full">
                    <div className="flex justify-center">
                      <h6 className="text-gray-700 ml-3 text-xl font-bold leading-5 pb-3  text-center">
                        Email Address
                      </h6>
                    </div>
                    <hr />
                    <h3 className="mt-4 text-gray-900 hover:text-black text-md font-semibold leading-8  text-center cursor-pointer">
                      info@aaika.com
                    </h3>
                  </div>
                </div>
              </div>
              <div className="mb-8 mx-8 content-center text-center text-black contactDetail">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-8 "
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>

                  <div className="ml-4 w-full">
                    <div className="flex justify-center">
                      <h6 className="text-gray-700  ml-3 text-xl font-bold leading-5 pb-3 text-center">
                        Phone Number
                      </h6>
                    </div>
                    <hr />
                    <h3 className="mt-4 text-md text-gray-900 hover:text-black font-semibold leading-8 text-center cursor-pointer">
                      +91911111111
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-5 lg:px-10 p-6">
          <QueryComp />
        </div>
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
