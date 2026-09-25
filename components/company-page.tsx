import Link from "next/link";

export function CompanyHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="mb-4 text-sm text-amber-300/80">{eyebrow}</div>
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#f4f4f5,#f7d98a,#fff,#d8b45a,#f4f4f5)] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold leading-tight text-transparent md:text-5xl">{title}</h1>
            <p className="max-w-2xl text-lg leading-8 text-indigo-100/65">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CapabilityGrid({ items }: { items: { title: string; text: string }[] }) {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="grid gap-5 border-t border-gray-800/80 py-12 md:grid-cols-2 md:py-20 lg:grid-cols-3">
        {items.map((item, i) => (
          <article key={item.title} className="rounded-2xl border border-gray-800 bg-gray-900/45 p-6 transition hover:border-amber-300/25 hover:bg-gray-900/70">
            <div className="mb-5 text-xs tracking-[0.2em] text-amber-300/65">0{i + 1}</div>
            <h2 className="mb-2 font-nacelle text-lg font-semibold text-gray-100">{item.title}</h2>
            <p className="text-sm leading-6 text-indigo-100/60">{item.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export function PageCta() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 md:pb-24">
      <div className="rounded-2xl border border-amber-300/15 bg-gray-900/60 p-8 md:p-12">
        <h2 className="mb-2 font-nacelle text-2xl font-semibold text-gray-100">Ready to discuss the system?</h2>
        <p className="mb-6 max-w-2xl text-indigo-100/60">Send the problem, current stack, constraints, and desired outcome. We can start with the technical shape of the solution.</p>
        <Link href="/contact" className="btn bg-linear-to-t from-amber-600 to-amber-400 text-gray-950">Contact MSIAI →</Link>
      </div>
    </div>
  );
}
