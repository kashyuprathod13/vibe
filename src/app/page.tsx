import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212]">
      <div className="relative w-full h-[500vh]">
        <div className="absolute inset-0">
          <ScrollyCanvas />
        </div>
        <Overlay />
      </div>
      <About hidePhoto={true} />
      <Partners />
      <Projects />
      <Contact />
    </main>
  );
}
