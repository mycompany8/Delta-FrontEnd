import React from "react";
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io";

export default function CommonFooter() {
  return (
    <footer className="bg-gray-900 text-white w-full px-[10%]">
      <div className="w-full px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Delta Bakery Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Delta Bakery</h3>
            <p className="text-gray-300 text-sm">
              Crafting moments of joy through artisanal baking since 2020
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Menu</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <IoLogoFacebook />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <IoLogoInstagram />
              </a>
            </div>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>14/1005, Francis Rd, Thekepuram, Kuttichira, Kozhikode, Kerala 673003</p>
              <p>0495 230 3727</p>
              <p>hello@deltabakery.com</p>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <p className="text-center text-gray-300 text-sm">
            © 2025 Delta Bakery. All rights reserved. Made with <span className="text-red-500">❤️</span> for bread lovers.
          </p>
        </div>
      </div>
    </footer>
  );
}
