import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Techstack from "./pages/Techstack";

export default function App() {
  return(
    <div className="bg-black">
      <Home />
      <Projects />
      <Techstack />
      <Contact />
    </div>
  )
}