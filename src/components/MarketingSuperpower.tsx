"use client";

import React from "react";
import { Sparkles, TrendingUp, HeartHandshake, Zap, Target, Check, Award } from "lucide-react";
import { soundFx } from "@/utils/soundEffects";

export default function MarketingSuperpower() {
  const comparisons = [
    {
      feature: "First Impression & Hook",
      standard: "Cluttered tech demos with obscure mechanics",
      fariaApproach: "Hypnotic, chic, instant 3-second visual hook that captivates players immediately",
    },
    {
      feature: "Accessibility & Friction",
      standard: "Requires massive 10GB downloads before seeing value",
      fariaApproach: "Ultra-fast in-browser Three.js/WebGL playable teasers with sub-2s load time",
    },
    {
      feature: "Monetization & Conversion",
      standard: "Pushed as an afterthought at launch",
      fariaApproach: "Native gamified funnels, high-converting wishlists, and viral social sharing built in",
    },
    {
      feature: "Visual Tone & Aesthetic",
      standard: "Generic dark tech tropes without emotional elegance",
      fariaApproach: "Classy, high-fashion editorial polish, balanced color theory, and sensory satisfaction",
    },
  ];

  return (
    <section id="marketing-edge" className="py-20 px-4 max-w-7xl mx-auto relative z-10">
      <div className="bg-gradient-to-br from-[#120f20]/90 via-[#0d0a16]/90 to-[#07060d]/90 border border-rose-500/25 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_20px_60px_rgba(244,63,94,0.12)] relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-rose-400" />
              <span>The Unique Marketer + Game Dev Synthesis</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight leading-tight">
              WHERE HARDCORE GAME DEV MEETS VIRAL GROWTH
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base mt-4 leading-relaxed">
              Most developers only think about draw calls. Most marketers only think about ad copy.{" "}
              <strong className="text-white">FARIA ABRAR</strong> combines both worlds — uniting low-level Unity 3D & Three.js shader engineering with psychological conversion funnels that international studios and luxury brands rely on to dominate attention.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full lg:w-auto">
            <div className="bg-black/50 border border-rose-500/30 rounded-2xl p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-rose-500/20 text-rose-300 flex items-center justify-center font-bold text-xl">
                4.2x
              </div>
              <div>
                <div className="text-sm font-bold text-white">Higher Engagement Uplift</div>
                <div className="text-xs text-zinc-400">vs Static Video Campaigns</div>
              </div>
            </div>

            <div className="bg-black/50 border border-purple-500/30 rounded-2xl p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold text-xl">
                -44%
              </div>
              <div>
                <div className="text-sm font-bold text-white">Customer Acquisition Cost</div>
                <div className="text-xs text-zinc-400">via Playable WebGL Funnels</div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {comparisons.map((item, idx) => (
            <div
              key={idx}
              onMouseEnter={() => soundFx.playHover()}
              className="bg-black/40 border border-white/5 hover:border-rose-500/30 rounded-2xl p-5 transition-all flex flex-col justify-between"
            >
              <div className="text-xs font-mono uppercase tracking-wider text-rose-300 font-bold mb-3 flex items-center gap-2">
                <Target className="w-3.5 h-3.5 text-rose-400" />
                <span>{item.feature}</span>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm">
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 text-zinc-400 flex items-start gap-2">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>
                    <strong className="text-zinc-300">Standard Developer:</strong> {item.standard}
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/25 text-rose-100 flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>
                    <strong className="text-white">FARIA ABRAR Advantage:</strong> {item.fariaApproach}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Promise Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-rose-500/15 via-purple-500/10 to-transparent border border-rose-500/20 text-xs sm:text-sm">
          <div className="flex items-center gap-3">
            <Award className="w-5 h-5 text-rose-400 flex-shrink-0" />
            <span className="text-zinc-200">
              Trusted by commercial creative directors in <strong>Tokyo, Zurich, Paris, Geneva & London</strong>.
            </span>
          </div>

          <a
            href="#contact"
            className="px-4 py-2 rounded-xl bg-white text-zinc-950 font-bold text-xs hover:bg-rose-100 transition-colors shadow-md whitespace-nowrap cursor-pointer"
            onClick={() => soundFx.playClick()}
          >
            Inquire About Campaign Architecture
          </a>
        </div>
      </div>
    </section>
  );
}
