import { personal } from "@/data/portfolio";

// The home page. For now it shows my name and title from the data file.
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-950 text-slate-100">
      <h1 className="text-4xl font-bold">{personal.name}</h1>
      <p className="text-lg text-slate-400">
        {personal.title} · Portfolio coming soon
      </p>
    </main>
  );
}
