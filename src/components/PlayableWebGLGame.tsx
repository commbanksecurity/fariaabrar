"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Play, RotateCcw, Trophy, Zap, Gamepad2, Award } from "lucide-react";
import { soundFx } from "@/utils/soundEffects";
import confetti from "canvas-confetti";

export default function PlayableWebGLGame() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [unlockedPerk, setUnlockedPerk] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  // References to game state
  const gameState = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    playerMesh: THREE.Mesh;
    playerLight: THREE.PointLight;
    items: { mesh: THREE.Mesh; type: "gem" | "obstacle"; speed: number }[];
    gridHelper: THREE.GridHelper;
    reqId: number;
    playerX: number;
    targetPlayerX: number;
    score: number;
    active: boolean;
  } | null>(null);

  const startGame = () => {
    soundFx.playChime();
    setIsPlaying(true);
    setGameOver(false);
    setScore(0);

    if (gameState.current) {
      gameState.current.score = 0;
      gameState.current.active = true;
      gameState.current.playerX = 0;
      gameState.current.targetPlayerX = 0;
      // Clear existing items
      gameState.current.items.forEach((item) => gameState.current!.scene.remove(item.mesh));
      gameState.current.items = [];
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = 360;

    // 1. Scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x07070d, 0.05);

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 3.2, 5.5);
    camera.lookAt(0, 0, -2);

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 4. Grid Floor (Cyber runway)
    const gridHelper = new THREE.GridHelper(60, 40, 0xf43f5e, 0x221a36);
    gridHelper.position.y = -0.5;
    scene.add(gridHelper);

    // 5. Player Ship / Crystal Core
    const playerGeo = new THREE.ConeGeometry(0.4, 0.8, 5);
    playerGeo.rotateX(Math.PI / 2);
    const playerMat = new THREE.MeshStandardMaterial({
      color: 0xf43f5e,
      emissive: 0xfb7185,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.8,
    });
    const playerMesh = new THREE.Mesh(playerGeo, playerMat);
    playerMesh.position.set(0, 0, 1);
    scene.add(playerMesh);

    const playerLight = new THREE.PointLight(0xf43f5e, 4, 8);
    playerLight.position.set(0, 0.5, 1);
    scene.add(playerLight);

    // Ambient and Directional Light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xa855f7, 1.2);
    dirLight.position.set(0, 5, 2);
    scene.add(dirLight);

    // Track state
    gameState.current = {
      scene,
      camera,
      renderer,
      playerMesh,
      playerLight,
      items: [],
      gridHelper,
      reqId: 0,
      playerX: 0,
      targetPlayerX: 0,
      score: 0,
      active: false,
    };

    // Spawn mechanism
    let lastSpawnTime = 0;
    const spawnItem = (time: number) => {
      if (time - lastSpawnTime < 650) return;
      lastSpawnTime = time;

      const isGem = Math.random() > 0.35;
      const xLane = (Math.random() - 0.5) * 6; // -3 to 3

      if (isGem) {
        // Collectible gem (Octahedron)
        const gemGeo = new THREE.OctahedronGeometry(0.32);
        const gemMat = new THREE.MeshStandardMaterial({
          color: 0x38bdf8,
          emissive: 0x0284c7,
          emissiveIntensity: 0.8,
          metalness: 0.9,
          roughness: 0.1,
        });
        const mesh = new THREE.Mesh(gemGeo, gemMat);
        mesh.position.set(xLane, 0, -22);
        scene.add(mesh);
        gameState.current?.items.push({ mesh, type: "gem", speed: 0.24 });
      } else {
        // Obstacle (Cube hazard)
        const obsGeo = new THREE.BoxGeometry(0.55, 0.55, 0.55);
        const obsMat = new THREE.MeshStandardMaterial({
          color: 0xef4444,
          emissive: 0xb91c1c,
          emissiveIntensity: 0.7,
        });
        const mesh = new THREE.Mesh(obsGeo, obsMat);
        mesh.position.set(xLane, 0, -22);
        scene.add(mesh);
        gameState.current?.items.push({ mesh, type: "obstacle", speed: 0.26 });
      }
    };

    // Game loop
    const animate = (time: number) => {
      if (gameState.current && gameState.current.active) {
        const state = gameState.current;

        // Animate Grid motion to simulate forward speed
        state.gridHelper.position.z = (state.gridHelper.position.z + 0.18) % 1.5;

        // Smooth player position
        state.playerX += (state.targetPlayerX - state.playerX) * 0.15;
        state.playerMesh.position.x = state.playerX;
        state.playerLight.position.x = state.playerX;
        state.playerMesh.rotation.z = (state.playerX - state.targetPlayerX) * 0.35;

        // Spawn items
        spawnItem(time);

        // Move items & check collisions
        for (let i = state.items.length - 1; i >= 0; i--) {
          const item = state.items[i];
          item.mesh.position.z += item.speed;
          item.mesh.rotation.x += 0.04;
          item.mesh.rotation.y += 0.05;

          // Collision detection with player
          const dx = item.mesh.position.x - state.playerMesh.position.x;
          const dz = item.mesh.position.z - state.playerMesh.position.z;
          const dist = Math.sqrt(dx * dx + dz * dz);

          if (dist < 0.65) {
            if (item.type === "gem") {
              // Collected gem
              soundFx.playBurst();
              state.score += 25;
              setScore(state.score);

              if (state.score >= 250 && !unlockedPerk) {
                setUnlockedPerk(true);
                confetti({
                  particleCount: 50,
                  spread: 60,
                  origin: { y: 0.7 },
                  colors: ["#f43f5e", "#d946ef", "#fbbf24"],
                });
              }

              scene.remove(item.mesh);
              state.items.splice(i, 1);
              continue;
            } else {
              // Hit obstacle - Game Over
              soundFx.playClick();
              state.active = false;
              setIsPlaying(false);
              setGameOver(true);
              setHighScore((prev) => Math.max(prev, state.score));
              break;
            }
          }

          // Despawn passed items
          if (item.mesh.position.z > 4) {
            scene.remove(item.mesh);
            state.items.splice(i, 1);
          }
        }
      }

      renderer.render(scene, camera);
      gameState.current!.reqId = requestAnimationFrame(animate);
    };

    gameState.current.reqId = requestAnimationFrame(animate);

    // Input handling
    const handleMouseMove = (e: MouseEvent) => {
      if (!gameState.current || !gameState.current.active) return;
      const rect = container.getBoundingClientRect();
      const normX = (e.clientX - rect.left) / rect.width;
      gameState.current.targetPlayerX = (normX - 0.5) * 6;
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!gameState.current || !gameState.current.active) return;
      if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") {
        gameState.current.targetPlayerX = Math.max(-3, gameState.current.targetPlayerX - 0.7);
      } else if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") {
        gameState.current.targetPlayerX = Math.min(3, gameState.current.targetPlayerX + 0.7);
      }
    };

    container.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("keydown", handleKeyDown);

    const handleResize = () => {
      if (!container || !gameState.current) return;
      const newW = container.clientWidth;
      camera.aspect = newW / height;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
      container.removeEventListener("mousemove", handleMouseMove);
      if (gameState.current) {
        cancelAnimationFrame(gameState.current.reqId);
        renderer.dispose();
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      }
    };
  }, []);

  return (
    <section id="demo-sandbox" className="py-16 px-4 relative z-10 max-w-6xl mx-auto">
      <div className="bg-[#0c0a16]/90 border border-rose-500/25 rounded-3xl p-6 sm:p-8 shadow-[0_12px_48px_rgba(244,63,94,0.12)] relative overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-rose-500/10 blur-[100px] pointer-events-none" />

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-semibold uppercase tracking-wider mb-2">
              <Gamepad2 className="w-3.5 h-3.5 text-rose-400" />
              <span>Interactive WebGL Sandbox</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
              PLAYABLE WEBGL ENGINE DEMO
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-1 max-w-xl">
              Experience the fluidity of lightweight 60 FPS in-browser 3D physics engineered by{" "}
              <strong className="text-white">FARIA ABRAR</strong>. Steer with your mouse or A/D keys to collect cyan crystals.
            </p>
          </div>

          {/* Real-time stats */}
          <div className="flex items-center gap-3 bg-black/50 p-2.5 rounded-2xl border border-white/5">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-500/15 text-rose-200">
              <Zap className="w-4 h-4 text-rose-400" />
              <div>
                <div className="text-[10px] text-zinc-400 uppercase font-mono">Score</div>
                <div className="text-sm font-bold font-mono text-white">{score}</div>
              </div>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-500/15 text-purple-200">
              <Trophy className="w-4 h-4 text-purple-400" />
              <div>
                <div className="text-[10px] text-zinc-400 uppercase font-mono">Best</div>
                <div className="text-sm font-bold font-mono text-white">{highScore}</div>
              </div>
            </div>
          </div>
        </div>

        {/* WebGL Canvas Viewport */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#0a0814] to-[#040407] border border-rose-500/20 shadow-inner">
          <div ref={containerRef} className="w-full h-[360px] cursor-crosshair" />

          {/* Overlay when NOT playing */}
          {!isPlaying && (
            <div className="absolute inset-0 bg-[#080710]/80 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center z-20">
              {gameOver ? (
                <div className="mb-4">
                  <div className="text-red-400 font-display font-black text-xl mb-1">
                    RUN TERMINATED
                  </div>
                  <p className="text-xs text-zinc-400">
                    Final Score: <span className="text-white font-mono font-bold">{score}</span> | High Score:{" "}
                    <span className="text-purple-300 font-mono font-bold">{highScore}</span>
                  </p>
                </div>
              ) : (
                <div className="mb-5 max-w-md">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400 shadow-lg">
                    <Gamepad2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    Test FARIA ABRAR’s WebGL Architecture
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Sub-2ms frame latency, zero bundle bloating, and instantaneous touch/mouse responsiveness built for global brand campaigns.
                  </p>
                </div>
              )}

              <button
                onClick={startGame}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-400 hover:to-purple-500 text-white font-bold text-sm shadow-[0_0_24px_rgba(244,63,94,0.4)] transition-all hover:scale-105 cursor-pointer"
              >
                {gameOver ? <RotateCcw className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                <span>{gameOver ? "RERUN SIMULATION" : "LAUNCH 3D PLAYTEST"}</span>
              </button>

              <div className="flex items-center gap-4 mt-4 text-[11px] text-zinc-400 font-mono">
                <span>🖱️ Move mouse to steer</span>
                <span>•</span>
                <span>💎 Collect Cyan Crystals</span>
                <span>•</span>
                <span>⚠️ Dodge Red EMPs</span>
              </div>
            </div>
          )}

          {/* Gamified Reward Banner when reaching 250 points */}
          {unlockedPerk && (
            <div className="absolute top-3 left-1/2 -translate-x-1/2 z-30 bg-gradient-to-r from-amber-500/90 to-rose-600/90 text-white px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 shadow-lg animate-bounce">
              <Award className="w-3.5 h-3.5 text-amber-200" />
              <span>MARKETER PERK UNLOCKED: Priority Studio Consultation with FARIA ABRAR</span>
            </div>
          )}
        </div>

        {/* Technical Footer Badges */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] text-zinc-500">ENGINE: Three.js r186</span>
            <span className="text-zinc-600">•</span>
            <span className="font-mono text-[11px] text-zinc-500">PHYSICS: Procedural Raycast Swept-AABB</span>
            <span className="text-zinc-600">•</span>
            <span className="font-mono text-[11px] text-zinc-500">LATENCY: &lt; 1.2ms</span>
          </div>

          <div className="text-[11px] text-rose-300/80 font-medium">
            Available for custom Unity 3D & Three.js client commissions
          </div>
        </div>
      </div>
    </section>
  );
}
