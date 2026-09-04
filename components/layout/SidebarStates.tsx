"use client";

import { useState } from "react";
import Link from "next/link";

// The list of states to show is passed in by <Sidebar>, which filters it to
// states that actually hold content. It used to be a hardcoded list of all 29
// states here, and the first 8 were server-rendered on EVERY page of the site.
// Seven of those eight pointed at facet pages the site marks noindex, so every
// page shipped seven links into dead ends. See lib/facet-index.ts.
export type SidebarState = { slug: string; name: string };

const INITIAL_STATES_SHOWN = 8;

export default function SidebarStates({ states }: { states: SidebarState[] }) {
  const [showAllStates, setShowAllStates] = useState(false);

  if (states.length === 0) return null;

  const visibleStates = showAllStates
    ? states
    : states.slice(0, INITIAL_STATES_SHOWN);

  return (
    <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
      <div className="border-b border-gray-200 bg-[#FF9933] px-4 py-3 rounded-t-lg">
        <h2 className="text-sm font-semibold text-white">
          Jobs by State
        </h2>
      </div>
      <ul className="divide-y divide-gray-100">
        {visibleStates.map((state) => (
          <li key={state.slug}>
            <Link
              href={`/state/${state.slug}`}
              className="block px-4 py-2.5 text-sm text-gray-700 transition-colors hover:bg-orange-50 hover:text-orange-700"
            >
              {state.name}
            </Link>
          </li>
        ))}
      </ul>
      {states.length > INITIAL_STATES_SHOWN && (
        <div className="border-t border-gray-200 px-4 py-2">
          <button
            onClick={() => setShowAllStates(!showAllStates)}
            className="flex items-center gap-1 text-xs font-medium text-blue-700 hover:text-blue-800"
          >
            {showAllStates ? (
              <>
                Show Less
                <svg
                  className="h-3 w-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </>
            ) : (
              <>
                Show All {states.length} States
                <svg
                  className="h-3 w-3"
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
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
