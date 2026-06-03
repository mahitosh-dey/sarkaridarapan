import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import type { JSX } from "react";

function convertStylesToDataAttrs(source: string): string {
  return source.replace(
    /<span\s+style="color:\s*([^"]+?)"\s*>/g,
    '<span data-color="$1">'
  );
}

const components = {
  h2: ({ children, id }: { children?: React.ReactNode; id?: string }) => (
    <h2
      id={id}
      className="flex items-start gap-3 mt-14 mb-5 scroll-mt-24"
    >
      <span className="shrink-0 mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-sm font-bold text-white shadow-sm">
        {extractNumber(children)}
      </span>
      <span className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug border-b-2 border-indigo-100 pb-2 flex-1">
        {stripNumber(children)}
      </span>
    </h2>
  ),

  h3: ({ children, id }: { children?: React.ReactNode; id?: string }) => (
    <h3
      id={id}
      className="mt-8 mb-3 text-lg font-bold text-gray-800 scroll-mt-24"
    >
      {children}
    </h3>
  ),

  p: ({ children }: { children?: React.ReactNode }) => (
    <p className="my-4 text-base leading-7 text-gray-700">{children}</p>
  ),

  ul: ({ children }: { children?: React.ReactNode }) => (
    <ul className="my-4 space-y-2 pl-0 list-none">{children}</ul>
  ),

  li: ({ children }: { children?: React.ReactNode }) => (
    <li className="flex items-start gap-2 text-base text-gray-700 leading-7">
      <span className="mt-2 shrink-0 h-2 w-2 rounded-full bg-indigo-500" />
      <span>{children}</span>
    </li>
  ),

  ol: ({ children }: { children?: React.ReactNode }) => (
    <ol className="my-4 space-y-2 pl-0 list-none">{children}</ol>
  ),

  table: ({ children }: { children?: React.ReactNode }) => (
    <div className="my-6 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
      <table className="w-full border-collapse text-sm">{children}</table>
    </div>
  ),

  thead: ({ children }: { children?: React.ReactNode }) => (
    <thead className="bg-indigo-600 text-white">{children}</thead>
  ),

  th: ({ children }: { children?: React.ReactNode }) => (
    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide">
      {children}
    </th>
  ),

  td: ({ children }: { children?: React.ReactNode }) => (
    <td className="px-4 py-3 text-gray-700 border-t border-gray-100">
      {children}
    </td>
  ),

  tr: ({ children }: { children?: React.ReactNode }) => (
    <tr className="even:bg-gray-50 hover:bg-indigo-50 transition-colors">
      {children}
    </tr>
  ),

  strong: ({ children }: { children?: React.ReactNode }) => (
    <strong className="font-semibold text-gray-900">{children}</strong>
  ),

  hr: () => (
    <div className="my-10 flex items-center gap-4">
      <div className="flex-1 h-px bg-gray-200" />
      <div className="flex gap-1">
        <span className="h-1.5 w-1.5 rounded-full bg-indigo-300" />
        <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
        <span className="h-1.5 w-1.5 rounded-full bg-indigo-300" />
      </div>
      <div className="flex-1 h-px bg-gray-200" />
    </div>
  ),

  blockquote: ({ children }: { children?: React.ReactNode }) => (
    <blockquote className="my-6 rounded-lg border-l-4 border-indigo-500 bg-indigo-50 px-5 py-4 text-gray-700 italic">
      {children}
    </blockquote>
  ),
};

function extractNumber(children: React.ReactNode): string | null {
  const text = childrenToText(children);
  const match = text.match(/^(\d+)\./);
  return match ? match[1] : null;
}

function stripNumber(children: React.ReactNode): React.ReactNode {
  const text = childrenToText(children);
  const hasNumber = /^\d+\./.test(text);
  if (!hasNumber) return children;
  return text.replace(/^\d+\.\s*/, "");
}

function childrenToText(children: React.ReactNode): string {
  if (typeof children === "string") return children;
  if (Array.isArray(children)) return children.map(childrenToText).join("");
  if (
    children &&
    typeof children === "object" &&
    "props" in (children as JSX.Element)
  ) {
    return childrenToText((children as JSX.Element).props.children);
  }
  return "";
}

interface MarkdownContentProps {
  content: string;
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  const safeContent = convertStylesToDataAttrs(content);

  return (
    <div className="max-w-none">
      <MDXRemote
        source={safeContent}
        components={components}
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
