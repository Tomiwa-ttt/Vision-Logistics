import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'

const demos = [
  {
    href: '/lab/visiontrack',
    num: '01',
    title: 'VisionTrack Demo',
    desc: 'Object tracking & video intelligence',
  },
  {
    href: '/lab/visionops',
    num: '02',
    title: 'VisionOps Demo',
    desc: 'Document AI & extraction system',
  },
  {
    href: '/lab/visionpredict',
    num: '03',
    title: 'VisionPredict Demo',
    desc: 'Forecasting & analytics engine',
  },
]

export default function Lab() {
  return (
    <main className="relative overflow-x-hidden">
      <PageHero
        eyebrow="Innovation Lab"
        title="Live AI Systems"
        subtitle="Interactive demos of the intelligence platforms powering Vision Logistics."
      />

      <div className="mx-auto grid max-w-6xl gap-4 px-4 pb-24 safe-bottom sm:gap-5 sm:px-6 md:grid-cols-3 md:px-10 md:pb-32">
        {demos.map((demo, i) => (
          <Reveal key={demo.href} delay={i * 0.1}>
            <a href={demo.href} className="glass-card group block p-6 sm:p-8 md:p-10">
              <span className="eyebrow text-[var(--accent)]">{demo.num}</span>
              <h2 className="mt-6 text-xl font-semibold tracking-tight group-hover:text-white">
                {demo.title}
              </h2>
              <p className="mt-3 text-sm text-[var(--text-muted)]">{demo.desc}</p>
              <span className="mt-8 inline-block text-xs tracking-[0.15em] uppercase text-[var(--text-subtle)] transition-colors group-hover:text-white">
                Enter demo →
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </main>
  )
}
