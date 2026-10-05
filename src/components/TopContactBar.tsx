"use client";

import React, { useState } from "react";
import { Mail, Check, Copy, ExternalLink, Sparkles, Volume2, VolumeX, Globe2 } from "lucide-react";
import { soundFx } from "@/utils/soundEffects";

interface TopContactBarProps {
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export default function TopContactBar({ soundEnabled, onToggleSound }: TopContactBarProps) {
  const [copied, setCopied] = useState(false);
  const email = "fariaabrar556@gmail.com";

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    soundFx.playClick();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <header className="fixed top-2 sm:top-3 left-1/2 -translate-x-1/2 z-50 w-[96%] max-w-5xl pointer-events-none">
      <div className="pointer-events-auto bg-[#0d0a14]/90 backdrop-blur-xl border border-rose-500/25 shadow-[0_8px_32px_rgba(244,63,94,0.18)] rounded-2xl px-3.5 py-2 sm:px-5 sm:py-2.5 flex flex-col md:flex-row items-center justify-between gap-2.5 transition-all duration-300 hover:border-rose-500/40 hover:shadow-[0_12px_40px_rgba(244,63,94,0.25)]">
        
        {/* Left Side: Brand Identity (FARIA ABRAR - ALL CAPS) & Availability */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-tr from-rose-500 to-purple-600 text-white font-bold text-xs shadow-inner">
            <span>FA</span>
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 border-2 border-[#0d0a14] rounded-full animate-pulse" />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-display font-black tracking-wider text-sm sm:text-base text-white tracking-widest">
                FARIA ABRAR
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] tracking-wide uppercase px-2 py-0.5 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 font-medium">
                <Sparkles className="w-2.5 h-2.5 text-rose-400" />
                Unity 3D & Three.js
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-zinc-400">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="font-medium text-emerald-300">Accepting International Client Inquiries</span>
            </div>
          </div>
        </div>

        {/* Center / Direct Contact details: Name & Email displayed prominently */}
        <div className="flex items-center gap-2 sm:gap-3 bg-black/40 px-3 py-1.5 rounded-xl border border-white/5">
          <div className="flex items-center gap-1.5 text-xs text-zinc-300 font-mono">
            <Mail className="w-3.5 h-3.5 text-rose-400 flex-shrink-0" />
            <a
              href={`mailto:${email}?subject=Project%20Inquiry%20for%20FARIA%20ABRAR`}
              className="hover:text-rose-300 transition-colors font-medium text-zinc-200 hover:underline"
              title="Send email to FARIA ABRAR"
              onMouseEnter={() => soundFx.playHover()}
            >
              {email}
            </a>
          </div>

          <button
            onClick={handleCopyEmail}
            className={`relative flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-lg transition-all duration-200 font-semibold cursor-pointer ${
              copied
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                : "bg-rose-500/15 text-rose-200 hover:bg-rose-500/25 border border-rose-500/30 hover:border-rose-500/50"
            }`}
            title="Copy email address"
            onMouseEnter={() => soundFx.playHover()}
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-emerald-300" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3 text-rose-300" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Right Navigation & Quick Controls */}
        <div className="hidden lg:flex items-center gap-3">
          <nav className="flex items-center gap-2 text-xs text-zinc-300 font-medium">
            <a
              href="#projects"
              className="px-2.5 py-1 rounded-lg hover:text-white hover:bg-white/5 transition-colors"
              onMouseEnter={() => soundFx.playHover()}
            >
              Projects
            </a>
            <a
              href="#demo-sandbox"
              className="px-2.5 py-1 rounded-lg hover:text-white hover:bg-white/5 transition-colors text-rose-300"
              onMouseEnter={() => soundFx.playHover()}
            >
              3D Sandbox
            </a>
            <a
              href="#tech-mastery"
              className="px-2.5 py-1 rounded-lg hover:text-white hover:bg-white/5 transition-colors"
              onMouseEnter={() => soundFx.playHover()}
            >
              Stack
            </a>
            <a
              href="#marketing-edge"
              className="px-2.5 py-1 rounded-lg hover:text-white hover:bg-white/5 transition-colors"
              onMouseEnter={() => soundFx.playHover()}
            >
              Marketing
            </a>
            <a
              href="#testimonials"
              className="px-2.5 py-1 rounded-lg hover:text-white hover:bg-white/5 transition-colors"
              onMouseEnter={() => soundFx.playHover()}
            >
              Reviews
            </a>
          </nav>

          {/* Sound Toggle */}
          <button
            onClick={onToggleSound}
            className={`p-1.5 rounded-lg border text-xs transition-colors cursor-pointer ${
              soundEnabled
                ? "bg-rose-500/20 text-rose-300 border-rose-500/40"
                : "bg-white/5 text-zinc-400 border-white/10 hover:text-white"
            }`}
            title={soundEnabled ? "Mute interactive audio" : "Enable ambient cyber sounds"}
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
          </button>

          {/* Hire / Contract Action */}
          <a
            href="#contact"
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-400 hover:to-pink-500 text-white shadow-md shadow-rose-500/20 transition-all hover:scale-105"
            onMouseEnter={() => soundFx.playHover()}
            onClick={() => soundFx.playClick()}
          >
            <span>Book FARIA ABRAR</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </header>
  );
}
