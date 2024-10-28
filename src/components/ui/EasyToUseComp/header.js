// src/components/Header.js

import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4 shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image src="/logo.png" alt="My Website Logo" width={40} height={40} /> {/* Adjust the width and height */}
        <span className="text-xl font-bold">logo</span>
      </div>

      {/* Navigation */}
      <nav className="space-x-6">
        <Link href="/home" className="hover:text-blue-500 transition-colors">Home</Link>
        <Link href="/about" className="hover:text-blue-500 transition-colors">About</Link>
        <Link href="/services" className="hover:text-blue-500 transition-colors">Services</Link>
        <Link href="/contact" className="hover:text-blue-500 transition-colors">Contact</Link>
      </nav>
    </header>
  )
}

export default Header
