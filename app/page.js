import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <main className="mt-24 flex min-h-screen flex-col bg-[#181C14]">
      <Navbar />
      <div className="container, mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
      </div>
    </main>

  );
}
