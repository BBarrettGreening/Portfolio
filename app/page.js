import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#181C14]">
      <Navbar />
      <div className="mt-24 container, mx-auto px-12 py-4">
        <section><HeroSection /></section>
        <section id="about" className="scroll-mt-24"><AboutSection/></section>
        <section id="projects" className="scroll-mt-24"><ProjectSection/></section>
      </div>
    </main>

  );
}
