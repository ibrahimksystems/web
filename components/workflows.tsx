import Image from "next/image";
import Link from "next/link";
import Scan from "@/public/images/brand/wincleaner-scan.png";
import Confirm from "@/public/images/brand/wincleaner-confirm.png";
import Cleaned from "@/public/images/brand/wincleaner-cleaned.png";
import Spotlight from "@/components/spotlight";

const cards = [
  { title: "AI automation", tag: "Intelligent workflows", text: "Connect models, APIs, business rules, and operational systems into repeatable workflows that reduce manual work.", href: "/services" },
  { title: "Data engineering", tag: "Reliable pipelines", text: "Design ETL pipelines, validation layers, API integrations, and database systems for structured, dependable data flow.", href: "/services" },
  { title: "Cybersecurity", tag: "Security by design", text: "Build security into applications, APIs, automation, and infrastructure with practical engineering and authorized testing.", href: "/security" },
];

export default function Workflows() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <div className="inline-flex items-center gap-3 pb-3 text-sm text-amber-300/80 before:h-px before:w-8 before:bg-amber-300/40 after:h-px after:w-8 after:bg-amber-300/40">What we engineer</div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#f4f4f5,#f7d98a,#fff,#d8b45a,#f4f4f5)] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">Systems built around the problem — not the buzzword.</h2>
            <p className="text-lg text-indigo-100/65">MSIAI brings AI, data, security, and backend engineering together when a project needs more than an off-the-shelf workflow.</p>
          </div>
          <Spotlight className="group mx-auto grid max-w-sm items-stretch gap-6 lg:max-w-none lg:grid-cols-3">
            {cards.map((card) => (
              <Link key={card.title} href={card.href} className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-amber-500/50 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-amber-400 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-15 group-hover:before:opacity-100">
                <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 p-7">
                  <div className="mb-5 inline-flex rounded-full border border-gray-700/70 bg-gray-900 px-3 py-1 text-xs text-amber-300/80">{card.tag}</div>
                  <h3 className="mb-3 font-nacelle text-xl font-semibold text-gray-100">{card.title}</h3>
                  <p className="text-indigo-100/60">{card.text}</p>
                  <div className="mt-6 text-sm text-amber-300 transition-transform group-hover/card:translate-x-1">Explore capability →</div>
                </div>
              </Link>
            ))}
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
