export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
  createdAt: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration and admin dashboard.',
    techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    githubUrl: 'https://github.com/example/ecommerce',
    liveUrl: 'https://example-shop.com',
    imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800',
    featured: true,
    createdAt: '2025-12-15',
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative task management with real-time updates and team features.',
    techStack: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    githubUrl: 'https://github.com/example/tasks',
    liveUrl: 'https://example-tasks.com',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
    featured: true,
    createdAt: '2025-11-20',
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'Real-time weather information with forecasts and interactive maps.',
    techStack: ['Next.js', 'TypeScript', 'OpenWeather API'],
    githubUrl: 'https://github.com/example/weather',
    imageUrl: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?w=800',
    featured: false,
    createdAt: '2025-10-05',
  },
  {
    id: '4',
    title: 'Blog Platform',
    description: 'Markdown-based blog with syntax highlighting and SEO optimization.',
    techStack: ['Next.js', 'MDX', 'Tailwind CSS'],
    githubUrl: 'https://github.com/example/blog',
    liveUrl: 'https://example-blog.com',
    imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800',
    featured: false,
    createdAt: '2025-09-12',
  },
];

// Simulate async data fetching
export async function getProjects(): Promise<Project[]> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 100));
  return projects;
}

export async function getProjectById(id: string): Promise<Project | null> {
  await new Promise(resolve => setTimeout(resolve, 100));
  return projects.find(p => p.id === id) || null;
}

export async function getFeaturedProjects(): Promise<Project[]> {
  await new Promise(resolve => setTimeout(resolve, 100));
  return projects.filter(p => p.featured);
}
