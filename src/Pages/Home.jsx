import React from "react";
import HomeFooter from "../Components/HomeFooter";

export default function Home() {
  return (
    <div className="w-full">
      {/* ✅ Fixed Background */}
      <div
        className="hidden md:block fixed top-0 left-0 w-screen h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.9), transparent), url('/Images/home-first.jpg')",
        }}
      ></div>

{/* ✅ Hero Section */}
<section className="relative z-10 flex flex-col h-screen">
  {/* Mobile Background */}
  <img
    src="/Images/home-first.jpg"
    alt="Bakery"
    className="block md:hidden absolute top-0 left-0 w-full h-full object-cover"
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-transparent"></div>

  {/* Text centered on mobile, left aligned on bigger screens */}
  {/* Text left aligned on all screens */}
<div className="relative z-20 flex flex-1 items-center md:mb-16 text-left px-6 md:px-16">
  <div>
    <h1 className="text-3xl md:text-5xl font-bold text-black">
      Baking Kozhikode’s
    </h1>
    <h2 className="text-3xl md:text-5xl font-bold text-orange-500 mt-2">
      Sweetest Memories
    </h2>
<p className="font-roboto font-normal text-sm leading-7 tracking-normal align-middle text-gray-700 mt-5">
      From the heart of Kozhikode, Delta
      <br className="block md:hidden" />
      Bakery brings you fresh bread,
      <br className="hidden md:block" />
      delightful sweets, and grand spreads
      <br />
      for life’s biggest celebrations.
      <br className="block md:hidden" />
      Perfect for weddings, perfect for memories.
    </p>
    <div className="mt-5 md:flex md:space-x-4">
    <button className="w-96 h-10 bg-orange-500 text-white rounded-md md:w-36 md:h-16 border-transparent">
       Contact Us
    </button>
    <button className="w-96 h-10 bg-transparent border-2 border-black text-black mt-5 md:mt-0 rounded-md md:w-36 md:h-16">
        View Menu
    </button>
    </div>
    
  </div>
</div>

 


</section>

      {/* ✅ Scrollable Content */}
      <section className="w-full relative z-10 bg-yellow-50 p-10 md:w-screen">
        {/* <div className="h-[150vh]"></div> */}
        <div className="flex justify-center flex-col items-center space-y">
          <div className="w-36 h-8 bg-amber-100 flex items-center justify-center">
            <p className="font-roboto font-semibold text-[12.25px] leading-[17.5px] tracking-normal text-center align-middle text-orange-700">
              Limited Time Offer
          </p>
          
          </div>
          <h2 className="font-bold">Celebrate Diwali with Our</h2>
          <h3 className="font-bold text-orange-500">Special Collection</h3>
        </div>
      </section>

      {/* Home-specific Footer */}
      <HomeFooter />
    </div>
  );
}
