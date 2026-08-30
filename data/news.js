// ============================================================
// News items, newest first.
// `date` is "YYYY-MM" (rendered as "Mon YYYY").
// `tag` is one of: Lab | Award | Paper | Talk | Workshop | Teaching | Service | Book
// [text](url) inside `text` becomes a link.
// The home page shows the latest 6; news.html shows everything,
// grouped by year with tag filters.
// ============================================================
window.NEWS = [
  // ---------------- 2026 ----------------
  {
    date: "2026-08",
    tag: "Lab",
    text: "Zishen joins the [Department of Computer Science at Columbia University](https://www.cs.columbia.edu/) as an Assistant Professor, and the Wan Lab officially launches! We are recruiting PhD students (Fall 2027), postdocs, and student researchers. See [Join Us](join.html).",
  },
  {
    date: "2026-07",
    tag: "Award",
    text: "Zishen's [PhD dissertation](https://repository.gatech.edu/entities/publication/b490c30e-213f-434e-b7a5-59347d1ccac2) is selected for the **ACM SIGDA Outstanding Ph.D. Dissertation Award**.",
  },
  {
    date: "2026-07",
    tag: "Award",
    text: "Zishen is selected for the **WAIC Yunfan Award** (15 researchers worldwide, under age 30).",
  },
  {
    date: "2026-07",
    tag: "Paper",
    text: "Arborist, our algorithm-hardware co-design framework for fast and efficient motion planning, is accepted to **MICRO 2026**.",
  },
  {
    date: "2026-07",
    tag: "Paper",
    text: "[Dyserve](https://arxiv.org/pdf/2607.02942), a workflow-aware serving layer for agentic applications, is presented at the SCALE Workshop at **ICML 2026**.",
  },
  {
    date: "2026-06",
    tag: "Paper",
    text: "[ArchEval](https://arxiv.org/pdf/2607.03601), our benchmark measuring AI agents as computer architects, is presented at the Architecture 2.0 Workshop at **ISCA 2026**.",
  },
  {
    date: "2026-06",
    tag: "Paper",
    text: "[AgentDSE](https://arxiv.org/pdf/2606.21836), reasoning-augmented architectural design space exploration, is presented at the MLArchSys Workshop at **ISCA 2026**.",
  },
  {
    date: "2026-06",
    tag: "Workshop",
    text: "We co-organize the tutorial and workshop [Architecture 2.0: Agentic AI for Computing Systems Design](https://harvard-edge.github.io/isca-26-arch-2-workshop/) at **ISCA 2026**.",
  },
  {
    date: "2026-06",
    tag: "Workshop",
    text: "We co-organize the workshop [VisArch: Systems and Architectures for Visual Computing, AR/VR, and Embodied Intelligence](https://sai-lab-nyu.github.io/VisArch_ISCA26/) at **ISCA 2026**.",
  },
  {
    date: "2026-06",
    tag: "Service",
    text: "Zishen joins the technical program committees of **MICRO'26**, **DAC'26**, **MLSys'26**, **ASAP'26**, **ICCD'26**, **ISLPED'26**, and **MLCAD'26**.",
  },
  {
    date: "2026-05",
    tag: "Award",
    text: "Zishen's [PhD dissertation](https://repository.gatech.edu/entities/publication/b490c30e-213f-434e-b7a5-59347d1ccac2) is selected for the **FCCM Outstanding Ph.D. Dissertation Award**.",
  },
  {
    date: "2026-05",
    tag: "Award",
    text: "Zishen is selected as an **ACM Future AI Leader** at the ACM AI Leadership Summit.",
  },
  {
    date: "2026-05",
    tag: "Paper",
    text: "[LACE](https://arxiv.org/pdf/2608.02915), an LLM-aided multi-agent framework for agile RISC-V instruction extension, is accepted to **ICLAD 2026**.",
  },
  {
    date: "2026-05",
    tag: "Paper",
    text: "[QuArch](https://quarch.ai/), a benchmark for evaluating LLM reasoning in computer architecture, is accepted to **ICML 2026**.",
  },
  {
    date: "2026-03",
    tag: "Award",
    text: "Zishen's [PhD dissertation](https://repository.gatech.edu/entities/publication/b490c30e-213f-434e-b7a5-59347d1ccac2) is selected for the **Georgia Tech Colonel Oscar P. Cleaver Award**.",
  },
  {
    date: "2026-02",
    tag: "Paper",
    text: "[GenAI for Systems](https://arxiv.org/pdf/2602.15241), our perspective on recurring challenges and design principles from software to silicon, is released.",
  },
  {
    date: "2026-02",
    tag: "Paper",
    text: "[Faster-MoA](https://arxiv.org/pdf/2512.18126), low-latency mixture-of-agents serving with early exit and agent-aware prefill-decode overlap, is accepted to **DAC 2026**.",
  },
  {
    date: "2026-02",
    tag: "Paper",
    text: "[Enabling context-switchable monolithic 3D FPGA design using bistable ferroelectric inverters](https://zishenwan.github.io/publication/FCCM26_Ferro3D_FPGA.pdf) is accepted to **FCCM 2026**.",
  },
  {
    date: "2026-02",
    tag: "Paper",
    text: "[Towards System-2 AI](https://zishenwan.github.io/publication/ISPASS26_EBM_Characterization.pdf), workloads and characterizations of energy-based models, is accepted to **ISPASS 2026**.",
  },
  {
    date: "2026-01",
    tag: "Paper",
    text: "Our fully [programmable heterogeneous RRAM/SRAM SoC](https://zishenwan.github.io/publication/JSSC26_NSAI_Chip.pdf) for accelerating neuro-symbolic AI is accepted to **IEEE JSSC**.",
  },
  {
    date: "2026-01",
    tag: "Paper",
    text: "[SLM-Mux](https://slm-mux.github.io/), orchestrating small language models for reasoning, is accepted to **ICLR 2026**.",
  },

  // ---------------- 2025 ----------------
  {
    date: "2025-12",
    tag: "Award",
    text: "[ReCA](https://dl.acm.org/doi/pdf/10.1145/3676641.3716016) and [Compositional AI Beyond LLMs](https://dl.acm.org/doi/pdf/10.1145/3760250.3762235) are selected as **2025 JUMP 2.0 Best Papers** by DARPA and SRC.",
  },
  {
    date: "2025-11",
    tag: "Lab",
    text: "Zishen defends his PhD thesis “Tailored Computing: Cross-Layer System, Architecture, and Silicon Co-Design for Physical AI” at Georgia Tech.",
  },
  {
    date: "2025-11",
    tag: "Paper",
    text: "[REASON](https://arxiv.org/pdf/2601.20784), accelerating probabilistic logical reasoning for scalable neuro-symbolic intelligence, is accepted to **HPCA 2026**.",
  },
  {
    date: "2025-11",
    tag: "Paper",
    text: "[CREATE](https://dl.acm.org/doi/pdf/10.1145/3779212.3790147), cross-layer resilience optimization for efficient and reliable embodied AI systems, is accepted to **ASPLOS 2026**.",
  },
  {
    date: "2025-11",
    tag: "Paper",
    text: "[FortiSky](https://zishenwan.github.io/publication/DATE26_FortiSky.pdf), enhancing adversarial and bit-error robustness for autonomous systems (with IBM Research), is accepted to **DATE 2026**.",
  },
  {
    date: "2025-11",
    tag: "Paper",
    text: "[SATA](https://arxiv.org/pdf/2601.20267), sparsity-aware scheduling for selective token attention (with TSMC Research), is accepted to **DATE 2026**.",
  },
  {
    date: "2025-11",
    tag: "Workshop",
    text: "We will organize the workshop Architecture 2.0: AI for Computing Systems Design at **ASPLOS 2026**.",
  },
  {
    date: "2025-10",
    tag: "Talk",
    text: "Zishen presents “Tailored Computing: Domain-Specific Architecture for Embodied Intelligence” at the **MICRO PhD Forum**.",
  },
  {
    date: "2025-09",
    tag: "Talk",
    text: "Zishen gives a talk on system implications and opportunities for compositional neuro-symbolic-probabilistic AI at Georgia Tech.",
  },
  {
    date: "2025-09",
    tag: "Teaching",
    text: "Zishen co-develops and serves as course staff for Harvard [CS249r Architecture 2.0: Agentic AI for Computing Systems Design](https://harvard-edge.github.io/cs249r_fall2025/).",
  },
  {
    date: "2025-07",
    tag: "Paper",
    text: "[RTGS](https://arxiv.org/pdf/2510.06644), real-time 3D Gaussian splatting SLAM via multi-level redundancy reduction, is accepted to **MICRO 2025**.",
  },
  {
    date: "2025-07",
    tag: "Talk",
    text: "Zishen gives talks on demystifying neuro-symbolic AI for software-hardware co-design at the University of Notre Dame and Purdue University.",
  },
  {
    date: "2025-06",
    tag: "Award",
    text: "Zishen wins **First Place at the DAC PhD Forum** for “Tailored Computing for Embodied Intelligence.”",
  },
  {
    date: "2025-06",
    tag: "Paper",
    text: "[Compositional AI Beyond LLMs](https://dl.acm.org/doi/pdf/10.1145/3760250.3762235), system implications of neuro-symbolic-probabilistic architectures, is accepted to **ASPLOS 2026**.",
  },
  {
    date: "2025-06",
    tag: "Paper",
    text: "[HyDra](https://arxiv.org/pdf/2504.14020), a SOT-CAM based vector symbolic macro for hyperdimensional computing, is accepted to **ICCAD 2025**.",
  },
  {
    date: "2025-06",
    tag: "Talk",
    text: "Zishen gives an invited talk on efficient and safe embodied intelligence, from benchmarking to co-design, at the ISCA Arch4EAI Workshop.",
  },
  {
    date: "2025-06",
    tag: "Service",
    text: "Our interview with Prof. Mengjia Yan, [“Sipping Matcha of Security”](https://ieeexplore.ieee.org/document/11072006), appears in **IEEE Micro**.",
  },
  {
    date: "2025-04",
    tag: "Paper",
    text: "Our [tutorial and cross-layer co-design case study on efficient neuro-symbolic AI processing](https://neus-2025.github.io/files/papers/paper_68.pdf) is accepted to **NeuS 2025** as an oral presentation.",
  },
  {
    date: "2025-04",
    tag: "Talk",
    text: "Zishen gives a talk on CogSys neuro-symbolic co-design at Google.",
  },
  {
    date: "2025-03",
    tag: "Award",
    text: "Zishen receives the **Best Poster Award** at the DARPA SRC JUMP 2.0 CoCoSys Center for bridging learning and reasoning across software, architecture, FPGA, and SoC.",
  },
  {
    date: "2025-03",
    tag: "Paper",
    text: "[EmbodiedPerf](https://arxiv.org/pdf/2504.18945), system-level analysis of generative AI in embodied systems, is accepted to **ISPASS 2025**.",
  },
  {
    date: "2025-03",
    tag: "Paper",
    text: "[SCALE-Sim v3](https://arxiv.org/pdf/2504.15377), a modular cycle-accurate systolic accelerator simulator, is accepted to **ISPASS 2025**.",
  },
  {
    date: "2025-03",
    tag: "Talk",
    text: "Zishen gives talks on ReCA embodied AI at the Georgia Tech Computer Architecture Research Seminar and the SRC JUMP 2.0 CoCoSys Center.",
  },
  {
    date: "2025-02",
    tag: "Award",
    text: "Zishen is awarded the **Baidu Fellowship** (10 awardees worldwide).",
  },
  {
    date: "2025-02",
    tag: "Paper",
    text: "[ReCA](https://dl.acm.org/doi/pdf/10.1145/3676641.3716016), integrated acceleration for real-time and efficient cooperative embodied autonomous agents, is accepted to **ASPLOS 2025**.",
  },
  {
    date: "2025-02",
    tag: "Paper",
    text: "[OctoCache](https://dl.acm.org/doi/pdf/10.1145/3676641.3716263), caching voxels for accelerating 3D occupancy mapping in autonomous systems, is accepted to **ASPLOS 2025**.",
  },
  {
    date: "2025-02",
    tag: "Paper",
    text: "[NSFlow](https://arxiv.org/pdf/2504.19323), an end-to-end FPGA framework with scalable dataflow architecture for neuro-symbolic AI, is accepted to **DAC 2025**.",
  },
  {
    date: "2025-02",
    tag: "Paper",
    text: "[ReaLM](https://arxiv.org/pdf/2503.24053), reliable and efficient LLM inference with statistical algorithm-based fault tolerance, is accepted to **DAC 2025**.",
  },
  {
    date: "2025-02",
    tag: "Talk",
    text: "Zishen gives a talk on tailored computing for neuro-symbolic and embodied agents at UIUC.",
  },
  {
    date: "2025-01",
    tag: "Award",
    text: "[CogSys](https://arxiv.org/pdf/2503.01162) and our [neuro-symbolic architecture](https://zishenwan.github.io/publication/TCASAI24.pdf) work are selected as **2024 JUMP 2.0 Best Papers** by DARPA and SRC.",
  },
  {
    date: "2025-01",
    tag: "Talk",
    text: "Zishen gives guest lectures on neuro-symbolic AI co-design at Georgia Tech, and a talk on robotic computing co-design at the University of Washington.",
  },

  // ---------------- 2024 ----------------
  {
    date: "2024-12",
    tag: "Award",
    text: "Zishen is selected as a **Spotlight Research Scholar** by the DARPA SRC JUMP 2.0 CoCoSys Center.",
  },
  {
    date: "2024-12",
    tag: "Service",
    text: "Zishen serves on the program committee of **MLSys'25** and the artifact evaluation committee of **HPCA'25**.",
  },
  {
    date: "2024-11",
    tag: "Paper",
    text: "[CogSys](https://arxiv.org/pdf/2503.01162), an efficient neurosymbolic cognition system via algorithm-hardware co-design, is accepted to **HPCA 2025**.",
  },
  {
    date: "2024-11",
    tag: "Award",
    text: "Zishen receives **3rd place in the ACM SIGMICRO Student Research Competition** at **MICRO 2024**.",
  },
  {
    date: "2024-11",
    tag: "Talk",
    text: "Zishen speaks on embodied robotic computing at the MICRO RoboArch workshop and UCF, on 3D integration and neurosymbolic co-design at Harvard, and on tailored computing at the Chinese Academy of Sciences.",
  },
  {
    date: "2024-11",
    tag: "Book",
    text: "Our book “Embodied AI Robotic Systems” is released, exploring embodied AI from computing and system perspectives.",
  },
  {
    date: "2024-09",
    tag: "Award",
    text: "Zishen receives the **Best Presentation Award** at **SRC TECHCON 2024**.",
  },
  {
    date: "2024-08",
    tag: "Paper",
    text: "[Towards Efficient Neuro-Symbolic AI](https://zishenwan.github.io/publication/TCASAI24.pdf), from workload analysis to hardware architecture, is accepted to **IEEE TCASAI**.",
  },
  {
    date: "2024-08",
    tag: "Talk",
    text: "Zishen speaks on MulBERRY and [CIM adaptation](https://dl.acm.org/doi/pdf/10.1145/3665898) at Lawrence Livermore National Laboratory, and on demystifying neuro-symbolic AI computing at the University of Minnesota.",
  },
  {
    date: "2024-07",
    tag: "Paper",
    text: "[Thinking and Moving](https://dl.acm.org/doi/pdf/10.1145/3676536.3698389), efficient computing for cooperative embodied systems, is accepted to **ICCAD 2024**.",
  },
  {
    date: "2024-05",
    tag: "Paper",
    text: "[Neuro-Symbolic Architecture Meets LLMs: A Memory-Centric Perspective](https://zishenwan.github.io/publication/ESWEEK24_NSAI_LLM.pdf) is accepted to **ESWEEK 2024**.",
  },
  {
    date: "2024-05",
    tag: "Paper",
    text: "Our benchmark of test-time DNN adaptation at the edge with compute-in-memory is accepted to **ACM JATS**.",
  },
  {
    date: "2024-05",
    tag: "Talk",
    text: "H3DFact and MemQuant are selected into **SRC TECHCON 2024**; we present recent neuro-symbolic AI and autonomous machine computing work at the ASPLOS EMC2 workshop, MLSys YPS, the Berkeley NeuS workshop, and the SRC CoCoSys Center.",
  },
  {
    date: "2024-04",
    tag: "Award",
    text: "Zishen is selected as a **2024 Cyber-Physical Systems Rising Star**.",
  },
  {
    date: "2024-04",
    tag: "Paper",
    text: "[The Vulnerability-Adaptive Protection Paradigm](https://dl.acm.org/doi/pdf/10.1145/3647638) toward reliable autonomous machines is accepted to **Communications of the ACM**.",
  },
  {
    date: "2024-04",
    tag: "Service",
    text: "Zishen joins the steering committee of the Computer Architecture Student Association (CASA), and team CipherFlitFort is selected for the **Georgia Tech CREATE-X Award**.",
  },
  {
    date: "2024-03",
    tag: "Award",
    text: "Zishen receives the **Best Poster Award** at the DARPA SRC JUMP 2.0 CoCoSys Center.",
  },
  {
    date: "2024-03",
    tag: "Paper",
    text: "[Towards Cognitive AI Systems](https://zishenwan.github.io/publication/ISPASS24_NSAI.pdf), workload and characterization of neuro-symbolic AI, is accepted to **ISPASS 2024**.",
  },
  {
    date: "2024-02",
    tag: "Paper",
    text: "[Distribution-aware logarithmic-posit encodings](https://arxiv.org/pdf/2403.05465.pdf) via algorithm-hardware co-design is accepted to **DAC 2024**.",
  },
  {
    date: "2024-02",
    tag: "Service",
    text: "Zishen serves on the **CAV@ASPLOS'24** program committee, the **ISCA'24** artifact evaluation committee, and the **ISSCC'24** media team.",
  },
  {
    date: "2024-01",
    tag: "Paper",
    text: "The [RobotPerf benchmark](https://arxiv.org/pdf/2309.09212) is accepted to **ICRA 2024**.",
  },

  // ---------------- 2023 ----------------
  {
    date: "2023-12",
    tag: "Book",
    text: "Our open-source book [Machine Learning Systems](https://harvard-edge.github.io/cs249r_book/) is released. By the community, for the community.",
  },
  {
    date: "2023-12",
    tag: "Award",
    text: "Zishen receives the **Best Poster Award** at the 2023 IBM IEEE AI Compute Symposium.",
  },
  {
    date: "2023-11",
    tag: "Paper",
    text: "[MulBERRY](https://dl.acm.org/doi/pdf/10.1145/3620665.3640420), enabling bit-error robustness for energy-efficient multi-agent autonomous systems, is accepted to **ASPLOS 2024**.",
  },
  {
    date: "2023-11",
    tag: "Paper",
    text: "[ORIANNA](https://dl.acm.org/doi/pdf/10.1145/3620665.3640379), an accelerator generation framework for optimization-based robotic applications, is accepted to **ASPLOS 2024**.",
  },
  {
    date: "2023-11",
    tag: "Paper",
    text: "[H3DFACT](https://arxiv.org/pdf/2404.04173.pdf), heterogeneous 3D integrated compute-in-memory for factorization with holographic representations, is accepted to **DATE 2024**.",
  },
  {
    date: "2023-10",
    tag: "Paper",
    text: "[Silent data corruption in Robot Operating System](https://ieeexplore.ieee.org/document/10315202), an end-to-end system-level fault analysis on autonomous UAVs, is accepted to **IEEE TCAD**.",
  },
  {
    date: "2023-09",
    tag: "Award",
    text: "We release the [RobotPerf benchmark](https://robotperf.net) and win the **Best Paper Award** at the **IROS 2023** Robotics Benchmarking Workshop.",
  },
  {
    date: "2023-07",
    tag: "Paper",
    text: "[SEE-MCAM](https://arxiv.org/pdf/2310.04940.pdf), scalable multi-bit FeFET CAM for energy-efficient associative search, is accepted to **ICCAD 2023**.",
  },
  {
    date: "2023-07",
    tag: "Paper",
    text: "Our [heterogeneous RRAM in-memory and SRAM near-memory SoC](https://ieeexplore.ieee.org/abstract/document/10210581) for fused frame and event-based target tracking is accepted to **IEEE JSSC**.",
  },
  {
    date: "2023-05",
    tag: "Award",
    text: "Zishen is selected as a 2023 [**ML and Systems Rising Star**](https://mlsys-risingstars.github.io/).",
  },
  {
    date: "2023-05",
    tag: "Paper",
    text: "VPP, the vulnerability-proportional protection paradigm toward reliable autonomous machines, is presented at the DOSSA-5 Workshop at **ISCA 2023**.",
  },
  {
    date: "2023-05",
    tag: "Paper",
    text: "Our survey and prospective on neuro-symbolic AI toward cognitive AI systems is presented at the Next-Gen AI System Workshop at **MLSys 2023**.",
  },
  {
    date: "2023-05",
    tag: "Talk",
    text: "Zishen presents [co-design for efficient and resilient autonomous machine computing](https://zishenwan.github.io/publication/ACM_SRC.pdf) at Georgia Tech EIC Lab, Georgia Tech Chips Day, the CoCoSys and CRNCH annual reviews, and CRIDC 2023.",
  },
  {
    date: "2023-04",
    tag: "Award",
    text: "Zishen is awarded the Georgia Tech **Roger P. Webb Graduate Research Assistant Excellence Award**.",
  },
  {
    date: "2023-02",
    tag: "Paper",
    text: "[BERRY](https://zishenwan.github.io/publication/dac23_berry.pdf), bit-error robustness for energy-efficient RL-based autonomous systems, is accepted to **DAC 2023**.",
  },
  {
    date: "2023-01",
    tag: "Award",
    text: "[AutoPilot](https://ieeexplore.ieee.org/document/9923818) is selected as an Honorable Mention in **IEEE Micro Top Picks 2023**.",
  },

  // ---------------- 2022 ----------------
  {
    date: "2022-12",
    tag: "Paper",
    text: "[MAVFI](https://arxiv.org/pdf/2105.12882.pdf), an end-to-end fault analysis framework with anomaly detection and recovery for micro aerial vehicles, is accepted to **DATE 2023**.",
  },
  {
    date: "2022-12",
    tag: "Paper",
    text: "[Real-time fully unsupervised domain adaptation for lane detection](https://arxiv.org/pdf/2306.16660.pdf) in autonomous driving is accepted to **DATE 2023**.",
  },
  {
    date: "2022-11",
    tag: "Award",
    text: "Zishen wins **1st place in the ACM/SIGBED Student Research Competition**.",
  },
  {
    date: "2022-10",
    tag: "Paper",
    text: "Our [73.53 TOPS/W heterogeneous RRAM in-memory and SRAM near-memory SoC](https://ieeexplore.ieee.org/abstract/document/10067544) for hybrid frame and event-based target tracking is accepted to **ISSCC 2023**.",
  },
  {
    date: "2022-10",
    tag: "Service",
    text: "We co-found the MLPerf (MLCommons) Resilience and Robustness Research Working Group.",
  },
  {
    date: "2022-10",
    tag: "Talk",
    text: "Zishen speaks on efficient software-hardware co-design for robotic computing at the 2022 IBM AI Compute Symposium.",
  },
  {
    date: "2022-09",
    tag: "Award",
    text: "Zishen is awarded the **Qualcomm Fellowship**.",
  },
  {
    date: "2022-07",
    tag: "Paper",
    text: "[Analyzing and improving resilience and robustness of autonomous systems](https://zishenwan.github.io/publication/Wan2022ICCAD.pdf) is accepted to **ICCAD 2022**.",
  },
  {
    date: "2022-07",
    tag: "Paper",
    text: "[AutoPilot](https://ieeexplore.ieee.org/document/9923818), automatic domain-specific SoC design for autonomous UAVs, is accepted to **MICRO 2022**.",
  },
  {
    date: "2022-06",
    tag: "Paper",
    text: "QuaRL, quantization for fast and environmentally sustainable reinforcement learning, is accepted to **TMLR** and featured by the [Google AI Blog](https://ai.googleblog.com/2022/09/quantization-for-fast-and.html).",
  },
  {
    date: "2022-06",
    tag: "Talk",
    text: "Zishen speaks on the plenary panel “Reliability of Autonomous Machines” at **COMPSAC 2022**.",
  },
  {
    date: "2022-04",
    tag: "Award",
    text: "Zishen is selected as a **DAC Young Fellow** at **DAC 2022**.",
  },
  {
    date: "2022-04",
    tag: "Paper",
    text: "[Robotic computing on FPGAs: current progress, challenges, and opportunities](https://arxiv.org/pdf/2205.07149.pdf) is accepted to **AICAS 2022**.",
  },
  {
    date: "2022-03",
    tag: "Paper",
    text: "The [roofline model for UAVs](https://arxiv.org/pdf/2204.10898.pdf), a bottleneck analysis tool for onboard compute, is accepted to **ISPASS 2022**.",
  },
  {
    date: "2022-02",
    tag: "Paper",
    text: "[Improving compute-in-memory ECC reliability with successive correction](https://dl.acm.org/doi/abs/10.1145/3489517.3530526) is accepted to **DAC 2022**.",
  },
  {
    date: "2022-01",
    tag: "Paper",
    text: "Our [energy-efficient, runtime-reconfigurable FPGA accelerator for robotic localization](https://arxiv.org/pdf/2202.08952.pdf) is accepted to **CICC 2022**.",
  },
  {
    date: "2022-01",
    tag: "Paper",
    text: "An invited paper on [circuit and system technologies for energy-efficient edge robotics](https://zishenwan.github.io/publication/ASPDAC2022.pdf) appears at **ASP-DAC 2022**.",
  },
  {
    date: "2022-01",
    tag: "Award",
    text: "Zishen is awarded the **CRNCH PhD Fellowship** by the Georgia Tech Center for Research into Novel Computing Hierarchies.",
  },

  // ---------------- 2021 ----------------
  {
    date: "2021-12",
    tag: "Award",
    text: "Zishen is selected as a **DAC Young Fellow** and wins the **Best Presentation Award** at **DAC 2021**.",
  },
  {
    date: "2021-11",
    tag: "Paper",
    text: "[FRL-FI](https://arxiv.org/pdf/2203.07276.pdf), transient fault analysis for federated RL-based navigation systems, is accepted to **DATE 2022**.",
  },
  {
    date: "2021-08",
    tag: "Talk",
    text: "Zishen speaks on fault analysis for autonomous machine reliability at the Center for Brain-Inspired Computing (C-BRIC), a DARPA/SRC JUMP research center.",
  },
  {
    date: "2021-06",
    tag: "Book",
    text: "Our book [Robotic Computing on FPGAs](https://www.morganclaypool.com/doi/10.2200/S01101ED1V01Y202105CAC056) is published in **Synthesis Lectures on Computer Architecture**, with key observations appearing as a [survey](https://zishenwan.github.io/publication/CAS2021.pdf) in **IEEE CAS-M**.",
  },
  {
    date: "2021-04",
    tag: "Paper",
    text: "An energy-efficient visual system for autonomous machines on FPGA is accepted to **AICAS 2021**.",
  },
  {
    date: "2021-04",
    tag: "Paper",
    text: "[iELAS](https://arxiv.org/pdf/2104.05112.pdf), an ELAS-based energy-efficient accelerator for real-time stereo matching, is accepted to **AICAS 2021**.",
  },
  {
    date: "2021-03",
    tag: "Paper",
    text: "ActorQ, quantization for actor-learner distributed reinforcement learning, is presented at the **ICLR HEAT Workshop 2021**.",
  },
  {
    date: "2021-02",
    tag: "Paper",
    text: "[Analyzing and improving fault tolerance of learning-based navigation systems](https://arxiv.org/pdf/2111.04957.pdf) is accepted to **DAC 2021**.",
  },

  // ---------------- 2020 ----------------
  {
    date: "2020-12",
    tag: "Award",
    text: "[The Sky Is Not the Limit](https://zishenwan.github.io/publication/CAL2020.pdf) is selected as a **Best Paper of IEEE Computer Architecture Letters**, with an invited presentation at **HPCA 2021**.",
  },
  {
    date: "2020-12",
    tag: "Paper",
    text: "[A survey of FPGA-based robotic computing](https://zishenwan.github.io/publication/CAS2021.pdf) is accepted to **IEEE Circuits and Systems Magazine**.",
  },
  {
    date: "2020-07",
    tag: "Award",
    text: "[Algorithm-hardware co-design of adaptive floating-point encodings](https://zishenwan.github.io/publication/DAC2020.pdf) wins the **Best Paper Award** at **DAC 2020**.",
  },
  {
    date: "2020-07",
    tag: "Talk",
    text: "Zishen gives talks on micro aerial vehicle fault injection and detection at the Harvard VLSI-Arch Lab, and on edge computing for aerial robots at the Georgia Tech ICS Lab.",
  },
  {
    date: "2020-03",
    tag: "Paper",
    text: "[The Sky Is Not the Limit](https://zishenwan.github.io/publication/CAL2020.pdf), a visual performance model for cyber-physical co-design in autonomous machines, is accepted to **IEEE CAL**.",
  },
  {
    date: "2020-02",
    tag: "Paper",
    text: "[Adaptive floating-point encodings for resilient deep learning inference](https://zishenwan.github.io/publication/DAC2020.pdf) is accepted to **DAC 2020**.",
  },
  {
    date: "2020-01",
    tag: "Paper",
    text: "QuaRL, quantized reinforcement learning, is presented at the **MLSys ReCoML Workshop 2020**.",
  },
];
