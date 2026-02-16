import AffiliateDisclosure from "../../components/AffiliateDisclosure";

export default function WarmBedroomIdeas() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-serif mb-4 text-black">
        Warm Bedroom Aesthetic Ideas
      </h1>

      {/* Disclosure */}
      <AffiliateDisclosure />

      {/* Intro */}
      <p className="text-lg text-black mb-12">
        Creating a slow living bedroom is about warmth, comfort, and intention.
        These design ideas focus on calm aesthetics that feel inviting,
        functional, and deeply personal.
      </p>

      {/* 1 */}
      <div className="relative mb-14">
        <img
          src="/blog1.jpg"
          className="w-full rounded-lg"
          alt="Warm neutral color palettes"
        />
        <h2 className="absolute bottom-6 left-6 text-2xl font-serif text-white bg-black/50 px-4 py-2 rounded">
          1. Warm Neutral Color Palettes
        </h2>
      </div>
      <p className="text-lg text-black mb-16">
        Warm neutral colors create a calming and inviting atmosphere, making the
        bedroom feel cozy without feeling cluttered. The subtle contrast of black
        accents adds sophistication while keeping the room soft and soothing.
      </p>

      {/* 2 */}
      <div className="relative mb-14">
        <img
          src="/blog1-2.jpg"
          className="w-full rounded-lg"
          alt="Layered bedding"
        />
        <h2 className="absolute bottom-6 left-6 text-2xl font-serif text-white bg-black/50 px-4 py-2 rounded">
          2. Layered Bedding for a Cozy Bedroom
        </h2>
      </div>
      <p className="text-lg text-black mb-16">
        Layering bedding adds depth and texture, instantly making the bed look
        more inviting and luxurious. This styling technique enhances the room’s
        cozy vibe and encourages comfort and relaxation.
      </p>

      {/* 3 */}
      <div className="relative mb-14">
        <img
          src="/blog1-3.jpg"
          className="w-full rounded-lg"
          alt="Soft warm lighting"
        />
        <h2 className="absolute bottom-6 left-6 text-2xl font-serif text-white bg-black/50 px-4 py-2 rounded">
          3. Soft, Warm Lighting
        </h2>
      </div>
      <p className="text-lg text-black mb-16">
        Warm lighting transforms a space, making it feel intimate and restful.
        Combining natural light with ambient lamps creates a soft glow that
        enhances textures and colors.
      </p>

      {/* 4 */}
      <div className="relative mb-14">
        <img
          src="/blog1-4.jpg"
          className="w-full rounded-lg"
          alt="Natural textures"
        />
        <h2 className="absolute bottom-6 left-6 text-2xl font-serif text-white bg-black/50 px-4 py-2 rounded">
          4. Natural Textures & Materials
        </h2>
      </div>
      <p className="text-lg text-black mb-16">
        Incorporating natural textures like wood, woven materials, and linens
        adds visual depth and comfort while keeping the overall aesthetic elegant
        and minimal.
      </p>

      {/* 5 */}
      <div className="relative mb-14">
        <img
          src="/blog1-5.jpg"
          className="w-full rounded-lg"
          alt="Cozy corners"
        />
        <h2 className="absolute bottom-6 left-6 text-2xl font-serif text-white bg-black/50 px-4 py-2 rounded">
          5. Cozy Corners & Bedroom Styling Details
        </h2>
      </div>
      <p className="text-lg text-black">
        Cozy corners create intimate spaces within the bedroom for reading,
        relaxing, or personal reflection. Small details like an ottoman, plants,
        and art elevate the aesthetic while keeping the space functional and
        inviting.
      </p>
    </main>
  );
}
