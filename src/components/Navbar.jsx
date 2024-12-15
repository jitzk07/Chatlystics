import React from 'react';

function Navbar() {
  return (
    <nav className="bg-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a className="text-lg font-bold" href="#">Logo</a>
          <button className="lg:hidden" type="button">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
          <div className="hidden lg:flex lg:flex-grow lg:justify-end">
            <ul className="flex justify-center lg:justify-end">
              <li className="mr-6">
                <a className="text-gray-600 hover:text-gray-900" href="/">Home</a>
              </li>
              <li className="mr-6">
                <a className="text-gray-600 hover:text-gray-900" href="/about-us">About Us</a>
              </li>
              <li className="mr-6">
                <a className="text-gray-600 hover:text-gray-900" href="/services">Services</a>
              </li>
              <li className="mr-6">
                <a className="text-gray-600 hover:text-gray-900" href="/pricing">Pricing</a>
              </li>
              <li className="mr-6">
                <a className="text-gray-600 hover:text-gray-900" href="/contact-us">Contact Us</a>
              </li>
            </ul>
            <div className="ml-6">
              <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" type="button">Get Offer</button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4" type="button">Login</button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4" type="button">Logout</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;