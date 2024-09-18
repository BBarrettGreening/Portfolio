import Image from "next/image";
import HomeSection from "./components/HomeSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <div className="mt-24 container mx-auto px-12 min-h-screen">
        <main className="flex-grow">
            <section><HomeSection /></section>
        </main>
      </div>
      <Footer />
    </main>

  );
}
