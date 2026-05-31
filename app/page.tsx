import HeroScene from '@/components/HeroScene'
import MotionWrapper from '@/components/MotionWrapper'
import Reveal from '@/components/Reveal'
import ScrollIndicator from '@/components/ScrollIndicator'
import Section from '@/components/Section'

const capabilities = [
  {
    num: '01',
    title: 'AI Automation',
    desc: 'Intelligent workflows that eliminate manual bottlenecks across enterprise operations.',
  },
  {
    num: '02',
    title: 'Computer Vision',
    desc: 'Real-time visual intelligence for logistics, monitoring, and quality assurance.',
  },
  {
    num: '03',
    title: 'Predictive Intelligence',
    desc: 'Forecast demand, capacity, and risk before they impact your supply chain.',
  },
]

const industries = ['Logistics', 'Healthcare', 'Manufacturing', 'Retail', 'Energy', 'Finance']

const stats = [
  { value: '99.2%', label: 'System uptime' },
  { value: '40%', label: 'Avg. efficiency gain' },
  { value: '24/7', label: 'Real-time monitoring' },
]

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      {/* HERO */}
      <div className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-4 pb-16 pt-24 sm:px-6 sm:pt-28">
        <HeroScene />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black" />

        <MotionWrapper>
          <div className="relative z-10 w-full max-w-3xl text-center">
            <p className="eyebrow">TAM Global Solutions</p>

            <h1 className="display-xl mt-6 sm:mt-8">
              <span className="block gradient-text gradient-text-glow">Vision</span>
              <span className="block gradient-text gradient-text-glow">Logistics</span>
            </h1>

            <p className="body-lg mx-auto mt-6 max-w-xl sm:mt-8">
              Intelligent systems that let organizations see, understand,
              and predict operations in real time.
            </p>

            <div className="mt-10 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-12 sm:flex-row sm:items-center sm:gap-4">
              <a href="/solutions" className="btn btn-primary w-full sm:w-auto">
                Explore Solutions
              </a>
              <a href="/lab" className="btn btn-secondary w-full sm:w-auto">
                Innovation Lab
              </a>
            </div>
          </div>
        </MotionWrapper>

        <ScrollIndicator />
      </div>

      {/* STATS STRIP */}
      <Reveal>
        <div className="relative z-10 border-y border-white/[0.06] px-4 py-12 sm:px-6 md:px-10 md:py-16">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="stat-value gradient-text">{stat.value}</p>
                <p className="eyebrow mt-3">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* CAPABILITIES */}
      <Reveal>
        <Section
          eyebrow="What We Build"
          title="Intelligent Operational Systems"
          subtitle="We design AI systems that transform how organizations operate at scale."
        >
          <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
            {capabilities.map((item, i) => (
              <Reveal key={item.num} delay={i * 0.1}>
                <div className="glass-card group p-6 sm:p-8 md:p-10">
                  <span className="eyebrow text-[var(--accent)]">{item.num}</span>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight sm:mt-6 sm:text-xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      </Reveal>

      {/* INDUSTRIES */}
      <Reveal>
        <Section
          eyebrow="Sectors"
          title="Industries We Serve"
          subtitle="Built for real-world operational environments."
        >
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {industries.map((name, i) => (
              <Reveal key={name} delay={i * 0.05}>
                <div className="glass px-4 py-2.5 text-sm tracking-wide text-[var(--text-muted)] transition-colors hover:text-white sm:px-6 sm:py-3">
                  {name}
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      </Reveal>

      {/* MANIFESTO */}
      <Reveal>
        <Section eyebrow="Our Mission" title="Why Vision Logistics">
          <blockquote className="mx-auto max-w-3xl text-center px-2">
            <p className="text-lg leading-relaxed text-[var(--text-muted)] sm:text-xl md:text-2xl md:leading-relaxed">
              Modern organizations operate blind — data is fragmented, processes are manual,
              and decision-making is reactive. We build systems that allow organizations to{' '}
              <span className="text-white">see</span>,{' '}
              <span className="text-white">understand</span>, and{' '}
              <span className="text-white">predict</span> in real time.
            </p>
          </blockquote>
        </Section>
      </Reveal>

      {/* CTA BAND */}
      <Reveal>
        <div className="relative z-10 px-4 pb-24 pt-8 safe-bottom sm:px-6 md:px-10 md:pb-32">
          <div className="glass-card mx-auto max-w-4xl p-8 text-center sm:p-12 md:p-16">
            <p className="eyebrow">Ready to transform operations?</p>
            <h2 className="display-lg mt-6 gradient-text">Start with a consultation</h2>
            <p className="body-lg mx-auto mt-4 max-w-lg">
              Partner with Vision Logistics to deploy intelligent systems across your organization.
            </p>
            <div className="mt-10 flex w-full flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a href="/contact" className="btn btn-primary w-full sm:w-auto">
                Request Consultation
              </a>
              <a href="/lab" className="btn btn-secondary w-full sm:w-auto">
                Try the Lab
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </main>
  )
}
