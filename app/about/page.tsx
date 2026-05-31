import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import Section from '@/components/Section'

const values = [
  {
    title: 'See',
    desc: 'Real-time visibility across every node in your operational network.',
  },
  {
    title: 'Understand',
    desc: 'AI-driven analysis that transforms raw data into clear operational insight.',
  },
  {
    title: 'Predict',
    desc: 'Forward-looking intelligence that anticipates disruption before it arrives.',
  },
]

export default function About() {
  return (
    <main className="relative overflow-x-hidden">
      <PageHero
        eyebrow="About"
        title="About Vision Logistics"
        subtitle="A subsidiary of TAM Global Solutions, building the intelligence layer for modern enterprise operations."
      />

      <Reveal>
        <Section title="Our Story">
          <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-[var(--text-muted)]">
            <p>
              Vision Logistics was founded on a simple observation: most organizations
              operate with fragmented data, manual processes, and reactive decision-making.
            </p>
            <p>
              We build intelligent systems — AI automation, computer vision, and predictive
              analytics — that give organizations the ability to see their operations clearly,
              understand them deeply, and act on them proactively.
            </p>
          </div>
        </Section>
      </Reveal>

      <Reveal>
        <Section
          eyebrow="Principles"
          title="What We Believe"
          subtitle="Three pillars that guide every system we build."
        >
          <div className="grid gap-5 md:grid-cols-3">
            {values.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="glass-card p-8 text-center">
                  <h3 className="text-2xl font-semibold tracking-tight gradient-text">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      </Reveal>
    </main>
  )
}
