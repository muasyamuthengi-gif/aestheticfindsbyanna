export default function BlogPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-serif mb-10 text-center text-black">
        The Blog
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Blog Post 1 */}
        <a
          href="/blog/bedroom-decor"
          className="group block border rounded-lg overflow-hidden transition-shadow hover:shadow-xl"
        >
          {/* Image wrapper locks size */}
          <div className="h-64 w-full overflow-hidden">
            <img
              src="/blog1a.jpg"
              alt="Slow living"
              className="
                h-full w-full
                object-cover
                transition-transform duration-500 ease-out
                group-hover:scale-105
              "
            />
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-serif mb-2 text-black">
              Warm Bedroom Aesthetic Decor Ideas That Feel Cozy & Luxurious
            </h2>
            <p className="text-black">
              Creating a warm bedroom aesthetic isn’t about buying expensive
              furniture—it’s about thoughtful styling that feels calm, inviting,
              and deeply personal.
            </p>
          </div>
        </a>

        {/* Blog Post 2 */}
        <a
          href="/blog/cozy-corners"
          className="group block border rounded-lg overflow-hidden transition-shadow hover:shadow-xl"
        >
          <div className="h-64 w-full overflow-hidden">
            <img
              src="/blog2.jpg"
              alt="Cozy corners"
              className="
                h-full w-full
                object-cover
                transition-transform duration-500 ease-out
                group-hover:scale-105
              "
            />
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-serif mb-2 text-black">
              Cozy Corner Ideas to Create Warm, Inviting Spaces at Home
            </h2>
            <p className="text-black">
              Soft seating instantly makes a space feel relaxed and welcoming. A beanbag or cushioned chair encourages comfort while keeping the corner casual and inviting.
            </p>
          </div>
        </a>
      </div>
    </main>
  );
}
