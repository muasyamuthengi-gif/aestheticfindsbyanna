"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [blogOpen, setBlogOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-serif">
          Aesthetic Finds
        </Link>

        {/* Links */}
        <div className="flex gap-8 text-sm font-medium items-center">
          <Link href="/" className="hover:text-gray-600">
            Home
          </Link>

          {/* Blog Dropdown */}
          <div className="relative">
            <button
              onClick={() => setBlogOpen(!blogOpen)}
              className="hover:text-gray-600 flex items-center gap-1"
            >
              Blog
              <span className="text-xs">▾</span>
            </button>

            {blogOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
                <Link
                  href="/blog/slow-living"
                  className="block px-4 py-3 hover:bg-gray-100"
                  onClick={() => setBlogOpen(false)}
                >
                  Bedroom Decor
                </Link>
                <Link
                  href="/blog/cozy-corners"
                  className="block px-4 py-3 hover:bg-gray-100"
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
