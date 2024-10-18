 
"use client";

import { Carousel } from "flowbite-react";

export function ImageSlider() {
  return (
    <div className="h-56 sm:h-screen xl:h-screen 2xl:h-screen">
      <Carousel>
        <img src="/images/hero-img-1.jpg" alt="..." />
        <img src="/images/hero-img-2.jpg" alt="..." />
        <img src="/images/hero-img-3.jpg" alt="..." />
      </Carousel>
    </div>
  );
}
