// ============================================================
// Site-wide configuration.
// To rename the lab, change `name` / `shortName` / `fullName`
// here and every page picks it up automatically.
// ============================================================
window.SITE = {
  name: "Wan Lab",
  shortName: "Wan",
  fullName: "Wan Lab at Columbia University",
  expansion: "Computing for AI, and AI for Computing",
  institution: "Columbia University",
  department: "Department of Computer Science",
  tagline: "Computing for AI, and AI for Computing, co-designed across architecture, systems, and silicon.",
  description:
    "We are a research group at Columbia University building computing systems for emerging AI, and developing agentic AI that designs computing systems.",
  recruiting: true,
  recruitingNote:
    "We are recruiting PhD students, postdocs, and visiting students.",
  email: "zw3306@columbia.edu",
  address: "500 West 120th Street, New York, NY 10027",
  links: {
    scholar: "https://scholar.google.com/citations?user=dt3ImqIAAAAJ&hl=en",
    github: "https://github.com/zishenwan",
    linkedin: "https://www.linkedin.com/in/zishen-wan/",
    pi: "https://zishenwan.github.io/",
  },
  // Organizations shown in the home-page "Research support and
  // collaborators" band. Entries are { name, logo }; logo files live
  // in assets/sponsors/ (sourced from Wikimedia Commons). A plain
  // string entry renders as a text wordmark instead.
  // Order: industry (most recognizable first), national labs, US
  // universities (most recognizable first), international.
  collaborators: [
    { name: "NVIDIA", logo: "assets/sponsors/nvidia.png" },
    { name: "Google", logo: "assets/sponsors/google.png" },
    { name: "Intel", logo: "assets/sponsors/intel.png" },
    { name: "Samsung", logo: "assets/sponsors/samsung.png" },
    { name: "TSMC", logo: "assets/sponsors/tsmc.png" },
    { name: "IBM", logo: "assets/sponsors/ibm.png" },
    { name: "Altera", logo: "assets/sponsors/altera.png" },
    { name: "Argonne National Laboratory", logo: "assets/sponsors/argonne.png" },
    { name: "Lawrence Livermore National Laboratory", logo: "assets/sponsors/llnl.png" },
    { name: "Harvard University", logo: "assets/sponsors/harvard.png" },
    { name: "MIT", logo: "assets/sponsors/mit.png" },
    { name: "Stanford University", logo: "assets/sponsors/stanford.png" },
    { name: "UC Berkeley", logo: "assets/sponsors/berkeley.png" },
    { name: "Carnegie Mellon University", logo: "assets/sponsors/cmu.png" },
    { name: "Georgia Tech", logo: "assets/sponsors/gatech.png" },
    { name: "Northwestern University", logo: "assets/sponsors/northwestern.png" },
    { name: "University of Southern California", logo: "assets/sponsors/usc.png" },
    { name: "Purdue University", logo: "assets/sponsors/purdue.png" },
    { name: "University of Minnesota", logo: "assets/sponsors/umn.png" },
    { name: "University of Rochester", logo: "assets/sponsors/rochester.png" },
    { name: "Arizona State University", logo: "assets/sponsors/asu.png" },
    { name: "Rutgers University", logo: "assets/sponsors/rutgers.png" },
    { name: "ETH Zurich", logo: "assets/sponsors/eth.png" },
    { name: "EPFL", logo: "assets/sponsors/epfl.svg" },
  ],
};
