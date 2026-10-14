import { personal } from "@/data/portfolio";
import Navbar from "@/components/Navbar";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";

// The home page. Real sections (Hero, About, Skills...) come in the next steps.
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section
          id="home"
          className="flex min-h-screen flex-col items-center justify-center gap-4"
        >
          <h1 className="text-4xl font-bold">{personal.name}</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            {personal.title} · Portfolio coming soon
          </p>
        </section>

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
