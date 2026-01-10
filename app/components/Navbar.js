import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6">
      {/* Logo */}
      <Link href="/" className="text-2xl font-serif">
        YourSiteName
      </Link>

      {/* Navigation */}
      <ul className="flex items-center gap-8 text-sm uppercase tracking-wide">
        <li>
          <Link href="/">Home</Link>
        </li>

        {/* Blog Dropdown */}
        <li className="relative group">
          <span className="cursor-pointer">
            Blog
          </span>

          {/* Dropdown */}
          <ul className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
            <li>
              <Link
                href="/blog/slow-living"
                className="block px-4 py-3 hover:bg-gray-100"
              >
                Bedroom Decor
              </Link>
            </li>
            <li>
              <Link
                href="/blog/cozy-corners"
                className="block px-4 py-3 hover:bg-gray-100"
              >
                Cozy Corners
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
