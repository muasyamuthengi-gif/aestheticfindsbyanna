import fs from "fs";
import path from "path";
import Link from "next/link";

export default function BlogPage() {
  const postsDir = path.join(process.cwd(), "posts");
  const files = fs.readdirSync(postsDir);

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    return { slug };
  });

  return (
    <main className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-serif mb-10">Blog</h1>

      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="text-xl underline"
            >
              {post.slug.replace(/-/g, " ")}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
