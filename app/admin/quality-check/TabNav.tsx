"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

const TABS = [
  { key: "jobs", label: "Jobs" },
  { key: "schemes", label: "Schemes" },
  { key: "exams", label: "Entrance Exams" },
] as const;

export default function TabNav() {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") || "jobs";

  return (
    <div className="border-b border-gray-200 mb-6">
      <nav className="-mb-px flex space-x-6">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <Link
              key={tab.key}
              href={`/admin/quality-check?tab=${tab.key}`}
              className={`py-3 px-1 border-b-2 text-sm font-medium transition-colors ${
                isActive
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {tab.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
