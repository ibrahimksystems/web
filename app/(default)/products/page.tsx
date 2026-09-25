import Image from "next/image";
import Link from "next/link";
import Scan from "@/public/images/brand/wincleaner-scan.png";
import Confirm from "@/public/images/brand/wincleaner-confirm.png";
import Cleaned from "@/public/images/brand/wincleaner-cleaned.png";
import { CompanyHero } from "@/components/company-page";

export const metadata = { title: "Products | Ibrahim K. Systems", description: "Software products developed by Ibrahim K. Systems / MSIAI." };

export default function ProductsPage() {
  return <>
    <CompanyHero eyebrow="Software products" title="Focused software built for practical use." description="MSIAI products are designed around a clear job to be done, with reliability, safety, and maintainability treated as first-class requirements." />
    <section><div className="mx-auto max-w-6xl px-4 sm:px-6 pb-16 md:pb-24">
      <div className="overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/45">
        <div className="grid gap-0 lg:grid-cols-[.9fr_1.1fr]">
          <div className="p-7 md:p-10">
            <div className="mb-4 inline-flex rounded-full border border-amber-300/20 bg-amber-300/5 px-3 py-1 text-xs text-amber-300/80">Current product</div>
            <h2 className="mb-3 font-nacelle text-3xl font-semibold text-gray-100">WinCleaner Pro</h2>
            <p className="mb-6 text-indigo-100/60">A Windows desktop utility focused on safe local system cleanup. It scans selected temporary, cache, prefetch, and log locations and removes individual files without recursively deleting target directories.</p>
            <ul className="mb-7 space-y-2 text-sm text-indigo-100/60"><li>• User Temp and Windows Temp</li><li>• Prefetch and Windows Logs</li><li>• Background scanning and cleanup</li><li>• EULA gate before cleanup actions</li><li>• Standalone Windows distribution</li></ul>
            <Link href="/contact" className="btn bg-linear-to-t from-amber-600 to-amber-400 text-gray-950">Ask about WinCleaner Pro →</Link>
          </div>
          <div className="grid gap-3 bg-gray-950/60 p-4 sm:grid-cols-3 lg:p-5">
            <Image src={Scan} width={1522} height={1215} alt="WinCleaner Pro scan" className="h-full w-full rounded-xl border border-gray-800 object-cover" />
            <Image src={Confirm} width={1483} height={1177} alt="WinCleaner Pro confirmation" className="h-full w-full rounded-xl border border-gray-800 object-cover" />
            <Image src={Cleaned} width={1560} height={1237} alt="WinCleaner Pro cleaned result" className="h-full w-full rounded-xl border border-gray-800 object-cover" />
          </div>
        </div>
      </div>
    </div></section>
  </>;
}
