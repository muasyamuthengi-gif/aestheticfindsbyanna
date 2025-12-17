export default function Home() {
  return (
    <main className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center">
        <img 
          src="/hero.jpg" 
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-10 text-center text-white drop-shadow-lg">
          <h1 className="text-5xl font-serif mb-4">
            Aesthetic Finds by Anna
          </h1>
          <p className="text-xl font-light">
            Warm luxury. Minimal beauty. Modern living.
          </p>
        </div>

        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 px-6 md:px-16 text-center bg-white">
        <h2 className="text-4xl font-serif mb-6">About This Blog</h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          Discover curated decor inspiration, modern interior designs, and aesthetic home styling ideas 
          crafted for minimal luxury living.
        </p>
      </section>

      {/* BLOG SECTION */}
      <section className="py-20 px-6 md:px-16 bg-gray-100">
        <h2 className="text-4xl font-serif text-center mb-12">Latest Blog Posts</h2>

        <div className="grid md:grid-cols-3 gap-10">

          {/* Blog Card 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/hero.jpg" className="h-48 w-full object-cover" alt="Blog 1" />
            <div className="p-6">
              <h3 className="text-2xl font-serif mb-3">Cozy Minimalist Living Room</h3>
              <p className="text-gray-600">
                Learn how to curate a peaceful and clean aesthetic with warm tones and modern decor.
              </p>
            </div>
          </div>

          {/* Blog Card 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/hero.jpg" className="h-48 w-full object-cover" alt="Blog 2" />
            <div className="p-6">
              <h3 className="text-2xl font-serif mb-3">Soft Neutral Aesthetics</h3>
              <p className="text-gray-600">
                Explore how soft neutrals can transform your space into a relaxing sanctuary.
              </p>
            </div>
          </div>

          {/* Blog Card 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/hero.jpg" className="h-48 w-full object-cover" alt="Blog 3" />
            <div className="p-6">
              <h3 className="text-2xl font-serif mb-3">Modern Pinterest‑Inspired Decor</h3>
              <p className="text-gray-600">
                A roundup of the most aesthetic Pinterest designs and how to recreate them.
              </p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
