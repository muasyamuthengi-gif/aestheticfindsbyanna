import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-serif">
          Aesthetic Finds
        </Link>

        {/* Links */}
        <div className="flex gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-gray-600">
            Home
          </Link>
          <Link href="/blog" className="hover:text-gray-600">
            Blog
          </Link>
        </div>

      </div>
    </nav>
  );
}
