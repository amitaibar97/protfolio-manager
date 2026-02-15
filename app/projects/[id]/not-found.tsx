import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="text-center py-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h2>
      <p className="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
      <Link 
        href="/projects"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium inline-block"
      >
        Back to Projects
      </Link>
    </div>
  );
}
