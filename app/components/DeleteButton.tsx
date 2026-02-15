"use client";

import { useFormStatus } from "react-dom";
import { deleteProject } from "@/app/actions/projects";

function DeleteButtonContent() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:bg-gray-400 text-sm font-medium"
    >
      {pending ? "Deleting..." : "Delete Project"}
    </button>
  );
}

export default function DeleteButton({ projectId }: { projectId: string }) {
  const deleteWithId = deleteProject.bind(null, projectId);

  return (
    <form action={deleteWithId}>
      <DeleteButtonContent />
    </form>
  );
}
