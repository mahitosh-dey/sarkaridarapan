export default function SarkariYojanaLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Breadcrumb skeleton */}
      <div className="h-4 w-48 bg-gray-200 rounded animate-pulse mb-6" />

      {/* Title skeleton */}
      <div className="mb-8">
        <div className="h-9 w-80 bg-gray-200 rounded animate-pulse mb-2" />
        <div className="h-5 w-96 bg-gray-100 rounded animate-pulse" />
      </div>

      {/* Filter tabs skeleton */}
      <div className="mb-8 flex gap-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-9 w-28 bg-gray-200 rounded-full animate-pulse" />
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cards grid skeleton */}
        <div className="flex-1 min-w-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-lg border border-gray-200 p-5 animate-pulse"
              >
                <div className="flex justify-between mb-3">
                  <div className="h-3 w-32 bg-gray-200 rounded" />
                  <div className="h-5 w-16 bg-gray-200 rounded-full" />
                </div>
                <div className="h-5 w-full bg-gray-200 rounded mb-2" />
                <div className="h-4 w-full bg-gray-100 rounded mb-1" />
                <div className="h-4 w-3/4 bg-gray-100 rounded mb-4" />
                <div className="h-4 w-40 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar skeleton */}
        <div className="w-full lg:w-80 shrink-0">
          <div className="bg-gray-100 rounded-lg min-h-[400px] animate-pulse" />
        </div>
      </div>
    </div>
  );
}
