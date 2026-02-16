export default function BedroomDecorPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-serif mb-10 text-center text-black">
        Bedroom Decor
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Post 1 - Existing Warm Bedroom Ideas */}
        <a
          href="/blog/bedroom-decor/warm-bedroom-ideas"
          className="group block border rounded-lg overflow-hidden transition-shadow hover:shadow-xl"
        >
          <div className="h-64 w-full overflow-hidden">
            <img
              src="/blog1a.jpg"
              alt="Warm Bedroom Aesthetic Ideas"
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-serif mb-2 text-black">
              Warm Bedroom Aesthetic Ideas
            </h2>
            <p className="text-black">
              Creating a warm bedroom aesthetic isn’t about buying expensive
              furniture—it’s about thoughtful styling that feels calm, inviting,
              and deeply personal.
            </p>
          </div>
        </a>

  {/* Post 2 */}
<a
  href="/blog/bedroom-decor/bedroom-paint-colors"
  className="group block border rounded-lg overflow-hidden transition-shadow hover:shadow-xl"
>
  <div className="h-64 w-full overflow-hidden">
    <img
      src="/bed.post2.jpg"
      alt="Bedroom Paint Colors"
      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
    />
  </div>

  <div className="p-6">
    <h2 className="text-2xl font-serif mb-2 text-black">
      Bedroom Paint Colors That Set the Mood & Transform Your Space
    </h2>
    <p className="text-black">
      Your bedroom color does more than look pretty - it sets the emotional tone 
      of the space. Discover timeless paint shades that create calm, luxury, and warmth.
    </p>
  </div>
</a>

      </div>
    </main>
  );
}
