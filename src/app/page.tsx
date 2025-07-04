import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { JSX } from "react";


export default function Page(): JSX.Element {
  return(
    <div>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}