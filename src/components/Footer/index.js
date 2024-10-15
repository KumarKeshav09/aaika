"use client"
import Link from "next/link";

export default function Footer () {
return <>
  <footer className="max-w-full bg-[#f4f4f1]">
                <div class="max-w-7xl mx-auto py-16 px-5 lg:px-10 p-6">
                {/* <img src="/images/logo.png" className="h-12" alt="Logo" /> */}
               
                    <h2 className="text-5xl text-[#3e3930]  italic font-normal mb-4">Aaika
                    </h2>
                <div className="sm:flex flex-wrap">
                <div className="uppercase tracking-widest md:mr-36">
                 <p className="mb-2">
                    <Link href="https">Weddings</Link>
                 </p>
                 <p className="mb-2">
                    <Link href="https">Corporate</Link>
                 </p>
                 <p className="mb-2">
                    <Link href="https">Events</Link>
                 </p>
                 <p className="mb-2">
                    <Link href="https">Contacts</Link>
                 </p>
                </div>
                <div className="uppercase tracking-widest md:mr-36">
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
                <div className="capitalize text-2xl italic">
                 <p className="mb-2">
                    <Link href="https">Receive</Link>
                 </p>
                 <p className="mb-2">
                    <Link href="https">Updates & Special</Link>
                 </p>
                 <p className="mb-2">
                    <Link href="https">Announcements</Link>
                 </p>
                 <p>
                    <input type="email" placeholder="Email" class="appearance-none bg-[#f4f4f1]    border-x-0 border-t-0 border-b-2 focus:border-none"/>
                    <button type="submit" class="py-2 px-4">Join</button>
                 </p>
               
                </div>
                </div>
                
                </div>
                

            </footer>
</>
}