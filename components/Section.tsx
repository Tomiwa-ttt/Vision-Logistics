'use client'

export default function Section({
  title,
  subtitle,
  eyebrow,
  children,
  id,
}: {
  title: string
  subtitle?: string
  eyebrow?: string
  children: React.ReactNode
  id?: string
}) {
  return (
    <section id={id} className="relative z-10 px-4 py-20 sm:px-6 sm:py-28 md:px-10 md:py-36">
      <div className="mx-auto mb-16 max-w-5xl text-center md:mb-20">
        {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
        <h2 className="display-lg gradient-text">{title}</h2>
        {subtitle && <p className="body-lg mx-auto mt-5 max-w-2xl">{subtitle}</p>}
        <div className="section-line mx-auto mt-10 max-w-xs" />
      </div>

      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  )
}
