export default function BlogPage() {
  return (
    <>
      {/* Breadcrumb */}
      <p className="text-sm text-gray-400 mb-6">
        Home / Blog
      </p>

      {/* Title */}
      <h1 className="text-5xl md:text-6xl font-serif font-semibold mb-24">
        Blog
      </h1>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-20">
        {/* Card 1 */}
        <a href="/blog/bedroom-decor" className="block">
          <img
            src="/blog1a.jpg"
            className="w-full h-[420px] object-cover mb-6"
            alt=""
          />
          <h2 className="text-2xl font-serif mb-3">
            Warm Bedroom Aesthetic Decor Ideas
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Creating a warm bedroom aesthetic isn’t about expensive furniture,
            but thoughtful, calming choices that feel inviting and intentional.
          </p>
        </a>

        {/* Card 2 */}
        <a href="/blog/cozy-corners" className="block">
          <img
            src="/blog2.jpg"
            className="w-full h-[420px] object-cover mb-6"
            alt=""
          />
          <h2 className="text-2xl font-serif mb-3">
            Cozy Corners You’ll Love
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Small styling ideas that transform everyday spaces into warm,
            inviting corners.
          </p>
        </a>
      </div>
    </>
  );
}
