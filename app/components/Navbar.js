"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [blogOpen, setBlogOpen] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setBlogOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (path) => pathname === path;
  const isBlogActive = pathname.startsWith("/blog");

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur border-b overflow-visible">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-serif">
          Aesthetic Finds
        </Link>

        {/* Links */}
        <div className="flex gap-8 text-sm font-medium items-center">
          
          {/* Home */}
          <Link
            href="/"
            className={`hover:text-blue-600 ${
              isActive("/") ? "text-blue-600" : "text-black"
            }`}
          >
            Home
          </Link>

          {/* Blog Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setBlogOpen(!blogOpen)}
              className={`hover:text-blue-600 flex items-center gap-1 ${
                isBlogActive ? "text-blue-600" : "text-black"
              }`}
            >
              Blog
              <span
                className={`text-xs transition-transform duration-200 ${
                  blogOpen ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>

            {blogOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
                <Link
                  href="/blog/slow-living"
                  className={`block px-4 py-3 hover:bg-gray-100 ${
                    pathname === "/blog/slow-living"
                      ? "text-blue-600 font-medium"
                      : "text-black"
                  }`}
                  onClick={() => setBlogOpen(false)}
                >
                  Bedroom Decor
                </Link>

                <Link
                  href="/blog/cozy-corners"
                  className={`block px-4 py-3 hover:bg-gray-100 ${
                    pathname === "/blog/cozy-corners"
                      ? "text-blue-600 font-medium"
                      : "text-black"
                  }`}
                  onClick={() => setBlogOpen(false)}
                >
                  Cozy Corners
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
