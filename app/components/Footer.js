"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function Footer() {
  const [blogOpen, setBlogOpen] = useState(false);
  const blogRef = useRef(null);

  // close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (blogRef.current && !blogRef.current.contains(e.target)) {
        setBlogOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <footer className="bg-[#f6f3ee] text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <h2 className="text-lg font-semibold mb-4">
            Aesthetic Finds
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Warm luxury, minimal living.  
            Discover cozy bedroom decor ideas, calm interiors,
            and simple styling inspiration for everyday spaces.
          </p>
        </div>

        {/* Ideas */}
        <div>
          <h3 className="font-semibold mb-4">Ideas</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link href="/about-us" className="hover:text-black">
                Our Story
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:text-black">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Blog */}
        <div ref={blogRef}>
          <h3 className="font-semibold mb-4">Blog</h3>
          <ul className="space-y-2 text-sm text-gray-600">

            <li>
              <Link href="/" className="hover:text-black">
                Home
              </Link>
            </li>

            <li>
              <Link href="/blog" className="hover:text-black">
                Blog
              </Link>
            </li>

            {/* Dropdown trigger */}
            <li>
              <button
                onClick={() => setBlogOpen(!blogOpen)}
                className="flex items-center gap-1 hover:text-black transition"
              >
                Categories
                <span
                  className={`transition-transform ${
                    blogOpen ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>

              {blogOpen && (
                <ul className="mt-2 ml-3 space-y-2 text-sm text-gray-600">
                  <li>
                    <Link
                      href="/blog/bedroom-decor"
                      className="hover:text-black"
                    >
                      Bedroom Decor
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/cozy-corners"
                      className="hover:text-black"
                    >
                      Cozy Corners
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link href="/about-us" className="hover:text-black">
                About us
              </Link>
            </li>

            <li>
              <Link href="/contact-us" className="hover:text-black">
                Contact us
              </Link>
            </li>

          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold mb-4">Links</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link href="/terms-of-service" className="hover:text-black">
                Terms of service
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-black">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" className="hover:text-black">
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Aesthetic Finds. All rights reserved.
      </div>
    </footer>
  );
}
