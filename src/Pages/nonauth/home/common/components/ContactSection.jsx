import React from "react";
// import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="w-full relative z-10 md:p-[48px] py-16 bg-gray-50">
      <div className="w-full px-4 ">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Visit Us Today
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Come experience the magic of fresh-baked goodness
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center ">
          {/* Left Column - Get in Touch Form */}
          <div className="bg-white rounded-xl shadow-lg sm:min-h-[484px] sm:min-w-[616px] p-7">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
            <form className="space-y-5">
              <div>
               
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  placeholder="Enter your name"
                />
              </div>
              <div>
               
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
              
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none"
                  placeholder="Enter your message"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Column - Visit Our Store */}
          <div className="p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Visit Our Store</h3>
            
            {/* Contact Information */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                {/* <FaMapMarkerAlt className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" /> */}
                <p className="text-gray-700">
                  14/1005, Francis Rd, Thekepuram, Kuttichira, Kozhikode, Kerala 673003
                </p>
              </div>
              <div className="flex items-center space-x-3">
                {/* <FaPhone className="w-5 h-5 text-orange-500 flex-shrink-0" /> */}
                <p className="text-gray-700">0495 230 3727</p>
              </div>
              <div className="flex items-center space-x-3">
                {/* <FaEnvelope className="w-5 h-5 text-orange-500 flex-shrink-0" /> */}
                <p className="text-gray-700">hello@deltabakery.com</p>
              </div>
            </div>

            {/* Opening Hours */}
            <div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">Opening Hours</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-700">Monday - Friday</span>
                  <span className="text-gray-700">7:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Saturday</span>
                  <span className="text-gray-700">8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Sunday</span>
                  <span className="text-gray-700">9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
