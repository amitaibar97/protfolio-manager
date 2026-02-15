import Link from 'next/link';
import { getFeaturedProjects } from '@/lib/data';
import ProjectCard from './components/ProjectCard';

export const dynamic = 'force-static';

export default async function HomePage() {
  const featuredProjects = await getFeaturedProjects();

  return (
    <div>
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Welcome to Your Portfolio
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Showcase your best development projects
        </p>
        <div className="flex gap-4 justify-center">
          <Link 
            href="/projects" 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
          >
            View All Projects
          </Link>
          <Link 
            href="/projects/create" 
            className="px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 font-medium"
          >
            Add New Project
          </Link>
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>
          <p className="text-sm text-gray-500">Static Site Generation (SSG)</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
