"use client";

import { useState } from "react";
import Link from "next/link";
import { FaSearch, FaShoppingBasket, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [currency, setCurrency] = useState("USD $");
  const [language, setLanguage] = useState("English");
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full shadow-md">
      {/* Top Bar */}
      <div className="bg-gray-100 text-center text-xs sm:text-sm py-1">
        Order Before 17:30, Shipped Today
      </div>

      {/* Main Navbar */}
      <div className="bg-white flex justify-between items-center px-4 sm:px-6 py-3">
        {/* Logo */}
        <Link href="/">
          <div className="text-xl sm:text-2xl font-bold text-pink-600 flex items-center">
            <span className="mr-2">⚡</span> Techayo{" "}
            <span className="text-gray-500 text-xs sm:text-sm ml-1">Electronic</span>
          </div>
        </Link>

        {/* Search Bar - Hidden on small screens */}
        <div className="hidden md:flex border rounded-md overflow-hidden w-1/3">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 outline-none"
          />
          <button className="bg-pink-600 text-white p-2">
            <FaSearch />
          </button>
        </div>

        {/* Account & Cart */}
        <div className="hidden md:flex items-center space-x-4 text-gray-700">
          <span className="cursor-pointer">Wishlist</span>
          <span className="cursor-pointer">
            <Link href="/login">Account</Link>
          </span>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="bg-transparent cursor-pointer"
          >
            <option>USD $</option>
            <option>EUR €</option>
            <option>GBP £</option>
          </select>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-transparent cursor-pointer"
          >
            <option>English</option>
            <option>French</option>
            <option>Spanish</option>
          </select>
          <div className="flex items-center cursor-pointer">
            <FaShoppingBasket size={20} />
            <span className="ml-1">$0.00</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 text-xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute w-full top-16 left-0 shadow-md border-t">
          <ul className="flex flex-col text-gray-700 py-2 px-4">
            <li className="py-2 border-b">
              <Link href="/login">Account</Link>
            </li>
            <li className="py-2 border-b">Wishlist</li>
            <li className="py-2 border-b">Shop</li>
            <li className="py-2 border-b">Contact</li>
            <li className="py-2 border-b">Services</li>
            <li className="py-2">
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full bg-transparent cursor-pointer"
              >
                <option>USD $</option>
                <option>EUR €</option>
                <option>GBP £</option>
              </select>
            </li>
            <li className="py-2">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full bg-transparent cursor-pointer"
              >
                <option>English</option>
                <option>French</option>
                <option>Spanish</option>
              </select>
            </li>
          </ul>
        </div>
      )}

      {/* Navigation Bar */}
      <nav className="bg-black text-white flex justify-between px-4 sm:px-6 py-2 items-center relative">
        <button
          className="bg-yellow-400 text-black px-4 py-2 font-semibold rounded flex items-center"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars className="mr-2" /> ALL CATEGORIES
        </button>

        <div className="hidden md:flex space-x-6 text-sm">
          <a href="#" className="hover:text-yellow-400">About us</a>
          <a href="#" className="hover:text-yellow-400">Collection</a>
          <a href="#" className="hover:text-yellow-400">Contact</a>
          <a href="#" className="hover:text-yellow-400">Blog</a>
          <a href="#" className="hover:text-yellow-400">Shop</a>
          <a href="#" className="hover:text-yellow-400">Services</a>
          <a href="#" className="hover:text-yellow-400">View More ▼</a>
        </div>

        <button className="hidden md:block bg-yellow-400 text-black px-4 py-2 font-semibold rounded">
          FLAT 10% OFF ALL PURCHASE
        </button>
      </nav>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="absolute bg-white w-64 shadow-md left-4 sm:left-6 top-20 z-10 border rounded-md">
          <ul className="py-2">
            <li className="px-4 py-2 flex justify-between border-b">
              Electronic{" "}
              <span className="bg-black text-white text-xs px-2 py-1 rounded">NEW</span>
            </li>
            <li className="px-4 py-2 border-b">Blogs</li>
            <li className="px-4 py-2 flex justify-between border-b">
              Accessories{" "}
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">SALE</span>
            </li>
            <li className="px-4 py-2 border-b">Collection</li>
            <li className="px-4 py-2 border-b">Contact</li>
            <li className="px-4 py-2 border-b">Included Pages</li>
            <li className="px-4 py-2 border-b">About Us</li>
            <li className="px-4 py-2">FAQs</li>
          </ul>
        </div>
      )}
    </header>
  );
}
