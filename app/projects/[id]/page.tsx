import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getProjectById, projects } from '@/lib/data';

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

interface PageProps {
  params: { id: string };
}

export default async function ProjectDetailPage({ params }: PageProps) {
   const { id } = await params; //from next 15 dynamic params are async iterable, so we need to await it
  const project = await getProjectById(id);
  
  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Link 
        href="/projects" 
        className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
      >
        ← Back to Projects
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {project.imageUrl && (
          <div className="relative h-96 bg-gray-200">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="p-8">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-4xl font-bold text-gray-900">{project.title}</h1>
            {project.featured && (
              <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
                Featured
              </span>
            )}
          </div>

          <p className="text-gray-600 text-lg mb-6">{project.description}</p>

          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4 pt-6 border-t">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 font-medium"
              >
                View on GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
              >
                Live Demo
              </a>
            )}
          </div>

          <div className="mt-6 pt-6 border-t text-sm text-gray-500">
            <p>Created: {new Date(project.createdAt).toLocaleDateString()}</p>
            <p className="mt-1">Generated with generateStaticParams()</p>
          </div>
        </div>
      </div>
    </div>
  );
}
