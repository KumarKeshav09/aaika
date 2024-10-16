"use client";

import QueryComp from "@/components/Common/query";

export default function Menu() {
    
  const menuCard = () => {
    return <>
     
  <div class="w-[399px] hover-zoom shadow-lg overflow-hidden">
    
    <div class=" bg-black text-white py-6">
      
      <div class=" bg-black flex items-center justify-center">
        <h1 class="text-3xl font-bold uppercase">Main Course</h1>
      </div>
    </div>

 
    <div class="p-6">
      <h2 class="text-center text-xl font-semibold mb-4 uppercase text-black">Breads / Rice</h2>
      
 
      <div class="space-y-4">
 
        <div class="flex items-center justify-between bg-white text-black p-2">
          <img src="https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?size=626&ext=jpg&ga=GA1.1.913258732.1728641137&semt=ais_hybrid" alt="Ghee Chapati" class="w-12 h-12 rounded-lg" />
          <span class="text-lg flex-grow mx-4">Ghee Chapati</span>
          <span class="text-lg font-semibold">₹12/-</span>
        </div>

 
        <div class="flex items-center justify-between bg-white text-black p-2">
          <img src="https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?size=626&ext=jpg&ga=GA1.1.913258732.1728641137&semt=ais_hybrid" alt="Tikkad" class="w-12 h-12 rounded-lg" />
          <span class="text-lg flex-grow mx-4">Tikkad</span>
          <span class="text-lg font-semibold">₹35/-</span>
        </div>
 
        <div class="flex items-center justify-between bg-white text-black p-2">
          <img src="https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?size=626&ext=jpg&ga=GA1.1.913258732.1728641137&semt=ais_hybrid" alt="Plain Paratha" class="w-12 h-12 rounded-lg" />
          <span class="text-lg flex-grow mx-4">Plain Paratha</span>
          <span class="text-lg font-semibold">₹16/-</span>
        </div>
 
        <div class="flex items-center justify-between bg-white text-black p-2">
          <img src="https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?size=626&ext=jpg&ga=GA1.1.913258732.1728641137&semt=ais_hybrid" alt="Aloo/Aloo Pyaj Paratha" class="w-12 h-12 rounded-lg" />
          <span class="text-lg flex-grow mx-4">Aloo/Aloo Pyaj Paratha (2)</span>
          <span class="text-lg font-semibold">₹139/-</span>
        </div>

 
      
      </div>
      
 
      {/* <div class="mt-8 text-center">
        <button class="bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold uppercase">
          Order Now
        </button>
      </div> */}
       <div class="mt-8 py-2 text-center bg-black">
         <p className="font-normal uppercase text-white">Note: minimum order 1 kg</p>
      </div>
    </div>
  </div>
    </>
  }
  return (
    <>
      <section className="w-full h-screen bg-[url('/images/bgmenu.png')] bg-no-repeat bg-cover">
        {/* <h1 className="text-8xl font-normal text-white italic">Menu</h1> */}
      </section>
     
          
       
         
        
       
      <div class="max-w-full mx-auto py-16 flex justify-around  lg:px-10 bg-[#f4f4f1]">
      {menuCard()}
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
         <QueryComp />
      </div>

    </>
  );
}
