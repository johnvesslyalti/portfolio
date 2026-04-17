import Projects from "@/features/home/sections/projects";
import GitHub from "@/features/home/sections/github";
import Header from "@/features/home/sections/header";
import Blogs from "@/features/home/sections/blogs";
import About from "@/features/home/sections/about";
import Technologies from "@/features/home/sections/technologies";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col gap-10 max-w-2xl mx-auto p-6 text-neutral-900 dark:text-neutral-100 transition-colors">
      <Header />
      <About />
      <Technologies />
      <Projects />
      <GitHub />
      <Blogs />
    </div>
  );
}
