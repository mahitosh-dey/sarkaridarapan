"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export interface TocItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Track active heading via IntersectionObserver
  useEffect(() => {
    if (items.length === 0) return;

    const headingElements = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    if (headingElements.length === 0) return;

    // Disconnect any previous observer
    observerRef.current?.disconnect();

    const callback: IntersectionObserverCallback = (entries) => {
      // Find the first visible heading (top-most in viewport)
      const visibleEntries = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

      if (visibleEntries.length > 0) {
        setActiveId(visibleEntries[0].target.id);
      }
    };

    observerRef.current = new IntersectionObserver(callback, {
      rootMargin: "-80px 0px -60% 0px",
      threshold: 0,
    });

    headingElements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, [items]);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      const target = document.getElementById(id);
      if (target) {
        const yOffset = -80; // account for sticky header
        const y =
          target.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
        setActiveId(id);
        setIsOpen(false); // close on mobile after click
      }
    },
    []
  );

  if (items.length === 0) return null;

  // Calculate left padding based on heading level (h2=0, h3=1, h4=2, etc.)
  const minLevel = Math.min(...items.map((item) => item.level));

  return (
    <div className="lg:sticky lg:top-24">
      {/* Mobile Toggle */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm lg:hidden"
        aria-expanded={isOpen}
        aria-controls="toc-panel"
      >
        Table of Contents
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0l-4.25-4.25a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* TOC Panel */}
      <nav
        id="toc-panel"
        aria-label="Table of Contents"
        className={`mt-2 rounded-lg border border-gray-200 bg-white p-4 shadow-sm lg:mt-0 lg:block ${
          isOpen ? "block" : "hidden lg:block"
        }`}
      >
        <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-gray-500">
          Table of Contents
        </h2>

        <ul className="space-y-1">
          {items.map((item) => {
            const indent = item.level - minLevel;
            const isActive = activeId === item.id;

            return (
              <li key={item.id} style={{ paddingLeft: `${indent * 16}px` }}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleClick(e, item.id)}
                  className={`block rounded-md px-3 py-1.5 text-sm leading-snug transition-colors duration-150 ${
                    isActive
                      ? "bg-primary-50 font-semibold text-primary-700 border-l-2 border-primary-600"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                  aria-current={isActive ? "location" : undefined}
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
