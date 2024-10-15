"use client";

export default function Menu() {
    
  const companySettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 100,
    autoplaySpeed: 5000,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 3,
  };
  return (
    <>
      <section className="w-full h-screen bg-[url('/images/bgmenu.png')] bg-no-repeat bg-cover">
        {/* <h1 className="text-8xl font-normal text-white italic">Menu</h1> */}
      </section>
      <div class="max-w-full mx-auto py-16 flex justify-around  lg:px-10 bg-[#f4f4f1]">
      <div>
      <img
              src=" /images/menu1.jpg"
              alt="Catering Image"
              class="shadow-lg w-[500px] h-[600px] hover-zoom"
            />
      </div>
      <div>
      <img
              src=" /images/menu2.jpg"
              alt="Catering Image"
              class="shadow-lg w-[500px] h-[600px] hover-zoom"
            />
      </div>
          
       
         
        
      </div>
      <div class="max-w-full mx-auto py-16 flex justify-around  lg:px-10 bg-[#f4f4f1]">
      <div>
      <img
              src=" /images/menu3.jpg"
              alt="Catering Image"
              class="shadow-lg w-[399px] h-[600px] hover-zoom"
            />
      </div>
      <div>
      <img
              src=" /images/menu5.jpg"
              alt="Catering Image"
              class="shadow-lg w-[399px] h-[600px] hover-zoom"
            />
      </div>
      <div>
      <img
              src=" /images/menu6.jpg"
              alt="Catering Image"
              class="shadow-lg w-[399px] h-[600px] hover-zoom"
            />
      </div>
       
         
        
      </div>
      <div class="max-w-full mx-auto py-16 flex justify-around  lg:px-10 bg-[#f4f4f1]">
      <div>
      <img
              src=" /images/menu4.jpg"
              alt="Catering Image"
              class="shadow-lg w-[399px] h-[600px] hover-zoom"
            />
      </div>
      <div>
      <img
              src=" /images/menu8.jpg"
              alt="Catering Image"
              class="shadow-lg w-[399px] h-[600px] hover-zoom"
            />
      </div>
      <div>
      <img
              src=" /images/menu9.jpg"
              alt="Catering Image"
              class="shadow-lg w-[399px] h-[600px] hover-zoom"
            />
      </div>
       
         
        
      </div>
      <div class="max-w-full mx-auto py-16 flex justify-center  lg:px-10 bg-[#f4f4f1]">
      <img
              src=" /images/menu10.jpg"
              alt="Catering Image"
              class="shadow-lg w-[600px] h-[600px] hover-zoom"
            />
      </div>
      {/* <div class="max-w-7xl mx-auto py-16 px-5 lg:px-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          <div>
            
            <h2 className="text-5xl text-[#3e3930]  italic font-normal mb-4">
            MAIN COURSE
            </h2>

            <p className="text-gray-500 mb-6">
              Autem dicant cum ex, ei vis nibh solum simul, veritus fierent
              fastidii quo ea. Cu solum scripta pro. Qui in clita everti
              propriae, vidit voluptaria cum ne, at nec sint movet delectus
              vidit voluptaria cum ne, at nec sint movet.
            </p>

            <div class="space-y-6">
              <div class="flex justify-between items-center">
                <div>
                  <p class="text-2xl italic text-[#3e3930]">EXECUTIVE THALI MEAL
                  </p>
                  <p class="text-gray-500 text-lg">
                    Paneer/Chole/Rajma, Green Veg, Rice,
                        Plain Paratha (3), Salad, Raita/Curd 
                  </p>
                </div>
                <p class="text-xl font-serif text-gray-800">₹139/-</p>
              </div>

              <div class="flex justify-between items-center">
                <div>
                  <p class="text-2xl italic text-[#3e3930]">SPECIAL THALI MEAL</p>
                  <p class="text-gray-500 text-lg">
                    Paneer/Chole/Rajma, Green Veg, Rice, Raita,
                        Lachaa Paratha (2), Salad, Pickle, Sweet
                  </p>
                </div>
                <p class="text-xl font-serif text-gray-800">₹179/-</p>
              </div>

             
            </div>
          </div>

          <div class="relative max-w-[318px] max-h-[512px]">
            <img
              src="https://banquet.qodeinteractive.com/wp-content/uploads/2019/11/p4-img-2.jpg"
              alt="Catering Image"
              class=" shadow-lg w-full h-full object-cover"
            />
            <img
              src="https://banquet.qodeinteractive.com/wp-content/uploads/2019/11/p4-img-3.jpg"
              alt="Spoon and Fork"
              class="absolute bottom-4 right-4 w-32 h-32  shadow-lg object-cover"
            />
          </div>
        </div>
      </div> */}
      
       
     
      <div className="max-w-7xl mx-auto py-16 px-5 lg:px-10 p-6">
        <p className="uppercase tracking-widest text-center">
          Ready to get in touch?
        </p>
        <h2 className="text-5xl text-[#3e3930]  italic font-normal mb-10 text-center">
          Make an Event Request
        </h2>

        <form action="#" method="POST">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-5">
            <div className="mb-4">
              <input
                type="text"
                id="name"
                placeholder="Name"
                name="name"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mb-4">
            <textarea
              id="message"
              placeholder="Message"
              name="message"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="text-gray-500   py-2 px-4 border border-gray-200"
            >
              Get in Touch
            </button>
          </div>
        </form>
      </div>

    </>
  );
}
