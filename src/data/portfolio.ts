import { BrainCircuit, Compass, Handshake, Network, Rocket, type LucideIcon } from "lucide-react";

export const SITE_URL = "https://portfolio-two-pearl-h5t7nl3jfu.vercel.app";

export function absoluteUrl(path: string) {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}

export const PROFILE = {
  name: "Lokesh Devaraj",
  role: "Data Engineer",
  currentCompany: "Presidio",
  tagline:
    "Designing Lakehouse platforms that turn messy, multi-source business data into trusted analytics",
  location: "Chennai, Tamil Nadu, India",
  email: "48lokesh@gmail.com",
  github: "https://github.com/Lokesh10Ki",
  githubHandle: "Lokesh10Ki",
  linkedin: "https://www.linkedin.com/in/lokesh-devaraj-data/",
  linkedinHandle: "lokesh-devaraj-data",
  resumePdf: "/resume.pdf",
  yearsExperience: "2.5+",
  certification: {
    name: "Databricks Certified Data Engineer Associate",
    issuer: "Databricks",
    url: "https://credentials.databricks.com/96d11a5a-1ab6-4a67-a7ce-85429519e696#acc.vTFL9eKh",
  },
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
  "Delta Lake",
  "Unity Catalog",
  "Azure",
  "AWS",
  "Terraform",
  "Power BI",
  "Mosaic AI · RAG",
];

/** Headline numbers, all taken from the resume. */
export const KEY_METRICS = [
  { value: "17", label: "Business entities on one Lakehouse" },
  { value: "10+", label: "Source systems integrated" },
  { value: "5×", label: "Faster queries from dimensional models" },
  { value: "~70%", label: "Less report review effort with an AI agent" },
];

export const STRENGTHS: Array<{ title: string; body: string; icon: LucideIcon }> = [
  {
    title: "I own delivery, not just tickets",
    body: "I look ahead at what a deliverable will need later, so I can spot blockers and dependencies early and clear them before they slow the team down. I'm usually the person who unblocks things.",
    icon: Rocket,
  },
  {
    title: "Design and architecture first",
    body: "I start with the model before writing pipelines: Medallion layers, fact and dimension design, governance boundaries. That's where the 5× query speed-up on the financial platform came from.",
    icon: Network,
  },
  {
    title: "Turning vague asks into clear requirements",
    body: "I work directly with business, finance and executive stakeholders to turn unclear reporting needs into reliable data solutions. I learn the client's business first, then solve the actual problem.",
    icon: Handshake,
  },
  {
    title: "Connecting the dots",
    body: "During a private equity exit, connecting the dots across source systems is how I traced and fixed critical GRR/NRR discrepancies. The team came to rely on me as its main person for business logic and data quality.",
    icon: Compass,
  },
  {
    title: "Bringing AI into data engineering",
    body: "I build AI where it removes real effort: a RAG solution on Databricks Mosaic AI, a Claude MCP agent that cut Power BI review effort by ~70%, and an agentic skill that turns client documents into a full engagement playbook.",
    icon: BrainCircuit,
  },
];

export const RECOGNITION = [
  "Certificate of Appreciation from the CTO for contributions across strategic data engineering and analytics initiatives",
  "Recognised as the team's primary resource for business logic and data quality",
  "Trusted to work directly with business, finance and executive stakeholders",
];

export type Highlight = { title?: string; body: string };

export type Engagement = {
  name: string;
  context?: string;
  stack: string[];
  highlights: Highlight[];
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  internship?: boolean;
  /** Titles held at this company, earliest first. */
  progression?: Array<{ title: string; period: string }>;
  overview: string;
  engagements: Engagement[];
  architecture?: string;
};

export const EXPERIENCE: Experience[] = [
  {
    company: "Presidio",
    role: "Data Engineer",
    period: "Aug 2026 — Present",
    location: "Chennai, India",
    current: true,
    overview:
      "Moving an enterprise Databricks Lakehouse from Azure to AWS. The work covers re-platforming storage, Unity Catalog governance, automated data-parity checks and Terraform-based CI/CD. Through Presidio's AI400 program I also built agentic systems and delivered a use case end to end the AI-driven way.",
    engagements: [
      {
        name: "Azure to AWS Databricks Migration",
        stack: [
          "Databricks",
          "Unity Catalog",
          "PySpark",
          "AWS S3",
          "IAM",
          "Terraform",
          "Databricks Asset Bundles",
        ],
        highlights: [
          {
            title: "Platform re-architecture",
            body: "Migrating an enterprise Databricks Lakehouse from Azure to AWS: re-platforming ADLS Gen2 storage to Amazon S3 and refactoring PySpark / Spark SQL notebooks, jobs, DBFS mounts and orchestration into Databricks Workflows on the AWS workspace.",
          },
          {
            title: "Unity Catalog governance",
            body: "Migrated workspace objects to Unity Catalog, configuring catalogs, schemas, external locations and storage credentials backed by AWS IAM roles, with fine-grained access controls.",
          },
          {
            title: "Validation & cutover",
            body: "Built automated source-to-target reconciliation (row counts, schema checks and aggregate/checksum comparisons) and ran parallel Azure–AWS runs to confirm data parity ahead of production cutover.",
          },
          {
            title: "IaC & CI/CD",
            body: "Provisioned workspace resources with Terraform and deployed jobs through Databricks Asset Bundles in CI/CD pipelines, enabling repeatable promotions across dev, test and prod.",
          },
        ],
      },
      {
        name: "AI400: AI-Driven Development Lifecycle (AIDLC)",
        context: "Presidio training program",
        stack: ["LangGraph", "LangSmith", "Agentic AI", "AIDLC"],
        highlights: [
          {
            title: "Agentic systems",
            body: "Learned to build agentic systems with LangGraph, using LangSmith for tracing and observability.",
          },
          {
            title: "AI-driven delivery, end to end",
            body: "Took a given use case through the full lifecycle with AI at every stage: discovery, design, architecture, development, QA, DevOps and consulting.",
          },
          {
            title: "Engagement discovery skill",
            body: "Built an AI skill that reads client documents and call transcripts to run discovery, design, scoping and architecture, surfaces the unknowns in an engagement, and produces a complete engagement playbook with scope, a client presentation and a design & architecture document.",
          },
        ],
      },
    ],
    architecture:
      "ADLS Gen2 → Amazon S3 → Unity Catalog (IAM-backed external locations) → Databricks Workflows → reconciliation checks → production cutover",
  },
  {
    company: "JMAN Group",
    role: "Data Engineer (Solutions Enabler)",
    period: "Jan 2024 — Jul 2026",
    location: "Chennai, India",
    progression: [
      { title: "Software Intern", period: "Jan 2024 — May 2024" },
      { title: "Software Engineer", period: "Jun 2024 — Mar 2025" },
      { title: "Senior Software Engineer", period: "Apr 2025 — Mar 2026" },
      { title: "Solutions Enabler", period: "Apr 2026 — Jul 2026" },
    ],
    overview:
      "Progressed from Software Intern to Solutions Enabler, moving from full-stack engineering into data engineering. Built and owned a financial analytics Lakehouse for a professional services group of 17 companies, led revenue reconciliation for a private equity exit, and built AI proofs of concept on Databricks Mosaic AI and Claude MCP.",
    engagements: [
      {
        name: "Financial Analytics Platform",
        context: "17-entity professional services group",
        stack: [
          "Databricks",
          "PySpark",
          "Spark SQL",
          "Delta Lake",
          "Azure ADLS Gen2",
          "Power BI",
          "Power Automate",
        ],
        highlights: [
          {
            title: "Lakehouse engineering",
            body: "Developed and optimized ETL/ELT pipelines across a Medallion Lakehouse (Bronze, Silver, Gold), integrating data from 10+ source systems into a centralized platform across 17 business entities.",
          },
          {
            title: "Data modelling",
            body: "Designed fact–dimension models for revenue, utilisation and contribution reporting, improving query performance by 5× while enhancing data quality through schema validation, deduplication and SCD Type 2.",
          },
          {
            title: "Business logic ownership",
            body: "Owned the implementation and validation of financial business logic across Spark pipelines and Power BI semantic models, partnering with business stakeholders on KPI accuracy.",
          },
          {
            title: "Revenue reconciliation & PE exit support",
            body: "Led revenue reconciliation for a private equity exit by building fact models, validating financial KPIs and delivering trusted reporting for due diligence. Identified and resolved critical GRR/NRR discrepancies.",
          },
          {
            title: "Power BI delivery",
            body: "Built 15+ Power BI dashboards covering GRR/NRR, ARR Bridge, CLTV, employee utilisation, contribution and client performance, with Row-Level Security for secure enterprise reporting.",
          },
          {
            title: "Report automation",
            body: "Automated emailing of Power BI reports as PDFs using Power Automate.",
          },
          {
            title: "Team leadership",
            body: "Led a 3-member engineering team onboarding 2 new client entities into the live platform, reducing ramp-up time by 50% through structured documentation.",
          },
          {
            title: "Data lifecycle management",
            body: "Implemented automated data validation, reconciliation and quality checks across reporting pipelines, significantly reducing recurring data quality issues.",
          },
        ],
      },
      {
        name: "AI-Enhanced Analytics Initiative (POC)",
        stack: [
          "Databricks Mosaic AI",
          "RAG",
          "Vector Search",
          "Claude MCP",
          "LangChain",
          "Power BI",
        ],
        highlights: [
          {
            title: "RAG on Databricks Mosaic AI",
            body: "Built an end-to-end RAG solution: document ingestion, chunking, embedding generation, Databricks Vector Search, semantic retrieval and LLM grounding for natural-language querying over enterprise financial data. Also explored natural-language-to-SQL generation with foundation models.",
          },
          {
            title: "Power BI AI Review Agent",
            body: "Developed an agent using Claude MCP that automated semantic model validation, DAX development and review, metadata generation and documentation, reducing report review effort by ~70%.",
          },
          {
            title: "Fabric & Copilot adoption",
            body: "Evaluated and supported adoption of Microsoft Fabric and Power BI Copilot, enabling natural-language DAX generation and reducing visualisation creation time by 60%.",
          },
        ],
      },
      {
        name: "Equiflow — Private Equity Data Platform",
        context: "Full stack",
        stack: [
          "React",
          "Next.js",
          "Node.js",
          "NestJS",
          "PostgreSQL",
          "Azure Blob Storage",
          "OpenAI API",
          "Docker",
        ],
        highlights: [
          {
            body: "Built a multi-tenant platform on Azure Blob Storage managing versioned financial documents with RBAC, audit logging and a submission lifecycle state machine (Draft → Submitted → Approved).",
          },
          {
            body: "Developed NestJS REST APIs on PostgreSQL supporting concurrent users, with Microsoft SSO, role-based access control and file versioning with conflict resolution.",
          },
          {
            body: "Engineered an AI analytics feature that parsed uploaded financial spreadsheets to generate interactive dashboards, chart configurations and natural-language insights via the OpenAI API.",
          },
        ],
      },
      {
        name: "Software Internship",
        context: "Jan — May 2024",
        stack: [
          "Azure Data Factory",
          "SQL",
          "Python",
          "Selenium",
          "Playwright",
          "BeautifulSoup",
          "Figma",
        ],
        highlights: [
          {
            body: "Completed structured training across data engineering, business intelligence, cloud fundamentals, networking, DevOps and full-stack development.",
          },
          {
            body: "Built internal assignments with Azure Data Factory and SQL, gaining hands-on experience with ETL concepts and database design.",
          },
          {
            body: "Developed web automation and scraping solutions in Python using Selenium, Playwright and BeautifulSoup.",
          },
        ],
      },
    ],
    architecture:
      "10+ source systems → Bronze → Silver → Gold (Delta Lake on Azure Databricks) → fact & dimension models → Power BI semantic models with RLS → executive dashboards",
  },
  {
    company: "Simtrak Solutions",
    role: "Web Development Intern",
    period: "Nov 2022 — Apr 2023",
    location: "Remote",
    internship: true,
    overview:
      "Remote internship during my degree, contributing to full-stack web applications in an Agile team.",
    engagements: [
      {
        name: "Web application development",
        stack: [
          "React",
          "TypeScript",
          "Node.js",
          "FastAPI",
          "Python",
          "PyTest",
          "PostgreSQL",
          "Git",
        ],
        highlights: [
          { body: "Developed responsive user interfaces using modern JavaScript frameworks." },
          {
            body: "Assisted with backend development, API integration and testing, and database operations.",
          },
          {
            body: "Built, tested and debugged application features using Git and Agile practices.",
          },
        ],
      },
    ],
  },
];

export type ProjectStatus = "In progress" | "Production" | "POC" | "Shipped";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  company: string;
  period: string;
  status: ProjectStatus;
  problem: string;
  solution: string;
  architecture: string;
  stack: string[];
  impact: string[];
  challenges: string;
  lessons: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "azure-to-aws-databricks-migration",
    name: "Azure → AWS Databricks Lakehouse Migration",
    tagline:
      "Re-platforming an enterprise Lakehouse to AWS with Unity Catalog governance and verified data parity.",
    company: "Presidio",
    period: "2026 — Present",
    status: "In progress",
    problem:
      "An enterprise Databricks Lakehouse running on Azure had to move to AWS without breaking downstream consumers, losing data, or weakening access controls along the way.",
    solution:
      "Re-platforming ADLS Gen2 storage to Amazon S3, refactoring PySpark / Spark SQL notebooks, jobs and DBFS mounts into Databricks Workflows, and moving workspace objects into Unity Catalog with IAM-backed external locations and storage credentials. Automated source-to-target reconciliation and parallel Azure–AWS runs prove parity before cutover, and Terraform plus Databricks Asset Bundles make every promotion repeatable.",
    architecture:
      "ADLS Gen2 → Amazon S3 → Unity Catalog → Databricks Workflows → reconciliation checks → production cutover",
    stack: [
      "Databricks",
      "Unity Catalog",
      "PySpark",
      "Spark SQL",
      "AWS S3",
      "IAM",
      "Terraform",
      "Databricks Asset Bundles",
    ],
    impact: [
      "Automated parity checks before cutover",
      "Fine-grained Unity Catalog access controls",
      "Repeatable dev → test → prod promotions",
    ],
    challenges:
      "Proving that migrated data matches the source, through row counts, schema checks and aggregate/checksum comparisons, while the source platform keeps running in parallel.",
    lessons:
      "A migration is only as good as its validation. Reconciliation has to be built in from day one, not added at the end.",
  },
  {
    slug: "enterprise-financial-operational-analytics-platform",
    name: "Financial Analytics Lakehouse for a 17-Company Group",
    tagline:
      "A Medallion Lakehouse unifying 10+ source systems into trusted financial and operational reporting.",
    company: "JMAN Group",
    period: "2025 — 2026",
    status: "Production",
    problem:
      "A professional services group of 17 companies had financial and operational data spread across more than 10 source systems, with no single trusted view of revenue, utilisation or contribution.",
    solution:
      "Built and owned a Databricks Medallion Lakehouse (Bronze, Silver, Gold) on Azure, with fact–dimension models for revenue, utilisation and contribution, SCD Type 2 history, automated validation and reconciliation checks, and Power BI semantic models with Row-Level Security powering 15+ dashboards.",
    architecture:
      "10+ source systems → Bronze → Silver → Gold (Delta Lake) → fact & dimension models → Power BI semantic models → executive dashboards",
    stack: [
      "Databricks",
      "PySpark",
      "Spark SQL",
      "Delta Lake",
      "Azure ADLS Gen2",
      "Power BI",
      "DAX",
    ],
    impact: [
      "5× faster queries",
      "15+ Power BI dashboards with RLS",
      "2 new entities onboarded, 50% faster ramp-up",
    ],
    challenges:
      "Balancing entity-specific business logic across 17 companies with a platform that stays consistent, scalable and maintainable.",
    lessons: "Reliable business logic beats flashy dashboards when the goal is operational trust.",
  },
  {
    slug: "revenue-reconciliation-private-equity-exit",
    name: "Revenue Reconciliation for a Private Equity Exit",
    tagline:
      "Financial fact models and KPI validation that delivered trusted numbers for due diligence.",
    company: "JMAN Group",
    period: "2025 — 2026",
    status: "Shipped",
    problem:
      "A private equity exit required revenue and retention KPIs (GRR/NRR) that would hold up in due diligence, sourced from multiple systems under tight review timelines.",
    solution:
      "Led the revenue reconciliation workstream: built financial fact models, validated KPI calculations end to end, and traced critical GRR/NRR discrepancies back to their source to resolve them for due-diligence reporting.",
    architecture:
      "Source systems → reconciliation logic → financial fact models → validated KPIs → due-diligence reporting",
    stack: ["Databricks", "PySpark", "SQL", "Delta Lake", "Power BI"],
    impact: [
      "Critical GRR/NRR errors found and fixed",
      "Trusted reporting for due diligence",
      "Became the team's go-to for business logic",
    ],
    challenges:
      "Validating KPIs across fragmented source systems while keeping every number explainable and auditable under deadline pressure.",
    lessons: "Financial trust is built through disciplined reconciliation and transparent logic.",
  },
  {
    slug: "ai-analytics-assistant-poc",
    name: "AI-Enhanced Analytics: RAG & Power BI Review Agent",
    tagline:
      "Grounded AI on the Lakehouse: natural-language querying over financial data and an agent that reviews BI work.",
    company: "JMAN Group",
    period: "2026",
    status: "POC",
    problem:
      "Analytics teams spent significant effort reviewing semantic models and DAX, and business users had no safe way to ask natural-language questions of enterprise financial data.",
    solution:
      "Built an end-to-end RAG solution on Databricks Mosaic AI (ingestion, chunking, embeddings, Vector Search, semantic retrieval and LLM grounding) and a Power BI AI Review Agent using Claude MCP that automates semantic model validation, DAX review, metadata generation and documentation. Also explored natural-language-to-SQL generation with foundation models.",
    architecture:
      "Enterprise documents & metadata → chunking → embeddings → Vector Search → retrieval → grounded LLM answer",
    stack: [
      "Databricks Mosaic AI",
      "Vector Search",
      "RAG",
      "LangChain",
      "Claude MCP",
      "NL-to-SQL",
      "Power BI",
    ],
    impact: [
      "~70% less report review effort",
      "Natural-language querying over financial data",
      "Automated DAX review and documentation",
    ],
    challenges:
      "Making AI useful for finance reporting without compromising rigour: grounding answers in trusted data and keeping a human in the loop.",
    lessons:
      "The advantage comes from context, governance and evaluation, not from the model alone.",
  },
  {
    slug: "private-equity-data-platform",
    name: "Equiflow: Private Equity Data Platform",
    tagline:
      "A multi-tenant platform for versioned financial submissions, with AI-generated dashboards from spreadsheets.",
    company: "JMAN Group",
    period: "2024 — 2025",
    status: "Shipped",
    problem:
      "Portfolio companies needed a secure, structured way to submit financial documents, manage versions and move submissions through review.",
    solution:
      "Built a multi-tenant full-stack platform with NestJS REST APIs on PostgreSQL, Azure Blob Storage for versioned documents, Microsoft SSO, RBAC, audit logging and a Draft → Submitted → Approved state machine, plus an OpenAI-powered feature that turns uploaded spreadsheets into interactive dashboards and natural-language insights.",
    architecture:
      "React / Next.js UI → NestJS APIs → PostgreSQL → Azure Blob Storage → OpenAI insights",
    stack: [
      "React",
      "Next.js",
      "NestJS",
      "Node.js",
      "PostgreSQL",
      "Azure Blob Storage",
      "OpenAI API",
      "Docker",
    ],
    impact: [
      "RBAC, SSO and full audit trail",
      "Versioning with conflict resolution",
      "AI-generated dashboards from spreadsheets",
    ],
    challenges:
      "Keeping document versioning and concurrent submissions consistent while staying maintainable for a small team.",
    lessons: "Operational software becomes valuable when it removes friction without adding noise.",
  },
];

export const SKILL_GRAPH = {
  categories: [
    { id: "data", label: "Data Engineering", color: "#2563EB" },
    { id: "cloud", label: "Cloud & Infrastructure", color: "#38BDF8" },
    { id: "analytics", label: "Business Intelligence", color: "#8B5CF6" },
    { id: "ai", label: "AI & Modern Data", color: "#EC4899" },
    { id: "dev", label: "Programming & Development", color: "#10B981" },
  ],
  nodes: [
    {
      id: "databricks",
      label: "Databricks",
      cat: "data",
      related: ["spark", "delta", "unity", "workflows", "mosaic", "azure", "aws", "dab"],
    },
    {
      id: "spark",
      label: "Apache Spark",
      cat: "data",
      related: ["pyspark", "sparksql", "databricks"],
    },
    { id: "pyspark", label: "PySpark", cat: "data", related: ["spark", "delta", "python", "etl"] },
    { id: "sparksql", label: "Spark SQL", cat: "data", related: ["spark", "sql", "delta"] },
    {
      id: "delta",
      label: "Delta Lake",
      cat: "data",
      related: ["databricks", "medallion", "lakehouse", "scd2"],
    },
    {
      id: "unity",
      label: "Unity Catalog",
      cat: "data",
      related: ["databricks", "iam", "s3", "migration"],
    },
    {
      id: "workflows",
      label: "Databricks Workflows",
      cat: "data",
      related: ["databricks", "etl", "dab"],
    },
    { id: "dbt", label: "dbt", cat: "data", related: ["etl", "sql", "modeling"] },
    {
      id: "lakehouse",
      label: "Lakehouse",
      cat: "data",
      related: ["delta", "medallion", "warehouse"],
    },
    {
      id: "warehouse",
      label: "Data Warehousing",
      cat: "data",
      related: ["modeling", "sql", "lakehouse"],
    },
    {
      id: "modeling",
      label: "Dimensional Modelling",
      cat: "data",
      related: ["warehouse", "scd2", "semantic", "sql"],
    },
    { id: "scd2", label: "CDC / SCD Type 2", cat: "data", related: ["modeling", "delta"] },
    {
      id: "etl",
      label: "ETL / ELT",
      cat: "data",
      related: ["pyspark", "workflows", "dbt", "quality"],
    },
    {
      id: "medallion",
      label: "Medallion Architecture",
      cat: "data",
      related: ["delta", "lakehouse", "modeling"],
    },
    {
      id: "quality",
      label: "Data Quality",
      cat: "data",
      related: ["etl", "migration", "modeling"],
    },
    {
      id: "migration",
      label: "Migration & Reconciliation",
      cat: "data",
      related: ["quality", "unity", "s3"],
    },
    { id: "fivetran", label: "Fivetran", cat: "cloud", related: ["etl", "databricks"] },
    {
      id: "azure",
      label: "Azure",
      cat: "cloud",
      related: ["adls", "blob", "keyvault", "devops", "databricks", "fabric"],
    },
    { id: "adls", label: "ADLS Gen2", cat: "cloud", related: ["azure", "delta", "s3"] },
    { id: "blob", label: "Blob Storage", cat: "cloud", related: ["azure"] },
    { id: "keyvault", label: "Key Vault", cat: "cloud", related: ["azure"] },
    { id: "adf", label: "Data Factory", cat: "cloud", related: ["azure", "adls", "etl"] },
    { id: "devops", label: "Azure DevOps", cat: "cloud", related: ["azure", "cicd", "git"] },
    { id: "aws", label: "AWS", cat: "cloud", related: ["s3", "iam", "databricks", "terraform"] },
    { id: "s3", label: "Amazon S3", cat: "cloud", related: ["aws", "unity", "adls"] },
    { id: "iam", label: "IAM", cat: "cloud", related: ["aws", "unity"] },
    { id: "terraform", label: "Terraform", cat: "cloud", related: ["aws", "cicd", "dab"] },
    {
      id: "dab",
      label: "Asset Bundles",
      cat: "cloud",
      related: ["databricks", "cicd", "terraform", "workflows"],
    },
    { id: "cicd", label: "CI/CD", cat: "cloud", related: ["terraform", "dab", "devops", "git"] },
    { id: "docker", label: "Docker", cat: "cloud", related: ["node", "cicd"] },
    {
      id: "powerbi",
      label: "Power BI",
      cat: "analytics",
      related: ["dax", "powerquery", "rls", "semantic", "fabric", "copilot"],
    },
    { id: "dax", label: "DAX", cat: "analytics", related: ["powerbi", "semantic"] },
    { id: "powerquery", label: "Power Query (M)", cat: "analytics", related: ["powerbi"] },
    {
      id: "semantic",
      label: "Semantic Models",
      cat: "analytics",
      related: ["powerbi", "dax", "modeling", "rls", "mcp"],
    },
    { id: "rls", label: "Row-Level Security", cat: "analytics", related: ["powerbi", "semantic"] },
    {
      id: "fabric",
      label: "Microsoft Fabric",
      cat: "analytics",
      related: ["powerbi", "azure", "copilot"],
    },
    { id: "kpi", label: "KPI Design", cat: "analytics", related: ["powerbi", "semantic", "dax"] },
    {
      id: "copilot",
      label: "Power BI Copilot",
      cat: "analytics",
      related: ["powerbi", "fabric", "llm"],
    },
    { id: "powerautomate", label: "Power Automate", cat: "analytics", related: ["powerbi"] },
    { id: "rag", label: "RAG", cat: "ai", related: ["mosaic", "vector", "llm", "langchain"] },
    { id: "mosaic", label: "Mosaic AI", cat: "ai", related: ["databricks", "rag", "vector"] },
    { id: "vector", label: "Vector Search", cat: "ai", related: ["mosaic", "rag"] },
    { id: "mcp", label: "Claude MCP", cat: "ai", related: ["llm", "semantic", "powerbi"] },
    { id: "openai", label: "OpenAI API", cat: "ai", related: ["llm", "node"] },
    { id: "langchain", label: "LangChain", cat: "ai", related: ["rag", "python"] },
    {
      id: "llm",
      label: "LLM Integration",
      cat: "ai",
      related: ["rag", "mcp", "openai", "copilot"],
    },
    {
      id: "langgraph",
      label: "LangGraph",
      cat: "ai",
      related: ["agentic", "langchain", "langsmith"],
    },
    { id: "langsmith", label: "LangSmith", cat: "ai", related: ["langgraph", "agentic"] },
    { id: "agentic", label: "Agentic Systems", cat: "ai", related: ["langgraph", "mcp", "llm"] },
    {
      id: "sql",
      label: "SQL (Advanced)",
      cat: "dev",
      related: ["sparksql", "warehouse", "modeling", "postgres"],
    },
    { id: "python", label: "Python", cat: "dev", related: ["pyspark", "pandas", "langchain"] },
    { id: "pandas", label: "Pandas", cat: "dev", related: ["python"] },
    { id: "typescript", label: "TypeScript", cat: "dev", related: ["react", "node", "nest"] },
    { id: "react", label: "React / Next.js", cat: "dev", related: ["typescript"] },
    { id: "node", label: "Node.js", cat: "dev", related: ["nest", "typescript", "openai"] },
    { id: "nest", label: "NestJS", cat: "dev", related: ["node", "postgres", "rest"] },
    { id: "rest", label: "REST APIs", cat: "dev", related: ["nest"] },
    { id: "postgres", label: "PostgreSQL", cat: "dev", related: ["nest", "sql"] },
    { id: "git", label: "Git", cat: "dev", related: ["devops", "cicd"] },
    { id: "selenium", label: "Selenium", cat: "dev", related: ["python"] },
    { id: "playwright", label: "Playwright", cat: "dev", related: ["python"] },
    { id: "bs4", label: "BeautifulSoup", cat: "dev", related: ["python"] },
  ],
} as const;

/** Listed on the resume as conceptual knowledge, not production experience. */
export const CONCEPTUAL_SKILLS = ["Hadoop", "HDFS", "Hive", "Apache Kafka", "Apache Airflow"];

export type LabItem = {
  name: string;
  status: ProjectStatus | "Training";
  context: string;
  tagline: string;
  outcome?: string;
  architecture: string;
  tags: string[];
};

export const AI_LAB: { built: LabItem[]; exploring: Array<{ title: string; body: string }> } = {
  built: [
    {
      name: "Engagement Discovery & Architecture Skill",
      status: "Training",
      context: "Presidio · AI400 program",
      tagline:
        "An AI skill that turns client documents and call transcripts into discovery findings, scope, architecture and a complete engagement playbook, and surfaces the unknowns.",
      outcome: "Playbook + scope + client deck + design & architecture doc",
      architecture:
        "Client docs & transcripts → discovery & unknowns → scoping → design & architecture → engagement playbook",
      tags: ["Agentic AI", "Discovery", "Architecture", "AIDLC"],
    },
    {
      name: "RAG over enterprise financial data",
      status: "POC",
      context: "JMAN Group · Databricks Mosaic AI",
      tagline:
        "Natural-language questions answered from enterprise financial data, grounded in retrieved context. Also explored natural-language-to-SQL with foundation models.",
      architecture:
        "Documents → chunking → embeddings → Vector Search → semantic retrieval → grounded LLM answer",
      tags: ["Mosaic AI", "Vector Search", "LangChain", "NL-to-SQL"],
    },
    {
      name: "Power BI AI Review Agent",
      status: "POC",
      context: "JMAN Group · Claude MCP",
      tagline:
        "An agent that validates semantic models, reviews DAX, and generates metadata and documentation.",
      outcome: "~70% less report review effort",
      architecture: "Semantic model → Claude via MCP → validation & DAX review → metadata & docs",
      tags: ["Claude", "MCP", "Agents", "DAX"],
    },
    {
      name: "AI-generated dashboards in Equiflow",
      status: "Shipped",
      context: "JMAN Group · OpenAI API",
      tagline:
        "Uploaded financial spreadsheets turned into interactive dashboards, chart configs and narrative insights.",
      architecture:
        "Spreadsheet upload → parsing → OpenAI API → chart config + insights → dashboard",
      tags: ["OpenAI", "Structured output"],
    },
  ],
  // TODO(Lokesh): confirm these match the areas you are actively exploring.
  exploring: [
    {
      title: "AI-assisted platform migrations",
      body: "Using LLMs to speed up refactoring notebooks and jobs during migrations like Azure → AWS, with automated reconciliation as the safety net that proves the output is correct.",
    },
    {
      title: "Data quality rules from metadata",
      body: "Generating validation and reconciliation checks from schemas, business definitions and catalog metadata instead of writing every rule by hand.",
    },
    {
      title: "Self-documenting pipelines",
      body: "Auto-generated table and column descriptions and lineage summaries in Unity Catalog, extending what the Power BI review agent already does for semantic models.",
    },
    {
      title: "Governed natural-language analytics",
      body: "Natural-language questions answered from certified semantic models and governed catalog data, with access controls enforced, not bypassed.",
    },
  ],
};

export type SkillGroup = { label: string; items: string[] };

export const RESUME = {
  summary:
    "Databricks Certified Data Engineer with 2.5+ years building ETL/ELT pipelines, Lakehouse architectures and data warehouse solutions using Apache Spark, PySpark, SQL and Databricks on Azure and AWS. Delivered production data platforms serving 17 business entities across 10+ source systems and currently migrating an enterprise Databricks Lakehouse from Azure to AWS with Unity Catalog governance. Strong in dimensional modelling, data quality, data lineage and CI/CD-driven deployments for financial and operational analytics.",
  skillGroups: [
    {
      label: "Data Engineering",
      items: [
        "Databricks",
        "Apache Spark",
        "PySpark",
        "Spark SQL",
        "Delta Lake",
        "Unity Catalog",
        "Databricks Workflows",
        "ETL/ELT",
        "dbt",
        "Medallion Architecture",
        "Lakehouse Architecture",
        "Data Warehousing",
        "Dimensional Modelling",
        "CDC/SCD Type 2",
        "Data Quality & Validation",
        "Data Migration & Reconciliation",
        "Fivetran",
      ],
    },
    {
      label: "Cloud & Infrastructure",
      items: [
        "Azure ADLS Gen2",
        "Azure Blob Storage",
        "Azure Key Vault",
        "Azure Data Factory",
        "Azure DevOps",
        "AWS S3",
        "AWS IAM",
        "Terraform",
        "Databricks Asset Bundles",
        "CI/CD",
        "Docker",
      ],
    },
    {
      label: "Programming",
      items: ["SQL (Advanced)", "Python", "PySpark", "Pandas", "JavaScript", "TypeScript"],
    },
    {
      label: "Business Intelligence",
      items: [
        "Power BI",
        "DAX",
        "Power Query (M)",
        "Row-Level Security",
        "Semantic Models",
        "Microsoft Fabric",
        "Power BI Copilot",
        "KPI Design",
        "Power BI MCP",
      ],
    },
    {
      label: "AI & Modern Data",
      items: [
        "RAG",
        "Databricks Mosaic AI",
        "Claude MCP",
        "OpenAI API",
        "Chatbot Integration",
        "NL-to-SQL",
        "LangGraph",
        "LangSmith",
        "Agentic Systems",
      ],
    },
    {
      label: "Development",
      items: ["React", "Next.js", "Node.js", "NestJS", "REST APIs", "PostgreSQL", "Git"],
    },
    {
      label: "Automation & Web Scraping",
      items: ["Power Automate", "Python Automation", "Selenium", "Playwright", "BeautifulSoup"],
    },
    {
      label: "Big Data (Conceptual)",
      items: CONCEPTUAL_SKILLS,
    },
  ] satisfies SkillGroup[],
  education: [
    {
      school: "Easwari Engineering College, Chennai",
      degree: "B.Tech, Information Technology",
      period: "2020 – 2024",
      note: "CGPA 9.14 / 10",
    },
  ],
  certifications: [PROFILE.certification],
  achievements: RECOGNITION,
};
