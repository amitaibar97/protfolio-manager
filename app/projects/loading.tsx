export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-100">
      <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mb-4"></div>
      <p className="text-gray-600 text-lg">Loading projects...</p>
    </div>
  );
}
