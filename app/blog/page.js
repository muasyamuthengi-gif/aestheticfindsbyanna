export default function BlogPage() {
  return (
    <main className="max-w-5xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-serif mb-10">
        Blog
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="border p-6 rounded-lg">
          <h2 className="text-2xl font-serif mb-2">
            My First Blog Post
          </h2>
          <p className="text-gray-600">
            This is where your blog preview will go.
          </p>
        </div>

        <div className="border p-6 rounded-lg">
          <h2 className="text-2xl font-serif mb-2">
            Living Room Inspiration
          </h2>
          <p className="text-gray-600">
            Cozy, warm, minimalist interiors.
          </p>
        </div>
      </div>
    </main>
  );
}
