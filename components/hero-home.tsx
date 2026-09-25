import Image from "next/image";
import Link from "next/link";
import BrandBanner from "@/public/images/brand/ik-banner.jpg";

export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-14 md:py-20">
          <div className="pb-12 text-center md:pb-16">
            <div className="mb-5 inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-amber-300/80 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-amber-300/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-amber-300/50">
              MSIAI · Engineering Intelligent Digital Systems
            </div>
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#f4f4f5,#f7d98a,#fff,#d8b45a,#f4f4f5)] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold leading-tight text-transparent md:text-6xl">
              We engineer intelligent systems that turn complex technical problems into working software.
            </h1>
            <div className="mx-auto max-w-3xl">
              <p className="mb-8 text-lg leading-8 text-indigo-100/65 md:text-xl">
                AI automation, AI agents, data engineering, cybersecurity, backend systems, and specialized software — designed around real workflows, reliable infrastructure, and practical outcomes.
              </p>
              <div className="mx-auto flex max-w-md flex-col justify-center gap-3 sm:max-w-none sm:flex-row">
                <Link href="/services" className="btn group w-full bg-linear-to-t from-amber-600 to-amber-400 text-gray-950 shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,.35)] sm:w-auto">
                  Explore engineering services <span className="ml-1 transition-transform group-hover:translate-x-0.5">→</span>
                </Link>
                <Link href="/products" className="btn w-full border border-gray-700/70 bg-gray-900/70 text-gray-200 hover:border-amber-300/40 hover:text-amber-200 sm:w-auto">
                  View products
                </Link>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/60 p-px shadow-2xl shadow-black/30" data-aos="fade-up">
            <div className="overflow-hidden rounded-[15px] bg-gray-950">
              <Image src={BrandBanner} width={1376} height={768} alt="Ibrahim K. Systems — Engineering Intelligent Digital Systems" className="h-auto w-full object-cover" priority />
            </div>
          </div>

          <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-3 text-center text-xs uppercase tracking-[0.16em] text-indigo-100/50 sm:grid-cols-4">
            {['AI & Automation', 'Data Engineering', 'Cybersecurity', 'Software Systems'].map((item) => (
              <div key={item} className="rounded-xl border border-gray-800/80 bg-gray-900/40 px-3 py-3">{item}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
