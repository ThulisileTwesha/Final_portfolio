import logo from "./logo.svg";
import "./App.scss";
import Anav from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Experience from "./components/experience";
import Projects from "./components/Projects";
import Skills from "./components/skills";
import Contact from "./components/contact";

function App() {
  return (
    <div className="text-center">
      <Anav />
      <Home />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
