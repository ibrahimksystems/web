import Image from "next/image";
import Cleaned from "@/public/images/brand/wincleaner-cleaned.png";

const items = [
  ["01", "Python backend engineering", "Async services, APIs, data processing, databases, automation infrastructure, and custom software."],
  ["02", "AI agents & automation", "Agentic workflows, orchestration, integrations, and business-process automation designed around measurable tasks."],
  ["03", "Data pipelines", "ETL / ELT, extraction, transformation, validation, structured outputs, and production-oriented data flows."],
  ["04", "Application & API security", "Security-conscious architecture, vulnerability assessment, API security, and authorized penetration testing."],
  ["05", "Technical research", "Reverse engineering, digital forensics, system analysis, and specialized engineering for difficult technical problems."],
  ["06", "Practical products", "Focused software products such as WinCleaner Pro, built for clear use cases rather than feature bloat."],
];

export default function Features() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t border-gray-800/80 py-12 md:py-20">
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-14">
            <div className="inline-flex items-center gap-3 pb-3 text-sm text-amber-300/80 before:h-px before:w-8 before:bg-amber-300/40 after:h-px after:w-8 after:bg-amber-300/40">Engineering stack</div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#f4f4f5,#f7d98a,#fff,#d8b45a,#f4f4f5)] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">From architecture to working software.</h2>
            <p className="text-lg text-indigo-100/65">The same engineering discipline carries from a Python service or data pipeline to a complete product and its security model.</p>
          </div>
          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {items.map(([num, title, text]) => (
              <article key={num} className="group">
                <div className="mb-4 flex items-center gap-3"><span className="text-xs font-semibold tracking-[0.2em] text-amber-300/70">{num}</span><span className="h-px flex-1 bg-gray-800 group-hover:bg-amber-300/30" /></div>
                <h3 className="mb-2 font-nacelle text-base font-semibold text-gray-100">{title}</h3>
                <p className="text-sm leading-6 text-indigo-100/60">{text}</p>
              </article>
            ))}
          </div>

          <div className="mt-16 grid items-center gap-8 overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50 p-5 md:grid-cols-[1.05fr_.95fr] md:p-7">
            <div>
              <div className="mb-3 inline-flex rounded-full border border-amber-300/20 bg-amber-300/5 px-3 py-1 text-xs text-amber-300/80">Product · WinCleaner Pro</div>
              <h3 className="mb-3 font-nacelle text-2xl font-semibold text-gray-100">A focused Windows utility with safety in the architecture.</h3>
              <p className="mb-5 text-indigo-100/60">WinCleaner Pro scans selected temporary, cache, prefetch, and log locations and removes individual files without recursively deleting target directories.</p>
              <a href="/products" className="text-sm font-medium text-amber-300 hover:text-amber-200">View product details →</a>
            </div>
            <div className="overflow-hidden rounded-xl border border-gray-800 bg-gray-950">
              <Image src={Cleaned} width={1560} height={1237} alt="WinCleaner Pro cleaned result" className="h-auto w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
