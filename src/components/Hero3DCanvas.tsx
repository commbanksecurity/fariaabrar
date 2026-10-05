"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Sparkles, Eye, RefreshCw, Zap } from "lucide-react";
import { soundFx } from "@/utils/soundEffects";

export default function Hero3DCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [wireframe, setWireframe] = useState(false);
  const [paletteIndex, setPaletteIndex] = useState(0);
  const [particleCount] = useState(480);
  const [fps, setFps] = useState(60);

  const palettes = [
    { name: "Rose Gold", primary: 0xf43f5e, secondary: 0xfb7185, light: 0xffd1dc },
    { name: "Cyber Fuchsia", primary: 0xd946ef, secondary: 0xa855f7, light: 0xf0abfc },
    { name: "Champagne Amber", primary: 0xf59e0b, secondary: 0xfbbf24, light: 0xfef3c7 },
    { name: "Neon Emerald", primary: 0x10b981, secondary: 0x34d399, light: 0xa7f3d0 },
  ];

  // Store references to mutable Three.js items
  const threeState = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    mesh: THREE.Mesh;
    wireMesh: THREE.LineSegments;
    particleSystem: THREE.Points;
    pointLight: THREE.PointLight;
    reqId: number;
    targetRotation: { x: number; y: number };
  } | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene
    const scene = new THREE.Scene();

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5.2;

    // 3. Renderer with antialiasing and transparent background
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 4. Geometry & Core Material (Icosahedron / Polyhedron for chic gem-like game asset)
    const geometry = new THREE.IcosahedronGeometry(1.4, 1);
    
    // Shader/Physical material with glossy specular reflection
    const currentTheme = palettes[paletteIndex];
    const material = new THREE.MeshPhysicalMaterial({
      color: currentTheme.primary,
      emissive: currentTheme.secondary,
      emissiveIntensity: 0.28,
      roughness: 0.15,
      metalness: 0.85,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      transmission: 0.35,
      ior: 1.52,
      thickness: 1.2,
      flatShading: true,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Wireframe overlay for technical game developer aesthetic
    const wireGeo = new THREE.WireframeGeometry(geometry);
    const wireMat = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.25,
      linewidth: 1,
    });
    const wireMesh = new THREE.LineSegments(wireGeo, wireMat);
    mesh.add(wireMesh);

    // 5. Floating Celestial Game Particles
    const particleGeo = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);
    const scaleArray = new Float32Array(particleCount);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const radius = 2.0 + Math.random() * 3.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      posArray[i] = radius * Math.sin(phi) * Math.cos(theta);
      posArray[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      posArray[i + 2] = radius * Math.cos(phi);
      scaleArray[i / 3] = Math.random() * 0.06 + 0.02;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(posArray, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      color: currentTheme.light,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // 6. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(currentTheme.primary, 3.5, 50);
    pointLight.position.set(3, 4, 3);
    scene.add(pointLight);

    const backLight = new THREE.PointLight(0xa855f7, 2.5, 50);
    backLight.position.set(-3, -3, -2);
    scene.add(backLight);

    // 7. Interactive Mouse Tracking
    const targetRotation = { x: 0, y: 0 };
    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotation.y = x * 0.8;
      targetRotation.x = y * 0.5;
    };

    container.addEventListener("mousemove", handleMouseMove);

    // 8. Animation Loop
    let lastTime = performance.now();
    let frameCount = 0;
    let fpsTimer = 0;

    const animate = (time: number) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      // FPS counter calculation
      frameCount++;
      fpsTimer += delta;
      if (fpsTimer >= 1) {
        setFps(Math.round(frameCount / fpsTimer));
        frameCount = 0;
        fpsTimer = 0;
      }

      // Smooth idle rotation + cursor parallax
      mesh.rotation.y += (targetRotation.y - mesh.rotation.y) * 0.05 + 0.005;
      mesh.rotation.x += (targetRotation.x - mesh.rotation.x) * 0.05 + 0.003;
      mesh.rotation.z += 0.002;

      // Particle constellation rotation
      particleSystem.rotation.y -= 0.0018;
      particleSystem.rotation.x += 0.0012;

      // Subtle breath pulsation
      const breath = Math.sin(time * 0.002) * 0.04 + 1.0;
      mesh.scale.set(breath, breath, breath);

      renderer.render(scene, camera);
      threeState.current!.reqId = requestAnimationFrame(animate);
    };

    threeState.current = {
      scene,
      camera,
      renderer,
      mesh,
      wireMesh,
      particleSystem,
      pointLight,
      reqId: requestAnimationFrame(animate),
      targetRotation,
    };

    // Resize Handler
    const handleResize = () => {
      if (!container || !threeState.current) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", handleMouseMove);
      if (threeState.current) {
        cancelAnimationFrame(threeState.current.reqId);
        renderer.dispose();
        geometry.dispose();
        material.dispose();
        wireGeo.dispose();
        wireMat.dispose();
        particleGeo.dispose();
        particleMat.dispose();
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      }
    };
  }, []);

  // Update Material Color when Palette changes
  useEffect(() => {
    if (!threeState.current) return;
    const { mesh, particleSystem, pointLight } = threeState.current;
    const theme = palettes[paletteIndex];

    const mat = mesh.material as THREE.MeshPhysicalMaterial;
    mat.color.setHex(theme.primary);
    mat.emissive.setHex(theme.secondary);

    const pMat = particleSystem.material as THREE.PointsMaterial;
    pMat.color.setHex(theme.light);

    pointLight.color.setHex(theme.primary);
  }, [paletteIndex]);

  // Wireframe toggle
  useEffect(() => {
    if (!threeState.current) return;
    const { mesh, wireMesh } = threeState.current;
    const mat = mesh.material as THREE.MeshPhysicalMaterial;
    mat.wireframe = wireframe;
    wireMesh.visible = !wireframe;
  }, [wireframe]);

  const handleCyclePalette = () => {
    soundFx.playClick();
    setPaletteIndex((prev) => (prev + 1) % palettes.length);
  };

  const handleToggleWireframe = () => {
    soundFx.playClick();
    setWireframe((prev) => !prev);
  };

  const handleImpulseBurst = () => {
    soundFx.playBurst();
    if (!threeState.current) return;
    const { mesh } = threeState.current;
    mesh.scale.set(1.25, 1.25, 1.25);
    setTimeout(() => {
      mesh.scale.set(1.0, 1.0, 1.0);
    }, 200);
  };

  return (
    <div className="relative w-full h-[440px] sm:h-[520px] lg:h-[600px] flex items-center justify-center">
      {/* 3D Canvas Mount */}
      <div
        ref={mountRef}
        onClick={handleImpulseBurst}
        className="w-full h-full cursor-grab active:cursor-grabbing select-none"
        title="Click to trigger particle pulse & rotate"
      />

      {/* Floating Interactive Controls (Tech & Aesthetic Touch) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-4 z-20 flex items-center gap-2 bg-[#0e0c18]/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-rose-500/25 shadow-lg text-[11px]">
        {/* Shaders Palette Picker */}
        <button
          onClick={handleCyclePalette}
          className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-rose-500/15 hover:bg-rose-500/25 text-rose-200 transition-colors font-semibold cursor-pointer"
          title="Cycle Shader Palette"
        >
          <Sparkles className="w-3 h-3 text-rose-400" />
          <span>{palettes[paletteIndex].name}</span>
        </button>

        {/* Wireframe vs PBR */}
        <button
          onClick={handleToggleWireframe}
          className={`flex items-center gap-1 px-2 py-1 rounded-lg transition-colors cursor-pointer ${
            wireframe
              ? "bg-purple-500/30 text-purple-200 border border-purple-500/40"
              : "bg-white/5 hover:bg-white/10 text-zinc-300"
          }`}
          title="Toggle Wireframe Shading"
        >
          <Eye className="w-3 h-3 text-purple-300" />
          <span>{wireframe ? "Wireframe" : "PBR Gloss"}</span>
        </button>

        {/* Shockwave Impulse */}
        <button
          onClick={handleImpulseBurst}
          className="flex items-center gap-1 px-2 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-amber-300 transition-colors cursor-pointer"
          title="Trigger Particle Shockwave"
        >
          <Zap className="w-3 h-3 text-amber-400" />
          <span className="hidden sm:inline">Pulse</span>
        </button>

        {/* WebGL Performance Badge */}
        <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 font-mono text-[10px]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>{fps} FPS</span>
        </div>
      </div>

      {/* Interactive Hint */}
      <div className="absolute top-4 right-4 z-10 pointer-events-none hidden sm:flex items-center gap-1.5 text-[10px] text-zinc-400 font-mono bg-black/40 px-2.5 py-1 rounded-full border border-white/5">
        <RefreshCw className="w-2.5 h-2.5 animate-spin text-rose-400" />
        <span>Three.js WebGL Core • Interactive 3D</span>
      </div>
    </div>
  );
}
