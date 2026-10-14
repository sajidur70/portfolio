"use client";

import dynamic from "next/dynamic";
import { useState, useSyncExternalStore } from "react";

// Load the Spline 3D library only in the browser, and only when it's needed.
// It is big (about 1 MB), so phones never download it.
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

// Show 3D only on screens ≥ 768px AND when the visitor didn't ask for less motion.
const QUERY = "(min-width: 768px) and (prefers-reduced-motion: no-preference)";

// These 3 functions let React read a media query safely (and update when it changes).
function subscribe(callback) {
  const media = window.matchMedia(QUERY);
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}
const getSnapshot = () => window.matchMedia(QUERY).matches; // in the browser
const getServerSnapshot = () => false; // on the server: no 3D

// The 3D scene in the Hero.
// {children} = the fallback (my initials circle), shown when:
//  - there is no scene URL yet, or
//  - the screen is small / the visitor prefers less motion, or
//  - the 3D scene is still loading
export default function HeroScene({ sceneUrl, children }) {
  const show3D = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  const [loaded, setLoaded] = useState(false);

  if (!sceneUrl || !show3D) {
    return children;
  }

  return (
    <div className="relative flex h-[420px] w-[420px] items-center justify-center">
      {/* Fallback while the scene loads */}
      {!loaded && children}

      <div
        className={`absolute inset-0 transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
      >
        <Spline scene={sceneUrl} onLoad={() => setLoaded(true)} />
      </div>
    </div>
  );
}
