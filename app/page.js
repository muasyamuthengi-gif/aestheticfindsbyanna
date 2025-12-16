export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/hero.jpg" 
          alt="Hero background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="relative z-10 text-center text-white drop-shadow-lg">
        <h1 className="text-5xl font-serif mb-4">
          Aesthetic Finds by Anna
        </h1>
        <p className="text-xl font-light">
          Warm luxury. Minimal beauty. Modern living.
        </p>
      </div>
    </main>
  );
}
