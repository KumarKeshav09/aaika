"use client";
import {  useState,useRef } from "react";
import styles from "./contact.module.css";
import { addData } from "@/utils/getPostApi";

export default function Contact() {
  const nameRef = useRef('')
  const emailRef = useRef('')
  const messageRef = useRef('')
  const phoneRef = useRef('')
  const [loading,setLoading] = useState(false)
  const handleSubmit = async (e) => {

      e.preventDefault()
      setLoading(true)
   const payload= {name:nameRef.current.value,email:emailRef.current.value,message:messageRef?.current?.value,phone:phoneRef?.current?.value}
    const addRes = await addData("https",payload)
    if(addRes?.success){

    }else{

    }
    setLoading(false)
    

  }
  return (
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

      <div className={`${styles.contactContainer} flex justify-center`}>
        <div
          className={`${styles.ContactUsSection}  mt-8  border-none rounded-lg shadow-sm dark:border-gray-700 mb-4 `}
        >
          <figure className=" border-none rounded-t-lg dark:bg-gray-800 dark:border-gray-700 h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full ">
         

              <div className="p-4">
                

                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                    ref={nameRef}
                      type="text"
                      name="floating_first_name"
                      id="floating_first_name"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_first_name"
                      className="required peer-focus:font-medium absolute text-md font-bold  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Full name
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                    ref={emailRef}
                      type="email"
                      name="floating_email"
                      id="floating_email"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_email"
                      className="required peer-focus:font-medium absolute text-md font-bold  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Email address
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                     ref={phoneRef}
                      type="number"
                      name="floating_number"
                      id="floating_number"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_number"
                      className="required peer-focus:font-medium absolute text-md font-bold  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Phone Number
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                    <textarea
                    ref={messageRef}
                      type="text"
                      name="message"
                      id="message"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      
                    />
                    <label
                      for="message"
                      className="peer-focus:font-medium absolute text-md font-bold  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Message
                    </label>
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="bgButtoncolor text-white bg-black hover:hoverbgbuttoncolor focus:ring-4 focus:outline-none focus:caret-gray-900 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    {loading ? 'Loading...':'Submit'}
                  </button>
                </form>
              </div>
              <div className="h-full  ">
                <div class="w-full max-w-md p-4  border-gray-200 rounded-lg  sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                
                  <div class="flow-root">
                    <ul
                      role="list"
                      class="divide-y divide-gray-200 dark:divide-gray-700"
                    >
                      <li class="py-3 sm:py-4">
                        <div class="flex items-center">
                          <div class="flex-shrink-0">
                            <img
                              class="w-14 h-14 rounded-full"
                              src="https://www.seekpng.com/png/full/136-1360951_call-png.png"
                              alt="Neil image"
                            />
                          </div>
                          <div class="flex-1 min-w-0 ms-4">
                            <p class="text-md font-bold text-gray-900 truncate dark:text-white headingFont" >
                              Phone Number
                            </p>
                            <p class="text-sm text-gray-500 truncate dark:text-gray-400 paraFont">
                             9861346275
                            </p>
                          </div>
                        </div>
                      </li>
                      <li class="py-3 sm:py-4">
                        <div class="flex items-center ">
                          <div class="flex-shrink-0">
                            <img
                              class="w-14 h-14 rounded-full"
                              src="https://www.philippes.com/wp-content/uploads/2017/01/email-icon.png"
                              alt="Bonnie image"
                            />
                          </div>
                          <div class="flex-1 min-w-0 ms-4">
                            <p class="text-md font-bold headingFont text-gray-900 truncate dark:text-white">
                              Email
                            </p>
                            <p class="text-sm text-gray-500 truncate dark:text-gray-400 paraFont">
                              email@windster.com
                            </p>
                          </div>
                        </div>
                      </li>
                      <li class="py-3 sm:py-4">
                        <div class="flex items-center">
                          <div class="flex-shrink-0">
                            <img
                              class="w-14 h-14 rounded-full"
                              src="https://cdn-icons-png.freepik.com/512/6948/6948631.png"
                              alt="Michael image"
                            />
                          </div>
                          <div class="flex-1 min-w-0 ms-4">
                            <p class="text-md font-bold headingFont text-gray-900 truncate dark:text-white">
                             Address
                            </p>
                            <p class="text-sm text-gray-600 truncate dark:text-gray-400 paraFont">
                              Jaipur,Rajasthan
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </figure>
        </div>
      </div>


      
    </main>
  );
}
