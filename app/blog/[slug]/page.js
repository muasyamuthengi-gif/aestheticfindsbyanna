export default function BlogPost({ params }) {
  const { slug } = params;

  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-serif mb-6 capitalize">
        {slug.replaceAll("-", " ")}
      </h1>

      <p className="text-lg mb-4">
        This is your blog post content.
      </p>

      <p className="text-lg mb-4">
        You can write anything here manually, add images, text, headings —
        no markdown, no libraries, no errors.
      </p>

      <img
        src="/hero.jpg"
        alt="Blog image"
        className="rounded-lg mt-8"
      />
    </main>
  );
}
