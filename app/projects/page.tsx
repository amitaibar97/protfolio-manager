import { getProjects } from '@/lib/data';
import ProjectCard from '../components/ProjectCard';

export const dynamic = 'force-dynamic';

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">All Projects</h1>
          <p className="text-gray-600">Browse all {projects.length} projects</p>
        </div>
        <p className="text-sm text-gray-500">
          Server-Side Rendering (SSR) • {new Date().toLocaleTimeString()}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} showDelete={true} />
        ))}
      </div>
    </div>
  );
}
