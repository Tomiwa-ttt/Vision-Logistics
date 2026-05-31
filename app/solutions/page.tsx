import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import Section from '@/components/Section'

const products = [
  {
    id: 'visionops',
    num: '01',
    name: 'VisionOps AI',
    tagline: 'Business automation & document intelligence',
    desc: 'Extract, classify, and route documents automatically. VisionOps turns unstructured operational data into structured, actionable intelligence.',
    href: '/lab/visionops',
  },
  {
    id: 'visiontrack',
    num: '02',
    name: 'VisionTrack AI',
    tagline: 'Computer vision for logistics monitoring',
    desc: 'Real-time object tracking, visual anomaly detection, and operational monitoring powered by advanced computer vision pipelines.',
    href: '/lab/visiontrack',
  },
  {
    id: 'visionpredict',
    num: '03',
    name: 'VisionPredict AI',
    tagline: 'Predictive supply chain intelligence',
    desc: 'Forecast demand, optimize capacity, and anticipate disruptions before they cascade through your network.',
    href: '/lab/visionpredict',
  },
]

export default function SolutionsPage() {
  return (
    <main className="relative overflow-x-hidden">
      <PageHero
        eyebrow="Solutions"
        title="Operational Intelligence Platform"
        subtitle="Three integrated AI systems designed to see, operate, and predict across your entire logistics network."
      />

      {products.map((product, i) => (
        <Reveal key={product.id} delay={i * 0.08}>
          <Section
            eyebrow={product.num}
            title={product.name}
            subtitle={product.tagline}
          >
            <div className="glass-card mx-auto max-w-3xl p-6 sm:p-10 md:p-14">
              <p className="text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">{product.desc}</p>
              <a href={product.href} className="btn btn-secondary mt-8 inline-flex w-full sm:mt-10 sm:w-auto">
                Launch Demo →
              </a>
            </div>
          </Section>
        </Reveal>
      ))}

      <Reveal>
        <div className="px-4 pb-24 safe-bottom sm:px-6 md:px-10 md:pb-32">
          <div className="section-line mx-auto max-w-6xl" />
          <div className="mx-auto mt-16 max-w-3xl text-center">
            <p className="eyebrow">Enterprise deployment</p>
            <h2 className="display-lg mt-6 gradient-text">Built for scale</h2>
            <p className="body-lg mx-auto mt-4">
              Every system integrates with your existing infrastructure and scales with your operations.
            </p>
            <a href="/contact" className="btn btn-primary mt-10 inline-flex">
              Talk to Our Team
            </a>
          </div>
        </div>
      </Reveal>
    </main>
  )
}
