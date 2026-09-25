import Link from "next/link";

export default function Cta() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl border border-amber-300/15 bg-gray-900/70 px-6 py-12 text-center md:px-16 md:py-16">
          <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300/10 blur-3xl" />
          <h2 className="relative mb-3 font-nacelle text-3xl font-semibold text-gray-100">Have a difficult system to build?</h2>
          <p className="relative mx-auto mb-7 max-w-2xl text-indigo-100/60">Tell us what you are trying to automate, integrate, secure, or engineer. We can start from the architecture and work toward a practical implementation.</p>
          <Link href="/contact" className="btn relative bg-linear-to-t from-amber-600 to-amber-400 text-gray-950 shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,.35)]">Start a technical conversation →</Link>
        </div>
      </div>
    </section>
  );
}
