export const Bio = {
  name: "Ajith Kumar Karudasevai",
  roles: [
    "Backend Engineer @ Healthcare SaaS",
    "Cloud & Distributed Systems Specialist",
    "Node.js & TypeScript Architect",
    "Database Optimization Specialist",
    "Open Source & Systems Developer",
  ],
  description:
    "I am a backend engineer with ~2 years of experience building production systems for healthcare SaaS. Most of my work centers around Node.js, TypeScript, DocumentDB/MongoDB, and AWS. At The Valor Solution, I co-designed an in-house Form Builder to eliminate a third-party subscription, built automated fax routing workflows, and re-architected DocumentDB aggregations to cut query latency from 26s down to 19s. Beyond cloud backends, I build developer tools and write systems software in C and Rust.",
  github: "https://github.com/ajithakdev",
  resume:
    "https://drive.google.com/file/d/1wRL9EOVKFSNDiz4joeYTZPBe9S3hno0D/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/ajithakdev/",
  twitter: "https://x.com/ajithakdev",
  email: "cseajithak@gmail.com",
  telemetry: [
    { label: "Production Experience", value: "2+ Years" },
    { label: "Pipeline Latency Reduction", value: "26s ➔ 19s" },
    { label: "Client-Side Dev Tools", value: "9 Built (toolglass)" },
    { label: "Infrastructure Managed", value: "150+ Systems" },
  ],
};

export const skills = [
  {
    title: "Backend & Cloud Architecture",
    skills: [
      {
        name: "Node.js",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "TypeScript",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      },
      {
        name: "Express.js",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
      },
      {
        name: "REST APIs",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg",
      },
      {
        name: "OpenAPI / Swagger",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/swagger/swagger-original.svg",
      },
      {
        name: "Amazon S3",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      },
      {
        name: "Amazon SQS",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      },
      {
        name: "AWS Lambda",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      },
      {
        name: "Workflow Orchestration",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/apachekafka/apachekafka-original.svg",
      },
    ],
  },
  {
    title: "Databases & Query Optimization",
    skills: [
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "Amazon DocumentDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      },
      {
        name: "Aggregation Pipelines",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "Query Optimization",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "TypeORM",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      },
      {
        name: "Batch Processing",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg",
      },
    ],
  },
  {
    title: "Languages & Systems",
    skills: [
      {
        name: "TypeScript",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      },
      {
        name: "JavaScript (ES6+)",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      },
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "Rust",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/rust/rust-original.svg",
      },
      {
        name: "C",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
      },
      {
        name: "Linux / Bash",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
      },
    ],
  },
  {
    title: "DevOps, Security & Tooling",
    skills: [
      {
        name: "Docker",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
      },
      {
        name: "GitHub Actions CI/CD",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/githubactions/githubactions-original.svg",
      },
      {
        name: "AWS Secrets Manager",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      },
      {
        name: "pytest & Mocking",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/pytest/pytest-original.svg",
      },
      {
        name: "Git",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
      },
      {
        name: "Postman",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/postman/postman-original.svg",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    role: "Junior Software Developer",
    company: "The Valor Solution",
    date: "Jan 2025 – Present",
    desc: "Co-designed and shipped our in-house Form Builder platform to replace a paid third-party vendor, covering dynamic validation, presigned S3 uploads, and SQS-driven EMR workflows. Built a business-hours-aware fax routing service with RingCentral APIs and retries. Re-engineered DocumentDB aggregations, dropping our patient-list pipeline latency from 26s to 19s and moving high-volume jobs to paginated batches to prevent OOM errors. Hardened multi-tenant API security and introduced pytest CI quality gates.",
    skills: [
      "Node.js",
      "TypeScript",
      "Express.js",
      "MongoDB",
      "Amazon DocumentDB",
      "AWS (S3, SQS, SES, Lambda, CloudWatch)",
      "Docker",
      "GitHub Actions",
      "pytest",
    ],
  },
  {
    id: 1,
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    role: "Jr. MERN Stack Developer Intern",
    company: "The Valor Solution",
    date: "Oct 2024 – Dec 2024",
    desc: "Contributed to backend API development, bug fixes, and MongoDB schemas in Node.js and TypeScript. Earned a full-time Junior Software Developer promotion after consistently delivering production features and clean code.",
    skills: [
      "Node.js",
      "TypeScript",
      "MongoDB",
      "REST APIs",
      "Express.js",
      "Git",
    ],
  },
  {
    id: 2,
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
    role: "Student Technical Mentor",
    company: "Anna University Regional Campus Madurai",
    date: "Aug 2022 – Jun 2024",
    desc: "Maintained 150+ computer systems across 3 university labs. Supported students and faculty with Linux and Windows administration, network troubleshooting, and day-to-day lab infrastructure.",
    skills: [
      "Linux Administration",
      "Networking",
      "System Diagnostics",
      "Windows",
      "Infrastructure Reliability",
    ],
  },
  {
    id: 3,
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/google/google-original.svg",
    role: "Community Volunteer",
    company: "Google Developer Groups (GDG & GDG Cloud Madurai)",
    date: "Oct 2022 – Apr 2024",
    desc: "Volunteered with GDG and GDG Cloud Madurai, helping organize DevFest and Cloud Community Day for 500+ attendees.",
    skills: [
      "Community Engagement",
      "Technical Coordination",
      "Developer Relations",
      "Event Operations",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: "/university.svg",
    school: "Anna University Regional Campus, Madurai",
    date: "Nov 2020 – May 2024",
    grade: "8.47 CGPA",
    desc: "Graduated with a Bachelor of Engineering in Computer Science and Engineering with First Class Honors (CGPA: 8.47). Deep coursework in Data Structures & Algorithms, Distributed Systems, DBMS, Operating Systems, Computer Networks, and Machine Learning.",
    degree: "Bachelor of Engineering (B.E.) — Computer Science and Engineering",
  },
  {
    id: 1,
    img: "/school.svg",
    school: "Sri Vidya Mandir Matric. Hr. Sec. School",
    date: "Jun 2018 – Mar 2020",
    grade: "81%",
    desc: "Higher Secondary Certificate (HSC) in Science with Mathematics and Biology.",
    degree: "Higher Secondary Certificate (XII)",
  },
];

export const projects = [
  {
    id: 101,
    title: "Enterprise Form Builder Platform",
    date: "Jan 2025 – Present",
    description:
      "I co-designed and shipped our in-house Form Builder platform to replace a costly third-party form tool. Built dynamic schema validation, secure S3 uploads with presigned URLs, reporting endpoints, and queue-driven EMR workflows using Amazon SQS.",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    tags: [
      "Node.js",
      "TypeScript",
      "Express.js",
      "MongoDB",
      "AWS S3",
      "AWS SQS",
      "EMR Integration",
    ],
    category: "production",
    github: "https://github.com/ajithakdev",
    webapp: "https://github.com/ajithakdev",
  },
  {
    id: 102,
    title: "Intelligent Fax Routing & Automation System",
    date: "Jan 2025 – Present",
    description:
      "Built a resilient automated fax routing and forwarding system. It factors in business hours, manages automatic retries, handles configurable multi-tenant rules, and hooks into RingCentral APIs and scheduled cron jobs.",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    tags: [
      "TypeScript",
      "Node.js",
      "RingCentral APIs",
      "AWS SQS",
      "AWS SES",
      "Cron Jobs",
      "Workflow Orchestration",
    ],
    category: "production",
    github: "https://github.com/ajithakdev",
    webapp: "https://github.com/ajithakdev",
  },
  {
    id: 103,
    title: "DocumentDB Aggregation & Latency Optimization",
    date: "Jan 2025 – Present",
    description:
      "Re-engineered patient reporting and query patterns during our MongoDB to DocumentDB migration. Replaced full-collection scans with compound ESR indexes and swapped runaway pipelines with paginated batches, dropping patient-list latency from 26s down to 19s.",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
    tags: [
      "Amazon DocumentDB",
      "MongoDB",
      "Aggregation Pipelines",
      "Index Tuning",
      "Batch Processing",
      "Performance Optimization",
    ],
    category: "production",
    github: "https://github.com/ajithakdev",
    webapp: "https://github.com/ajithakdev",
  },
  {
    id: 104,
    title: "toolglass — Frosted Developer Utilities Suite",
    date: "Sep 2024 – Present",
    description:
      "I built a clean, frosted developer utility suite that runs 100% client-side in the browser. Includes 9 daily tools: JWT debugger, UUID, ObjectId, NanoID, cryptographic hashes, Base64, timestamp converter, and JSON formatter.",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    tags: [
      "React 18",
      "TypeScript 5",
      "Vite 5",
      "Tailwind CSS",
      "Client-Side Privacy",
      "Netlify CI",
    ],
    category: "open source",
    github: "https://github.com/ajithakdev/toolglass",
    webapp: "https://ajithakdev.github.io/toolglass/",
  },
  {
    id: 105,
    title: "MeterX & meterx-server — Network Telemetry Extension",
    date: "May 2025 – Present",
    description:
      "An open-source network speed test extension for Firefox and Edge, backed by Cloudflare\x27s edge network. Measures download, upload, latency, jitter, and packet loss with live status badges and streaming/gaming readiness checks.",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    tags: [
      "TypeScript",
      "WebExtensions API",
      "Cloudflare Edge",
      "Network Telemetry",
      "AGPL-3.0",
    ],
    category: "open source",
    github: "https://github.com/ajithakdev/meterx-server",
    webapp: "https://github.com/ajithakdev/meterx-server",
  },
  {
    id: 106,
    title: "clip-paste — COSMIC Desktop Clipboard Manager",
    date: "Jul 2026",
    description:
      "An auto-pasting clipboard manager applet written in Rust for System76\x27s COSMIC desktop (Pop!_OS). It monitors clipboard history and pastes selected snippets directly to your active window cursor without manual Ctrl+V.",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/rust/rust-original.svg",
    tags: ["Rust", "COSMIC Desktop", "Pop!_OS", "Wayland", "Systems Programming"],
    category: "systems",
    github: "https://github.com/ajithakdev/clip-paste",
    webapp: "https://github.com/ajithakdev/clip-paste",
  },
  {
    id: 107,
    title: "CNoBS — Visual Reverse C Programming Curriculum",
    date: "May 2026",
    description:
      "An interactive, reverse-teaching C curriculum built for people who learn by breaking things: see output ➔ guess ➔ reveal ➔ break it. Includes ASCII memory diagrams and automated CI compile-checks.",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
    tags: ["C", "GCC", "GitHub Actions CI", "Systems Education", "GPL-3.0"],
    category: "systems",
    github: "https://github.com/ajithakdev/CNoBS",
    webapp: "https://github.com/ajithakdev/CNoBS",
  },
];
