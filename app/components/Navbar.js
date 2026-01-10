"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path) =>
    pathname === path ? "text-blue-600" : "hover:text-gray-600";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-serif">
          Aesthetic Finds
        </Link>

        {/* Links */}
        <div className="flex gap-8 text-sm font-medium">
          <Link href="/" className={isActive("/")}>
            Home
          </Link>

          <Link href="/blog" className={isActive("/blog")}>
            Blog
          </Link>

          <Link href="/about-us" className={isActive("/about-us")}>
            About Us
          </Link>

          <Link href="/contact-us" className={isActive("/contact-us")}>
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
