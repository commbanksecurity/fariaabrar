"use client";

import React, { useState } from "react";
import { PROJECTS_DATA, ProjectItem } from "@/data/projectsData";
import ProjectModal from "./ProjectModal";
import { Globe2, ArrowUpRight, Sparkles, Layers, Box, Cpu } from "lucide-react";
import { soundFx } from "@/utils/soundEffects";

export default function ProjectsSection() {
  const [filter, setFilter] = useState<"all" | "unity" | "threejs">("all");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (filter === "all") return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="py-20 px-4 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-semibold uppercase tracking-wider mb-3">
          <Globe2 className="w-3.5 h-3.5 text-rose-400" />
          <span>Global Portfolio & International Production</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight">
          INTERNATIONAL PROJECTS
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mt-3">
          Original commercial titles and viral WebGL digital campaigns engineered by{" "}
          <strong className="text-white">FARIA ABRAR</strong> for studios and brands across Europe, North America, and Asia.
        </p>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 p-1.5 bg-[#0e0c18] border border-white/10 rounded-2xl mt-8">
          <button
            onClick={() => {
              soundFx.playClick();
              setFilter("all");
            }}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              filter === "all"
                ? "bg-rose-500 text-white shadow-md shadow-rose-500/30"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            All Works ({PROJECTS_DATA.length})
          </button>
          <button
            onClick={() => {
              soundFx.playClick();
              setFilter("unity");
            }}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              filter === "unity"
                ? "bg-rose-500 text-white shadow-md shadow-rose-500/30"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <Box className="w-3.5 h-3.5" />
            <span>Unity 3D Games</span>
          </button>
          <button
            onClick={() => {
              soundFx.playClick();
              setFilter("threejs");
            }}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              filter === "threejs"
                ? "bg-rose-500 text-white shadow-md shadow-rose-500/30"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Three.js & WebGL</span>
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => {
              soundFx.playClick();
              setActiveProject(project);
            }}
            onMouseEnter={() => soundFx.playHover()}
            className="group relative bg-[#0d0b17]/90 rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-rose-500/50 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(244,63,94,0.22)] flex flex-col justify-between cursor-pointer overflow-hidden"
          >
            {/* Top accent glow */}
            <div
              className={`absolute -top-16 -right-16 w-44 h-44 rounded-full blur-[70px] pointer-events-none transition-opacity duration-300 group-hover:opacity-100 opacity-40 bg-gradient-to-br ${project.gradient}`}
            />

            <div>
              {/* Category & Location Badges */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-rose-500/15 text-rose-300 border border-rose-500/30">
                  {project.badge}
                </span>

                <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
                  <Globe2 className="w-3 h-3 text-purple-400" />
                  <span className="truncate max-w-[140px]">{project.location.split("&")[0]}</span>
                </div>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-xl sm:text-2xl font-display font-black text-white group-hover:text-rose-200 transition-colors leading-tight mb-2">
                {project.title}
              </h3>

              <div className="text-xs text-zinc-400 font-medium mb-3">
                Client: <strong className="text-white">{project.client}</strong>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 line-clamp-3 leading-relaxed mb-6">
                {project.summary}
              </p>

              {/* Main Metric Spotlight Card */}
              <div className="bg-black/50 border border-white/5 rounded-2xl p-3.5 mb-6 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-zinc-400 font-mono uppercase">
                    {project.metrics[0].label}
                  </div>
                  <div className="text-lg font-bold font-mono text-white bg-gradient-to-r from-rose-300 to-purple-200 bg-clip-text text-transparent">
                    {project.metrics[0].value}
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[10px] text-zinc-400 font-mono uppercase">
                    {project.metrics[1].label}
                  </div>
                  <div className="text-sm font-semibold font-mono text-emerald-300">
                    {project.metrics[1].value}
                  </div>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.technologies.slice(0, 4).map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/5 text-zinc-300 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono bg-white/5 text-zinc-400">
                    +{project.technologies.length - 4}
                  </span>
                )}
              </div>
            </div>

            {/* Card Action Link */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-rose-300 group-hover:text-white transition-colors">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-rose-400" />
                <span>Examine Technical Case Study</span>
              </span>
              <div className="w-8 h-8 rounded-xl bg-white/5 group-hover:bg-rose-500 flex items-center justify-center transition-all group-hover:text-white text-zinc-400 shadow-sm">
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Case Study Modal */}
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
