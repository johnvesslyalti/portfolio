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
    <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition flex flex-col h-full">
      {/* Fixed height image */}
      <div className="relative w-full h-48 bg-gray-100 dark:bg-neutral-800">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain"
        />
      </div>

      {/* Flex-grow content */}
      <div className="p-4 flex flex-col flex-grow">
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 flex-grow">
          {description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mt-3">
          {stack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 bg-gray-200 dark:bg-neutral-800 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links with icons */}
        <div className="flex gap-4 mt-auto pt-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
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
              className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
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
