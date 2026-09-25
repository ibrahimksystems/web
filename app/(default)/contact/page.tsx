import { CompanyHero } from "@/components/company-page";

export const metadata = { title: "Contact | Ibrahim K. Systems", description: "Contact MSIAI for AI automation, data engineering, cybersecurity, software, and technical engineering projects." };

export default function ContactPage() {
  return <>
    <CompanyHero eyebrow="Contact" title="Let’s discuss the system." description="For technical consulting, custom software, AI automation, data engineering, cybersecurity, or a specialized engineering problem, start with the context below." />
    <section><div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
      <div className="grid gap-5 md:grid-cols-2">
        <a href="https://www.linkedin.com/in/ibrahimksystems/" target="_blank" rel="noreferrer" className="rounded-2xl border border-gray-800 bg-gray-900/45 p-7 transition hover:border-amber-300/25"><div className="mb-3 text-xs uppercase tracking-[0.18em] text-amber-300/70">Professional</div><h2 className="mb-2 text-xl font-semibold text-gray-100">LinkedIn</h2><p className="text-sm text-indigo-100/60">Ibrahim K. · Founder & AI Automation Engineer at MSIAI</p></a>
        <a href="https://github.com/ibrahimksystems" target="_blank" rel="noreferrer" className="rounded-2xl border border-gray-800 bg-gray-900/45 p-7 transition hover:border-amber-300/25"><div className="mb-3 text-xs uppercase tracking-[0.18em] text-amber-300/70">Engineering</div><h2 className="mb-2 text-xl font-semibold text-gray-100">GitHub</h2><p className="text-sm text-indigo-100/60">Projects, source code, engineering documentation, and public technical work.</p></a>
        <a href="https://www.instagram.com/ibrahimk.systems" target="_blank" rel="noreferrer" className="rounded-2xl border border-gray-800 bg-gray-900/45 p-7 transition hover:border-amber-300/25"><div className="mb-3 text-xs uppercase tracking-[0.18em] text-amber-300/70">Social</div><h2 className="mb-2 text-xl font-semibold text-gray-100">Instagram</h2><p className="text-sm text-indigo-100/60">MSIAI brand and engineering updates.</p></a>
        <div className="rounded-2xl border border-gray-800 bg-gray-900/45 p-7"><div className="mb-3 text-xs uppercase tracking-[0.18em] text-amber-300/70">Project brief</div><h2 className="mb-2 text-xl font-semibold text-gray-100">What to include</h2><p className="text-sm leading-6 text-indigo-100/60">Describe the problem, current technology stack, constraints, expected outcome, timeline, and whether you need consulting, implementation, or both.</p></div>
      </div>
    </div></section>
  </>;
}
