import AffiliateDisclosure from "../../components/AffiliateDisclosure";

export default function CozyCornersPost() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-serif mb-4 text-black">
        Cozy Corner Ideas to Create Warm, Inviting Spaces at Home
      </h1>

      {/* Disclosure */}
      <AffiliateDisclosure />

      {/* Intro */}
      <p className="text-lg text-black mb-12">
        Cozy corners turn ordinary spaces into places you want to linger.
        Thoughtful styling, soft textures, and warm lighting create calm,
        inviting moments throughout your home.
      </p>

      {/* 1 */}
      <div className="relative mb-14">
        <img
          src="/blog2.jpg"
          className="w-full rounded-lg"
          alt="Reading nook with soft seating"
        />
        <h2 className="absolute bottom-6 left-6 text-2xl font-serif text-white bg-black/50 px-4 py-2 rounded">
          1. Reading Nook with Soft Seating
        </h2>
      </div>
      <p className="text-lg text-black mb-16">
        Warm lighting creates an intimate mood, turning even the simplest corner
        into a calming retreat. Minimal decor keeps the space peaceful rather
        than crowded.
      </p>

      {/* 2 */}
      <div className="relative mb-14">
        <img
          src="/blog2-2.jpg"
          className="w-full rounded-lg"
          alt="Minimalist cozy corner with warm lighting"
        />
        <h2 className="absolute bottom-6 left-6 text-2xl font-serif text-white bg-black/50 px-4 py-2 rounded">
          2. Minimalist Cozy Corner with Warm Lighting
        </h2>
      </div>
      <p className="text-lg text-black mb-16">
        Natural textures add warmth and depth, making the space feel lived-in
        and comfortable while maintaining a clean, uncluttered aesthetic.
      </p>

      {/* 3 */}
      <div className="relative mb-14">
        <img
          src="/blog2-3.jpg"
          className="w-full rounded-lg"
          alt="Textured corner with natural elements"
        />
        <h2 className="absolute bottom-6 left-6 text-2xl font-serif text-white bg-black/50 px-4 py-2 rounded">
          3. Textured Corner with Natural Elements
        </h2>
      </div>
      <p className="text-lg text-black mb-16">
        Using natural light alongside soft textures makes the corner feel airy
        during the day and cozy in the evening.
      </p>

      {/* 4 */}
      <div className="relative mb-14">
        <img
          src="/blog2-4.jpg"
          className="w-full rounded-lg"
          alt="Cozy window corner"
        />
        <h2 className="absolute bottom-6 left-6 text-2xl font-serif text-white bg-black/50 px-4 py-2 rounded">
          4. Cozy Window Corner
        </h2>
      </div>
      <p className="text-lg text-black mb-16">
        Art and subtle decor personalize the space without overwhelming it,
        creating a cozy corner that feels intentional and stylish.
      </p>

      {/* 5 */}
      <div className="relative mb-14">
        <img
          src="/blog2-5.jpg"
          className="w-full rounded-lg"
          alt="Decorative cozy corner with art and accents"
        />
        <h2 className="absolute bottom-6 left-6 text-2xl font-serif text-white bg-black/50 px-4 py-2 rounded">
          5. Decorative Cozy Corner with Art & Accents
        </h2>
      </div>
      <p className="text-lg text-black">
        Not every cozy space needs an entire room. Sometimes, the most comforting
        places in a home are the small, quiet corners designed for rest, reading,
        or simple moments of calm.
      </p>

    </main>
  );
}
