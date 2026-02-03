import Projects from "@/sections/projects";
import GitHub from "@/sections/github";
import Contact from "@/sections/contact";
import Header from "@/sections/header";
import Blogs from "@/sections/blogs";
import About from "@/sections/about";
import Technologies from "@/sections/technologies";

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.15),_transparent_55%),radial-gradient(circle_at_20%_20%,_rgba(16,185,129,0.18),_transparent_45%),radial-gradient(circle_at_80%_40%,_rgba(236,72,153,0.12),_transparent_40%)]" />
      <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col gap-12 px-6 pb-16 pt-10 text-neutral-900 transition-colors dark:text-neutral-100">
        <Header />
        <About />
        <Technologies />
        <Projects />
        <GitHub />
        <Blogs />
        <Contact />
      </div>
    </div>
  );
}
