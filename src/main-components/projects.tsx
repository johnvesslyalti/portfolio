import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { LiaExternalLinkAltSolid } from "react-icons/lia";

export default function Projects() {
  const projects = [
    {
      name: "Lift Log",
      src: "/liftlog.png",
      github: "https://github.com/johnvesslyalti/lift-log",
      live: "https://johnvesslyalti-liftlog.vercel.app",
    },
    {
      name: "Sub Trakr",
      src: "/subtrackr.png",
      github: "https://github.com/johnvesslyalti/sub-trackr",
      live: "https://johnvesslyalti-subtrackr.vercel.app",
    },
    {
      name: "Cine Scope",
      src: "/cinescope.png",
      github: "https://github.com/johnvesslyalti/cine-scope",
      live: "https://johnvesslyalti-cinescope.vercel.app",
    },
  ];

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
            <Image
              src={project.src}
              alt={project.name}
              width={500} // larger width for responsive scaling
              height={300} // proportional height
              className="object-contain w-full h-48 sm:h-56 md:h-64"
            />
            <Badge className="w-full flex justify-between bg-white text-black dark:text-white dark:bg-transparent border-2 border-black dark:border-white/10 dark:shadow-2xl items-center gap-5">
              <div className="font-bold tracking-tight">{project.name}</div>
              <div className="flex items-center gap-2 p-1">
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
    </section>
  );
}
