import React from "react";
import { useInView } from "react-intersection-observer";
import HeroSection from "./components/hero";
import Header from "./components/header";
import Projects from "./components/projects";
import AboutSection from "./components/about";
import ContactSection from "./components/contact";
import BottomNav from "./components/bottomNav";

function App() {
  // Use useInView for each section
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.55 });
  const { ref: projectsRef, inView: projectsInView } = useInView({
    threshold: 0.1,
  });
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.8 });
  const { ref: contactRef, inView: contactInView } = useInView({
    threshold: 0.1,
  });

  // Determine BottomNav visibility
  const bottomNavVisible = !heroInView;

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <HeroSection viewRef={heroRef} />

        <section
          className="container section--projects"
          id="projects"
          ref={projectsRef}
        >
          <Projects />
        </section>
        <section className="section section--about" id="about" ref={aboutRef}>
          <AboutSection />
        </section>
        <section
          className="container section--contact"
          id="contact"
          ref={contactRef}
        >
          <ContactSection />
        </section>
      </main>
      <BottomNav
        visible={bottomNavVisible}
        activeSections={[projectsInView, aboutInView, contactInView]}
      />
    </>
  );
}

export default App;
