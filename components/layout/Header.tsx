"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
}

interface CategoryItem {
  label: string;
  href: string;
}

const navLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Sarkari Naukri", href: "/sarkari-naukri" },
  { label: "Sarkari Yojana", href: "/sarkari-yojana" },
  { label: "Results", href: "/results" },
  { label: "Admit Card", href: "/admit-card" },
];

const categories: CategoryItem[] = [
  { label: "SSC", href: "/category/ssc" },
  { label: "UPSC", href: "/category/upsc" },
  { label: "Railway", href: "/category/railway" },
  { label: "Banking", href: "/category/banking" },
  { label: "Defence", href: "/category/defence" },
  { label: "Police", href: "/category/police" },
  { label: "Teaching", href: "/category/teaching" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isMobileCategoryOpen, setIsMobileCategoryOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId = 0;
    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 10);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsCategoryDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Top tricolor bar */}
      <div className="flex h-1 w-full">
        <div className="flex-1 bg-[#FF9933]" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-[#138808]" />
      </div>

      <header
        className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
          isScrolled ? "shadow-lg" : "shadow-sm"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-tight tracking-tight sm:text-2xl">
                  <span className="text-[#FF9933]">Sarkari</span>
                  <span className="text-[#138808]">Darapan</span>
                </span>
                <span className="hidden text-[10px] leading-tight text-gray-500 sm:block">
                  Government Jobs &amp; Schemes Portal
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-700"
                >
                  {link.label}
                </Link>
              ))}

              {/* Categories Dropdown */}
              <div ref={dropdownRef} className="relative">
                <button
                  onClick={() =>
                    setIsCategoryDropdownOpen(!isCategoryDropdownOpen)
                  }
                  onMouseEnter={() => setIsCategoryDropdownOpen(true)}
                  className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-700"
                  aria-expanded={isCategoryDropdownOpen}
                  aria-haspopup="true"
                >
                  Categories
                  <svg
                    className={`h-4 w-4 transition-transform duration-200 ${
                      isCategoryDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isCategoryDropdownOpen && (
                  <div
                    className="absolute right-0 top-full mt-1 w-48 rounded-lg border border-gray-100 bg-white py-2 shadow-xl"
                    onMouseLeave={() => setIsCategoryDropdownOpen(false)}
                  >
                    {categories.map((category) => (
                      <Link
                        key={category.href}
                        href={category.href}
                        className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-700"
                        onClick={() => setIsCategoryDropdownOpen(false)}
                      >
                        {category.label} Jobs
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            {/* Right side actions */}
            <div className="flex items-center gap-2">
              {/* Search Icon */}
              <Link
                href="/search"
                className="rounded-full p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-blue-700"
                aria-label="Search"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="rounded-md p-2 text-gray-600 transition-colors hover:bg-gray-100 lg:hidden"
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 top-[calc(4rem+4px)] z-40 bg-black/50 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Mobile Slide-out Menu */}
        <div
          className={`fixed right-0 top-[calc(4rem+4px)] z-50 h-[calc(100vh-4rem-4px)] w-72 transform overflow-y-auto bg-white shadow-xl transition-transform duration-300 ease-in-out lg:hidden ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-md px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Categories Accordion */}
            <div className="border-t border-gray-100 pt-2">
              <button
                onClick={() => setIsMobileCategoryOpen(!isMobileCategoryOpen)}
                className="flex w-full items-center justify-between rounded-md px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-700"
                aria-expanded={isMobileCategoryOpen}
              >
                Categories
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isMobileCategoryOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isMobileCategoryOpen && (
                <div className="ml-4 border-l-2 border-blue-100 pl-2">
                  {categories.map((category) => (
                    <Link
                      key={category.href}
                      href={category.href}
                      className="block rounded-md px-4 py-2 text-sm text-gray-600 transition-colors hover:bg-blue-50 hover:text-blue-700"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {category.label} Jobs
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Search Link */}
            <div className="border-t border-gray-100 pt-2">
              <Link
                href="/search"
                className="flex items-center gap-2 rounded-md px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                Search Jobs &amp; Schemes
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
