export default function BlogPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-serif mb-10 text-center">
        The Blog
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Blog Post 1 */}
        <a
          href="/blog/slow-living"
          className="block border rounded-lg overflow-hidden hover:shadow-lg transition"
        >
          <img
            src="/blog1a.jpg"
            alt="Slow living"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-serif mb-2">
              Embracing Slow Living at Home
            </h2>
            <p className="text-gray-600">
              How to create calm, intentional spaces that feel warm and personal.
            </p>
          </div>
        </a>

        {/* Blog Post 2 */}
        <a
          href="/blog/cozy-corners"
          className="block border rounded-lg overflow-hidden hover:shadow-lg transition"
        >
          <img
            src="/blog2.jpg"
            alt="Cozy corners"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-serif mb-2">
              Cozy Corners You’ll Love
            </h2>
            <p className="text-gray-600">
              Small styling ideas that make your home feel inviting.
            </p>
          </div>
        </a>

      </div>
    </main>
  );
}
