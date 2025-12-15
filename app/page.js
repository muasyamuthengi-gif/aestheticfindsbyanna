export default function Home() {
  return (
    <main className="min-h-screen bg-[#f9f7f5] text-[#1a1a1a]">
      {/* HERO SECTION */}
      <section className="w-full h-[80vh] flex flex-col items-center justify-center text-center px-6 bg-white">
        <h1 className="text-5xl font-serif tracking-tight mb-4">
          Aesthetic Finds by Anna
        </h1>
        <p className="text-lg max-w-xl text-gray-600">
          Modern, warm‑luxury home décor inspiration — curated with minimalism in mind.
        </p>
      </section>

      {/* FEATURED CATEGORIES */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif mb-10">Featured Inspo</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="rounded-xl overflow-hidden shadow-sm bg-white">
            <div className="h-56 bg-gray-200" />
            <div className="p-5">
              <h3 className="text-xl font-medium mb-2">Modern Living Rooms</h3>
              <p className="text-gray-600 text-sm">
                Warm neutrals, textures, timeless elegance.
              </p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-sm bg-white">
            <div className="h-56 bg-gray-200" />
            <div className="p-5">
              <h3 className="text-xl font-medium mb-2">Luxury Bedrooms</h3>
              <p className="text-gray-600 text-sm">
                Soft, calm, and intentionally minimal.
              </p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-sm bg-white">
            <div className="h-56 bg-gray-200" />
            <div className="p-5">
              <h3 className="text-xl font-medium mb-2">Decor Finds</h3>
              <p className="text-gray-600 text-sm">
                Curated essentials for a warm, elegant home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-white">
        <h2 className="text-3xl font-serif mb-4">Explore the Blog</h2>
        <p className="text-gray-600 mb-6">
          Tips, trends, inspiration, and stylish ideas for every room.
        </p>
        <a
          href="/blog"
          className="inline-block px-8 py-3 bg-black text-white rounded-full hover:opacity-80 transition"
        >
          Visit Blog
        </a>
      </section>
    </main>
  );
}
