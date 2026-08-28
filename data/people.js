// ============================================================
// Lab members.
// - Card groups render in order; empty groups are hidden.
// - Names in `groups` are auto-bolded in the publication list.
// - `pastMentees` renders as a compact table at the bottom
//   (inspired by ecoai-group.github.io/team).
// ============================================================
window.PEOPLE = {
  pi: {
    name: "Zishen Wan",
    role: "Assistant Professor",
    photo: "assets/zishen_wan.jpg",
    bio: [
      "Zishen Wan is an Assistant Professor of Computer Science at Columbia University, where he directs the EMBARC Lab. He is a computer architect and SoC designer working across computer architecture, computer systems, and chip/VLSI design. His group develops cross-layer computing systems that span software and system design, architecture, and silicon for emerging AI workloads — including embodied, physical, neuro-symbolic, and agentic AI — and develops agentic AI methods for the design, optimization, and verification of computing systems.",
      "Before joining Columbia, he was a Postdoctoral Fellow at Harvard University, working with Prof. Vijay Janapa Reddi. He received his Ph.D. from Georgia Tech in 2025, advised by Prof. Arijit Raychowdhury and Prof. Tushar Krishna. His dissertation, “Tailored Computing: Cross-Layer System, Architecture, and Silicon Co-Design for Physical Intelligence,” received the ACM SIGDA Outstanding Ph.D. Dissertation Award, the FCCM Outstanding Ph.D. Dissertation Award, and Georgia Tech's Colonel Oscar P. Cleaver Award.",
      "His research has been recognized with Best Paper Awards from DAC, IEEE Computer Architecture Letters, and DARPA SRC JUMP 2.0, IEEE Micro Top Picks recognition, and first-place honors at the DAC Ph.D. Forum and the ACM Student Research Competition, along with the Baidu and Qualcomm Fellowships. He was selected as both an ML and Systems Rising Star and a Cyber-Physical Systems Rising Star, and his work involves close collaboration with IBM, TSMC, Intel, and Google.",
      "In Fall 2026, he teaches COMS E6998 “AI-Native Computing: Hardware for AI, AI for Hardware” at Columbia.",
    ],
    email: "zw3306@columbia.edu",
    office: "522 CSB, 500 West 120th Street, New York, NY 10027",
    links: {
      Website: "https://zishenwan.github.io/",
      CV: "https://zishenwan.github.io/data/CV_Zishen_Wan.pdf",
      "Google Scholar": "https://scholar.google.com/citations?user=dt3ImqIAAAAJ&hl=en",
      GitHub: "https://github.com/zishenwan",
      LinkedIn: "https://www.linkedin.com/in/zishen-wan/",
      ORCID: "https://orcid.org/0000-0002-2982-5351",
    },
  },

  // ---- Current members & mentees (cards) ----
  groups: [
    {
      title: "Postdoctoral Researchers",
      members: [],
    },
    {
      title: "PhD Students",
      members: [
        {
          name: "Jiayi Qian",
          role: "Ph.D. Student, 2024–",
          note: "co-advised with Prof. Tushar Krishna (Georgia Tech)",
          photo: "assets/jiayi_qian.png",
          interests: "ML systems for agentic & generative AI; accelerators for embodied and neuro-symbolic AI",
          links: {
            Website: "https://jiayi-19.github.io/",
            Scholar: "https://scholar.google.com/citations?user=-yGPXHkAAAAJ&hl=en",
            LinkedIn: "https://www.linkedin.com/in/jiayi-qian-988848294/",
          },
        },
      ],
    },
    {
      title: "Student Researchers & Mentees",
      members: [
        {
          name: "Hanchen Yang",
          role: "Ph.D. Student, 2023–",
          note: "Georgia Tech",
          interests: "Neuro-symbolic and energy-based model systems; dataflow architectures",
          links: {
            Scholar: "https://scholar.google.com/citations?user=zoMQ8CoAAAAJ&hl=en",
          },
        },
        {
          name: "Yichong Zhang",
          role: "B.S. Student, 2025–",
          note: "Tsinghua University",
          links: {},
        },
      ],
    },
    {
      title: "Master's & Undergraduate Researchers",
      members: [],
    },
    {
      title: "Alumni",
      members: [],
    },
    // Member entry format:
    // {
    //   name: "Jane Doe",
    //   role: "Ph.D. Student, 2027–",
    //   note: "co-advised with Prof. X",     // optional smaller line under the role
    //   photo: "assets/jane_doe.jpg",        // optional; monogram shown if omitted
    //   interests: "Neuro-symbolic accelerators",
    //   links: { Website: "https://...", Scholar: "https://..." },
    // }
  ],

  // ---- Past mentees (compact table) ----
  // Students Prof. Wan mentored before/outside the lab, with where they went next.
  pastMenteesNote:
    "Students we have had the privilege of mentoring, and where they went next.",
  pastMentees: [
    {
      name: "Chenyu Wang", years: "2024–2026",
      background: "M.S., Princeton University",
      highlight: "SLM-Mux (ICLR'26), ArchEval",
      next: "Ph.D. student, Harvard University",
    },
    {
      name: "Yuhang Du", years: "2024–2026",
      background: "B.S., Fudan University",
      highlight: "ReCA (ASPLOS'25)",
      next: "Ph.D. student, UCLA",
    },
    {
      name: "Zijun Wang", years: "2025–2026",
      background: "M.S., Georgia Tech",
      highlight: "Faster-MoA (DAC'26)",
      next: "Samsung Semiconductor",
    },
    {
      name: "Arnav Ramamoorthy", years: "2025–2026",
      background: "B.S., BITS Pilani",
      next: "M.S. student, University of Pennsylvania",
    },
    {
      name: "Arnav Shukla", years: "2025–2026",
      background: "B.S., IIIT Delhi",
      next: "Qualcomm",
    },
    {
      name: "Jirong Yang", years: "2025",
      background: "B.S., University of Michigan",
      next: "Ph.D. student, UT Austin",
    },
    {
      name: "Zhenkun Fan", years: "2023–2025",
      background: "M.S., Georgia Tech",
      highlight: "SATA (DATE'26)",
      next: "Ph.D. student, Georgia Tech",
    },
    {
      name: "Ritik Raj", years: "2023–2024",
      background: "Ph.D., Georgia Tech",
      highlight: "CogSys (HPCA'25), SCALE-Sim v3",
    },
    {
      name: "Che-Kai Liu", years: "2022–2024",
      background: "B.S., Zhejiang University",
      highlight: "Neuro-symbolic SoC (JSSC'26)",
      next: "Ph.D. student, Georgia Tech",
    },
    {
      name: "Ying-Hao Wei", years: "2022–2023",
      background: "M.S., Georgia Tech",
      next: "Micron",
    },
  ],
};
