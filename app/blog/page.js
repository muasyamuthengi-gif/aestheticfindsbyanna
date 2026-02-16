export default function BlogPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-serif mb-10 text-center text-black">
        The Blog
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Bedroom Decor Category */}
        <a
          href="/blog/bedroom-decor"
          className="group block border rounded-lg overflow-hidden transition-shadow hover:shadow-xl"
        >
          <div className="h-64 w-full overflow-hidden">
            <img
              src="/blog1a.jpg"
              alt="Bedroom decor ideas"
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-serif mb-2 text-black">
              Bedroom Decor Ideas
            </h2>
            <p className="text-black">
              Explore cozy, warm, and luxury-inspired bedroom styling ideas.
              Discover layered bedding, soft lighting, natural textures,
              and curated details that transform your space.
            </p>
          </div>
        </a>

        {/* Cozy Corners */}
        <a
          href="/blog/cozy-corners"
          className="group block border rounded-lg overflow-hidden transition-shadow hover:shadow-xl"
        >
          <div className="h-64 w-full overflow-hidden">
            <img
              src="/blog2a.jpg"
              alt="Cozy corners"
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-serif mb-2 text-black">
              Cozy Corner Ideas to Create Warm, Inviting Spaces at Home
            </h2>
            <p className="text-black">
              Soft seating instantly makes a space feel relaxed and welcoming.
              A beanbag or cushioned chair encourages comfort while keeping
              the corner casual and inviting.
            </p>
          </div>
        </a>

        {/* Indoor Plants */}
        <a
          href="/blog/indoor-plants"
          className="group block border rounded-lg overflow-hidden transition-shadow hover:shadow-xl"
        >
          <div className="h-64 w-full overflow-hidden">
            <img
              src="/blog3a.jpg"
              alt="Indoor plants"
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-serif mb-2 text-black">
              6 Stunning Indoor Plants That Instantly Elevate Your Home Decor
            </h2>
            <p className="text-black">
              Indoor plants aren’t just trendy — they’re one of the easiest
              ways to make a space feel alive, intentional, and high-end.
            </p>
          </div>
        </a>

      </div>
    </main>
  );
}
