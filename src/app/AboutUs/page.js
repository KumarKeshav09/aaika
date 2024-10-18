"use client";

import Link from "next/link";
 
export default function AboutUs() {
   
    return <>
        <section className="w-full h-screen flex justify-center items-center bg-[url('/images/bgmenu.png')] bg-no-repeat bg-cover">
            {/* <h1 className="text-8xl font-normal text-white italic">About us</h1> */}
        </section>
       
        <div class="max-w-7xl mx-auto py-10 px-2 lg:px-10">

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div class="pt-5">
                    
                    {/* <p className="uppercase tracking-widest">Planning</p> */}
                    <h2 className="text-5xl text-[#3e3930]  italic font-normal mb-4">Vision
                    </h2>
                    <p class="text-xl mb-6">
                    At Aaika, our vision is to bring people together through exceptional culinary experiences. We aim to create a welcoming atmosphere where flavors inspire and meals create lasting memories. 
                    Our commitment is to quality, innovation, and sustainability in every dish. Join us on this journey of taste and togetherness.
                    </p>


                </div>
                <div class="overflow-hidden  shadow-lg">
                    <img src="/images/vision.png" alt="Social Event" class="w-full h-auto object-cover" />
                </div>
            </div>
        </div>
        <div class="max-w-7xl mx-auto py-10 px-2 lg:px-10">

<div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
    
    <div class="overflow-hidden  shadow-lg">
        <img src="/images/mission.png" alt="Social Event" class="w-full h-auto object-cover" />
    </div>
    <div class="pt-5">
    {/* <p className="uppercase tracking-widest">Planning</p> */}
                    <h2 className="text-5xl text-[#3e3930]  italic font-normal mb-4">Mission
                    </h2>
                    <p class="text-xl mb-6">
                    Our mission is to deliver exceptional dining experiences by offering fresh, flavorful dishes crafted with love. We believe in creating a welcoming atmosphere where guests feel like family. Through quality ingredients and authentic recipes, we strive to celebrate the rich heritage of our cuisine.
                     At our core, we are dedicated to spreading joy, one meal at a time.
                    </p>


    </div>
</div>
</div>
<div class="max-w-7xl mx-auto py-16 px-5 lg:px-10 mb-20">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">


                    <div class="hover-container max-h-[339px] max-w-[270px]">
                        <img src="https://banquet.qodeinteractive.com/wp-content/uploads/2019/11/h1-img-6.jpg" alt="Image 1" class="hover-image" />
                        <div className="text-center py-2">
                        
                        <p className="uppercase tracking-widest">Catering Expert</p>
                        
                        <h3 className="text-2xl text-[#3e3930]  italic font-normal mb-4">Brooke Atkins
                        </h3>
                        </div>
                         
                        <div class="hover-bg"></div>
                        <div class="hover-text">
                            <p class="text-lg">
                            An experienced culinary expert overseeing kitchen operations and menu development. 
                            Their commitment to quality and creativity ensures each dish exceeds guest expectations.
                            </p>
                            <p class="text-md mb-2">
                                <Link href="">facebook</Link>
                            </p>
                            <p class="text-md">
                                <Link href="">Twitter</Link>
                            </p>
                            <p class="text-md">
                                <Link href="">Instagram</Link>
                            </p>
                        </div>
                        
                    </div>


                    <div class="hover-container max-h-[339px] max-w-[270px]">
                        <img src="https://banquet.qodeinteractive.com/wp-content/uploads/2019/11/h1-img-6.jpg" alt="Image 1" class="hover-image" />
                        <div className="text-center py-2">
                        <p className="uppercase tracking-widest">Founder</p>
                        
                        <h3 className="text-2xl text-[#3e3930]  italic font-normal mb-4">Brooke Atkins
                        </h3>
                        </div>
                         
                        <div class="hover-bg"></div>
                        <div class="hover-text">
                            <p class="text-lg mb-2">
                            A visionary leader dedicated to creating an exceptional dining experience. With a passion for culinary arts and hospitality,
                             they drive the restaurant mission and values.
                            </p>
                           
                            <p class="text-md">
                                <Link href="">facebook</Link>
                            </p>
                            <p class="text-md">
                                <Link href="">Twitter</Link>
                            </p>
                            <p class="text-md">
                                <Link href="">Instagram</Link>
                            </p>
                         
                            
                        </div>
                        
                    </div>
                    <div class="hover-container max-h-[339px] max-w-[270px]">
                        <img src="https://banquet.qodeinteractive.com/wp-content/uploads/2019/11/h1-img-6.jpg" alt="Image 1" class="hover-image" />
                        <div className="text-center py-2">
                        <p className="uppercase tracking-widest">Co-Founder</p>
                        
                        <h3 className="text-2xl text-[#3e3930]  italic font-normal mb-4">Brooke Atkins
                        </h3>
                        </div>
                         
                        <div class="hover-bg"></div>
                        <div class="hover-text">
                            <p class="text-lg">
                            A creative partner who complements the founder vision with innovative ideas.
                             Their expertise in business management and culinary trends shapes the restaurant success.
                            </p>
                            <p class="text-md mb-2">
                                <Link href="">facebook</Link>
                            </p>
                            <p class="text-md">
                                <Link href="">Twitter</Link>
                            </p>
                            <p class="text-md">
                                <Link href="">Instagram</Link>
                            </p>
                        </div>
                        
                    </div>

                </div>
            </div>
    </>
}