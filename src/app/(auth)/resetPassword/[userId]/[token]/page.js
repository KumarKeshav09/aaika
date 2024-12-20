"use client";
import { useCallback, useState } from "react";
import Styles from "./forgetPassword.module.css";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { API_BASE_URL } from "../../../../../../utils/constants";

export default function PasswordReset({params}) {
  const router = useRouter();
  const [NewPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [passwordShow, setPasswordShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handlePassword = useCallback((value) => {
    const pvalue = value.target.value;
    setNewPassword(pvalue);
    setPasswordsMatch(pvalue === confirmPassword);
  }, [confirmPassword]);

  const handlePasswordShow = () => {
    setPasswordShow(!passwordShow);
  };

  const handleConfirmPasswordChange = (event) => {
    const value = event.target.value;
    setConfirmPassword(value);
    setPasswordsMatch(NewPassword === value);
  };

  const submitForm = async () => {
    if (NewPassword.length < 5) {
      toast.error("Password must be at least 5 characters long");
      return;
    }

    if (NewPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/user/resetPassword/${params.userId}/${params.token}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newPassword: NewPassword }),
      });

      const res = await response.json();

      if (res) {
        toast.success("Password Reset Successfully");
        router.push("/login");
      } else {
        toast.error(res.errMessage.message);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={`${Styles.loginMain} bg-gray-50 dark:bg-gray-900 h-100`}>
      {isLoading }
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className={`${Styles.loginBoxMain} bg-gray-900 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700`}>
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
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
            <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">
              Reset Password
            </h1>
            <form className="space-y-4 md:space-y-6">
              <div className="relative">
              <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-white dark:text-white">
                  New Password
                </label>
                <input
                  type={passwordShow ? "text" : "password"}
                  value={NewPassword}
                  onChange={handlePassword}
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
                <button
                  onClick={handlePasswordShow}
                  type="button"
                  className={`text-black absolute end-2.5 bottom-2.5 font-bold rounded-lg text-xl px-4 py-2 ${Styles.eyeButton}`}
                >
                  {passwordShow ? <i className="bi bi-eye-slash-fill"></i> : <i className="bi bi-eye-fill"></i>}
                </button>
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-white dark:text-white">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
                {!passwordsMatch && (
                  <p className="text-red-500 text-sm mt-1">Password should match.</p>
                )}
              </div>
              <button
                onClick={submitForm}
                type="button"
                className={`${Styles.signInBtn} w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800`}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
