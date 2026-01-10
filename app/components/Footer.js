import Link from "next/link";

export default function Footer() {
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
            Discover cozy decor ideas, calm interiors,
            and simple styling inspiration.
          </p>
        </div>

        {/* Ideas */}
        <div>
          <h3 className="font-semibold mb-4">Ideas</h3>
          <ul className="space-y-2 text-sm text-gray-600">
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

        {/* Blog (same dropdown style as Navbar) */}
        <div>
          <h3 className="font-semibold mb-4">Blog</h3>

          <div className="relative group text-sm text-gray-600">
            <span className="cursor-pointer hover:text-black flex items-center gap-1">
              Blog
              <span className="text-xs">▾</span>
            </span>

            {/* Dropdown */}
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white border shadow-md rounded-md w-44">
              <ul className="py-2">
                <li>
                  <Link
                    href="/blog/slow-living"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Bedroom Decor
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/cozy-corners"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Cozy Living
                  </Link>
                </li>
              </ul>
            </div>
          </div>
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
