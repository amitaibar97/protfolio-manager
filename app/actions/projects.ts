"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { projects } from "@/lib/data";

export async function createProject(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const techStackStr = formData.get("techStack") as string;
  const githubUrl = formData.get("githubUrl") as string;
  const liveUrl = formData.get("liveUrl") as string;
  const featured = formData.get("featured") === "on";

  if (!title || !description || !techStackStr) {
    throw new Error('Missing required fields');
  }

  const newProject = {
    id: String(Date.now()),
    title,
    description,
    techStack: techStackStr.split(",").map((t) => t.trim()),
    githubUrl: githubUrl || undefined,
    liveUrl: liveUrl || undefined,
    imageUrl: undefined,
    featured,
    createdAt: new Date().toISOString(),
  };

  projects.push(newProject);

  revalidatePath("/projects");
  revalidatePath("/");
  redirect("/projects");
}

export async function deleteProject(projectId: string) {
  const index = projects.findIndex((p) => p.id === projectId);

  if (index === -1) {
     throw new Error('Project not found');
  }

  projects.splice(index, 1);

  revalidatePath("/projects");
  revalidatePath("/");
}
