import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="mt-14 container mx-auto px-4 py-8">
        <section><HeroSection /></section>
        <section id="about" className="scroll-mt-20"><AboutSection/></section>
        <section id="projects" className="scroll-mt-20"><ProjectSection/></section>
      </div>

      <ContactSection />

      {/* Footer */}
      <footer className="border-t border-os-border bg-os-panel">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-os-muted text-xs">
            &copy; {new Date().getFullYear()} Bustamante Barrett-Greening
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </main>
  );
}
