import Skills from "@/main-components/skills";
import Projects from "@/main-components/projects";
import GitHub from "@/main-components/github";
import Contact from "@/main-components/contact";
import NameSection from "@/main-components/name";
import ProblemSolving from "@/main-components/problem-solving";
import Intro from "@/main-components/intro";
import CustomTweet from "@/main-components/custom-tweet";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col gap-10 max-w-2xl mx-auto p-6 text-neutral-900 dark:text-neutral-100 transition-colors">
      <NameSection />
      <Intro />
      <Skills />
      <Projects />
      <ProblemSolving />
      <GitHub />
      <CustomTweet />
      <Contact />
    </div>
  );
}
