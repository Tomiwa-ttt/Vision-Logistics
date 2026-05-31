import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.06] px-4 py-12 safe-bottom sm:px-6 sm:py-16 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-[0.2em] uppercase">
            Vision Logistics
          </p>
          <p className="body-lg mt-3 max-w-sm text-base">
            A subsidiary of TAM Global Solutions. Operational intelligence for the modern enterprise.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-10 gap-y-3 text-xs tracking-[0.1em] uppercase text-[var(--text-muted)]">
          <Link href="/solutions" className="nav-link">Solutions</Link>
          <Link href="/lab" className="nav-link">Innovation Lab</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </div>
      </div>

      <div className="section-line mx-auto mt-14 max-w-7xl" />

      <p className="mx-auto mt-8 max-w-7xl text-xs text-[var(--text-subtle)]">
        © {new Date().getFullYear()} Vision Logistics. All rights reserved.
      </p>
    </footer>
  )
}
