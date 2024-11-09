"use client"
import React from 'react'
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image';

// import LoadingBar from 'react-top-loading-bar';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ModeToggle } from './DarkLightBtn';
import { SheetDemo } from './sheetbtn';

const Navbar = () => {
  const [progress, setProgress] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    setProgress(20)

    setTimeout(() => {
      setProgress(40)
    }, 100);

    setTimeout(() => {
      setProgress(100)
    }, 400);

  }, [pathname])

  useEffect(() => {
    setTimeout(() => {
      setProgress(0)
    }, 50);
  }, [])


  return (
    <nav className="p-3 bg-background/50 sticky top-0 backdrop-blur border-b z-10">
      {/* <LoadingBar
        color='#933ce6'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      /> */}
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="text-lg font-bold">
            <Image
            className='rounded-full'
              src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/463904774_122145349346308513_5190216019924736050_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=CHC9ku-qX3AQ7kNvgFjTtP3&_nc_zt=23&_nc_ht=scontent.fkhi22-1.fna&_nc_gid=AIgkE6wBjR4qGdlmHSkN_va&oh=00_AYC5fVTYdsU5Fk5PHbiUGrotIXX5Y2xXYWrlF5Pi4BG7WA&oe=67256D90"
              width={60}
              height={60}
              alt="Logo"
            />
          </div>
        </Link>
        <div className="hidden md:flex space-x-4 items-center">
          
          <Link href="/" className="hover:scale-105 hover:font-semibold transition-transform duration-300">Home
          </Link>
          <Link href="/products" className="hover:scale-105 hover:font-semibold transition-transform duration-300">
            Products
          </Link>
          <Link href="/Blog" className="hover:scale-105 hover:font-semibold transition-transform duration-300">
            Blog
          </Link>
          <Link href="/contact" className="hover:scale-105 hover:font-semibold transition-transform duration-300">
            Contact
          </Link>
          <Link href="/AboutUs" className="hover:scale-105 hover:font-semibold transition-transform duration-300">
            About us
          </Link>
          <SheetDemo/>
            <ModeToggle />
        </div>

        <div className="md:hidden">
          <span className="mx-2">
            <ModeToggle />
          </span>
          <Sheet>
            <SheetTrigger>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="font-bold my-4">HarryBlog</SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col gap-6">
                  <SheetDemo/>
                    <Link href="/"> Home
                    </Link>
                    <Link href="/about">
                      About
                    </Link>
                    <Link href="/Blog">
                      Blog
                    </Link>
                    <Link href="/contact">
                      Contact
                    </Link>
                    <Link href="/AboutUs">
                      About Us
                    </Link>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar