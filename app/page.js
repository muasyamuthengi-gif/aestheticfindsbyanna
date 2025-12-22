export default function Home() {
  return (
    <main>
      <section className="relative min-h-screen flex items-center justify-center">
        <img
          src="/hero.jpg"
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-10 text-center text-white bg-black/40 p-10 rounded-xl">
          <h1 className="text-5xl font-serif mb-4">
            Aesthetic Finds
          </h1>
          <p className="text-xl">
            Warm luxury. Minimal beauty. Modern living.
          </p>
        </div>
      </section>
    </main>
  );
}
