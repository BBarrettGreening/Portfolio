import Image from "next/image";
import HomeSection from "/app/components/HomeSection";
import Navbar from "/app/components/Navbar";
import PlaylistsSection from "/app/components/PlaylistsSection";
import ReviewsSection from "/app/components/ReviewsSection";
import Footer from "/app/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <div className="mt-24 container mx-auto px-12 py-4">
        <section id="playlists" className="scroll-mt-24"><PlaylistsSection/></section>
      </div>
      <Footer />
    </main>

  );
}