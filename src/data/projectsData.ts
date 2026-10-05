export interface ProjectItem {
  id: string;
  title: string;
  category: "unity" | "threejs" | "hybrid";
  client: string;
  location: string;
  role: string;
  year: string;
  tagline: string;
  summary: string;
  metrics: { label: string; value: string }[];
  technologies: string[];
  features: string[];
  challengesSolved: string;
  marketingImpact: string;
  gradient: string;
  badge: string;
  colorHex: string;
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "valkyrie-veil-of-chronos",
    title: "VALKYRIE: VEIL OF CHRONOS",
    category: "unity",
    client: "Aethelgard Interactive",
    location: "Zurich, Switzerland & Tokyo, Japan",
    role: "Lead Unity 3D Developer & Technical Systems Architect",
    year: "2024 - 2025",
    tagline: "Atmospheric fast-action dark fantasy RPG engineered with custom HLSL compute shaders & 60 FPS combat.",
    summary:
      "Commissioned by a Swiss-Japanese game studio to build the core combat engine, boss state machines, and high-performance rendering pipeline for a premium PC/Console title. Built with Unity 3D Universal Render Pipeline (URP), utilizing custom GPU instancing to render dynamic mystical environments with zero frame drops.",
    metrics: [
      { label: "Community Wishlists", value: "520,000+" },
      { label: "Sustained Framerate", value: "60+ FPS on 4K" },
      { label: "Steam Festival Rating", value: "96.4% Positive" },
      { label: "Press Features", value: "IGN Japan, PC Gamer" },
    ],
    technologies: [
      "Unity 3D",
      "C# (.NET 8)",
      "Universal Render Pipeline (URP)",
      "HLSL Compute Shaders",
      "FMOD Studio Audio",
      "DOTS / C# Job System",
      "Cinemachine",
    ],
    features: [
      "Custom combo combat state machine with dynamic hit-stop and weapon inertia physics",
      "Volumetric dynamic atmospheric fog shader written in raw HLSL with temporal reprojection",
      "Boss AI with adaptive threat-weighting and real-time behavioral telegraphing",
      "Multi-platform optimization reducing memory footprint by 38% for seamless console certification",
    ],
    challengesSolved:
      "The client struggled with heavy GPU overhead during multi-entity spell VFX battles. FARIA ABRAR re-architected the particle renderer into custom compute buffers and GPU vertex animation textures, achieving rock-solid 60 FPS across both PlayStation 5 and mid-range PC hardware.",
    marketingImpact:
      "Engineered a lightweight playable demo teaser deployed for Tokyo Game Show and Steam Next Fest that yielded over 180,000 wishlist conversions in 72 hours, ranking in the top 3% of global festival releases.",
    gradient: "from-rose-500/20 via-pink-600/10 to-purple-900/20",
    badge: "AAA Console & PC",
    colorHex: "#f43f5e",
  },
  {
    id: "aurora-velocity-webgl",
    title: "AURORA VELOCITY: ZERO-G RACER",
    category: "threejs",
    client: "RedShift Motorsports & Swiss Chrono",
    location: "Geneva, Switzerland & Berlin, Germany",
    role: "Lead Three.js Creative Technologist & WebGL Engineer",
    year: "2024",
    tagline: "Ultra-fast in-browser 3D anti-gravity racing tournament delivering 120 FPS WebGL action with zero installs.",
    summary:
      "A flagship interactive WebGL marketing campaign designed for a luxury Swiss watchmaker and electric motorsport brand. FARIA ABRAR developed a bespoke Three.js rendering pipeline featuring procedural neon racetracks, realistic vehicle aerodynamics, custom bloom post-processing, and instant web accessibility.",
    metrics: [
      { label: "Unique WebGL Sessions", value: "3.4 Million" },
      { label: "Avg Session Duration", value: "4m 42s" },
      { label: "Mobile Browser Load", value: "1.4s Cold Start" },
      { label: "Campaign Conversion", value: "+218% Signups" },
    ],
    technologies: [
      "Three.js",
      "WebGL 2.0",
      "GLSL Custom Shaders",
      "Cannon-ES Physics",
      "Web Audio API Synthesizer",
      "WebSockets Real-time Leaderboard",
      "Vite & TypeScript",
    ],
    features: [
      "Full custom procedural race track generator with interactive banking curves and speed boosters",
      "Custom GLSL chromatic aberration and motion-blur post-processing passes running at 60 FPS on mobile devices",
      "Spatial sound engine synthesizing Doppler engine roars dynamically via Web Audio API",
      "Global asynchronous time-attack ghost racing system with cheat-resistant cryptographic hashing",
    ],
    challengesSolved:
      "Browser memory caps and varied mobile GPU drivers caused WebGL context crashes on low-end iOS and Android devices. FARIA ABRAR wrote a dynamic level-of-detail (LOD) manager and procedural geometry pool that maintains constant 60 FPS without exceeding 45MB VRAM.",
    marketingImpact:
      "Transformed an ordinary product press release into a viral global time-attack challenge that drew 3.4M players across Europe, North America, and Japan, smashing previous brand engagement benchmarks by 310%.",
    gradient: "from-fuchsia-500/20 via-purple-600/10 to-indigo-950/20",
    badge: "Viral WebGL Experience",
    colorHex: "#d946ef",
  },
  {
    id: "elysium-luxe-metaverse",
    title: "ELYSIUM HAUTE COUTURE 3D ATELIER",
    category: "threejs",
    client: "Maison Privée & L'Étoile Paris",
    location: "Paris, France & Milan, Italy",
    role: "Lead 3D Interactive Web Developer & Experience Architect",
    year: "2024",
    tagline: "Photorealistic 3D virtual runway & high-jewelry configurator with real-time PBR caustics and gamified quests.",
    summary:
      "An exclusive digital salon for Paris Fashion Week blending interactive 3D luxury retail with gamified discovery. FARIA ABRAR engineered a WebGL Three.js showroom with physical micro-facet cloth shaders, interactive diamond refractions, and a VIP mini-quest that unlocked private runway invites.",
    metrics: [
      { label: "E-Commerce Uplift", value: "+174% Conversion" },
      { label: "VIP Pre-Orders", value: "€3.8M Attributed" },
      { label: "Avg Items Configured", value: "8.6 per Visitor" },
      { label: "FWA of the Day", value: "Award Winner" },
    ],
    technologies: [
      "Three.js",
      "Custom PBR Shaders",
      "GLTF Draco Compression",
      "WebXR Immersive AR",
      "PostProcessing.js",
      "Next.js & Tailwind CSS",
    ],
    features: [
      "Physically accurate gem dispersion and caustics rendering simulated directly in WebGL fragment shaders",
      "Interactive silk and velvet cloth draping with GPU vertex displacement",
      "Seamless AR quick-look preview enabling clients to project 3D luxury pieces onto their personal physical space",
      "Gamified VIP exploration quest with dynamic camera choreographies and ambient orchestral audio",
    ],
    challengesSolved:
      "Luxury stakeholders refused to compromise on photorealism, yet 3D assets exceeded 120MB. FARIA ABRAR deployed custom Draco mesh compression, KTX2/Basis Universal texture transcoding, and streaming level-of-detail, slashing total payload from 120MB to 6.8MB with near-instant streaming.",
    marketingImpact:
      "Achieved €3.8 million in direct pre-orders during Paris Fashion Week and earned coverage across Vogue Business, Wired Europe, and the FWA recognition board.",
    gradient: "from-amber-400/20 via-rose-500/10 to-stone-900/20",
    badge: "Luxury 3D Retail",
    colorHex: "#f59e0b",
  },
  {
    id: "neon-protocol-tactical-drift",
    title: "CYBER PROTOCOL: TACTICAL NEXUS",
    category: "unity",
    client: "Hyperion Interactive & Apex Global",
    location: "Austin, Texas & London, United Kingdom",
    role: "Senior Unity 3D Gameplay & Network Engineer",
    year: "2023 - 2024",
    tagline: "Cross-platform multiplayer cyberpunk squad strategy game with high-concurrency DOTS/ECS architecture.",
    summary:
      "Commissioned by an international publisher to build the cross-platform multiplayer engine and playable ad pipeline for a competitive cyberpunk tactical title. Engineered using Unity 3D with DOTS/ECS to simulate up to 4,000 units simultaneously with deterministic rollback networking.",
    metrics: [
      { label: "Total Downloads", value: "1.8 Million+" },
      { label: "UA Cost Reduction", value: "-44% CPI" },
      { label: "Day-30 Retention", value: "28.5% (Top Tier)" },
      { label: "App Store Rating", value: "4.8 / 5.0 Stars" },
    ],
    technologies: [
      "Unity 3D",
      "DOTS / ECS / Burst Compiler",
      "Photon Fusion Multiplayer",
      "HLSL Cyberpunk Shaders",
      "Addressables Cloud Hosting",
      "Playworks Playable Ads",
    ],
    features: [
      "Deterministic lockstep prediction engine ensuring lag-free synchronous multiplayer across mobile & PC",
      "Custom cyberpunk volumetric rain, neon puddles, and dynamic laser diffraction shader passes",
      "Automated Unity Playworks build pipeline converting core 3D gameplay into lightweight 4MB playable web ads",
      "Adaptive touch & controller input abstraction layer with tactile haptic feedback",
    ],
    challengesSolved:
      "Multiplayer mobile matches suffered from desyncs on varying 4G/5G connections. FARIA ABRAR built a custom client-side prediction and rollback algorithm with delta-compression snapshots that reduced latency jitter to under 30ms worldwide.",
    marketingImpact:
      "FARIA ABRAR personally authored high-converting interactive playable 3D ads that slashed Cost-Per-Install by 44% compared to standard video ads, directly driving over 800,000 organic player acquisitions.",
    gradient: "from-violet-500/20 via-fuchsia-600/10 to-slate-900/20",
    badge: "Cross-Platform Multiplayer",
    colorHex: "#a855f7",
  },
  {
    id: "stellar-harvest-orbital-sim",
    title: "STELLAR HARVEST: DEEP SPACE 3D",
    category: "unity",
    client: "Orbital Echo Studios",
    location: "Stockholm, Sweden & Vancouver, Canada",
    role: "Unity 3D Systems & Physics Simulation Engineer",
    year: "2023",
    tagline: "Realistic zero-gravity celestial mining simulator featuring procedural GPU asteroids and orbital astrophysics.",
    summary:
      "A critically acclaimed sci-fi physics sandbox built for Scandinavian indie publisher Orbital Echo. FARIA ABRAR developed custom N-body gravitational physics algorithms, procedural voxel asteroid fracture mechanics, and cinematic space lighting inside Unity 3D HDRP.",
    metrics: [
      { label: "Steam Units Sold", value: "290,000+" },
      { label: "Nordic Game Awards", value: "Best Tech Nominee" },
      { label: "Concurrent GPU Entities", value: "120,000 Asteroids" },
      { label: "Community Mod Support", value: "400+ User Mods" },
    ],
    technologies: [
      "Unity 3D (HDRP)",
      "C# Job System & Mathematics",
      "GPU Compute Shaders",
      "Procedural Voxel Meshing",
      "Steamworks API SDK",
      "Post-Processing Stack v2",
    ],
    features: [
      "Real-time celestial gravitational simulation calculated on the GPU using multi-threaded compute shaders",
      "Dynamic volumetric space nebulae with realistic stellar light absorption and star occlusion",
      "Destructible asteroid fracturing system using 3D Voronoi tessellation and dynamic rigid bodies",
      "Custom cinematic photo mode with exposure, bloom, and depth-of-field control",
    ],
    challengesSolved:
      "Simulating tens of thousands of mining debris particles simultaneously bottlenecked standard Unity physics. FARIA ABRAR wrote a custom GPU Barnes-Hut gravitational solver that moved all physics calculations to compute shaders, increasing entity capacity by 800%.",
    marketingImpact:
      "Created mesmerizing TikTok & YouTube Shorts developer devlogs spotlighting procedural space destruction that garnered 14M organic views and propelled the game onto the global Steam Trending Top 10.",
    gradient: "from-cyan-500/20 via-teal-600/10 to-slate-950/20",
    badge: "Physics Simulation",
    colorHex: "#06b6d4",
  },
  {
    id: "chroma-odyssey-audio-3d",
    title: "CHROMA ODYSSEY: SOUNDWAVE RUNNER",
    category: "threejs",
    client: "VibePulse Media & Sony Music Entertainment",
    location: "Tokyo, Japan & Seoul, South Korea",
    role: "Lead Three.js Audio-Visual Technologist",
    year: "2024",
    tagline: "Rhythm-reactive 3D WebGL speed tunnel synced dynamically to live audio waveforms for global album drops.",
    summary:
      "An international interactive music release experience built for premier Asian music labels. FARIA ABRAR engineered a Three.js WebGL procedural kaleidoscope tunnel that analyzes live streaming audio frequencies in real time, pulsing lights and obstacles to the beat for millions of listeners.",
    metrics: [
      { label: "Global Playthroughs", value: "5.8 Million" },
      { label: "Spotify Saves Uplift", value: "+320% Campaign Spike" },
      { label: "Trending Rank", value: "#1 Interactive Media" },
      { label: "Mobile Completion", value: "91.2% Retention" },
    ],
    technologies: [
      "Three.js",
      "Web Audio AnalyserNode",
      "GLSL Fast Fourier Displacements",
      "Touch Motion Controls",
      "Web Audio API",
      "Real-time Particle Streamers",
    ],
    features: [
      "Real-time Fast Fourier Transform (FFT) audio analysis driving dynamic GLSL vertex displacement waves",
      "Responsive gyroscope steering on mobile browsers and buttery keyboard/mouse controls on desktop",
      "Multi-language localization supporting Japanese, Korean, English, French, and German",
      "One-click social share generator that renders a personalized 3D score card for Instagram Stories & X",
    ],
    challengesSolved:
      "Synchronizing audio latency across mobile Safari, Chrome, and desktop platforms while preventing frame stutter during heavy bass drops. FARIA ABRAR built a predictive audio-clock synchronizer that aligns visual vertex pulses with exact hardware speaker output.",
    marketingImpact:
      "The album reached #1 across international charts on release weekend, with record labels directly attributing over 40% of first-week viral streaming traffic to this interactive Three.js experience.",
    gradient: "from-pink-500/20 via-rose-600/10 to-indigo-950/20",
    badge: "Audio-Visual WebGL",
    colorHex: "#ec4899",
  },
];

export const TESTIMONIALS_DATA = [
  {
    quote:
      "FARIA ABRAR is in a league of her own. Her deep mastery of Unity 3D shaders and performance profiling saved our studio months of optimization. On top of that, she understands how to market a game — her playable preview drove over 180k wishlists in a single weekend.",
    author: "KENJI SATO",
    role: "Executive Game Director",
    company: "Aethelgard Interactive",
    location: "Tokyo & Zurich",
    rating: 5,
  },
  {
    quote:
      "Finding a creative technologist who combines high-end Three.js WebGL engineering with the refined aesthetic of luxury marketing is almost impossible. FARIA ABRAR delivered an experience for Paris Fashion Week that converted beyond our wildest expectations. Exceptional taste and flawless code.",
    author: "CAMILLE DE VALOIS",
    role: "Global Head of Digital Innovation",
    company: "Maison Privée Luxe",
    location: "Paris, France",
    rating: 5,
  },
  {
    quote:
      "Working across continents and timezones with FARIA ABRAR was an absolute pleasure. Her anti-gravity WebGL racer ran at 120 FPS in-browser with zero friction for millions of users. She operates like a world-class studio in a single person.",
    author: "LUKAS VON BERG",
    role: "Creative Technology VP",
    company: "RedShift Motorsports",
    location: "Geneva, Switzerland",
    rating: 5,
  },
];

export const GLOBAL_CLIENT_LOCATIONS = [
  { city: "Tokyo", country: "Japan", flag: "🇯🇵", specialty: "Action RPG & Combat Systems" },
  { city: "Zurich", country: "Switzerland", flag: "🇨🇭", specialty: "URP Shaders & Console Ports" },
  { city: "Paris", country: "France", flag: "🇫🇷", specialty: "Luxury 3D Retail & WebGL" },
  { city: "London", country: "United Kingdom", flag: "🇬🇧", specialty: "Multiplayer ECS & Playables" },
  { city: "Geneva", country: "Switzerland", flag: "🇨🇭", specialty: "Interactive 3D Campaigns" },
  { city: "Austin", country: "United States", flag: "🇺🇸", specialty: "Mobile UA & Game Architecture" },
  { city: "Seoul", country: "South Korea", flag: "🇰🇷", specialty: "Audio-Reactive WebGL" },
  { city: "Stockholm", country: "Sweden", flag: "🇸🇪", specialty: "Physics & Orbital Simulators" },
];
