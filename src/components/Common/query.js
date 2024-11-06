"use client";

import { addData } from "../../utils/getPostApi";
import { useRef, useState } from "react";

export default function QueryComp() {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const messageRef = useRef("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef?.current?.value,
    };
    const addRes = await addData("https", payload);
    if (addRes?.success) {
    } else {
    }
    setLoading(false);
  };
  return (
    <>
      <div>
        <p className="uppercase tracking-widest text-center">
          Ready to get in touch?
        </p>
        <h2 className="text-5xl text-[#3e3930]  italic font-normal mb-10 text-center">
          Make an Event Request
        </h2>

        <form onSubmit={handleSubmit} method="POST">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-5">
            <div className="mb-4">
              <input
                type="text"
                id="name"
                placeholder="Name"
                ref={nameRef}
                name="name"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                ref={emailRef}
                id="email"
                name="email"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <textarea
              id="message"
              placeholder="Message"
              ref={messageRef}
              name="message"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              disabled={loading}
              type="submit"
              className="text-gray-500   py-2 px-4 border border-gray-200 hover:bg-gray-300"
            >
              {loading ? "Loading..." : "Get in Touch"}{" "}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
