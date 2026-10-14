import Image from "next/image";
import { FiBookOpen, FiCode, FiMapPin } from "react-icons/fi";
import { personal, highlights } from "@/data/portfolio";
import FadeIn from "@/components/ui/FadeIn";
import SocialLinks from "@/components/ui/SocialLinks";
import HeroScene from "@/components/HeroScene";

// Which icon to show for each highlight in the data file
const highlightIcons = {
  education: FiBookOpen,
  code: FiCode,
  location: FiMapPin,
};

// Same style for the 2nd and 3rd buttons
const outlineButton =
  "rounded-full border border-slate-300 px-6 py-3 font-medium transition hover:scale-105 hover:border-cyan-600 hover:text-cyan-600 dark:border-slate-700 dark:hover:border-cyan-400 dark:hover:text-cyan-400";

// The first screen visitors see: who I am, what I do, how to reach me.
export default function Hero() {
  // Initials for the circle: "Sajidur Rahman" → ["Sajidur", "Rahman"] → ["S", "R"] → "SR"
  const initials = personal.name
    .split(" ")
    .map((word) => word[0])
    .join("");

  return (
    <section
      id="home"
      className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center gap-12 px-6 pt-24 pb-16 md:flex-row md:justify-between"
    >
      {/* Left: text. Each part fades in a little after the one before (delay) */}
      <div className="max-w-xl text-center md:text-left">
        {/* "Open to work" badge with a pulsing green dot */}
        {personal.availability && (
          <FadeIn>
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-700 dark:text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {personal.availability}
            </p>
          </FadeIn>
        )}

        <FadeIn delay={0.1}>
          <p className="mt-6 font-mono text-cyan-600 dark:text-cyan-400">
            Hi, my name is
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
            {personal.name}
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          {/* Gradient text: a gradient background, clipped to the letters */}
          <p className="mt-3 bg-linear-to-r from-cyan-600 to-blue-600 bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl dark:from-cyan-400 dark:to-blue-400">
            {personal.title}
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            {personal.intro}
          </p>
        </FadeIn>

        {/* Quick facts: CSE Graduate · 500+ LeetCode · Location */}
        <FadeIn delay={0.4}>
          <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-600 md:justify-start dark:text-slate-400">
            {highlights.map((item) => {
              const Icon = highlightIcons[item.icon] ?? FiCode;
              return (
                <li key={item.text} className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                  {item.text}
                </li>
              );
            })}
          </ul>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              href="#projects"
              className="rounded-full bg-cyan-600 px-6 py-3 font-medium text-white transition hover:scale-105 hover:bg-cyan-700 dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-cyan-300"
            >
              View Projects
            </a>
            <a href="#contact" className={outlineButton}>
              Contact Me
            </a>
            {/* Resume button: only shown when resumeUrl is not empty */}
            {personal.resumeUrl && (
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={outlineButton}
              >
                Resume
              </a>
            )}
          </div>
        </FadeIn>

        <FadeIn delay={0.6}>
          <SocialLinks className="mt-8 justify-center md:justify-start" />
        </FadeIn>
      </div>

      {/* Right: 3D scene on desktop (when heroScene has a URL).
          Fallback = my photo (phones, loading, no scene) */}
      <FadeIn delay={0.3}>
        <HeroScene sceneUrl={personal.heroScene}>
          <div className="relative flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80">
            {/* Soft glowing gradient behind the photo */}
            <div className="absolute inset-0 animate-pulse rounded-full bg-linear-to-br from-cyan-400 to-blue-600 opacity-30 blur-3xl" />
            {/* Gradient ring: a gradient circle with padding, the photo sits inside */}
            <div className="relative h-56 w-56 rounded-full bg-linear-to-br from-cyan-400 to-blue-600 p-1 sm:h-72 sm:w-72">
              {personal.photo ? (
                <Image
                  src={personal.photo}
                  alt={`Photo of ${personal.name}`}
                  width={500}
                  height={500}
                  priority
                  sizes="(min-width: 640px) 288px, 224px"
                  className="h-full w-full rounded-full object-cover"
                />
              ) : (
                // No photo yet → show my initials
                <div className="flex h-full w-full items-center justify-center rounded-full bg-white font-mono text-5xl font-bold text-cyan-600 dark:bg-slate-900 dark:text-cyan-400">
                  {initials}
                </div>
              )}
            </div>
          </div>
        </HeroScene>
      </FadeIn>
    </section>
  );
}
