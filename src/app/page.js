// The home page. For now it only shows my name.
// On Day 2, I replace this with my real sections (Hero, About, Skills...).
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-950 text-slate-100">
      <h1 className="text-4xl font-bold">Sajidur Rahman</h1>
      <p className="text-lg text-slate-400">
        MERN Stack Developer · Portfolio coming soon
      </p>
    </main>
  );
}
