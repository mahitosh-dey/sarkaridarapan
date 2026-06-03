import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

/**
 * Convert legacy style="color:X" to data-color="X" so MDX/React
 * doesn't throw on the style string prop.
 */
function convertStylesToDataAttrs(source: string): string {
  return source.replace(
    /<span\s+style="color:\s*([^"]+?)"\s*>/g,
    '<span data-color="$1">'
  );
}

interface MarkdownContentProps {
  content: string;
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  const safeContent = convertStylesToDataAttrs(content);

  return (
    <div className="prose prose-sm sm:prose-base max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-table:text-sm prose-th:bg-gray-50 prose-th:px-4 prose-th:py-2 prose-td:px-4 prose-td:py-2 prose-li:text-gray-700 prose-h2:mt-16 prose-h2:pt-8 prose-h2:border-t-2 prose-h2:border-gray-200 prose-h3:mt-10">
      <MDXRemote
        source={safeContent}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeSlug],
          },
        }}
      />
    </div>
  );
}
