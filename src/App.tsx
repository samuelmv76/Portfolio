import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Timeline } from "./components/Timeline";
import { Stack } from "./components/Stack";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="fixed top-0 left-4 z-50 -translate-y-24 rounded-[10px] bg-ink px-4 py-2.5 text-[14px] text-ink-on transition-transform focus:translate-y-4"
      >
        Saltar al contenido
      </a>

      <Nav />

      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Timeline />
        <Stack />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
