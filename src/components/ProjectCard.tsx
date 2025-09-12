import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

type ProjectProps = {
  title: string;
  description: string;
  stack: string[];
  github?: string;
  live?: string;
  image: string;
};

export default function ProjectCard({
  title,
  description,
  stack,
  github,
  live,
  image,
}: ProjectProps) {
  return (
    <div
      className="group relative flex flex-col h-full rounded-2xl overflow-hidden
      bg-white/70 dark:bg-neutral-900/70 backdrop-blur-md
      border border-gray-200/50 dark:border-white/10
      shadow-sm
      duration-300"
    >
      {/* Project image */}
      <div className="relative w-full h-48 bg-gray-100 dark:bg-neutral-800">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain p-5 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
          {title}
        </h4>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 flex-grow leading-relaxed">
          {description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mt-3">
          {stack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded-full
              bg-gray-200/70 dark:bg-neutral-800/70
              text-gray-800 dark:text-gray-300
              border border-gray-300/40 dark:border-white/10
              backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 mt-5 pt-3 border-t border-gray-200/40 dark:border-white/10">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-gray-700 dark:text-gray-300"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-gray-700 dark:text-gray-300"
            >
              <ExternalLink size={16} />
              <span>Live</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
