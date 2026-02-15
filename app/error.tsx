'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="text-center py-16">
      <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-red-900 mb-4">Something went wrong!</h2>
        <p className="text-red-700 mb-6">{error.message}</p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
