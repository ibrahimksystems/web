import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-800/80">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-6 text-indigo-100/55">MSIAI is an engineering-focused technology brand building intelligent digital systems across AI automation, data engineering, cybersecurity, backend engineering, and specialized software.</p>
          </div>
          <div><h3 className="mb-3 text-sm font-medium text-gray-200">Explore</h3><ul className="space-y-2 text-sm text-indigo-100/55"><li><a className="hover:text-amber-300" href="/products">Products</a></li><li><a className="hover:text-amber-300" href="/services">Services</a></li><li><a className="hover:text-amber-300" href="/security">Security</a></li><li><a className="hover:text-amber-300" href="/contact">Contact</a></li></ul></div>
          <div><h3 className="mb-3 text-sm font-medium text-gray-200">Engineering</h3><ul className="space-y-2 text-sm text-indigo-100/55"><li>AI Automation</li><li>AI Agents</li><li>Data Engineering</li><li>Python & APIs</li><li>Cybersecurity</li></ul></div>
          <div><h3 className="mb-3 text-sm font-medium text-gray-200">Connect</h3><ul className="space-y-2 text-sm text-indigo-100/55"><li><a className="hover:text-amber-300" href="https://github.com/ibrahimksystems">GitHub</a></li><li><a className="hover:text-amber-300" href="https://www.linkedin.com/in/ibrahimksystems/">LinkedIn</a></li><li><a className="hover:text-amber-300" href="https://www.instagram.com/ibrahimk.systems">Instagram</a></li></ul></div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-gray-800/70 pt-6 text-xs text-indigo-100/40 sm:flex-row sm:items-center sm:justify-between"><span>© 2026 Ibrahim K. Systems. All rights reserved.</span><span>AI · DATA · SECURITY · SYSTEMS</span></div>
      </div>
    </footer>
  );
}
