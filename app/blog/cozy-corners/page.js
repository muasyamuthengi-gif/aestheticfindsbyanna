import AffiliateDisclosure from "../../components/AffiliateDisclosure";

export default function CozyCornersPost() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Title */}
      <h1 className="text-4xl font-serif mb-4">
        Cozy Corners You’ll Love
      </h1>

      <AffiliateDisclosure />

      {/* Intro */}
      <img src="/blog2.jpg" className="w-full rounded-lg mb-8" />
      <p className="text-lg text-gray-700 mb-14">
        Cozy corners turn ordinary spaces into places you want to linger.
        A quiet chair, soft lighting, and warmth make all the difference.
      </p>

      {/* 1 */}
      <h2 className="text-2xl font-serif font-semibold mb-3">
        1. Reading Nook with Soft Seating
      </h2>
      <img src="/blog2-2.jpg" className="w-full rounded-lg mb-6" />
      <p className="text-lg text-gray-700 mb-14">
        Warm lighting creates an intimate mood, turning even the simplest corner
        into a calming retreat. Minimal decor keeps the space feeling peaceful
        rather than crowded.
      </p>

      {/* 2 */}
      <h2 className="text-2xl font-serif font-semibold mb-3">
        2. Minimalist Cozy Corner with Warm Lighting
      </h2>
      <img src="/blog2-3.jpg" className="w-full rounded-lg mb-6" />
      <p className="text-lg text-gray-700 mb-14">
        Natural textures add warmth and depth, making the space feel lived-in
        and comfortable while maintaining a clean aesthetic.
      </p>

      {/* 3 */}
      <h2 className="text-2xl font-serif font-semibold mb-3">
        3. Textured Corner with Natural Elements
      </h2>
      <img src="/blog2-4.jpg" className="w-full rounded-lg mb-6" />
      <p className="text-lg text-gray-700 mb-14">
        Using natural light alongside soft textures makes the corner feel airy
        during the day and cozy in the evening.
      </p>

      {/* 4 */}
      <h2 className="text-2xl font-serif font-semibold mb-3">
        4. Cozy Window Corner
      </h2>
      <img src="/blog2-5.jpg" className="w-full rounded-lg mb-6" />
      <p className="text-lg text-gray-700 mb-14">
        Art and subtle decor personalize the space without overwhelming it,
        creating a cozy corner that feels intentional and stylish.
      </p>

      {/* 5 */}
      <h2 className="text-2xl font-serif font-semibold mb-3">
        5. Decorative Cozy Corner with Art & Accents
      </h2>
      <p className="text-lg text-gray-700">
        Not every cozy space needs an entire room. Sometimes, the most comforting
        places in a home are the small, quiet corners designed for rest, reading,
        or simple moments of calm. A well-styled cozy corner can instantly make
        your space feel personal.
      </p>
    </main>
  );
}
