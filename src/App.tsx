import { useState, useLayoutEffect } from "react";
import "./App.css";
import Section from "./components/Section/Section";
import About from "./sections/about/About";
import Blog from "./sections/blog/Blog";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
import Home from "./sections/home/Home";
import NavBar from "./sections/navbar/NavBar";
import Skills from "./sections/skills/Skills";

function App() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "theme-light"
  );

  useLayoutEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <main className={theme}>
      <NavBar activeSection={activeSection} setTheme={setTheme} theme={theme} />
      <Section id="header" setActiveSection={setActiveSection}>
        <Home />
      </Section>
      <Section id="about" setActiveSection={setActiveSection}>
        <About />
      </Section>
      <Section id="skills" setActiveSection={setActiveSection}>
        <Skills />
      </Section>
      <Section id="blog" setActiveSection={setActiveSection}>
        <Blog />
      </Section>
      <Section id="contact" setActiveSection={setActiveSection}>
        <Contact />
      </Section>
      <Footer />
    </main>
  );
}

export default App;
