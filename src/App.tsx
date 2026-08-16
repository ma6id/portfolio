import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Process from "./components/Process";
import Gallery from "./components/Gallery";
import VideoEditing from "./components/VideoEditing";
import Contact from "./components/Contact";
import ShareLink from "./components/ShareLink";
import Footer from "./components/Footer";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <div className="min-h-screen">
      <Nav theme={theme} toggle={toggle} />
      <main>
        <Hero />
        <div id="developpeur">
          <Education />
          <Skills />
          <Projects />
          <Process />
        </div>
        <Gallery />
        <VideoEditing />
        <Contact />
        <ShareLink />
      </main>
      <Footer />
    </div>
  );
}
