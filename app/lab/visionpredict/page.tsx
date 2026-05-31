import Link from 'next/link'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'

export default function VisionPredict() {
  return (
    <main className="relative overflow-x-hidden">
      <PageHero
        eyebrow="Innovation Lab · 03"
        title="VisionPredict AI"
        subtitle="Predictive analytics engine for demand forecasting and supply chain optimization."
      />

      <Reveal>
        <div className="mx-auto max-w-4xl px-4 pb-24 safe-bottom sm:px-6 md:px-10 md:pb-32">
          <Link
            href="/lab"
            className="eyebrow nav-link inline-block text-[0.65rem] text-[var(--text-muted)]"
          >
            ← Back to Lab
          </Link>

          <div className="glass-card mt-8 flex min-h-[280px] flex-col items-center justify-center p-8 text-center sm:mt-10 sm:min-h-[320px] sm:p-12 md:min-h-[420px]">
            <p className="eyebrow text-[var(--accent)]">Demo coming soon</p>
            <p className="body-lg mx-auto mt-6 max-w-md">
              Predictive analytics dashboard — forecast trends and optimize capacity in real time.
            </p>
            <div className="mt-10 h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
        </div>
      </Reveal>
    </main>
  )
}
