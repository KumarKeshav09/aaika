"use client";

import WhatsAppButton from "@/components/Common/Whatsapp";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import { API_BASE_URL } from "@/utils/constants";
import { useEffect, useState } from "react";
import { WEB_BASE_URL } from "../../../../utils/constants";

export default function Gallery() {
  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/v1/gallery/getAllGalleries`);
      const data = await res.json();
      console.log("Fetched data:", data);
      setListData(data || []);
    } catch (error) {
      console.error("Error fetching Services:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto py-16 px-5 lg:px-10">
        <div className="text-center max-w-xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
            Gallery
          </h1>
          <div className="text-center mb-3">
            <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
            <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
            <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
            <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
            <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
          </div>
        </div>

        <div className="flex flex-wrap -mx-4">
        {listData?.galleries?.map((item,index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className="overflow-hidden rounded-lg shadow-lg group">
              <img
                src={WEB_BASE_URL + "/" + item.imageLink}
                alt="image"
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500 ease-in-out"
              />
            </div>
          </div>
        ))}

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className="overflow-hidden rounded-lg shadow-lg group">
              <img
                src="https://images.pexels.com/photos/8818723/pexels-photo-8818723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Image 2"
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500 ease-in-out"
              />
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className="overflow-hidden rounded-lg shadow-lg group">
              <img
                src="https://images.pexels.com/photos/11479023/pexels-photo-11479023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Image 3"
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500 ease-in-out"
              />
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className="overflow-hidden rounded-lg shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1695654401292-2807ecb9383b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Image 4"
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500 ease-in-out"
              />
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className="overflow-hidden rounded-lg shadow-lg group">
              <img
                src="https://images.pexels.com/photos/17223836/pexels-photo-17223836/free-photo-of-food-on-plate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Image 5"
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500 ease-in-out"
              />
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className="overflow-hidden rounded-lg shadow-lg group">
              <img
                src="https://images.pexels.com/photos/1051399/pexels-photo-1051399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Image 6"
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
