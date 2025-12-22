import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { marked } from "marked";

export default function BlogPost({ params }) {
  const filePath = path.join(
    process.cwd(),
    "posts",
    `${params.slug}.md`
  );

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const content = fs.readFileSync(filePath, "utf-8");
  const html = marked(content);

  return (
    <main className="max-w-3xl mx-auto py-20 px-6 prose">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}
