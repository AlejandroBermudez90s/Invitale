import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Reveal>
        <About />
      </Reveal>
      {/* Gallery gestiona su propio escalonado tarjeta a tarjeta */}
      <Gallery />
      <Reveal>
        <Contact />
      </Reveal>
      <Reveal>
        <Footer />
      </Reveal>
    </main>
  );
}