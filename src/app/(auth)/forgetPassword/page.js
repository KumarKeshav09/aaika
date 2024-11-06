"use client";

import { useCallback, useState } from "react";
import Styles from "./forgetPassword.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { API_BASE_URL } from "../../../../utils/constants";

export default function OtpVerify() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return re.test(email.toLowerCase());
  };

  const handleEmail = useCallback((value) => {
    setEmail(value.target.value);
    setIsValid(true);
  }, []);

  const submitForm = async () => {
    const isValidEmail = validateEmail(email);
    setIsValid(isValidEmail);
    if (!isValidEmail) {
      toast.error("Invalid Email");
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/user/forgetPassword`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (data) {
        toast.success("Reset Password Link Sent");
        router.push("/login");
      } else {
        toast.error(data.errMessage?.message || "An error occurred");
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      className={` ${Styles.loginMain} bg-gray-50 dark:bg-gray-900 h-100`}
    >
      {isLoading && <div>Loading...</div>} {/* Optional loading indicator */}
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div
          className={`${Styles.loginBoxMain} bg-gray-900 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700`}
        >
          <div className="p-6 space-y-2 md:space-y-2 sm:p-8">
            <a
              href="#"
              className={` flex justify-center font-semibold text-gray-900 dark:text-white`}
            >
              <img
                className="w-24 h-20 mr-2"
                src="../../../../images/logo.png"
                alt="logo"
              />
            </a>
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Forgot Password
            </h1>
            <form className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={handleEmail}
                  id="email"
                  placeholder="Enter Your Email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>

              <button
                onClick={submitForm}
                type="button"
                className={`${Styles.signInBtn} w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800`}
              >
                Send
              </button>
              <div className="flex justify-between">
                <div className="align-start flex">
                  <Link
                    href="/login"
                    className="font-medium text-sm text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
      />
    </section>
  );
}
