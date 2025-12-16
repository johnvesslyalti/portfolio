import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

const components = {
  h1: ({ children }) => (
    <h1 className="mt-10 mb-6 text-4xl md:text-5xl font-bold tracking-tight text-neutral-100">
      {children}
    </h1>
  ),

  h2: ({ children }) => (
    <h2 className="mt-10 mb-4 text-2xl md:text-3xl font-semibold tracking-tight text-neutral-200 border-b border-neutral-700 pb-2">
      {children}
    </h2>
  ),

  h3: ({ children }) => (
    <h3 className="mt-8 mb-3 text-xl font-semibold text-neutral-300">
      {children}
    </h3>
  ),

  p: ({ children }) => (
    <p className="my-5 text-lg leading-relaxed text-neutral-300">
      {children}
    </p>
  ),

  a: ({ href, children }) => (
    <a
      href={href}
      className="text-blue-400 underline underline-offset-4 hover:text-blue-300 transition"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),

  ul: ({ children }) => (
    <ul className="my-5 list-disc list-inside space-y-2 text-neutral-300">
      {children}
    </ul>
  ),

  ol: ({ children }) => (
    <ol className="my-5 list-decimal list-inside space-y-2 text-neutral-300">
      {children}
    </ol>
  ),

  li: ({ children }) => (
    <li className="leading-relaxed">
      {children}
    </li>
  ),

  blockquote: ({ children }) => (
    <blockquote className="my-8 border-l-4 border-neutral-600 pl-6 italic text-neutral-400">
      {children}
    </blockquote>
  ),

  code: ({ children }) => (
    <code className="rounded bg-neutral-800 px-1.5 py-0.5 text-sm text-neutral-100">
      {children}
    </code>
  ),

  pre: ({ children }) => (
    <pre className="my-8 overflow-x-auto rounded-lg bg-neutral-900 p-5 text-sm">
      {children}
    </pre>
  ),

  img: (props) => (
    <Image
      sizes="100vw"
      className="my-8 rounded-lg border border-neutral-700"
      style={{ width: "100%", height: "auto" }}
      {...(props as ImageProps)}
    />
  ),
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
