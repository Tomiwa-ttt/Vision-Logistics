import Reveal from '@/components/Reveal'

export default function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string
  subtitle?: string
  title: string
}) {
  return (
    <Reveal>
      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-12 pt-28 text-center sm:px-6 sm:pb-16 sm:pt-36 md:px-10 md:pb-24 md:pt-44">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className={`display-lg gradient-text ${eyebrow ? 'mt-4 sm:mt-6' : ''}`}>
          {title}
        </h1>
        {subtitle && (
          <p className="body-lg mx-auto mt-4 max-w-2xl sm:mt-6">{subtitle}</p>
        )}
        <div className="section-line mx-auto mt-10 max-w-xs sm:mt-12" />
      </div>
    </Reveal>
  )
}
