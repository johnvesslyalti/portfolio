import Projects from "@/main-components/projects";
import GitHub from "@/main-components/github";
import Contact from "@/main-components/contact";
import NameSection from "@/main-components/name-section";
import ProblemSolving from "@/main-components/problem-solving";
import CustomTweet from "@/main-components/custom-tweet";
import BlogSection from "@/main-components/blog-section";
import About from "@/main-components/about";
import Technologies from "@/main-components/technologies";
import Concepts from "@/main-components/concepts";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col gap-10 max-w-2xl mx-auto p-6 text-neutral-900 dark:text-neutral-100 transition-colors">
      <NameSection />
      <About />
      <Technologies />
      <Concepts />
      <Projects />
      <ProblemSolving />
      <GitHub />
      <BlogSection />
      <CustomTweet />
      <Contact />
    </div>
  );
}
