import React from "react";
import HomeFooter from "../Components/HomeFooter";
import DiwaliSection from "../Components/DiwaliSection";
import WeddingSection from "../Components/WeddingSection";
import SignatureTreats from "../Components/SignatureTreats";
import ContactSection from "../Components/ContactSection";
import TestimonialsSection from "../Components/TestimonialsSection";
import GallerySection from "../Components/GallerySection";
import AboutSection from "../Components/AboutSection";
import CommonFooter from "../Components/CommonFooter";
import Navbar from "../Components/Navbar";

export default function Home() {
  return (
    <div className="w-full">
      <div className="relative z-20">
        <Navbar />
      </div>
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
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-transparent"></div>

        {/* Text positioned to match Figma design */}
        <div className="relative z-20 flex items-center h-full px-6 md:px-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight">
              Baking Kozhikode's
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-orange-500 mt-2 leading-tight">
              Sweetest Memories
            </h2>
            <p className="font-roboto font-normal text-base md:text-lg leading-relaxed text-gray-700 mt-6 max-w-lg">
              From the heart of Kozhikode, Delta Bakery brings you fresh bread, delightful sweets, and grand spreads for life's biggest celebrations. Perfect for weddings, perfect for memories.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors">
                Contact Us
              </button>
              <button className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors">
                View Menu
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Diwali Special Collection */}
      <div className="relative z-20 bg-yellow-50">
        <DiwaliSection />
      </div>

      {/* ✅ About Section */}
      <div className="relative z-20 bg-gray-50">
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
      <div className="relative z-20 bg-white">
        <GallerySection />
      </div>


      {/* ✅ Testimonials Section */}
      <div className="relative z-20 bg-gray-50">
        <TestimonialsSection />
      </div>


      {/* ✅ Contact Section */}
      <div className="relative z-20 bg-white">
        <ContactSection />
      </div>


      {/* Home-specific Footer */}
      <div className="relative z-20">
        <HomeFooter />
      </div>
      <div className="relative z-20">
        <CommonFooter />
      </div>
    </div>
  );
}
