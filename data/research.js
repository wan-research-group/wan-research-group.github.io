// ============================================================
// Research areas shown on the home page and the Research page.
// Mirrors the PI homepage taxonomy: two directions (Computing
// for AI / AI for Computing) across three layers, plus the
// Architecture 2.0 area.
// `pubs` lists publication ids from data/publications.js used as
// representative works on the Research page.
// ============================================================
window.RESEARCH = [
  {
    id: "architecture",
    title: "Computer Architecture",
    subtitle: "Architectures for Emerging Intelligence",
    short:
      "Domain-specific and adaptive architectures for embodied, neuro-symbolic, and reasoning workloads: accelerators, memory systems, and heterogeneous platforms.",
    long:
      "Emerging intelligence does not run well on yesterday's hardware. We design domain-specific and adaptive architectures for embodied, neuro-symbolic, and reasoning workloads, spanning accelerators, memory systems, and heterogeneous platforms, so that perception, planning, and “System-2” reasoning are no longer the bottlenecks of intelligent machines. In the reverse direction, we also use AI agents for architecture design space exploration, generation, and evaluation.",
    keywords: ["Accelerators", "Software-hardware co-design", "Heterogeneous architecture", "Memory", "Dataflow"],
    pubs: ["reason", "compositional-ai", "cogsys", "nsflow", "arborist", "rtgs", "autopilot"],
  },
  {
    id: "systems",
    title: "Systems",
    subtitle: "AI Systems & Cross-Layer Co-Design",
    short:
      "System support for emerging intelligence: workload characterization, runtime and serving systems, hardware-software co-design, and resilience.",
    long:
      "From cooperative robot teams to multi-agent LLM workflows, emerging AI applications stress every layer of the system stack: long-horizon planning, tightly coupled perception-cognition-action loops, and strict real-time budgets. We build the workload characterizations, benchmarks, runtime and serving systems, and cross-layer co-designs that make these applications efficient, scalable, and reliable, from edge devices to serving clusters. We also develop agentic methods for system modeling, optimization, and operation.",
    keywords: ["Agentic serving", "Workload characterization", "Reliability", "System co-design", "GPU/CPU/NPU/TPU"],
    pubs: ["create", "reca", "dyserve", "faster-moa", "slm-mux", "embodiedperf", "mulberry"],
  },
  {
    id: "chips",
    title: "Chips & VLSI",
    subtitle: "AI Chips & Memory-Centric Computing",
    short:
      "AI SoCs, FPGA prototypes, memory-centric architectures, and emerging-device circuits that translate system and architecture ideas into working silicon.",
    long:
      "Architecture ideas earn their keep in silicon. We build AI SoCs, FPGA prototypes, memory-centric architectures, and emerging-device circuits, from RRAM compute-in-memory and SOT-CAM to ferroelectric logic and 3D integration, that translate system and architecture ideas into working, measured chips. Silicon results then feed back into the system and architecture layers, closing the cross-layer co-design loop. We further explore agentic methods for hardware generation, optimization, and verification.",
    keywords: ["SoCs", "VLSI design", "FPGA", "Non-volatile memory", "Memory-centric computing", "Emerging devices"],
    pubs: ["jssc26", "jssc23", "ferro3d", "hydra", "h3dfact", "cicc22"],
  },
  {
    id: "arch2",
    title: "Agentic AI for Computing System Design",
    subtitle: "Architecture 2.0",
    short:
      "AI agents as computer architects: benchmarks, reasoning-augmented design space exploration, and agile hardware generation from software to silicon.",
    long:
      "If AI is reshaping every field, computing system design should be no exception. We study how LLM-based agents can act as computer architects: benchmarks that measure their architectural reasoning, simulator-in-the-loop agents that explore design spaces with auditable traces, and multi-agent flows that draft ISA extensions and hardware. The long-term vision is a co-evolution loop where hardware, systems, and AI agents co-design, co-reason, and co-evolve.",
    keywords: ["LLM agents", "Design space exploration", "Benchmarks", "Hardware generation", "Verification"],
    pubs: ["archeval", "agentdse", "quarch", "lace", "hdlxgraph", "genai-systems"],
  },
];
