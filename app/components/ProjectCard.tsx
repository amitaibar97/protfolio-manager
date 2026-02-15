import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/lib/data';
import DeleteButton from './DeleteButton';

interface ProjectCardProps {
  project: Project;
  showDelete?: boolean;
}

export default function ProjectCard({ project, showDelete = false }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden">
      <div className="relative h-48 bg-gray-200">
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No Image
          </div>
        )}
        {project.featured && (
          <span className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
            Featured
          </span>
        )}
      </div>

      <div className="p-5">
        <Link href={`/projects/${project.id}`}>
          <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600">
            {project.title}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="text-gray-500 text-xs py-1">
              +{project.techStack.length - 3} more
            </span>
          )}
        </div>

        {showDelete && (
          <div className="pt-3 border-t">
            <DeleteButton projectId={project.id} />
          </div>
        )}
      </div>
    </div>
  );
}
