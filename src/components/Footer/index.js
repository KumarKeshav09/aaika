"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="max-w-full bg-[#f4f4f1]">
        <div className="max-w-7xl mx-auto py-16 px-5 lg:px-8 p-6">
          {/* <img src="/images/logo.png" className="h-12" alt="Logo" /> */}

          <h2 className="text-5xl text-[#3e3930]  italic font-normal mb-4">
            Aaika
          </h2>
          <div className="grid md:grid-cols-2 grid-cols-1 justify-between ">
            <div className="md:w-2/3 text-justify mb-4 text-lg">
              Aiika is a Jaipur-based cloud kitchen, known for delivering
              authentic homemade meals with a touch of tradition. They focus on
              providing a variety of freshly prepared dishes, blending local
              flavors with modern convenience. Customers can easily order
              through popular food delivery platforms.
            </div>

            <div className="flex md:justify-end space-x-4 ">
              <div className="md:w-1/3 uppercase tracking-widest mr-7">
                <p className="mb-2">
                  <Link href="Services">Services</Link>
                </p>
                <p className="mb-2">
                  <Link href="Gallery">Gallery</Link>
                </p>
                <p className="mb-2">
                  <Link href="Menu">Menu</Link>
                </p>
                <p className="mb-2">
                  <Link href="ContactUs">Contacts</Link>
                </p>
              </div>

              <div className="w-1/3 uppercase tracking-widest">
                <p className="mb-2">
                  <Link href="https">Facebook</Link>
                </p>
                <p className="mb-2">
                  <Link href="https">twitter</Link>
                </p>
                <p className="mb-2">
                  <Link href="https">instagram</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
