// ============================================================
// Courses shown on courses.html.
// `current: true` renders the full featured card (meta, modules,
// topics, link); everything else renders in the compact
// "Previous teaching" list below it.
// To add a course: copy an entry and keep the newest term first.
// ============================================================
window.COURSES = [
  {
    code: "COMS 6998",
    title: "AI-Native Computing",
    subtitle: "Hardware for AI, AI for Hardware",
    term: "Fall 2026",
    institution: "Columbia University",
    role: "Instructor",
    current: true,
    url: "https://wan-research-group.github.io/coms6998-f26/",
    blurb:
      "AI is transforming computing in two directions: emerging AI workloads demand new hardware and system architectures, while AI is becoming a powerful tool for designing computing systems themselves. This graduate seminar follows both directions and the loop that connects them, from workload profiling and serving to agentic design of architectures and chips.",
    meta: [
      ["Time", "Fridays 10:10 AM - 12:00 PM"],
      ["Location", "602 Northwest Corner"],
      ["Office hours", "Wednesdays 5-6 PM, CSB 522"],
    ],
    modules: [
      {
        num: "01",
        title: "Computing for AI",
        desc: "Profile, serve, schedule, map, accelerate, and make reliable emerging LLM, agentic, physical, and compositional AI workloads.",
        area: "architecture",
      },
      {
        num: "02",
        title: "AI for Computing",
        desc: "Use agents to design, optimize, and verify software, compilers, architectures, SoCs, RTL, EDA flows, and chips.",
        area: "arch2",
      },
    ],
    topics: [
      "LLM and agent serving",
      "Embodied and physical AI",
      "Neuro-symbolic acceleration",
      "Datacenter accelerators and SoCs",
      "Agentic design space exploration",
      "RTL, EDA, and chip design agents",
    ],
  },
  {
    code: "CS 249r",
    title: "Architecture 2.0: Agentic AI for Computing Systems Design",
    term: "Fall 2025",
    institution: "Harvard University",
    role: "Co-developer and course staff",
    url: "https://harvard-edge.github.io/cs249r_fall2025/",
  },
];
