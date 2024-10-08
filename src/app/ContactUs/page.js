"use client";
import { useCallback, useEffect, useState } from "react";
import styles from "./contact.module.css";

export default function Contact() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [Mobile, setMobile] = useState();

  const handleName = useCallback((value) => {
    setName(() => value.target.value);
  }, []);
  const handleEmail = useCallback((value) => {
    setEmail(() => value.target.value);
  }, []);
  const handleMobile = useCallback((value) => {
    setMobile(() => value.target.value);
  }, []);
  const handleMessage = useCallback((value) => {
    setMessage(() => value.target.value);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!Name) {
      toast.error("Name is required");
      return;
    }
    if (!Email) {
      toast.error("Email is required");
      return;
    }
    if (!Message) {
      toast.error("Question is required");
      return;
    }
    if (!Mobile) {
      toast.error("Mobile is required");
      return;
    }
    if (!/^(\+\d{1,3}[- ]?)?\d{10}$/.test(Mobile)) {
      toast.error('Please enter a valid 10-digit mobile number');
      return false;
    }
    let data = {
      Name,
      Email,
      Message,
    };
    if (Mobile !== "") {
      data.Mobile = Mobile;
    }
    // try {
    //   const res = await fetch(`${API_BASE_URL}/contact/addContact`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   });
    //   const resData = await res.json();


    //   if (resData?.success) {
    //     toast.success("Question is successfully sent!");
    //     setName("");
    //     setEmail("");
    //     setMessage("");
    //     setMobile("");
    //     return { successMessage: resData };
    //   } else {
    //     toast.error(resData.error);
    //     return { errMessage: resData.error };
    //   }
    // } catch (error) {
    //   toast.error("someting went wrong");
    // }
  };
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

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2 px-2 py-2 md:p-8">
        <div className="">

          <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.215543683814!2d75.68789117597113!3d26.8966536607795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4be3b44bc21d%3A0x868c76019d26c676!2sVaishali%20Utsav!5e0!3m2!1sen!2sin!4v1727677114729!5m2!1sen!2sin" allowfullscreen=""></iframe>
        </div>
        <div className="py-8 px-4 mx-auto max-w-screen-xl content-center lg:py-12 lg:px-6">
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
                  <h3 className="mt-4 text-md font-semibold leading-8  text-center text-indigo-600 hover:text-black cursor-pointer">
                    Rajasthan (India)
                  </h3>
                </div>
              </div>




            </div>
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
                      Office Address
                    </h6>
                  </div>
                  <hr />
                  <h3 className="mt-4 text-indigo-600 hover:text-black text-md font-semibold leading-8  text-center cursor-pointer">
                    Rajasthan (India)
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
                  <h3 className="mt-4 text-indigo-600 hover:text-black text-md font-semibold leading-8  text-center cursor-pointer">
                    info@test.com
                  </h3>

                </div>
              </div>

            </div>
            <div className="mb-8 mx-8 mt-4 text-center text-black contactDetail">
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
                    <h6 className="text-gray-700  ml-3 text-xl font-bold leading-5 pb-3  text-center">
                      Phone Number
                    </h6>
                  </div>
                  <hr />
                  <h3 className="mt-4 text-md text-indigo-600 hover:text-black font-semibold leading-8  text-center cursor-pointer">
                    +911234567890, +910987654321
                  </h3>

                </div>
              </div>

            </div>
            {/* <div className="ml-4 mt-4">
                <Link href="https://maps.app.goo.gl/tzzUFEkv4FgsA5MR9" target="_blank">
                  <div className="flex justify-center">
                    <h6 className="mt-4 text-xl font-semibold text-black leading-8  text-center contactDetail ">
                      Get Direction <i className="bi bi-arrow-right"></i>
                    </h6>
                  </div>
                </Link>
                </div> */}
          </div>
        </div>
      </div>


      <section className={`${styles.forthSection} flex`}>
        <div className={`${styles.forthSectionInner}`}>
          <div className={`${styles.forthBoxMain}`}>
            <div className={`${styles.forthBoxText}`}>
              <h1>We always love to hear from you</h1>
            </div>
            <form className={`${styles.forthBoxForm}`}>
              <div className={`${styles.forthBoxInput}`}>
                <input
                  placeholder="Full Name"
                  value={Name}
                  onChange={handleName}
                  className="border-b bg-transparent text-xl focus:outline-0 focus:border-white hover:border-white mr-2 placeholder-gray-300 hover:placeholder-white py-3" />
                <input
                  placeholder="Email Address"
                  value={Email}
                  onChange={handleEmail}
                  className={`${styles.forthBoxInput2} py-3 border-b bg-transparent text-xl focus:outline-0 mr-2 focus:border-white hover:border-white placeholder-gray-300 hover:placeholder-white `} />
                <input
                  placeholder="Mobile Number"
                  type="number"
                  value={Mobile}
                  onChange={handleMobile}
                  className={`${styles.forthBoxInput2} py-3 border-0 border-b border-gray-300  appearance-none bg-transparent text-xl focus:outline-0 focus:border-white hover:border-white placeholder-gray-300 hover:placeholder-white `} />
              </div>
              <div className={`${styles.forthBoxDisplayForm}`}>
                <textarea
                  rows="2"
                  placeholder="Ask Your Question"
                  value={Message}
                  onChange={handleMessage}
                  className="block py-2.5 px-0 w-full resize-none text-xl text-white bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-0 focus:border-white hover:border-white placeholder-gray-300 hover:placeholder-white peer"
                />
                <div className={`${styles.forthBoxButton}`}>
                  <button onClick={handleSubmit} className={`${styles.forthButton}`}>Submit</button>
                </div>
              </div>
            </form>
          </div>


        </div>
        <div className={`${styles.forthSectionImg}`}>
          <img
            src="../../../../images/contact.avif"
          />
        </div>
      </section>
    </main>
  );
}
