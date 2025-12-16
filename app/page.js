export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      />

      {/* Overlay to make text readable */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-white text-center px-4">
        <h1 className="text-5xl font-serif mb-4">
          Aesthetic Finds by Anna
        </h1>
        <p className="text-lg max-w-xl">
          Curated luxury interiors & lifestyle inspiration in warm beige, black and white tones.
        </p>
      </div>
    </main>
  );
}
