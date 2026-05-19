"use client";

import { useState, useEffect, useRef, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type FilterType = "all" | "jobs" | "schemes";

interface SearchResult {
  type: "job" | "scheme";
  slug: string;
  title: string;
  description: string;
  category: string;
  state: string;
  publishedAt: string;
}

interface SearchBarProps {
  defaultQuery?: string;
  defaultFilter?: FilterType;
  showFilter?: boolean;
  className?: string;
}

export default function SearchBar({
  defaultQuery = "",
  defaultFilter = "all",
  showFilter = false,
  className = "",
}: SearchBarProps) {
  const router = useRouter();
  const [query, setQuery] = useState(defaultQuery);
  const [filter, setFilter] = useState<FilterType>(defaultFilter);
  const [suggestions, setSuggestions] = useState<SearchResult[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  // Fetch suggestions on query change (debounced)
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    const trimmed = query.trim();
    if (trimmed.length < 2) {
      setSuggestions([]);
      setShowDropdown(false);
      return;
    }

    setIsLoading(true);
    debounceRef.current = setTimeout(async () => {
      try {
        const params = new URLSearchParams({ q: trimmed });
        if (filter !== "all") params.set("type", filter);
        const res = await fetch(`/api/search?${params.toString()}`);
        const data = await res.json();
        setSuggestions(data.results?.slice(0, 8) || []);
        setShowDropdown(true);
        setActiveIndex(-1);
      } catch {
        setSuggestions([]);
      } finally {
        setIsLoading(false);
      }
    }, 300);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [query, filter]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    setShowDropdown(false);
    const params = new URLSearchParams();
    params.set("q", trimmed);
    if (filter !== "all") params.set("type", filter);
    router.push(`/search?${params.toString()}`);
  }

  function navigateToResult(result: SearchResult) {
    setShowDropdown(false);
    const path =
      result.type === "job"
        ? `/sarkari-naukri/${result.slug}`
        : `/sarkari-yojana/${result.slug}`;
    router.push(path);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (!showDropdown || suggestions.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) =>
        prev > 0 ? prev - 1 : suggestions.length - 1
      );
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      navigateToResult(suggestions[activeIndex]);
    } else if (e.key === "Escape") {
      setShowDropdown(false);
    }
  }

  return (
    <div ref={wrapperRef} className={`relative w-full ${className}`}>
      <form
        onSubmit={handleSubmit}
        role="search"
        aria-label="Search government jobs and schemes"
      >
        <div className="flex items-stretch gap-2">
          {/* Search Input */}
          <div className="relative flex-1">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
              {isLoading ? (
                <svg
                  className="h-4 w-4 animate-spin text-primary-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4 text-gray-400"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
            <input
              type="search"
              name="q"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => {
                if (suggestions.length > 0) setShowDropdown(true);
              }}
              onKeyDown={handleKeyDown}
              placeholder="Search government jobs, schemes..."
              className="block w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-4 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-colors duration-150"
              autoComplete="off"
              aria-expanded={showDropdown}
              aria-haspopup="listbox"
              aria-controls="search-suggestions"
              aria-activedescendant={
                activeIndex >= 0 ? `suggestion-${activeIndex}` : undefined
              }
            />
          </div>

          {/* Filter Dropdown (optional) */}
          {showFilter && (
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as FilterType)}
              className="rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-700 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-colors duration-150"
              aria-label="Filter search results"
            >
              <option value="all">All</option>
              <option value="jobs">Jobs</option>
              <option value="schemes">Schemes</option>
            </select>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 active:bg-primary-800 transition-colors duration-150"
          >
            <span className="hidden sm:inline">Search</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4 sm:hidden"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </form>

      {/* Autocomplete Dropdown */}
      {showDropdown && suggestions.length > 0 && (
        <div
          id="search-suggestions"
          role="listbox"
          className="absolute left-0 right-0 top-full z-50 mt-1 max-h-[400px] overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-xl"
        >
          {suggestions.map((result, index) => (
            <button
              key={`${result.type}-${result.slug}`}
              id={`suggestion-${index}`}
              role="option"
              aria-selected={index === activeIndex}
              type="button"
              onClick={() => navigateToResult(result)}
              onMouseEnter={() => setActiveIndex(index)}
              className={`flex w-full items-start gap-3 px-4 py-3 text-left transition-colors ${
                index === activeIndex
                  ? "bg-primary-50"
                  : "hover:bg-gray-50"
              } ${index !== suggestions.length - 1 ? "border-b border-gray-100" : ""}`}
            >
              {/* Type Icon */}
              <span
                className={`mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg ${
                  result.type === "job"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {result.type === "job" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 3.75A2.75 2.75 0 0 1 8.75 1h2.5A2.75 2.75 0 0 1 14 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 0 1 6 4.193V3.75ZM8.75 2.5c-.69 0-1.25.56-1.25 1.25v.26a41.561 41.561 0 0 1 5 0v-.26c0-.69-.56-1.25-1.25-1.25h-2.5Z"
                      clipRule="evenodd"
                    />
                    <path d="M2 13.665V16.5a1.5 1.5 0 0 0 1.5 1.5h13a1.5 1.5 0 0 0 1.5-1.5v-2.835a9.334 9.334 0 0 1-1.83.75A43.11 43.11 0 0 1 10 15.5a43.11 43.11 0 0 1-6.17-.585A9.335 9.335 0 0 1 2 14.165V13.665Z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M3.196 12.87l-.825.483a.75.75 0 000 1.294l7.004 4.086a1.5 1.5 0 001.25 0l7.004-4.086a.75.75 0 000-1.294l-.825-.484-5.554 3.243a2.99 2.99 0 01-2.5 0L3.196 12.87z" />
                    <path d="M3.196 8.87l-.825.483a.75.75 0 000 1.294l7.004 4.086a1.5 1.5 0 001.25 0l7.004-4.086a.75.75 0 000-1.294l-.825-.484-5.554 3.243a2.99 2.99 0 01-2.5 0L3.196 8.87z" />
                    <path d="M10.625 2.813a1.5 1.5 0 00-1.25 0L2.371 6.899a.75.75 0 000 1.294l7.004 4.086a1.5 1.5 0 001.25 0l7.004-4.086a.75.75 0 000-1.294l-7.004-4.086z" />
                  </svg>
                )}
              </span>

              {/* Content */}
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900">
                  {result.title}
                </p>
                <div className="mt-0.5 flex items-center gap-2">
                  <span
                    className={`text-xs font-medium ${
                      result.type === "job"
                        ? "text-blue-600"
                        : "text-green-600"
                    }`}
                  >
                    {result.type === "job" ? "Job" : "Scheme"}
                  </span>
                  <span className="text-xs text-gray-400">&middot;</span>
                  <span className="text-xs text-gray-500">
                    {result.category}
                  </span>
                </div>
              </div>

              {/* Arrow */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="mt-1 h-4 w-4 flex-shrink-0 text-gray-300"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 0 1 .75-.75h10.638L11.23 6.29a.75.75 0 1 1 1.04-1.08l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 1 1-1.04-1.08l3.158-2.96H3.75A.75.75 0 0 1 3 10Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          ))}

          {/* View All Results Link */}
          <Link
            href={`/search?q=${encodeURIComponent(query.trim())}${filter !== "all" ? `&type=${filter}` : ""}`}
            onClick={() => setShowDropdown(false)}
            className="flex items-center justify-center gap-2 border-t border-gray-100 px-4 py-3 text-sm font-medium text-primary-600 hover:bg-primary-50 transition-colors"
          >
            View all results for &ldquo;{query.trim()}&rdquo;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 0 1 .75-.75h10.638L11.23 6.29a.75.75 0 1 1 1.04-1.08l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 1 1-1.04-1.08l3.158-2.96H3.75A.75.75 0 0 1 3 10Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      )}

      {/* No Results Message */}
      {showDropdown && query.trim().length >= 2 && suggestions.length === 0 && !isLoading && (
        <div className="absolute left-0 right-0 top-full z-50 mt-1 rounded-lg border border-gray-200 bg-white p-4 shadow-xl text-center">
          <p className="text-sm text-gray-500">
            No results for &ldquo;{query.trim()}&rdquo;
          </p>
          <Link
            href={`/search?q=${encodeURIComponent(query.trim())}`}
            onClick={() => setShowDropdown(false)}
            className="mt-2 inline-block text-sm font-medium text-primary-600 hover:text-primary-700"
          >
            Search anyway &rarr;
          </Link>
        </div>
      )}
    </div>
  );
}
