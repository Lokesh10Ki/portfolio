import {
  BarChart3,
  BrainCircuit,
  CloudCog,
  Code2,
  Cpu,
  DatabaseZap,
  Layers3,
  ShieldCheck,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export const PROFILE = {
  name: "Lokesh Devaraj",
  role: "Data Engineer",
  tagline: "Building enterprise data platforms for finance, operations, and reporting",
  location: "Chennai, Tamil Nadu, India",
  email: "48lokesh@gmail.com",
  github: "https://github.com/Lokesh10Ki",
  linkedin: "https://www.linkedin.com/in/lokesh-devaraj-data/",
  yearsExperience: 2.7,
  projectsDelivered: 4,
  enterprisePlatforms: 3,
  businessDomains: 4,
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "Experience", to: "/experience" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/skills" },
  { label: "AI Lab", to: "/ai-lab" },
  { label: "Resume", to: "/resume" },
  { label: "Contact", to: "/contact" },
] as const;

export const HERO_STACK = [
  "Databricks",
  "PySpark",
  "Spark SQL",
  "Azure",
  "Azure Data Factory",
  "Power BI",
  "Power Query",
  "Microsoft Fabric",
  "Delta Lake",
  "Mosaic AI",
  "RAG",
  "MCP",
];

export const SKILL_HIGHLIGHTS: Array<{
  name: string;
  label: string;
  icon: LucideIcon;
  accent: string;
}> = [
  { name: "Databricks", label: "Lakehouse pipelines", icon: DatabaseZap, accent: "from-blue-500/25 to-cyan-400/20" },
  { name: "PySpark", label: "Distributed transformations", icon: Cpu, accent: "from-indigo-500/25 to-sky-400/20" },
  { name: "Power BI", label: "Executive reporting", icon: BarChart3, accent: "from-violet-500/25 to-fuchsia-400/20" },
  { name: "Azure Data Factory", label: "Orchestration & ingestion", icon: CloudCog, accent: "from-emerald-500/25 to-teal-400/20" },
  { name: "Microsoft Fabric", label: "Modern analytics estate", icon: Layers3, accent: "from-sky-500/25 to-blue-400/20" },
  { name: "Data Governance", label: "Validation & trust", icon: ShieldCheck, accent: "from-amber-500/25 to-orange-400/20" },
  { name: "Semantic Modeling", label: "Reliable business logic", icon: Layers3, accent: "from-slate-500/25 to-slate-400/20" },
  { name: "AI Analytics", label: "RAG, MCP and copilots", icon: BrainCircuit, accent: "from-pink-500/25 to-rose-400/20" },
  { name: "ETL/ELT", label: "Reliable orchestration", icon: Workflow, accent: "from-cyan-500/25 to-blue-400/20" },
  { name: "Full-Stack Development", label: "Modern web applications", icon: Code2, accent: "from-lime-500/25 to-green-400/20" },
  { name: "Architecture", label: "Medallion + semantic models", icon: Layers3, accent: "from-slate-500/25 to-slate-400/20" },
  { name: "Product Thinking", label: "Business-facing analytics", icon: Sparkles, accent: "from-purple-500/25 to-indigo-400/20" },
];

export const EXPERIENCE = [
  {
    company: "JMAN Group",
    role: "Solutions Enabler (Data Engineer)",
    period: "Jun 2024 — Present",
    location: "Chennai, Tamil Nadu, India",
    overview:
      "Working on an enterprise financial and operational analytics platform supporting 17 business entities, delivering trusted data products for finance, operations and executive reporting.",
    responsibilities: [
      "Design and optimize scalable ETL/ELT pipelines using Databricks, Apache Spark, PySpark, Spark SQL and Delta Lake.",
      "Build enterprise data warehouses, fact and dimension models, star schemas and Power BI semantic models for reporting and analytics.",
      "Implement business logic, data validation, data quality checks, deduplication, SCD Type 2 and pipeline optimization.",
      "Lead revenue reconciliation work for a private equity exit engagement, validating KPI reporting and resolving GRR/NRR discrepancies.",
      "Develop AI-powered analytics experiments using Databricks Mosaic AI, RAG, Claude MCP, Microsoft Fabric and Power BI Copilot.",
    ],
    impact: [
      "Supporting 17 business entities with reliable reporting and analytics workflows.",
      "Built 15+ Power BI dashboards covering revenue, utilisation, contribution, ARR bridge, CLTV and executive KPI reporting.",
      "Improved financial reporting accuracy through reconciliation, validation and production support across enterprise data layers.",
    ],
    tech: ["Databricks", "PySpark", "Spark SQL", "Delta Lake", "Azure", "Power BI", "DAX", "Microsoft Fabric", "RAG"],
    architecture:
      "Medallion lakehouse on Azure Databricks → curated Delta tables → semantic marts → Power BI dashboards and AI-assisted analytics workflows.",
    lessons:
      "Enterprise value comes from dependable data products, not just clever pipelines.",
  },
  {
    company: "JMAN Group",
    role: "Senior Software Engineer",
    period: "Apr 2025 — Mar 2026",
    location: "Chennai, Tamil Nadu, India",
    overview:
      "Specialized in enterprise data engineering by designing scalable ETL pipelines, dimensional data models and analytics solutions for financial and operational reporting.",
    responsibilities: [
      "Designed and maintained Spark-based ETL pipelines using Databricks and PySpark.",
      "Built dimensional data models and implemented business logic for reporting and analytics.",
      "Developed reusable Power BI semantic models and standardized reporting frameworks.",
      "Contributed to Microsoft Fabric and Power BI Copilot initiatives by enriching dataset metadata and evaluating AI-assisted report generation.",
    ],
    impact: [
      "Built trusted data products supporting executive reporting and operational analytics.",
      "Improved reporting accuracy through validation, reconciliation and debugging work.",
      "Helped strengthen the reporting foundation for finance and business stakeholders.",
    ],
    tech: ["Databricks", "Apache Spark", "PySpark", "Spark SQL", "SQL", "Delta Lake", "Azure", "Power BI", "Microsoft Fabric"],
    architecture:
      "Databricks jobs → Delta-based curated layers → semantic models → Power BI and Fabric reporting surfaces.",
    lessons:
      "The strongest analytics foundation is one that remains easy to trust and easy to evolve.",
  },
  {
    company: "JMAN Group",
    role: "Software Engineer",
    period: "Jun 2024 — Mar 2025",
    location: "Chennai, Tamil Nadu, India",
    overview:
      "Contributed to enterprise business applications supporting financial data collection, document management, workflow automation and reporting.",
    responsibilities: [
      "Developed responsive frontend applications using modern JavaScript frameworks.",
      "Built scalable backend services and REST APIs supporting enterprise workflows.",
      "Integrated Azure Blob Storage for secure document management and version-controlled file storage.",
      "Implemented authentication, RBAC, audit logging and workflow automation features.",
    ],
    impact: [
      "Delivered secure, reliable business applications aligned with reporting workflows.",
      "Improved document handling and data collection processes for internal teams.",
      "Strengthened the engineering foundation for downstream analytics work.",
    ],
    tech: ["React", "Next.js", "TypeScript", "JavaScript", "NestJS", "Node.js", "PostgreSQL", "Prisma", "Azure Blob Storage"],
    architecture:
      "React and Next.js UI → NestJS APIs → PostgreSQL persistence → Azure Blob Storage for documents and files.",
    lessons:
      "Great data products start with good user flow and clean backend primitives.",
  },
  {
    company: "JMAN Group",
    role: "Software Intern",
    period: "Jan 2024 — May 2024",
    location: "Chennai, Tamil Nadu, India",
    overview:
      "Completed structured training across software engineering, data engineering, cloud technologies and business intelligence while contributing to internal engineering assignments.",
    responsibilities: [
      "Built internal assignments using Azure Data Factory, SQL and modern web technologies.",
      "Developed automation and web scraping solutions using Python, Selenium, Playwright and Beautiful Soup.",
      "Gained practical exposure to ETL concepts, database design and cloud services.",
      "Designed UI prototypes and user experiences with Figma while collaborating on engineering exercises.",
    ],
    impact: [
      "Built a strong engineering foundation across cloud, data and full-stack delivery.",
      "Strengthened my understanding of ETL processes and analytics workflows.",
      "Opened the path into enterprise data engineering work.",
    ],
    tech: ["Azure Data Factory", "SQL", "Azure", "Python", "Selenium", "Playwright", "Beautiful Soup", "React", "Node.js"],
    architecture:
      "Training-led engineering work → Azure data workflows → SQL and automation utilities → web-based prototypes.",
    lessons:
      "Curiosity and disciplined practice matter as much as technical depth in the early stages.",
  },
  {
    company: "Simtrak Solutions",
    role: "Web Development Intern",
    period: "Nov 2022 — Apr 2023",
    location: "Kolkata, West Bengal, India",
    overview:
      "Completed a remote web development internship where I contributed to web applications while strengthening my understanding of full-stack software engineering.",
    responsibilities: [
      "Developed responsive user interfaces using modern JavaScript frameworks.",
      "Assisted in backend development, API integration and database operations.",
      "Built and tested application features while debugging and resolving issues.",
      "Worked with Git and followed Agile development practices.",
    ],
    impact: [
      "Built practical software engineering experience in full-stack delivery.",
      "Learned how to ship and iterate on features in a team setting.",
      "Developed the habits that later translated well into data engineering work.",
    ],
    tech: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Node.js", "FastAPI", "Python", "PostgreSQL"],
    architecture:
      "React interfaces → backend APIs → PostgreSQL persistence → test-driven iteration with Git.",
    lessons:
      "Consistent delivery and clear collaboration matter just as much as writing good code.",
  },
];

export const PROJECTS = [
  {
    slug: "ai-analytics-assistant-poc",
    name: "AI Analytics Assistant (POC)",
    tagline: "Grounded AI experiments for enterprise reporting and analytics workflows.",
    problem:
      "Analytics teams needed faster ways to explore reporting questions, metadata and DAX logic without losing confidence in the data.",
    solution:
      "Built an AI-assisted analytics proof of concept using Databricks Mosaic AI, RAG, Claude MCP, Microsoft Fabric and Power BI to support semantic model enhancement, documentation, metadata generation and DAX measure development.",
    architecture:
      "Enterprise context + reporting metadata → retrieval layer → LLM reasoning → validated insights and follow-up questions.",
    stack: ["Databricks Mosaic AI", "Claude", "OpenAI", "RAG", "Microsoft Fabric", "Power BI"],
    impact: [
      "Improved productivity for analytics engineering work",
      "Faster exploration of reporting questions",
      "Clearer path for AI-assisted analytics adoption",
    ],
    challenges:
      "Making AI useful for finance and operations reporting without compromising rigor or trust.",
    lessons:
      "The moat is context, governance and evaluation, not the model alone.",
    github: "https://github.com/Lokesh10Ki",
  },
  {
    slug: "revenue-reconciliation-private-equity-exit",
    name: "Revenue Reconciliation & Private Equity Exit Analytics",
    tagline: "Financial reconciliation and KPI validation for a high-stakes exit engagement.",
    problem:
      "A private equity exit engagement required accurate revenue and KPI validation across multiple enterprise systems under tight review timelines.",
    solution:
      "Developed reconciliation workflows and financial fact models that validated revenue calculations, resolved GRR/NRR discrepancies and delivered trusted executive reporting for finance leadership.",
    architecture: "Source systems → reconciliation logic → curated financial models → executive reporting and due diligence outputs.",
    stack: ["Databricks", "PySpark", "SQL", "Power BI", "Delta Lake"],
    impact: [
      "Improved financial reporting accuracy",
      "Helped resolve GRR/NRR reporting discrepancies",
      "Built a reliable reconciliation framework for executive stakeholders",
    ],
    challenges:
      "Validating KPIs across fragmented source systems while maintaining clarity and auditability under pressure.",
    lessons:
      "Financial trust is built through disciplined reconciliation and transparent logic.",
    github: "https://github.com/Lokesh10Ki",
  },
  {
    slug: "enterprise-financial-operational-analytics-platform",
    name: "Enterprise Financial & Operational Analytics Platform",
    tagline: "Trusted reporting and analytics platform supporting 17 business entities.",
    problem:
      "Finance and operations teams needed a scalable way to centralize data, deliver executive reporting and support operational analytics across 17 business entities.",
    solution:
      "Designed a Databricks-based Medallion lakehouse with dimensional data models, semantic layers and enterprise data pipelines powering executive dashboards, revenue reconciliation, utilisation analysis and client performance reporting.",
    architecture:
      "Source systems → ingestion and transformation in Databricks → curated Delta tables → semantic marts → Power BI dashboards and reporting surfaces.",
    stack: ["Databricks", "PySpark", "Spark SQL", "Delta Lake", "Azure", "Power BI", "Fivetran"],
    impact: [
      "Trusted reporting layer for 17 business entities",
      "Scalable foundation for financial and operational analytics",
      "Improved KPI visibility for business and finance teams",
    ],
    challenges:
      "Balancing business-specific reporting logic with a platform that could remain scalable and maintainable over time.",
    lessons:
      "Reliable business logic beats flashy dashboards when the goal is operational trust.",
    github: "https://github.com/Lokesh10Ki",
  },
  {
    slug: "private-equity-data-platform",
    name: "Private Equity Data Platform",
    tagline: "Cloud-based platform for secure financial submissions, document management and reporting workflows.",
    problem:
      "Portfolio companies needed a more secure and structured way to manage financial submissions, document versions and reporting workflows.",
    solution:
      "Built a workflow-driven platform with secure document handling, role-based access, audit logging and reporting support.",
    architecture: "React UI → NestJS APIs → PostgreSQL → Azure Blob Storage for documents and workflow state.",
    stack: ["React", "Next.js", "TypeScript", "NestJS", "Node.js", "PostgreSQL", "Azure Blob Storage"],
    impact: [
      "Streamlined financial data collection",
      "Improved auditability and document control",
      "Better support for reporting operations",
    ],
    challenges:
      "Designing a system that was robust enough for business operations while still remaining maintainable for a small engineering team.",
    lessons:
      "Operational software becomes valuable when it removes friction without adding noise.",
    github: "https://github.com/Lokesh10Ki",
  },
];

export const SKILL_GRAPH = {
  categories: [
    { id: "data", label: "Data Engineering", color: "#2563EB" },
    { id: "cloud", label: "Cloud", color: "#38BDF8" },
    { id: "analytics", label: "Analytics", color: "#8B5CF6" },
    { id: "backend", label: "Backend", color: "#10B981" },
    { id: "frontend", label: "Frontend", color: "#F59E0B" },
    { id: "ai", label: "AI", color: "#EC4899" },
  ],
  nodes: [
    { id: "databricks", label: "Databricks", cat: "data", related: ["pyspark", "delta", "sql", "sparksql", "adf", "azure", "mosaic", "fabric"] },
    { id: "pyspark", label: "PySpark", cat: "data", related: ["databricks", "delta", "sql", "sparksql", "python", "adf"] },
    { id: "delta", label: "Delta Lake", cat: "data", related: ["databricks", "pyspark", "sparksql", "medallion", "sql"] },
    { id: "sql", label: "SQL", cat: "data", related: ["databricks", "pyspark", "powerbi", "dax", "modeling", "semantic", "python"] },
    { id: "sparksql", label: "Spark SQL", cat: "data", related: ["databricks", "pyspark", "delta", "sql"] },
    { id: "modeling", label: "Dimensional Modeling", cat: "data", related: ["sql", "semantic", "scd2", "medallion"] },
    { id: "scd2", label: "SCD Type 2", cat: "data", related: ["modeling", "medallion", "delta"] },
    { id: "medallion", label: "Medallion Architecture", cat: "data", related: ["delta", "modeling", "fabric", "scd2"] },
    { id: "fivetran", label: "Fivetran", cat: "data", related: ["databricks", "azure", "powerbi"] },
    { id: "azure", label: "Azure", cat: "cloud", related: ["databricks", "adf", "adls", "keyvault", "fabric", "powerbi", "fivetran"] },
    { id: "adf", label: "Azure Data Factory", cat: "cloud", related: ["azure", "adls", "keyvault", "databricks", "pyspark"] },
    { id: "adls", label: "Azure Data Lake Storage", cat: "cloud", related: ["azure", "adf", "keyvault", "databricks"] },
    { id: "keyvault", label: "Azure Key Vault", cat: "cloud", related: ["azure", "adf", "adls", "governance"] },
    { id: "fabric", label: "Microsoft Fabric", cat: "cloud", related: ["azure", "powerbi", "semantic", "medallion", "mcp", "mosaic"] },
    { id: "governance", label: "Data Governance", cat: "cloud", related: ["keyvault", "rls", "fabric", "medallion"] },
    { id: "powerbi", label: "Power BI", cat: "analytics", related: ["sql", "azure", "dax", "powerquery", "rls", "fabric", "semantic"] },
    { id: "dax", label: "DAX", cat: "analytics", related: ["powerbi", "sql", "semantic"] },
    { id: "powerquery", label: "Power Query", cat: "analytics", related: ["powerbi", "semantic", "rls"] },
    { id: "semantic", label: "Semantic Modeling", cat: "analytics", related: ["powerbi", "dax", "powerquery", "modeling", "rls", "fabric"] },
    { id: "rls", label: "Row-Level Security", cat: "analytics", related: ["powerbi", "semantic", "governance"] },
    { id: "python", label: "Python", cat: "backend", related: ["pyspark", "fastapi", "sql"] },
    { id: "fastapi", label: "FastAPI", cat: "backend", related: ["python", "react", "postgres"] },
    { id: "postgres", label: "PostgreSQL", cat: "backend", related: ["fastapi", "node"] },
    { id: "node", label: "Node.js", cat: "backend", related: ["typescript", "nest", "postgres"] },
    { id: "nest", label: "NestJS", cat: "backend", related: ["node", "typescript"] },
    { id: "typescript", label: "TypeScript", cat: "frontend", related: ["react", "next", "node"] },
    { id: "react", label: "React", cat: "frontend", related: ["typescript", "next", "fastapi"] },
    { id: "next", label: "Next.js", cat: "frontend", related: ["react", "typescript"] },
    { id: "mosaic", label: "Mosaic AI", cat: "ai", related: ["databricks", "claude", "openai", "rag", "mcp", "fabric"] },
    { id: "claude", label: "Claude", cat: "ai", related: ["mosaic", "rag", "mcp"] },
    { id: "openai", label: "OpenAI", cat: "ai", related: ["mosaic", "rag", "mcp"] },
    { id: "rag", label: "RAG", cat: "ai", related: ["claude", "openai", "mosaic", "mcp"] },
    { id: "mcp", label: "MCP", cat: "ai", related: ["mosaic", "claude", "openai", "rag", "fabric"] },
    { id: "copilot", label: "Copilot", cat: "ai", related: ["powerbi", "fabric", "mcp", "openai"] },
  ],
} as const;

export const AI_LAB = [
  {
    name: "Databricks Mosaic AI",
    tagline: "Enterprise-grade model serving and vector search on the lakehouse.",
    architecture: "Delta tables → embeddings → Vector Search → Model Serving → governed RAG apps.",
    tags: ["Serving", "Vector Search", "Governance"],
  },
  {
    name: "Claude",
    tagline: "Long-context reasoning for analytics copilots.",
    architecture: "Tool-use loop → SQL validator → catalog grounding → cited answer.",
    tags: ["Tool use", "Long context"],
  },
  {
    name: "OpenAI",
    tagline: "Structured outputs for deterministic pipelines.",
    architecture: "Function calling → JSON schema → typed downstream tasks.",
    tags: ["Structured", "Embeddings"],
  },
  {
    name: "RAG",
    tagline: "Retrieval-augmented generation grounded in the metric catalog.",
    architecture: "Docs + metrics + lineage → embeddings → hybrid retrieval → re-rank → generate → cite.",
    tags: ["Hybrid retrieval", "Evals"],
  },
  {
    name: "Power BI MCP",
    tagline: "Model Context Protocol server exposing certified metrics to LLMs.",
    architecture: "Power BI XMLA → MCP tools → agent orchestration → answer + drill-down link.",
    tags: ["MCP", "Agents"],
  },
];

export const RESUME = {
  summary:
    "Data Engineer with 2+ years building enterprise ETL pipelines, data warehouses and financial analytics solutions for finance and operations. Currently working on a platform that supports 17 business entities and powers executive reporting, reconciliation and KPI analytics across the business.",
  skills: [
    "Databricks",
    "PySpark",
    "Spark SQL",
    "SQL",
    "Delta Lake",
    "Azure Data Lake Storage Gen2",
    "Azure Blob Storage",
    "Azure Data Factory",
    "Azure Key Vault",
    "Power BI",
    "DAX",
    "Power Query",
    "Row-Level Security",
    "Microsoft Fabric",
    "Fivetran",
    "Python",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "REST APIs",
    "PostgreSQL",
    "Git",
    "Docker",
    "Databricks Mosaic AI",
    "RAG",
    "Claude MCP",
    "OpenAI API",
    "Data Quality",
    "Data Governance",
    "Dimensional Modeling",
    "SCD Type 2",
    "Medallion Architecture",
  ],
  education: [
    {
      school: "Easwari Engineering College(SRM Group)",
      degree: "Bachelor of Technology - BTech, Information Technology",
      period: "2020 – 2024",
      note: "Grade: 91%",
    },
  ],
  certifications: [],
};
