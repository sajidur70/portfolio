import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";

// The home page: puts all sections in order.
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* Test section: scroll down to see the fade-in. Step 16 replaces it with the real About */}
        <section id="about" className="mx-auto max-w-5xl px-6 py-24">
          <FadeIn>
            <SectionHeading
              number="01"
              title="About Me"
              subtitle="Who I am and what I do"
            />
          </FadeIn>
        </section>
      </main>
    </>
  );
}
