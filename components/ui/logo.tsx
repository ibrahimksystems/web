import Link from "next/link";
import Image from "next/image";
import BrandLogo from "@/public/images/brand/ik-logo.jpg";

export default function Logo() {
  return (
    <Link href="/" className="group inline-flex items-center gap-2.5" aria-label="Ibrahim K. Systems home">
      <span className="relative flex h-9 w-9 shrink-0 overflow-hidden rounded-full border border-amber-300/30 shadow-[0_0_24px_rgba(212,175,55,.12)]">
        <Image src={BrandLogo} alt="Ibrahim K. Systems" fill sizes="36px" className="object-cover" />
      </span>
      <span className="hidden text-sm font-semibold tracking-tight text-gray-100 sm:block">
        Ibrahim K. <span className="text-amber-300">Systems</span>
      </span>
    </Link>
  );
}
