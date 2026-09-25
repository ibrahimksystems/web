import { CapabilityGrid, CompanyHero, PageCta } from "@/components/company-page";

export const metadata = { title: "Security | Ibrahim K. Systems", description: "Security-conscious application, API, automation, and system engineering." };

const items = [
  { title: "Application security", text: "Threat-aware application architecture, secure implementation practices, input validation, access controls, and defensive engineering." },
  { title: "API security", text: "Review API exposure, authentication and authorization boundaries, validation, abuse cases, and security controls." },
  { title: "Security automation", text: "Automate repeatable security checks, data collection, validation, monitoring, and operational workflows." },
  { title: "Vulnerability assessment", text: "Structured technical assessment of authorized applications, services, APIs, and systems with actionable findings." },
  { title: "Authorized testing", text: "Security testing is performed only with appropriate authorization and within defined scope and rules of engagement." },
  { title: "Research & forensics", text: "Technical investigation, reverse engineering, and evidence-oriented analysis for legitimate engineering and security work." },
];

export default function SecurityPage() { return <><CompanyHero eyebrow="Security engineering" title="Security is part of the architecture, not a final checkbox." description="MSIAI approaches security as an engineering property of applications, APIs, automation, and infrastructure — with testing performed within authorized scope." /><CapabilityGrid items={items} /><PageCta /></>; }
