"use client";

import { useFormStatus } from "react-dom";
import { createProject } from "@/app/actions/projects";
import Link from "next/link";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 font-medium"
    >
      {pending ? "Creating..." : "Create Project"}
    </button>
  );
}

export default function CreateProjectPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">
        Create New Project
      </h1>
      <p className="text-gray-600 mb-8">
        This form uses Server Actions - no API route needed!
      </p>

      <form
        action={createProject}
        className="bg-white rounded-lg shadow-lg p-8 space-y-6"
      >
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Project Title *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="My Awesome Project"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Description *
          </label>
          <textarea
            id="description"
            name="description"
            required
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="A brief description of your project..."
          />
        </div>

        <div>
          <label
            htmlFor="techStack"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Tech Stack * (comma-separated)
          </label>
          <input
            type="text"
            id="techStack"
            name="techStack"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="React, TypeScript, Node.js"
          />
        </div>

        <div>
          <label
            htmlFor="githubUrl"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            GitHub URL
          </label>
          <input
            type="url"
            id="githubUrl"
            name="githubUrl"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="https://github.com/username/repo"
          />
        </div>

        <div>
          <label
            htmlFor="liveUrl"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Live Demo URL
          </label>
          <input
            type="url"
            id="liveUrl"
            name="liveUrl"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="https://myproject.com"
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="featured"
            name="featured"
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="featured" className="ml-2 text-sm text-gray-700">
            Mark as featured project
          </label>
        </div>

        <div className="flex gap-4 pt-4">
          <SubmitButton />
          <Link
            href="/projects"
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-medium text-center"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
