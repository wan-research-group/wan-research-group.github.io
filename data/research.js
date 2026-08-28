// ============================================================
// Research pillars shown on the home page and the Research page.
// `pubs` lists publication ids from data/publications.js used as
// representative works on the Research page.
// ============================================================
window.RESEARCH = [
  {
    id: "embodied-systems",
    title: "Systems for Embodied & Agentic AI",
    short:
      "Characterizing and accelerating embodied agents, generative AI in the physical world, and multi-agent serving systems for real-time, scalable autonomy.",
    long:
      "Embodied and agentic AI applications, from cooperative robot teams and generative planners to LLM-driven agent workflows, stress computing systems in ways that classic benchmarks never did: long-horizon planning, tightly coupled perception-cognition-action loops, and strict real-time budgets. We build the characterization methodologies, benchmarks, and system-level accelerations that make these workloads efficient and scalable, from single agents to cooperative swarms and from edge devices to serving clusters.",
    keywords: ["Embodied AI", "Agentic serving", "Real-time autonomy", "Benchmarking", "Reliability"],
    pubs: ["reca", "dyserve", "faster-moa", "embodiedperf", "create", "cacm-vap", "robotperf"],
  },
  {
    id: "cognitive-arch",
    title: "Architectures for Cognitive & Neuro-Symbolic AI",
    short:
      "Domain-specific architectures for AI that reasons: neuro-symbolic, probabilistic, and energy-based models beyond pure neural networks.",
    long:
      "Trustworthy machine intelligence needs more than pattern matching: it needs logical deduction, constraint solving, and probabilistic reasoning. These “System-2” workloads are compositional, sparse, and memory-bound: a poor match for hardware built around dense tensor math. We design the workload taxonomies, dataflow architectures, and reconfigurable accelerators that make neuro-symbolic and compositional AI efficient and scalable, so that reasoning is no longer the bottleneck of cognition.",
    keywords: ["Neuro-symbolic AI", "Probabilistic reasoning", "Energy-based models", "Accelerators", "Dataflow"],
    pubs: ["reason", "compositional-ai", "cogsys", "nsflow", "ebm-ispass26", "tcasai24"],
  },
  {
    id: "silicon",
    title: "Silicon & Emerging Hardware",
    short:
      "SoC tapeouts and memory-centric computing with emerging technologies (RRAM, ferroelectrics, 3D integration) that turn architectural ideas into measured silicon.",
    long:
      "Architecture ideas earn their keep in silicon. We prototype programmable heterogeneous SoCs and memory-centric compute fabrics with emerging device technologies such as RRAM compute-in-memory, SOT-CAM, ferroelectric logic, and 3D integration, demonstrating end-to-end chips for neuro-symbolic AI and autonomous machines, and feeding measured silicon insight back into the architecture and systems layers.",
    keywords: ["SoC tapeout", "Compute-in-memory", "RRAM / ferroelectrics", "3D integration", "VLSI"],
    pubs: ["jssc26", "jssc23", "ferro3d", "hydra", "h3dfact", "sata"],
  },
  {
    id: "arch2",
    title: "Agentic AI for System Design (Architecture 2.0)",
    short:
      "AI agents as computer architects: benchmarks, reasoning-augmented design-space exploration, and agile hardware generation from software to silicon.",
    long:
      "If AI is reshaping every field, computer system design should be no exception. We study how LLM-based agents can act as computer architects: benchmarks that measure their architectural reasoning, simulator-in-the-loop agents that explore design spaces with auditable traces, and multi-agent flows that draft ISA extensions and hardware. The long-term vision is a co-evolution loop where hardware, systems, and AI agents co-design and co-reason.",
    keywords: ["LLM agents", "Design-space exploration", "EDA", "Benchmarks", "Agile hardware design"],
    pubs: ["archeval", "agentdse", "quarch", "lace", "genai-systems", "slm-mux"],
  },
];
