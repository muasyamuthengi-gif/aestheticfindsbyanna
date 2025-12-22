export default function Home() {
  return (
    <main className="flex flex-col">

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center">
        <img
          src="/hero.jpg"
          alt="Aesthetic interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl md:text-6xl font-serif mb-4">
            Aesthetic Finds by Anna
          </h1>
          <p className="text-lg md:text-xl max-w-xl mx-auto">
            Warm luxury. Minimal beauty. Modern living inspiration.
          </p>
        </div>
      </section>

      {/* ABOUT / INTRO SECTION */}
      <section className="max-w-6xl mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl font-serif mb-6">
          Curated for modern, cozy living
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Aesthetic Finds by Anna is a space for home decor inspiration,
          interior styling ideas, and warm minimalist living. Designed to
          inspire calm, beauty, and intentional spaces.
        </p>
      </section>

      {/* FEATURED SECTIONS */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-serif mb-3">
              Interior Inspiration
            </h3>
            <p className="text-gray-600">
              Living rooms, bedrooms, and cozy corners styled with warmth
              and elegance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-serif mb-3">
              Decor Finds
            </h3>
            <p className="text-gray-600">
              Hand‑picked decor pieces that bring character and softness
              to your home.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-serif mb-3">
              Lifestyle Notes
            </h3>
            <p className="text-gray-600">
              Thoughts on slow living, aesthetics, and creating meaningful
              spaces.
            </p>
          </div>

        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-serif mb-4">
          Explore the Blog
        </h2>
        <p className="text-gray-600 mb-8">
          Discover inspiration, guides, and curated ideas for your home.
        </p>

        <a
          href="/blog"
          className="inline-block border border-black px-8 py-3 text-sm uppercase tracking-wider hover:bg-black hover:text-white transition"
        >
          View Blog
        </a>
      </section>

    </main>
  );
}
