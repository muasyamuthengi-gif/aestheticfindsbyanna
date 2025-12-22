import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-serif mb-10">Blog</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <Link
          href="/blog/post-one"
          className="border p-6 rounded-xl hover:shadow-lg"
        >
          <h2 className="text-2xl font-serif mb-2">
            First Blog Post
          </h2>
          <p>Click to read more.</p>
        </Link>
      </div>
    </main>
  );
}
