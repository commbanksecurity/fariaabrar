"use client";

import React from "react";
import { Cpu, Layers, TrendingUp, Palette, Terminal, Shield, Sparkles, CheckCircle2 } from "lucide-react";
import { soundFx } from "@/utils/soundEffects";

export default function TechStackMatrix() {
  const pillars = [
    {
      title: "UNITY 3D ENGINE MASTERY",
      badge: "Core AAA / Indie Specialty",
      icon: Cpu,
      color: "from-rose-500 to-pink-600",
      description:
        "Architecting robust game systems, combat loops, and multi-threaded simulation with precision performance targeting 60+ FPS across mobile and consoles.",
      skills: [
        { name: "C# / .NET 8 Performance Architecture", level: "Expert" },
        { name: "Universal (URP) & High-Definition (HDRP) Pipelines", level: "Advanced" },
        { name: "HLSL & Compute Shaders / GPU Instancing", level: "Specialist" },
        { name: "Unity DOTS / ECS / Burst Compiler", level: "Advanced" },
        { name: "Multiplayer Networking (Photon Fusion, Netcode)", level: "Production" },
        { name: "Addressables & Memory Profiling (iOS / Android / Steam)", level: "Mastery" },
      ],
    },
    {
      title: "THREE.JS & WEBGL ECOSYSTEM",
      badge: "Interactive 3D Web",
      icon: Layers,
      color: "from-fuchsia-500 to-purple-600",
      description:
        "Building lightweight, photorealistic, sub-2-second load time 3D web environments that run flawlessly across iOS Safari, Chrome, and desktop browsers.",
      skills: [
        { name: "Three.js & React Three Fiber (R3F)", level: "Expert" },
        { name: "WebGL 2.0 & Custom GLSL Shaders", level: "Advanced" },
        { name: "Web Audio API Procedural Synthesizers", level: "Specialist" },
        { name: "Draco Mesh & KTX2/Basis Texture Compression", level: "Mastery" },
        { name: "Cannon-ES & Rapier 3D Web Physics", level: "Production" },
        { name: "WebXR Immersive Augmented Reality", level: "Advanced" },
      ],
    },
    {
      title: "MARKETER GROWTH & VIRAL 3D CONVERSION",
      badge: "Commercial Advantage",
      icon: TrendingUp,
      color: "from-amber-400 to-rose-500",
      description:
        "The rare combination of technical gameplay programming and growth marketing. Turning 3D assets into interactive acquisition machines that slash CPI and boost sales.",
      skills: [
        { name: "Interactive Playable Ads (Unity Playworks)", level: "Proven ROI" },
        { name: "High-Converting 3D E-Commerce Funnels", level: "+170% Uplift" },
        { name: "Steam Wishlist Launch Campaigns", level: "500K+ Organic" },
        { name: "Player Retention & Psychological Hooks", level: "Data-Driven" },
        { name: "Real-Time WebGL Analytics & Telemetry", level: "Precision" },
        { name: "Viral Interactive Social Storytelling", level: "Global Reach" },
      ],
    },
    {
      title: "ARTISTIC PIPELINE & CREATIVE DIRECTION",
      badge: "Aesthetic Polish",
      icon: Palette,
      color: "from-purple-400 to-indigo-500",
      description:
        "Bridging code and high-fashion aesthetics. Ensuring luxury visual fidelity, tactile feedback, and intuitive diegetic user interfaces.",
      skills: [
        { name: "Blender 3D Modeling & Retopology", level: "Advanced" },
        { name: "PBR Material Creation & Caustics", level: "Specialist" },
        { name: "Game UI/UX & Diegetic Interface Design", level: "Chic & Modern" },
        { name: "Particle Systems (Unity VFX Graph)", level: "Production" },
        { name: "Inverse Kinematics & Animation Blending", level: "Advanced" },
        { name: "Version Control: Perforce LFS & Git", level: "Enterprise" },
      ],
    },
  ];

  return (
    <section id="tech-mastery" className="py-20 px-4 max-w-7xl mx-auto relative z-10">
      <div className="flex flex-col items-center text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
          <Terminal className="w-3.5 h-3.5 text-purple-400" />
          <span>Full-Spectrum Capabilities</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight">
          ENGINE & TECHNICAL MASTERY
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mt-3">
          How <strong className="text-white">FARIA ABRAR</strong> fuses hardcore game engineering with high-converting marketing aesthetics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {pillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <div
              key={idx}
              onMouseEnter={() => soundFx.playHover()}
              className="bg-[#0d0b17]/90 border border-white/10 hover:border-rose-500/40 rounded-3xl p-6 sm:p-8 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(244,63,94,0.15)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${pillar.color} flex items-center justify-center text-white shadow-lg`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-zinc-300 border border-white/10">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-white mb-2 tracking-wide">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                  {pillar.description}
                </p>

                <div className="space-y-2.5 mb-6">
                  {pillar.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-black/40 border border-white/5 text-xs"
                    >
                      <div className="flex items-center gap-2 text-zinc-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 flex-shrink-0" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-md bg-white/5 text-rose-300">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                <span>Verified with International Benchmarks</span>
                <span className="text-rose-400">Production-Ready</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
