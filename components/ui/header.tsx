"use client";

import Link from "next/link";
import Logo from "./logo";

const links = [
  ["Products", "/products"],
  ["Services", "/services"],
  ["Security", "/security"],
  ["Contact", "/contact"],
];

export default function Header() {
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex min-h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 py-2 backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),rgba(212,175,55,.22),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs">
          <Logo />
          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
            {links.map(([label, href]) => (
              <Link key={href} href={href} className="text-sm text-indigo-100/65 transition hover:text-amber-300">
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href="https://github.com/ibrahimksystems" target="_blank" rel="noreferrer" className="hidden text-sm text-indigo-100/65 transition hover:text-amber-300 sm:block">
              GitHub
            </a>
            <Link href="/contact" className="btn-sm bg-linear-to-t from-amber-600 to-amber-400 py-[5px] text-gray-950 shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,.35)] hover:brightness-110">
              Discuss a project
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
