import { CapabilityGrid, CompanyHero, PageCta } from "@/components/company-page";

export const metadata = { title: "Services | Ibrahim K. Systems", description: "AI automation, data engineering, cybersecurity, backend engineering, and specialized technical services." };

const items = [
  { title: "AI automation & agents", text: "Design AI-assisted workflows, agents, orchestration, integrations, and automation systems around real operational tasks." },
  { title: "Data engineering", text: "Build ETL/ELT pipelines, API integrations, data validation, transformation, storage, and structured processing systems." },
  { title: "Backend & API engineering", text: "Python, FastAPI, async services, REST APIs, databases, background processing, and custom backend architecture." },
  { title: "Cybersecurity engineering", text: "Application and API security, security automation, vulnerability assessment, and authorized penetration testing." },
  { title: "Reverse engineering & research", text: "Technical research, reverse engineering, digital forensics, system analysis, and difficult engineering investigations." },
  { title: "Custom software", text: "Desktop software, web applications, internal tools, automation infrastructure, and focused products built for specific workflows." },
];

export default function ServicesPage() { return <><CompanyHero eyebrow="Engineering services" title="Systems engineering for difficult technical problems." description="From an isolated automation task to a production backend or security-sensitive application, the work starts with architecture and ends with a maintainable implementation." /><CapabilityGrid items={items} /><PageCta /></>; }
