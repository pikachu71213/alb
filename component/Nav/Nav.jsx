"use client"

import React, { useState } from 'react'
import Link from "next/link";

function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <nav className="flex items-center justify-between bg-black px-6 md:px-10 py-4 text-white min-h-[80px] relative z-50">
        
        {/* Logo */}
        <div className="flex items-center gap-3 select-none">
          <img src="/images/nla.svg" alt="Logo" className="h-[30px] md:h-[50px]" />
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white focus:outline-none p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              // Close Icon (X)
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>

        <ul
  className={`
    flex flex-col md:flex-row items-center gap-6 md:gap-8 text-[18px] font-medium text-gray-300
    absolute md:static top-[80px] left-0 w-full md:w-auto bg-black md:bg-transparent
    px-6 py-6 md:p-0 transition-all duration-300 ease-in-out
    ${isOpen ? "opacity-100 visible" : "opacity-0 invisible md:opacity-100 md:visible"}
  `}
>
  <li>
    <Link
      href="/"
      className="text-[#e52e2e] hover:text-white transition-colors duration-200"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-8 h-8 md:w-10 md:h-10"
        fill="currentColor"
      >
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </svg>
    </Link>
  </li>

  <li>
    <Link
      href="/about"
      className="text-[#FFFFFF] hover:text-[#ff403a] transition-colors duration-200"
    >
      About us
    </Link>
  </li>

  <li>
    <Link
      href="/solutions"
      className="flex items-center gap-1 text-[#FFFFFF] hover:text-[#ff403a] transition-colors duration-200"
    >
      Solutions
      <span className="text-[10px] inline-block rotate-180"></span>
    </Link>
  </li>

  <li>
    <Link
      href="/services"
      className="text-[#FFFFFF] hover:text-[#ff403a] transition-colors duration-200"
    >
      Services
    </Link>
  </li>

  <li>
    <Link
      href="/career"
      className="text-[#FFFFFF] hover:text-[#ff403a] transition-colors duration-200"
    >
      Careers
    </Link>
  </li>

  <li>
    <Link
      href="/blog"
      className="text-[#FFFFFF] hover:text-[#ff403a] transition-colors duration-200"
    >
      Blog
    </Link>
  </li>

  <li>
    <Link
      href="/contact-us"
      className="text-[#FFFFFF] hover:text-[#ff403a] transition-colors duration-200"
    >
      Contact Us
    </Link>
  </li>

  {/* Mobile Button */}
  <li className="md:hidden mt-2 w-full text-center">
    <Link
      href="/contact-us"
      className="inline-block w-full bg-white text-[#e52e2e] font-bold text-[18px] px-6 py-2.5 rounded-lg shadow-sm"
    >
      Book A Call
    </Link>
  </li>
</ul>

        {/* Desktop Call Button */}
        <div className="hidden md:block">
          <a href="#" className="inline-block bg-white text-[#e52e2e] font-bold text-[20px] px-6 py-2.5 rounded-lg shadow-sm hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02]">
            Book A Call
          </a>
        </div>

      </nav>
    </div>
  )
}

export default Nav