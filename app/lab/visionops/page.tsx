import Link from 'next/link'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import VisionOpsDemo from '@/components/VisionOpsDemo'

export default function VisionOps() {
  return (
    <main className="relative overflow-x-hidden">
      <PageHero
        eyebrow="Innovation Lab · 02"
        title="VisionOps AI"
        subtitle="Document intelligence system — upload, extract, and structure operational data automatically."
      />

      <Reveal>
        <div className="mx-auto max-w-4xl px-4 pb-24 safe-bottom sm:px-6 md:px-10 md:pb-32">
          <Link
            href="/lab"
            className="eyebrow nav-link inline-block text-[0.65rem] text-[var(--text-muted)]"
          >
            ← Back to Lab
          </Link>
          <VisionOpsDemo />
        </div>
      </Reveal>
    </main>
  )
}