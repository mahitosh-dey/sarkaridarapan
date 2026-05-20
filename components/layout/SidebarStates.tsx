"use client";

import { useState } from "react";
import Link from "next/link";

const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const INITIAL_STATES_SHOWN = 8;

function toSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export default function SidebarStates() {
  const [showAllStates, setShowAllStates] = useState(false);

  const visibleStates = showAllStates
    ? indianStates
    : indianStates.slice(0, INITIAL_STATES_SHOWN);

  return (
    <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
      <div className="border-b border-gray-200 bg-[#FF9933] px-4 py-3 rounded-t-lg">
        <h2 className="text-sm font-semibold text-white">
          Jobs by State
        </h2>
      </div>
      <ul className="divide-y divide-gray-100">
        {visibleStates.map((state) => (
          <li key={state}>
            <Link
              href={`/state/${toSlug(state)}`}
              className="block px-4 py-2.5 text-sm text-gray-700 transition-colors hover:bg-orange-50 hover:text-orange-700"
            >
              {state}
            </Link>
          </li>
        ))}
      </ul>
      {indianStates.length > INITIAL_STATES_SHOWN && (
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
                Show All {indianStates.length} States
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
