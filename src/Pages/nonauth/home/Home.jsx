// import React, { useEffect, useRef, useState } from "react";

// export default function Home() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const targetRef = useRef(null);
//   const handleScroll = () => {
//     var middle = window.innerHeight / 2;
//     if (window.scrollY >= middle) {
//       setIsScrolled(true);
//     } else {
//       setIsScrolled(false);
//     }
//   };
//   useEffect(() => {
//     const handleScroll = () => {
//       var middle = window.innerHeight / 2;
//       if (window.scrollY >= middle) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="w-full">
//       {/* ✅ Fixed Background */}
//       <div
//         className="hidden md:block fixed top-0 left-0 w-screen h-screen bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "linear-gradient(to right, rgba(255,255,255,0.9), transparent), url('/Images/home-first.jpg')",
//         }}
//       ></div>

//       {/* ✅ Mobile Background */}
//       {/* <img
//         src="/Images/home-first.jpg"
//         alt="Bakery"
//         className="block md:hidden fixed top-0 left-0 w-full h-full object-cover"
//       /> */}

//       {/* ✅ Gradient Overlay */}
//       <div
//         className={`fixed top-0 left-0 w-full z-20 hidden md:flex justify-end items-center px-10 py-4 transition-colors duration-500 ${
//           isScrolled ? "bg-black/80 shadow-lg" : "bg-transparent"
//         }`}
//       >
//         <ul className="flex space-x-5">
//           <li className="text-white font-roboto font-medium text-base leading-6">
//             About
//           </li>
//           <li className="text-white font-roboto font-medium text-base leading-6">
//             Menu
//           </li>
//           <li className="text-white font-roboto font-medium text-base leading-6">
//             Gallery
//           </li>
//           <li className="text-white font-roboto font-medium text-base leading-6">
//             Contact
//           </li>
//         </ul>
//         <ul className="flex space-x-2">
//           <li>
//             <img src="/Images/facebook.png" alt="Facebook" />
//           </li>
//           <li>
//             <img src="/Images/Instagram.png" alt="Instagram" />
//           </li>
//         </ul>
//       </div>

//       {/* ✅ Mobile Hamburger
//       <div className="fixed top-4 right-4 md:hidden z-20">
//         <img src="/Images/Hamburger.png" className="w-10 h-10" alt="menu" />
//       </div> */}

//       {/* ✅ Hero Section */}
//       <section className="relative z-10 flex flex-col h-screen">
//         {/* Mobile Background */}
//         <img
//           src="/Images/home-first.jpg"
//           alt="Bakery"
//           className="block md:hidden absolute top-0 left-0 w-full h-full object-cover"
//         />

//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-transparent"></div>

//         {/* Logo fixed on top-left */}
//         <div className="absolute top-6 left-6 z-20">
//           <img
//             src="/Images/DeltaImage.png"
//             className="w-24 h-14 md:w-28 md:h-20 lg:w-40 lg:h-24"
//             alt="Delta Logo"
//           />
//         </div>

//         {/* ✅ Mobile Hamburger */}
//         <div className="absolute top-6 right-4 md:hidden z-20">
//           <img src="/Images/Hamburger.png" className="w-10 h-10" alt="menu" />
//         </div>

//         {/* Text centered on mobile, left aligned on bigger screens */}
//         {/* Text left aligned on all screens */}
//         <div className="relative z-20 flex flex-1 items-center md:mb-16 text-left px-6 md:px-16">
//           <div>
//             <h1 className="text-3xl md:text-5xl font-bold text-black">
//               Baking Kozhikode’s
//             </h1>
//             <h2 className="text-3xl md:text-5xl font-bold text-orange-500 mt-2">
//               Sweetest Memories
//             </h2>
//             <p className="font-roboto font-normal text-sm leading-7 tracking-normal align-middle text-gray-700 mt-5">
//               From the heart of Kozhikode, Delta
//               <br className="block md:hidden" />
//               Bakery brings you fresh bread,
//               <br className="hidden md:block" />
//               delightful sweets, and grand spreads
//               <br />
//               for life’s biggest celebrations.
//               <br className="block md:hidden" />
//               Perfect for weddings, perfect for memories.
//             </p>
//             <div className="mt-5 md:flex md:space-x-4">
//               <button className="w-96 h-10 bg-orange-500 text-white rounded-md md:w-36 md:h-16 border-transparent">
//                 Contact Us
//               </button>
//               <button className="w-96 h-10 bg-transparent border-2 border-black text-black mt-5 md:mt-0 rounded-md md:w-36 md:h-16">
//                 View Menu
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ✅ Scrollable Content */}
//       <section className="w-full relative z-10 bg-yellow-50 p-10 md:w-screen">
//         {/* <div className="h-[150vh]"></div> */}
//         <div className="flex justify-center flex-col items-center space-y">
//           <div className="w-36 h-8 bg-amber-100 flex items-center justify-center">
//             <p class="font-roboto font-semibold text-[12.25px] leading-[17.5px] tracking-normal text-center align-middle text-orange-700">
//               Limited Time Offer
//             </p>
//           </div>
//           <h2 className="font-bold">Celebrate Diwali with Our</h2>
//           <h3 className="font-bold text-orange-500">Special Collection</h3>
//         </div>
//       </section>
//     </div>
//   );
// }




import React from "react";
import Header from "../../../common/layout/header/Header";
import DiwaliSection from "./common/components/EventSection";
import AboutSection from "./common/Components/AboutSection";
import WeddingSection from "./common/Components/WeddingSection";
import TestimonialsSection from "./common/components/TestimonialsSection";
import ContactSection from "./common/components/ContactSection";
import HomeFooter from "./common/components/HomeFooter";

import SignatureTreats from "./common/components/SignatureTreats";
import GallerySection from "./common/components/GallerySection";
import Footer from "../../../common/layout/footer/Footer";
import { Link, useNavigate } from "react-router-dom";


export default function Home() {
  const navigate = useNavigate();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const goToMenu = () => {
    navigate('/menu');
  };

  return (
    <div className=" w-[100vw] ">
     
      <Header />
      {/* ✅ Fixed Background */}
      <div
        className="fixed top-0 left-0 w-full h-screen bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.9), transparent), url('/Images/home-first.jpg')"
        }}
      ></div>

      {/* ✅ Hero Section */}
      <section className="hero-section relative w-full h-screen z-10">
        {/* Mobile Background */}
        <img
          src="/Images/home-first.jpg"
          alt="Bakery"
          className="block md:hidden absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent"></div>

        {/* Logo positioned in top-left corner */}
        <div className="absolute top-20 left-10 z-40">
          <img
            src="/Images/DeltaImage.png"
            className="w-24 h-14 md:w-28 md:h-20 lg:w-[184px] lg:h-[112px]"
            alt="Delta Bakery Logo"
          />
        </div>

        {/* Text positioned to match Figma design */}
<div className="relative z-20 flex items-center h-[90%] px-6 md:px-[48px] pt-32 md:pt-40">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-7xl w-full font-extrabold text-black ">
              Baking Kozhikode's
            </h1>
            <h2 className="text-4xl md:text-7xl font-bold text-primary ">
              Sweetest Memories
            </h2>
            <p className="font-roboto text-neutral-gray1 font-normal text-base md:text-xl leading-relaxed  mt-6 max-w-xl">
              "From the heart of Kozhikode, Delta Bakery brings you fresh bread, delightful sweets, and grand spreads for life's biggest celebrations. Perfect for weddings, perfect for memories.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="bg-primary hover:bg-blend-overlay hover  bg-t text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors cursor-pointer"
              >
                Contact Us
                
              </button>
              <button 
                onClick={goToMenu}
                className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors cursor-pointer"
              >
                View Menu
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Diwali Special Collection */}
      <div className="relative z-20 bg-gradient-to-r from-[#FFFBEB] to-[#FFF7ED]">
        <DiwaliSection />
      </div>

      {/* ✅ About Section */}
      <div id="about" className="relative z-20 bg-gray-50">
        <AboutSection />
      </div>


      {/* ✅ Wedding Special Collection */}
      <div className="relative z-20 bg-pink-50">
        <WeddingSection />
      </div>

      {/* ✅ Signature Treats */}
      <div className="relative z-20 bg-white">
        <SignatureTreats />
      </div>

      {/* ✅ Gallery Section */}
      <div id="gallery" className="relative z-20 bg-white">
        <GallerySection />
      </div>


      {/* ✅ Testimonials Section */}
      <div className="relative z-20 bg-gray-50">
        <TestimonialsSection />
      </div>


      {/* ✅ Contact Section */}
      <div id="contact" className="relative z-20 bg-white">
        <ContactSection />
      </div>


      {/* Home-specific Footer */}
      <div className="relative z-20">
        <HomeFooter />
      </div>
      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  );
}
