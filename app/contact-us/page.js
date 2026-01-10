export default function ContactUs() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-4xl md:text-5xl font-serif mb-6 text-black">
        Contact Us
      </h1>

      <p className="text-lg text-black mb-8">
        Have a question, collaboration idea, or feedback? We’d love to hear
        from you.
      </p>

      <div className="space-y-4 text-lg text-black">
        <p>
          📧 Email:{" "}
          <a
            href="mailto:hello@aestheticfinds.com"
            className="text-blue-600 hover:underline"
          >
            hello@aestheticfinds.com
          </a>
        </p>

        <p>
          📌 Pinterest:{" "}
          <span className="text-gray-700">
            @aestheticfinds
          </span>
        </p>
      </div>

      <p className="text-sm text-gray-500 mt-10">
        We usually respond within 24–48 hours.
      </p>
    </main>
  );
}
