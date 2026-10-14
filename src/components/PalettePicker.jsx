"use client";

import { useEffect, useSyncExternalStore } from "react";

// Dark mode background palettes. The gradients themselves are in globals.css
// (body[data-bg="..."]). "swatch" is only the small preview circle on each button.
const palettes = [
  { id: "", name: "Midnight", swatch: "linear-gradient(135deg, #09090b, #1e293b)" },
  { id: "ocean", name: "Ocean", swatch: "linear-gradient(135deg, #020617, #0e7490)" },
  { id: "space", name: "Space", swatch: "linear-gradient(135deg, #020617, #4338ca)" },
  { id: "purple", name: "Purple", swatch: "linear-gradient(135deg, #09090b, #7e22ce)" },
  { id: "aurora", name: "Aurora", swatch: "linear-gradient(135deg, #0e7490, #047857)" },
  { id: "graphite", name: "Graphite", swatch: "linear-gradient(135deg, #0a0a0a, #3f3f46)" },
];

// Where the visitor's choice is saved, so it stays after a reload
const STORAGE_KEY = "bg-palette";
const EVENT = "palette-change";

// The chosen palette. null = not read from localStorage yet.
let current = null;

function getPalette() {
  if (current === null) {
    try {
      current = localStorage.getItem(STORAGE_KEY) || "";
    } catch {
      current = ""; // Private mode or blocked storage: use the default
    }
  }
  return current;
}

function setPalette(id) {
  current = id;
  try {
    localStorage.setItem(STORAGE_KEY, id);
  } catch {
    // Can't save: the palette still changes, it just isn't remembered
  }
  window.dispatchEvent(new Event(EVENT)); // tell React the value changed
}

function subscribe(callback) {
  window.addEventListener(EVENT, callback);
  return () => window.removeEventListener(EVENT, callback);
}

// A bar at the bottom-left (only in dark mode) to choose the background palette.
export default function PalettePicker() {
  // useSyncExternalStore: reads a value that lives outside React (localStorage).
  // The 3rd function is for the server, which has no localStorage → default "".
  const active = useSyncExternalStore(subscribe, getPalette, () => "");

  // Put the palette on <body data-bg="..."> so globals.css picks the gradient
  useEffect(() => {
    if (active) document.body.setAttribute("data-bg", active);
    else document.body.removeAttribute("data-bg");
  }, [active]);

  return (
    // "hidden dark:flex": palettes only change the dark background, so hide in light mode
    <div
      role="group"
      aria-label="Background palette"
      className="fixed bottom-4 left-4 z-40 hidden gap-1 rounded-xl border border-slate-700 bg-slate-900/90 p-1.5 text-xs text-slate-100 shadow-xl backdrop-blur dark:flex"
    >
      {palettes.map((palette) => (
        <button
          key={palette.name}
          type="button"
          onClick={() => setPalette(palette.id)}
          aria-label={`${palette.name} background`}
          aria-pressed={active === palette.id}
          title={palette.name}
          className={`flex items-center gap-1.5 rounded-md p-1.5 transition-colors sm:px-2 ${
            active === palette.id ? "bg-slate-700 text-cyan-400" : "hover:bg-slate-800"
          }`}
        >
          <span
            className="h-4 w-4 shrink-0 rounded-full border border-slate-500"
            style={{ background: palette.swatch }}
          />
          {/* Names only from sm (640px): on phones the bar shows just the circles */}
          <span className="hidden sm:inline">{palette.name}</span>
        </button>
      ))}
    </div>
  );
}
