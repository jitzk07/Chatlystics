import React from "react";
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <footer className="bg-gray-200 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            {/* Menus Section */}
            <div className="w-full md:w-1/2 xl:w-1/3 mb-4">
              <h5 className="text-lg font-bold mb-2">MENUS</h5>
              <ul className="list-none mb-0">
                <li className="mb-2">
                  <a className="text-gray-600 hover:text-gray-900" href="#">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-600 hover:text-gray-900" href="#">
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-600 hover:text-gray-900" href="#">
                    Service
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-600 hover:text-gray-900" href="#">
                    Pricing
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-600 hover:text-gray-900" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="w-full md:w-1/2 xl:w-1/3 mb-4">
              <h5 className="text-lg font-bold mb-2">CONTACT US</h5>
              <ul className="list-none mb-0">
                <li className="mb-2">
                  <a className="text-gray-600 hover:text-gray-900" href="tel:+919598989391">
                    +91-9599898391
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-600 hover:text-gray-900" href="mailto:admin@incognitodevs.com">
                    admin@incognitodevs.com
                  </a>
                </li>
                <li className="mb-2">
                  S-3/704, Eldeco Aamantran Sector -119 Noida, Gautam Buddha Nagar, Uttar Pradesh.
                </li>
              </ul>
            </div>

            {/* Follow Us Section */}
            <div className="w-full md:w-1/2 xl:w-1/3 mb-4">
              <h5 className="text-lg font-bold mb-2">FOLLOW US</h5>
              <ul className="list-none mb-0 flex space-x-4">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <FaFacebookSquare size={24} />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <FaTwitterSquare size={24} />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <FaInstagramSquare size={24} />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <FaLinkedin size={24} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
