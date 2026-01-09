export default function BlogPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-serif mb-12 text-center text-black">
        The Blog
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Blog Post 1 */}
        <a
          href="/blog/slow-living"
          className="group block border rounded-xl overflow-hidden hover:shadow-lg transition"
        >
          {/* Image wrapper */}
          <div className="w-full h-64 overflow-hidden">
            <img
              src="/blog1a.jpg"
              alt="Warm bedroom aesthetic"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="p-6">
            <h2 className="text-2xl font-serif mb-3 text-black">
              Warm Bedroom Aesthetic Decor Ideas That Feel Cozy & Luxurious
            </h2>
            <p className="text-black text-base leading-relaxed">
              Creating a warm bedroom aesthetic isn’t about expensive furniture —
              it’s about intention. Soft textures, wooden accents, indoor plants,
              and thoughtful styling choices can transform your bedroom into a
              calm, cozy, and sophisticated sanctuary.
            </p>
          </div>
        </a>

        {/* Blog Post 2 */}
        <a
          href="/blog/cozy-corners"
          className="group block border rounded-xl overflow-hidden hover:shadow-lg transition"
        >
          {/* Image wrapper */}
          <div className="w-full h-64 overflow-hidden">
            <img
              src="/blog2.jpg"
              alt="Cozy corners"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="p-6">
            <h2 className="text-2xl font-serif mb-3 text-black">
              Cozy Corners You’ll Love
            </h2>
            <p className="text-black text-base leading-relaxed">
              Small styling ideas that turn overlooked spaces into inviting,
              relaxing corners filled with warmth, comfort, and personality.
            </p>
          </div>
        </a>
      </div>
    </main>
  );
}
