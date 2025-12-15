
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Analytics } from "@vercel/analytics/react";
import { useLenis } from "./hooks/useLenis";

// Lazy load components for better performance
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Experience = lazy(() => import("./components/Experience"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));

function App() {
  // Enable Lenis smooth scrolling
  useLenis();

  return (
    <>
      <div className="App">
        <Navbar />
        <main>
          <Hero />
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent-1"></div></div>}>
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
          <ScrollToTop />
        </Suspense>
        <Analytics />
      </div>
    </>
  );
}

export default App;
