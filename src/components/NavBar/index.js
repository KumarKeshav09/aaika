"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./navbar.module.css";


export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    import('flowbite').then((module) => {
      const { initFlowbite } = module;
      initFlowbite();
    });
  }, []);

  const isActive = (path) => pathname === path;

  return (
    <nav className={`h-18 ${pathname === "/" ? 'bg-gray-800 dark:bg-gray-900' : 'bg-gray-900 dark:bg-black'} w-full relative z-50 top-0 start-0`}>
      <div className={`${styles.navMain} max-w-screen flex flex-wrap items-center justify-between mx-auto py-4 md:px-28`}>
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/images/header-logo-light.png" className="h-12" alt="Logo" />
        </Link>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`${styles.navUlMain} ${isMobileMenuOpen ? 'block' : 'hidden'} md:block w-full md:w-auto`} id="navbar-default">
          <ul className={`font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-black dark:border-gray-700`}>
            <li>
              <Link href="/" className={`${isActive("/") ? "active-tab" : ""} block text-lg py-2 px-3 text-white`}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/aboutus" className={`${isActive("/aboutus") ? "active-tab" : ""} block text-lg py-2 px-3 text-white`}>
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className={`${isActive("/services") ? "active-tab" : ""} block text-lg py-2 px-3 text-white`}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/resources" className={`${isActive("/resources") ? "active-tab" : ""} block text-lg py-2 px-3 text-white`}>
                Resources
              </Link>
            </li>
            <li>
              <Link href="/product" className={`${isActive("/product") ? "active-tab" : ""} block text-lg py-2 px-3 text-white`}>
                Product
              </Link>
            </li>
            <li>
              <Link href="/ContactUs" className={`${isActive("/ContactUs") ? "active-tab" : ""} block text-lg py-2 px-3 text-white`}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
