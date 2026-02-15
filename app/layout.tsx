import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio Manager",
  description: "Manage and showcase your development projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <nav className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link
                href="/"
                className="text-2xl font-bold text-blue-600 hover:text-blue-700"
              >
                Portfolio Manager
              </Link>
              <div className="flex gap-6">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/projects"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  All Projects
                </Link>
                <Link
                  href="/projects/create"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  Add Project
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-4 py-8">{children}</main>

        <footer className="bg-white border-t mt-16">
          <div className="max-w-7xl mx-auto px-4 py-6 text-center text-gray-600">
            <p>Built with Next.js 15 & TypeScript - Server Actions Demo</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
