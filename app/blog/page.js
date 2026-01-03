export default function BlogPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-serif mb-12 text-center">
        The Blog
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Blog Post 1 */}
        <a
          href="/blog/slow-living"
          className="group block border rounded-xl overflow-hidden hover:shadow-xl transition"
        >
          <div className="h-72 w-full overflow-hidden">
            <img
              src="/blog1a.jpg"
              alt="Warm bedroom aesthetic"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>

          <div className="p-6 bg-white">
            <h2 className="text-2xl font-serif mb-3">
              Warm Bedroom Aesthetic Decor Ideas That Feel Cozy & Luxurious
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Creating a warm bedroom aesthetic isn’t about buying the most
              expensive furniture — it’s about designing a space that feels
              inviting, calm, and deeply comforting. Simple styling choices
              like wooden accents, woven textures, indoor plants, and curated
              art can instantly elevate your bedroom into a serene sanctuary.
            </p>
          </div>
        </a>

        {/* Blog Post 2 */}
        <a
          href="/blog/cozy-corners"
          className="group block border rounded-xl overflow-hidden hover:shadow-xl transition"
        >
          <div className="h-72 w-full overflow-hidden">
            <img
              src="/blog2.jpg"
              alt="Cozy corners"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>

          <div className="p-6 bg-white">
            <h2 className="text-2xl font-serif mb-3">
              Cozy Corners You’ll Love
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Small, intentional styling ideas that transform unused spaces
              into cozy, functional corners for relaxing, reading, and slowing
              down.
            </p>
          </div>
        </a>
      </div>
    </main>
  );
}
