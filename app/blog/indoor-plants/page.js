import AffiliateDisclosure from "../../components/AffiliateDisclosure";

export default function IndoorPlantsPost() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-serif mb-4 text-black">
        6 Stunning Indoor Plants That Instantly Elevate Your Home Decor
      </h1>

      {/* Disclosure */}
      <AffiliateDisclosure />

      {/* Intro */}
      <p className="text-lg text-black mb-12">
        Indoor plants aren’t just trendy - they’re one of the easiest ways to make
        a space feel alive, intentional, and high-end. Whether you live in a small
        apartment or a spacious home, the right plant can act as decor, mood-setter,
        and focal point all at once.  
        Below are 6 realistic, purchasable indoor plants that interior designers
        actually use, plus exactly why each one is worth adding to your home.
      </p>

      {/* 1 */}
      <div className="relative mb-14">
        <img
          src="/plant1.jpg"
          className="w-full rounded-lg"
          alt="Snake Plant"
        />
        <h2 className="absolute bottom-6 left-6 text-2xl font-serif text-white bg-black/50 px-4 py-2 rounded">
          1. Snake Plant (Sansevieria)
        </h2>
      </div>
      <p className="text-lg text-black mb-16">
        The snake plant is one of the most forgiving and visually structured plants
        you can own. Its upright, architectural leaves create instant height in a
        room, making ceilings feel taller and spaces more intentional. It works
        beautifully in modern, Scandinavian, and luxury interiors because it adds
        greenery without visual clutter.
      </p>

      {/* 2 */}
      <div className="relative mb-14">
        <img
          src="/plant2.jpg"
          className="w-full rounded-lg"
          alt="Monstera Deliciosa"
        />
        <h2 className="absolute bottom-6 left-6 text-2xl font-serif text-white bg-black/50 px-4 py-2 rounded">
          2. Monstera Deliciosa
        </h2>
      </div>
      <p className="text-lg text-black mb-16">
        The Monstera is a statement plant - it doesn’t just sit in a room, it
        defines it. Its large, split leaves add softness, movement, and a
        tropical-luxury feel that instantly elevates any space. Despite its bold
        appearance, it’s surprisingly easy to care for and grows beautifully
        indoors with indirect light.
      </p>

      {/* 3 */}
      <div className="relative mb-14">
        <img
          src="/plant3.jpg"
          className="w-full rounded-lg"
          alt="Fiddle Leaf Fig"
        />
        <h2 className="absolute bottom-6 left-6 text-2xl font-serif text-white bg-black/50 px-4 py-2 rounded">
          3. Fiddle Leaf Fig (Ficus Lyrata)
        </h2>
      </div>
      <p className="text-lg text-black mb-16">
        The fiddle leaf fig is the ultimate luxury indoor plant. Its large, glossy
        leaves create drama without being overwhelming, making it perfect for
        homes that need height and presence. It instantly makes a space feel
        curated and high-value.
      </p>

      {/* 4 */}
      <div className="relative mb-14">
        <img
          src="/plant4.jpg"
          className="w-full rounded-lg"
          alt="Pothos plant"
        />
        <h2 className="absolute bottom-6 left-6 text-2xl font-serif text-white bg-black/50 px-4 py-2 rounded">
          4. Pothos (Devil’s Ivy)
        </h2>
      </div>
      <p className="text-lg text-black mb-16">
        Pothos is the perfect plant for layering decor. Instead of standing alone,
        it flows - softening shelves, cabinets, and corners with trailing greenery.
        It’s ideal for small apartments because it adds life without taking up
        floor space. This plant grows quickly, adapts to almost any lighting
        condition, and instantly makes a home feel cozy and lived-in.
      </p>

      {/* 5 */}
      <div className="relative mb-14">
        <img
          src="/plant5.jpg"
          className="w-full rounded-lg"
          alt="ZZ Plant"
        />
        <h2 className="absolute bottom-6 left-6 text-2xl font-serif text-white bg-black/50 px-4 py-2 rounded">
          5. ZZ Plant (Zamioculcas zamiifolia)
        </h2>
      </div>
      <p className="text-lg text-black mb-16">
        The ZZ plant is sleek, polished, and almost indestructible. Its glossy
        leaves reflect light beautifully, making spaces feel cleaner and brighter.
        It’s perfect for modern or luxury interiors where you want greenery that
        looks intentional and refined. If you’ve struggled to keep plants alive,
        this is your safest option.
      </p>

      {/* 6 */}
      <div className="relative mb-14">
        <img
          src="/plant6.jpg"
          className="w-full rounded-lg"
          alt="Areca or Kentia Palm"
        />
        <h2 className="absolute bottom-6 left-6 text-2xl font-serif text-white bg-black/50 px-4 py-2 rounded">
          6. Areca Palm / Kentia Palm
        </h2>
      </div>
      <p className="text-lg text-black">
        Palms bring movement and elegance into a room. Their soft fronds add flow
        and airiness, making spaces feel larger and more relaxed. They’re perfect
        for homes that want a resort-like or airy luxury vibe and are excellent
        for filling empty corners without overwhelming the decor.
      </p>

    </main>
  );
}
