'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/lab', label: 'Lab' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 safe-top ${
        scrolled || menuOpen
          ? 'border-b border-white/[0.06] bg-black/80 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 md:px-10 md:py-5"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="relative z-50 text-sm font-semibold tracking-[0.2em] uppercase text-white"
          onClick={() => setMenuOpen(false)}
        >
          Vision
        </Link>

        <div className="hidden items-center gap-8 lg:flex lg:gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link text-xs tracking-[0.12em] uppercase"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="btn btn-secondary hidden text-xs sm:inline-flex"
          >
            Get in Touch
          </Link>

          <button
            type="button"
            className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">{menuOpen ? 'Close' : 'Menu'}</span>
            <span className="flex flex-col gap-1.5">
              <span
                className={`block h-px w-5 bg-white transition-transform duration-300 ${
                  menuOpen ? 'translate-y-[7px] rotate-45' : ''
                }`}
              />
              <span
                className={`block h-px w-5 bg-white transition-opacity duration-300 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-px w-5 bg-white transition-transform duration-300 ${
                  menuOpen ? '-translate-y-[7px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl transition-opacity duration-300 lg:hidden ${
          menuOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex min-h-screen flex-col items-center justify-center gap-8 px-6 pt-20">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-2xl font-medium tracking-tight text-white transition-opacity hover:opacity-70"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn btn-primary mt-4"
            onClick={() => setMenuOpen(false)}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </header>
  )
}
