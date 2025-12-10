import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { FaGithub } from "react-icons/fa";
import { LiaExternalLinkAltSolid } from "react-icons/lia";

export default function Projects() {
  const proj = projects.slice(0, 3)

  return (
    <section className="border p-5 rounded-lg">
      <h2 className="text-xl font-semibold border-b border-neutral-400 mb-3">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="overflow-hidden transition-all duration-300 rounded-lg"
          >
            {/* Video section */}
            <video
              src={project.src}
              className="object-contain w-full h-48 sm:h-56 md:h-64"
              autoPlay
              loop
              muted
              playsInline
            />

            {/* Badge section */}
            <Badge className="w-full flex justify-between bg-white text-black dark:text-white dark:bg-transparent border-2 border-black dark:border-white/10 dark:shadow-2xl items-center">
              <div className="font-bold tracking-tight">{project.name}</div>
              <div className="flex items-center gap-1">
                <a
                  href={project.github}
                  target="_blank"
                  className="text-xs flex items-center hover:text-neutral-700 dark:hover:text-neutral-300"
                >
                  <FaGithub className="inline mr-1" />
                  <span>GitHub</span>
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  className="text-xs flex items-center hover:text-neutral-700 dark:hover:text-neutral-300"
                >
                  <LiaExternalLinkAltSolid className="inline mr-1" />
                  <span>Live</span>
                </a>
              </div>
            </Badge>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-5">
        <Button className="bg-transparent text-black hover:bg-white dark:text-white border-2 shadow:white/50 dark:border-white dark:hover:bg-black hover:cursor-pointer">
          Show More
        </Button>
      </div>
    </section>
  );
}
