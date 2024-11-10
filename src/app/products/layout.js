// import { Button } from "@/components/ui/button";
// import { SheetDemo } from "@/components/ui/EasyToUseComp/sheetbtn";
// import Image from "next/image";
// import Link from "next/link";

// export default function Product({ children }) {
//     return (
//         <>
//             <div className="relative">
//                 <Image
//                     src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/463946672_122145349196308513_3838852537802018120_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=w4QTDQlbwJgQ7kNvgE_NnZQ&_nc_zt=23&_nc_ht=scontent.fkhi22-1.fna&_nc_gid=AEOVHpMgZGzxsk_aCPwtOAj&oh=00_AYBI1i6EoSgak0OSWVYgEvrnjeH-xOVAwwuabOBc9kYXHQ&oe=67257323"
//                     width={900} // Adjust width as needed
//                     height={960} // Adjust height as needed
//                     alt="Home Page Image"
//                     className="w-full"
//                 />
//             </div>
//             <div className="flex container px-10 py-5">
//                 <div className="w-1/6">
//                     <h1>Announcement
//                     </h1>
//                     <h1>Last updated on 03 Jun, 2024</h1>
//                 </div>
//                 <div className="w-4/6">
//                     <p className="text-md">Enjoy our exclusive discounts on trending SVG designs! Now is the perfect time to grab unique designs at unbeatable prices. Whether you re looking for seasonal specials or everyday favorites, we ve got something for everyone. Plus, we offer custom design services to bring your unique vision to life! Just reach out, and let s create something special together. Don t miss out  shop now and get creative with designs that inspire!</p>
//                 </div>
//             </div>
//             <section className="my-10  w-full flex">

//                 <div className="border-r-2 w-48 border-r-pink-500">
//                     <Link
//                         className="text-center p-2 w-full block hover:bg-purple-200" href="/products/birthday">
//                         Birthday
//                     </Link>
//                     <Link
//                         className="text-center p-2 w-full block hover:bg-purple-200" href="/products/hallowen">
//                         halloween
//                     </Link>
//                     <Link
//                         className="text-center p-2 my-5 border-t-2 border-b-2 bg-black border-gray-600 w-full block hover:bg-purple-200" href="/products/hallowen">
//                         <SheetDemo />
//                     </Link>
//                 </div>
//                 {children}</section>
//         </>
//     )
// }

// pages/products.js

"use client"
import { Button } from "@/components/ui/button";
import { SheetDemo } from "@/components/ui/EasyToUseComp/sheetbtn";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Product({ children }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <div className="relative">
        <Image
          src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/463946672_122145349196308513_3838852537802018120_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=w4QTDQlbwJgQ7kNvgE_NnZQ&_nc_zt=23&_nc_ht=scontent.fkhi22-1.fna&_nc_gid=AEOVHpMgZGzxsk_aCPwtOAj&oh=00_AYBI1i6EoSgak0OSWVYgEvrnjeH-xOVAwwuabOBc9kYXHQ&oe=67257323"
          width={900}
          height={960}
          alt="Home Page Image"
          className="w-full"
        />
      </div>

      {/* Announcement Section */}
      <div className="flex container px-10 py-5 flex-wrap">
        <div className="w-full sm:w-1/6 mb-4 sm:mb-0">
          <h1 className="text-lg font-semibold">Announcement</h1>
          <h2 className="text-sm text-gray-600">Last updated on 03 Jun, 2024</h2>
        </div>
        <div className="w-full sm:w-4/6">
          <p className="text-md">
            Enjoy our exclusive discounts on trending SVG designs! Now is the perfect time to grab unique designs at unbeatable prices.
            Whether you’re looking for seasonal specials or everyday favorites, we’ve got something for everyone. Plus, we offer custom design
            services to bring your unique vision to life! Just reach out, and let’s create something special together. Don’t miss out – shop now
            and get creative with designs that inspire!
          </p>
        </div>
      </div>

      {/* Category Section with Sidebar for Desktop and Dropdown for Mobile */}
      <section className="my-10 w-full flex flex-col sm:flex-row">
        
        {/* Sidebar for larger screens */}
        <div className="hidden sm:block border-r-2  border-r-pink-500">
          <Link className="text-center p-2 w-full block hover:bg-purple-200" href="/products/birthday">
            Birthday
          </Link>
          <Link className="text-center p-2 w-full block hover:bg-purple-200" href="/products/hallowen">
            Halloween
          </Link>
          <button className=" border-t-2 border-b-2 border-black  p-2 my-5  hover:bg-purple-200">
            <SheetDemo />
          </button>
        </div>

        {/* Dropdown for mobile view */}
        <div className="sm:hidden w-full mb-5 px-4">
          <button
            className="w-full bg-pink-600 text-white py-2 px-4 rounded-md flex justify-between items-center"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span>Select Category</span>
            <svg
              className={`w-5 h-5 transform transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="bg-white shadow-md rounded-md mt-2">
              <Link className="block px-4 py-2 text-gray-800 hover:bg-purple-200" href="/products/birthday" onClick={() => setIsDropdownOpen(false)}>
                Birthday
              </Link>
              <Link className="block px-4 py-2 text-gray-800 hover:bg-purple-200" href="/products/hallowen" onClick={() => setIsDropdownOpen(false)}>
                Halloween
              </Link>
              <button>
                <SheetDemo />
              </button>
            </div>
          )}
        </div>

        {/* Main Content Section */}
        <div className="flex-grow px-4 sm:px-10">{children}</div>
      </section>
    </>
  );
}
