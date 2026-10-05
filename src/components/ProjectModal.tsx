"use client";

import React, { useEffect } from "react";
import { X, Globe2, Cpu, BarChart3, ShieldCheck, Sparkles, ExternalLink, Mail } from "lucide-react";
import { ProjectItem } from "@/data/projectsData";
import { soundFx } from "@/utils/soundEffects";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#0d0b16] border border-rose-500/30 rounded-3xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(244,63,94,0.25)] text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            soundFx.playClick();
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-rose-500/20 text-zinc-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
          title="Close Modal (Esc)"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Tags */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/20 text-rose-300 border border-rose-500/30">
            {project.badge}
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-purple-500/15 text-purple-200 border border-purple-500/25">
            <Globe2 className="w-3.5 h-3.5 text-purple-300" />
            <span>{project.location}</span>
          </span>
          <span className="text-xs text-zinc-400 font-mono">
            {project.year} • Client: <strong className="text-white">{project.client}</strong>
          </span>
        </div>

        {/* Project Title */}
        <h2 className="text-2xl sm:text-3xl font-display font-black text-white tracking-wide mb-2">
          {project.title}
        </h2>
        <p className="text-sm sm:text-base text-rose-200/90 font-medium mb-6">
          {project.tagline}
        </p>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {project.metrics.map((m, idx) => (
            <div
              key={idx}
              className="bg-black/40 border border-white/10 rounded-2xl p-3.5 flex flex-col justify-between"
            >
              <div className="text-[11px] text-zinc-400 uppercase font-mono">{m.label}</div>
              <div className="text-lg sm:text-xl font-bold font-mono text-white mt-1 bg-gradient-to-r from-rose-300 to-purple-200 bg-clip-text text-transparent">
                {m.value}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Description */}
        <div className="mb-6 bg-white/[0.02] border border-white/5 rounded-2xl p-5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span>Executive Overview & Client Scope</span>
          </h3>
          <p className="text-sm text-zinc-300 leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Technical Architecture & Challenges Solved */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-black/30 border border-rose-500/15 rounded-2xl p-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-rose-300 mb-2.5 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-rose-400" />
              <span>Technical Engineering Solution</span>
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {project.challengesSolved}
            </p>
          </div>

          <div className="bg-black/30 border border-purple-500/15 rounded-2xl p-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-purple-300 mb-2.5 flex items-center gap-1.5">
              <BarChart3 className="w-4 h-4 text-purple-400" />
              <span>Marketer Growth & Conversion Impact</span>
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {project.marketingImpact}
            </p>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="mb-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Core Deliverables & Architectural Modules</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.features.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 text-xs text-zinc-300 bg-white/[0.03] p-3 rounded-xl border border-white/5"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 flex-shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack Pills */}
        <div className="mb-8">
          <div className="text-xs font-mono uppercase text-zinc-400 mb-2">Technologies Deployed</div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-zinc-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom CTA within modal */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-zinc-400">
            Role: <strong className="text-white">{project.role}</strong>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="mailto:fariaabrar556@gmail.com?subject=Inquiry%20regarding%20Case%20Study:%20"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-400 hover:to-pink-500 text-white font-semibold text-xs transition-all shadow-md"
              onClick={() => soundFx.playClick()}
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Discuss Similar Architecture with FARIA ABRAR</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
