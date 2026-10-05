"use client";

import React from "react";
import { TESTIMONIALS_DATA, GLOBAL_CLIENT_LOCATIONS } from "@/data/projectsData";
import { Star, Globe2, Quote, CheckCircle, ShieldCheck } from "lucide-react";
import { soundFx } from "@/utils/soundEffects";

export default function GlobalClients() {
  return (
    <section id="testimonials" className="py-20 px-4 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-semibold uppercase tracking-wider mb-3">
          <Globe2 className="w-3.5 h-3.5 text-rose-400" />
          <span>Worldwide Client Footprint</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight">
          TRUSTED ACROSS 8+ GLOBAL TECH HUBS
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mt-3">
          Seamless remote collaboration across European, Asian, and American time zones delivering AAA-grade Unity 3D & Three.js productions.
        </p>
      </div>

      {/* Global Cities Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 mb-14">
        {GLOBAL_CLIENT_LOCATIONS.map((loc, idx) => (
          <div
            key={idx}
            className="bg-[#0e0c18] border border-white/5 hover:border-rose-500/30 rounded-2xl p-3 text-center transition-all hover:-translate-y-1"
          >
            <div className="text-xl mb-1">{loc.flag}</div>
            <div className="font-bold text-xs text-white">{loc.city}</div>
            <div className="text-[10px] text-zinc-400 font-mono">{loc.country}</div>
          </div>
        ))}
      </div>

      {/* Client Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {TESTIMONIALS_DATA.map((t, idx) => (
          <div
            key={idx}
            onMouseEnter={() => soundFx.playHover()}
            className="bg-[#0c0a16]/90 border border-rose-500/15 hover:border-rose-500/40 rounded-3xl p-6 sm:p-7 shadow-lg transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
          >
            <Quote className="absolute top-5 right-5 w-10 h-10 text-rose-500/10 pointer-events-none" />

            <div>
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>

            {/* Author Info */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <div>
                <div className="font-bold text-sm text-white">{t.author}</div>
                <div className="text-xs text-rose-300 font-medium">{t.role}</div>
                <div className="text-[11px] text-zinc-400">
                  {t.company} • <span className="text-zinc-300">{t.location}</span>
                </div>
              </div>

              <div className="w-8 h-8 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center border border-emerald-500/30" title="Verified International Contract">
                <CheckCircle className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
