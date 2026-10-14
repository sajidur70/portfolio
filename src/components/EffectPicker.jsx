"use client";

import { useState } from "react";
import { FiZap } from "react-icons/fi";

// Hero effects. The animations themselves are in globals.css (body[data-fx="..."]).
const effects = [
  { id: "", name: "None" },
  { id: "glow", name: "Glow" },
  { id: "bounce", name: "Bounce" },
  { id: "flip", name: "Flip" },
];

// Puts the effect on <body data-fx="...">.
// Removing it first and re-adding it restarts the animation, even when
// the visitor taps the same effect again.
function applyEffect(id) {
  const body = document.body;
  body.removeAttribute("data-fx");
  if (!id) return;
  body.getBoundingClientRect(); // makes the browser notice the removal before re-adding
  body.setAttribute("data-fx", id);
}

// A row of buttons under my photo: tap one to animate my name, title and photo.
export default function EffectPicker() {
  const [active, setActive] = useState("");

  function choose(id) {
    applyEffect(id);
    setActive(id);
  }

  return (
    // motion-reduce:hidden = visitors who asked for less motion don't see it
    <div className="mt-6 flex max-w-xs flex-col items-center gap-2 motion-reduce:hidden">
      <p className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
        <FiZap aria-hidden="true" className="text-cyan-700 dark:text-cyan-400" />
        Tap to try an effect
      </p>
      <div role="group" aria-label="Hero effects" className="flex flex-wrap justify-center gap-1.5">
        {effects.map((effect) => (
          <button
            key={effect.name}
            type="button"
            onClick={() => choose(effect.id)}
            aria-pressed={active === effect.id}
            className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
              active === effect.id
                ? "border-cyan-700 bg-cyan-700 text-white dark:border-cyan-400 dark:bg-cyan-400 dark:text-slate-950"
                : "border-slate-300 hover:border-cyan-700 hover:text-cyan-700 dark:border-slate-700 dark:hover:border-cyan-400 dark:hover:text-cyan-400"
            }`}
          >
            {effect.name}
          </button>
        ))}
      </div>
    </div>
  );
}
