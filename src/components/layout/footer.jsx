"use client";

import { useState } from "react";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
        <div className="container mx-auto px-6">
          <div className="flex justify-between flex-wrap">
            <div className="w-full md:w-1/3 mb-4">
              <h2 className="text-xl font-bold">Techayo Electronic</h2>
              <p className="text-gray-400">Your one-stop shop for the best electronics and accessories.</p>
            </div>
            <div className="w-full md:w-1/3 mb-4">
              <h2 className="text-lg font-bold">Quick Links</h2>
              <ul className="text-gray-400">
                <li><a href="#" className="hover:text-yellow-400">About Us</a></li>
                <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
                <li><a href="#" className="hover:text-yellow-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-yellow-400">Terms & Conditions</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 mb-4">
              <h2 className="text-lg font-bold">Follow Us</h2>
              <div className="flex space-x-4 text-gray-400">
                <a href="#" className="hover:text-yellow-400"><FaFacebook size={20} /></a>
                <a href="#" className="hover:text-yellow-400"><FaTwitter size={20} /></a>
                <a href="#" className="hover:text-yellow-400"><FaInstagram size={20} /></a>
                <a href="#" className="hover:text-yellow-400"><FaLinkedin size={20} /></a>
              </div>
            </div>
          </div>
          <div className="text-center text-gray-500 mt-6">
            © 2024 Techayo Electronic. All rights reserved.
          </div>
        </div>
      </footer>
  );
};

export default Footer;
