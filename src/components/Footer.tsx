import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Johnvessly Alti — Built with Next.js & Tailwind
        </p>
        <div className="flex items-center gap-3 text-sm">
          <a href="https://github.com/johnvesslyalti" className="inline-flex items-center gap-2">
            <Github size={14} /> GitHub
          </a>
          <a href="https://linkedin.com/in/johnvesslyalti" className="inline-flex items-center gap-2">
            <Linkedin size={14} /> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
