import Hero from "./component3/Hero"
import Contact from "./component4/Contact"
import Projects from "./component5/Projects"
import About from "./component6/About"
import Skill from "./component7/Skill"

export default function Home() {
  return (
    <div>
    <Hero />
    <About />
    <Skill/>
    <Projects />
    <Contact />
    </div>
  );
}
