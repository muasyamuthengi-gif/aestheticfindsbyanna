"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const linkClass = (path) =>
    pathname === path
      ? "text-blue-600"
      : "hover:text-gray-600";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-serif font-bold">
          Aesthetic Finds
        </Link>

        {/* Links */}
        <div className="flex gap-10 text-[15px] font-semibold tracking-wide items-center">
          
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>

          {/* Blog Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen(!open)}
              className={`flex items-center gap-1 ${
                pathname.startsWith("/blog")
                  ? "text-blue-600"
                  : "hover:text-gray-600"
              }`}
            >
              Blog
              <span
                className={`transition-transform ${
                  open ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>

            {open && (
              <div className="absolute right-0 mt-3 w-48 bg-white border rounded-lg shadow-md">
                <Link
                  href="/blog/slow-living"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  Bedroom Decor
                </Link>
                <Link
                  href="/blog/cozy-corners"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  Cozy Corners
                </Link>
              </div>
            )}
          </div>

          <Link href="/about-us" className={linkClass("/about-us")}>
            About Us
          </Link>

          <Link href="/contact-us" className={linkClass("/contact-us")}>
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
