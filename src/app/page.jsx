'use client';

import { useState } from "react";
import Image from 'next/image';

export default function Home() {
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

   // Toggle the dropdown visibility
   const toggleDropdown = () => {
      setIsDropdownOpen((prevState) => !prevState);
   };

   return (
      <div className="flex flex-col min-h-screen">
         {/* Main Content */}
         <main className="flex-grow p-8 bg-gray-50">
            <div className="max-w-screen-xl mx-auto">
               <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to MySite</h1>
               <p className="text-lg text-gray-700 mb-8">
                  This is a simple Next.js layout with a navbar, footer, and demo body content styled using Tailwind CSS.
               </p>

               {/* Demo Image */}
               <div className="flex justify-center">
                  <Image
                     src="/your-image.jpg" // Replace with your image path
                     alt="Demo"
                     width={500}
                     height={300}
                     className="rounded-lg shadow-md"
                  />
               </div>
            </div>
         </main>
      </div>
   );
}
