import { JSX } from "react";
import Hero from "../../components/Hero";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";
import Contact from "../../components/Contact";

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