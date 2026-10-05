"use client";

import React from "react";
import { Sparkles, ArrowUp, Mail, Globe2 } from "lucide-react";
import { soundFx } from "@/utils/soundEffects";

export default function Footer() {
  const scrollToTop = () => {
    soundFx.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-4 border-t border-white/5 bg-[#05040a] relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand identity */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="font-display font-black text-lg tracking-widest text-white">
              FARIA ABRAR
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300">
              Portfolio
            </span>
          </div>
          <p className="text-xs text-zinc-400 mt-1 max-w-sm">
            Senior Game Developer (Unity 3D & Three.js) & Interactive Growth Marketer for visionary international studios.
          </p>
        </div>

        {/* Center contact reminder */}
        <div className="flex flex-col items-center text-center">
          <div className="text-xs text-zinc-400 font-mono flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-rose-400" />
            <a
              href="mailto:fariaabrar556@gmail.com"
              className="text-zinc-200 hover:text-rose-300 transition-colors"
            >
              fariaabrar556@gmail.com
            </a>
          </div>
          <div className="text-[11px] text-zinc-500 mt-1">
            Global Production • Tokyo • Zurich • Paris • London • Geneva
          </div>
        </div>

        {/* Back to top button */}
        <div className="flex items-center gap-4">
          <div className="text-xs text-zinc-500 font-mono">
            © {new Date().getFullYear()} FARIA ABRAR. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-white/5 hover:bg-rose-500/20 text-zinc-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
