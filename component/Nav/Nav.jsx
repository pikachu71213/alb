"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDownIcon } from "lucide-react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);

  return (
    <div className="relative">
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between bg-black px-6 md:px-10 py-4 text-white min-h-[80px] z-[999]">

        {/* Logo */}
        <div className="flex items-center gap-3 select-none">
          <img
            src="/images/nla.svg"
            alt="Logo"
            className="h-[30px] md:h-[50px]"
          />
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12h18M3 6h18M3 18h18"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation */}
        <ul
          className={`
            flex flex-col md:flex-row items-center gap-6 md:gap-8
            text-[18px] font-medium text-white
            absolute md:static top-[80px] left-0 w-full md:w-auto
            bg-black md:bg-transparent
            px-6 py-6 md:p-0
            overflow-visible
            transition-all duration-300 ease-in-out
            ${
              isOpen
                ? "opacity-100 visible"
                : "opacity-0 invisible md:opacity-100 md:visible"
            }
          `}
        >
          {/* Home */}
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

          {/* About */}
          <li>
            <Link
              href="/about"
              className="hover:text-[#ff403a] transition-colors duration-200"
            >
              About Us
            </Link>
          </li>

          {/* Solutions Dropdown */}
          <li className="relative">
            <button
              type="button"
              onClick={() => setShowSolutions(!showSolutions)}
              className="flex items-center gap-1 hover:text-[#ff403a] transition-colors duration-200 cursor-pointer"
            >
              Solutions

              <ChevronDownIcon
                size={16}
                className={`transition-transform duration-300 ${
                  showSolutions ? "rotate-180" : ""
                }`}
              />
            </button>

            {showSolutions && (
              <ul className="absolute md:left-0 left-1/2 md:translate-x-0 -translate-x-1/2 md:top-full top-10 mt-2 w-56 bg-black rounded-lg shadow-xl overflow-hidden z-[9999]">
                <li>
                  <Link
                    href="/web-development"
                    className="block px-4 py-3 text-[#ff403a] hover:bg-gray-100"
                    onClick={() => setShowSolutions(false)}
                  >
                    Project & Portfolio Management
                  </Link>
                </li>

                <li>
                  <Link
                    href="/app-development"
                    className="block px-4 py-3 text-[#ff403a] hover:bg-gray-100"
                    onClick={() => setShowSolutions(false)}
                  >
                    Enterprise IT Automation
                  </Link>
                </li>

                <li>
                  <Link
                    href="/digital-marketing"
                    className="block px-4 py-3 text-[#ff403a] hover:bg-gray-100"
                    onClick={() => setShowSolutions(false)}
                  >
                    AI Services for Enterprise
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Careers */}
          <li>
            <Link
              href="/career"
              className="hover:text-[#ff403a] transition-colors duration-200"
            >
              Careers
            </Link>
          </li>

          {/* Blog */}
          <li>
            <Link
              href="/blog"
              className="hover:text-[#ff403a] transition-colors duration-200"
            >
              Blog
            </Link>
          </li>

          {/* Contact */}
          <li>
            <Link
              href="/contact-us"
              className="hover:text-[#ff403a] transition-colors duration-200"
            >
              Contact Us
            </Link>
          </li>

          {/* Mobile CTA */}
          <li className="md:hidden mt-2 w-full text-center">
            <Link
              href="/contact-us"
              className="inline-block w-full bg-white text-[#e52e2e] font-bold text-[18px] px-6 py-2.5 rounded-lg"
            >
              Book A Call
            </Link>
          </li>
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact-us"
            className="inline-block bg-white text-[#e52e2e] font-bold text-[20px] px-6 py-2.5 rounded-lg shadow-sm hover:bg-gray-100 transition-all duration-200"
          >
            Book A Call
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Nav;