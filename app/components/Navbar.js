"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [blogOpen, setBlogOpen] = useState(false);

  return (
    <nav className="w-full border-b">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-serif">
          YourSiteName
        </Link>

        {/* Nav links */}
        <ul className="flex items-center gap-8 text-sm uppercase tracking-wide">
          <li>
            <Link href="/">Home</Link>
          </li>

          {/* Blog Dropdown */}
          <li className="relative">
            <button
              onClick={() => setBlogOpen(!blogOpen)}
              className="flex items-center gap-1"
            >
              Blog
              <span className="text-xs">▾</span>
            </button>

            {blogOpen && (
              <ul className="absolute left-0 mt-3 w-52 bg-white border rounded-md shadow-lg z-50">
                <li>
                  <Link
                    href="/blog/slow-living"
                    className="block px-5 py-3 hover:bg-gray-100"
                    onClick={() => setBlogOpen(false)}
                  >
                    Bedroom Decor
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/cozy-corners"
                    className="block px-5 py-3 hover:bg-gray-100"
                    onClick={() => setBlogOpen(false)}
                  >
                    Cozy Corners
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
