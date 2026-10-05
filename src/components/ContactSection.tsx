"use client";

import React, { useState } from "react";
import { Mail, Copy, Check, Send, Sparkles, Globe, Clock, ShieldCheck, Heart } from "lucide-react";
import { soundFx } from "@/utils/soundEffects";
import confetti from "canvas-confetti";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    studio: "",
    email: "",
    serviceType: "Unity 3D Game Development",
    budget: "$10k - $25k",
    timeline: "1 - 3 Months",
    message: "",
  });

  const email = "fariaabrar556@gmail.com";

  const handleCopy = () => {
    soundFx.playClick();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playChime();
    setSubmitted(true);
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#f43f5e", "#fb7185", "#c084fc", "#f59e0b"],
    });
  };

  return (
    <section id="contact" className="py-24 px-4 max-w-7xl mx-auto relative z-10">
      <div className="bg-gradient-to-b from-[#100d1e] to-[#07060d] border border-rose-500/25 rounded-3xl p-6 sm:p-10 lg:p-14 shadow-[0_24px_70px_rgba(244,63,94,0.15)] relative overflow-hidden">
        {/* Glow orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-start relative z-10">
          {/* Left Column: Direct Inquiries & Bio */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-rose-400" />
              <span>International Commissions Open</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight">
              COMMISSION FARIA ABRAR
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              Whether you are an independent game studio in Tokyo needing high-performance Unity 3D combat architecture, or a luxury brand in Paris seeking a viral Three.js WebGL campaign — let’s build an unforgettable interactive experience together.
            </p>

            {/* Direct Contact Card */}
            <div className="bg-black/50 border border-white/10 rounded-2xl p-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-mono text-zinc-400">Direct Inquiries</span>
                <span className="flex items-center gap-1.5 text-xs text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Available Now
                </span>
              </div>

              <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="flex items-center gap-2 overflow-hidden">
                  <Mail className="w-4 h-4 text-rose-400 flex-shrink-0" />
                  <a
                    href={`mailto:${email}?subject=Collaboration%20Inquiry%20for%20FARIA%20ABRAR`}
                    className="text-xs sm:text-sm font-mono text-white hover:text-rose-300 truncate"
                  >
                    {email}
                  </a>
                </div>

                <button
                  type="button"
                  onClick={handleCopy}
                  className={`flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                    copied
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                      : "bg-rose-500/20 text-rose-200 hover:bg-rose-500/30 border border-rose-500/30"
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-300" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-rose-300" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Timezones & Working Arrangement */}
            <div className="grid grid-cols-2 gap-3 text-xs text-zinc-300">
              <div className="bg-black/30 p-3.5 rounded-xl border border-white/5 flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white">Timezone Fluid</div>
                  <div className="text-[11px] text-zinc-400">EST / GMT / JST aligned</div>
                </div>
              </div>

              <div className="bg-black/30 p-3.5 rounded-xl border border-white/5 flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-rose-400 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white">Remote Contracts</div>
                  <div className="text-[11px] text-zinc-400">NDA & IP Protected</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7 bg-[#0b0914] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl">
            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-4 shadow-lg">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  INQUIRY TRANSMITTED
                </h3>
                <p className="text-zinc-300 text-sm max-w-md mb-6">
                  Thank you! Your project details have been recorded. <strong className="text-white">FARIA ABRAR</strong> typically reviews incoming client briefs and responds within 12 business hours.
                </p>
                <div className="text-xs text-zinc-400 font-mono">
                  Direct copy: <span className="text-rose-300">{email}</span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                      Your Name / Producer
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Elena Rostova"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-rose-500/60"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                      Studio or Brand
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Hyperion Games / Maison Digital"
                      value={formState.studio}
                      onChange={(e) => setFormState({ ...formState, studio: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-rose-500/60"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                    Your Business Email
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="producer@studio.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-rose-500/60"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                      Project Domain
                    </label>
                    <select
                      value={formState.serviceType}
                      onChange={(e) => setFormState({ ...formState, serviceType: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs focus:outline-none focus:border-rose-500/60"
                    >
                      <option className="bg-[#0e0c18]">Unity 3D Game Development</option>
                      <option className="bg-[#0e0c18]">Three.js / WebGL Campaign</option>
                      <option className="bg-[#0e0c18]">Playable Web Ads Pipeline</option>
                      <option className="bg-[#0e0c18]">Technical Shader / Optimization</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                      Estimated Budget
                    </label>
                    <select
                      value={formState.budget}
                      onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs focus:outline-none focus:border-rose-500/60"
                    >
                      <option className="bg-[#0e0c18]">$5k - $10k</option>
                      <option className="bg-[#0e0c18]">$10k - $25k</option>
                      <option className="bg-[#0e0c18]">$25k - $60k</option>
                      <option className="bg-[#0e0c18]">$60k+ Enterprise</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                      Target Delivery
                    </label>
                    <select
                      value={formState.timeline}
                      onChange={(e) => setFormState({ ...formState, timeline: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs focus:outline-none focus:border-rose-500/60"
                    >
                      <option className="bg-[#0e0c18]">Immediate (1-3 weeks)</option>
                      <option className="bg-[#0e0c18]">1 - 3 Months</option>
                      <option className="bg-[#0e0c18]">3 - 6 Months</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                    Brief Project Scope / Goals
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell FARIA ABRAR about the game vision, rendering requirements, or target KPIs..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-rose-500/60 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-rose-500 via-pink-600 to-purple-600 hover:from-rose-400 hover:to-purple-500 text-white font-bold text-sm shadow-[0_0_24px_rgba(244,63,94,0.35)] transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01]"
                >
                  <Send className="w-4 h-4" />
                  <span>TRANSMIT BRIEF TO FARIA ABRAR</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
