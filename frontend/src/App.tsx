import "./styles/App.css"
import Sidebar from "./components/Sidebar";
import AnimatedBackground from "./components/AnimatedBackground";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";



function App() {
  return (
    <>
      <Sidebar/>
      <AnimatedBackground />
      <main className="container">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
      </main>
    </>
  );
}

export default App;