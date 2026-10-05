"use client";

import React, { useState } from "react";
import TopContactBar from "@/components/TopContactBar";
import Hero3DCanvas from "@/components/Hero3DCanvas";
import PlayableWebGLGame from "@/components/PlayableWebGLGame";
import ProjectsSection from "@/components/ProjectsSection";
import TechStackMatrix from "@/components/TechStackMatrix";
import MarketingSuperpower from "@/components/MarketingSuperpower";
import GlobalClients from "@/components/GlobalClients";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { soundFx } from "@/utils/soundEffects";
import {
  Sparkles,
  ArrowRight,
  Gamepad2,
  Mail,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Globe2,
  ChevronDown,
} from "lucide-react";

export default function Home() {
  const [soundEnabled, setSoundEnabled] = useState(false);

  const toggleSound = () => {
    const isNowEnabled = soundFx.toggleSound();
    setSoundEnabled(isNowEnabled);
  };

  return (
    <div className="relative min-h-screen bg-[#07070d] text-white selection:bg-rose-500 selection:text-white">
      {/* 1. TOP CENTER CONTACT BAR (Pinned at top center, not draggable) */}
      <TopContactBar soundEnabled={soundEnabled} onToggleSound={toggleSound} />

      {/* Background Decorative Mesh Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-rose-600/15 via-purple-600/10 to-transparent blur-[120px]" />
        <div className="absolute top-[40%] -left-40 w-[600px] h-[600px] bg-fuchsia-600/10 rounded-full blur-[140px]" />
        <div className="absolute top-[70%] -right-40 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px]" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <main className="relative z-10 pt-28 sm:pt-32">
        {/* HERO SECTION */}
        <section className="relative px-4 max-w-7xl mx-auto pt-6 pb-16 sm:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Chic Category Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-semibold tracking-wider uppercase shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-rose-400" />
                <span>Unity 3D Engine • Three.js WebGL • Game Marketing</span>
              </div>

              {/* Primary Name Display (FARIA ABRAR - ALL CAPS) */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight leading-[1.05] text-white">
                <span className="block text-white">FARIA ABRAR</span>
                <span className="block mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-rose-300 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  SENIOR GAME DEVELOPER & 3D CREATIVE TECHNOLOGIST
                </span>
              </h1>

              {/* Pitch & Persona */}
              <p className="text-sm sm:text-base lg:text-lg text-zinc-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                Bridging high-performance <strong className="text-white">Unity 3D game architecture</strong> with stylish, interactive <strong className="text-white">Three.js WebGL campaigns</strong>. Trusted by international studios and luxury global brands in Tokyo, Zurich, Paris, and London to craft immersive digital worlds that convert players into devoted communities.
              </p>

              {/* Quick Metrics Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
                <div className="p-3 rounded-2xl bg-black/40 border border-white/10 text-center lg:text-left">
                  <div className="text-xl sm:text-2xl font-black font-mono text-white bg-gradient-to-r from-rose-300 to-pink-300 bg-clip-text text-transparent">
                    6+ Yrs
                  </div>
                  <div className="text-[11px] text-zinc-400 uppercase font-mono mt-0.5">
                    Game & 3D Dev
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-black/40 border border-white/10 text-center lg:text-left">
                  <div className="text-xl sm:text-2xl font-black font-mono text-white bg-gradient-to-r from-purple-300 to-fuchsia-300 bg-clip-text text-transparent">
                    18+ Titles
                  </div>
                  <div className="text-[11px] text-zinc-400 uppercase font-mono mt-0.5">
                    International Shipped
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-black/40 border border-white/10 text-center lg:text-left">
                  <div className="text-xl sm:text-2xl font-black font-mono text-white bg-gradient-to-r from-rose-300 to-purple-300 bg-clip-text text-transparent">
                    12M+
                  </div>
                  <div className="text-[11px] text-zinc-400 uppercase font-mono mt-0.5">
                    Players Reached
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-black/40 border border-white/10 text-center lg:text-left">
                  <div className="text-xl sm:text-2xl font-black font-mono text-white text-emerald-400">
                    60+ FPS
                  </div>
                  <div className="text-[11px] text-zinc-400 uppercase font-mono mt-0.5">
                    WebGL Standard
                  </div>
                </div>
              </div>

              {/* Call-to-action buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
                <a
                  href="#projects"
                  onClick={() => soundFx.playClick()}
                  className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-rose-500 via-pink-600 to-purple-600 hover:from-rose-400 hover:to-purple-500 text-white font-bold text-sm shadow-[0_0_30px_rgba(244,63,94,0.35)] transition-all hover:scale-105 cursor-pointer"
                >
                  <span>EXPLORE INTERNATIONAL WORKS</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#demo-sandbox"
                  onClick={() => soundFx.playClick()}
                  className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 text-zinc-200 hover:text-white border border-white/10 hover:border-rose-500/40 font-semibold text-sm transition-all cursor-pointer"
                >
                  <Gamepad2 className="w-4 h-4 text-rose-400" />
                  <span>PLAY 3D WEBGL DEMO</span>
                </a>

                <a
                  href="#contact"
                  onClick={() => soundFx.playClick()}
                  className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-black/40 hover:bg-rose-500/10 text-rose-200 border border-rose-500/30 font-semibold text-sm transition-all cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-rose-400" />
                  <span>DIRECT INQUIRY</span>
                </a>
              </div>

              {/* Guarantee Pill */}
              <div className="flex items-center justify-center lg:justify-start gap-4 text-xs text-zinc-400 pt-2 font-mono">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>NDA Ready</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Globe2 className="w-4 h-4 text-purple-400" />
                  <span>Global Timezone Coverage</span>
                </span>
              </div>
            </div>

            {/* Right Column: Interactive Three.js 3D Canvas Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl bg-gradient-to-b from-[#141024]/80 to-[#080612]/90 border border-rose-500/25 p-2 sm:p-4 shadow-[0_16px_60px_rgba(244,63,94,0.18)] overflow-hidden">
                <Hero3DCanvas />
              </div>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <div className="mt-16 flex justify-center">
            <a
              href="#projects"
              className="flex flex-col items-center gap-1.5 text-zinc-500 hover:text-rose-400 transition-colors text-xs font-mono"
            >
              <span>DISCOVER PORTFOLIO</span>
              <ChevronDown className="w-4 h-4 animate-bounce text-rose-400" />
            </a>
          </div>
        </section>

        {/* 2. PLAYABLE WEBGL SANDBOX / 3D MINI-GAME */}
        <PlayableWebGLGame />

        {/* 3. INTERNATIONAL PROJECTS SHOWCASE */}
        <ProjectsSection />

        {/* 4. TECHNICAL & ENGINE MASTERY MATRIX */}
        <TechStackMatrix />

        {/* 5. THE MARKETER + GAME DEV SUPERPOWER ADVANTAGE */}
        <MarketingSuperpower />

        {/* 6. GLOBAL CLIENTS & TESTIMONIALS */}
        <GlobalClients />

        {/* 7. CONTACT & COMMISSION SECTION */}
        <ContactSection />
      </main>

      {/* 8. FOOTER */}
      <Footer />
    </div>
  );
}
