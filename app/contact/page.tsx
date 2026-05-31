import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'

export default function Contact() {
  return (
    <main className="relative overflow-x-hidden">
      <PageHero
        eyebrow="Contact"
        title="Enterprise Consultation"
        subtitle="Tell us about your operations. We'll show you what's possible with intelligent systems."
      />

      <Reveal>
        <div className="mx-auto max-w-lg px-4 pb-24 safe-bottom sm:px-6 md:px-10 md:pb-32">
          <form className="glass-card flex flex-col gap-5 p-6 sm:p-8 md:p-10">
            <div>
              <label className="eyebrow mb-2 block text-[0.6rem]">Company</label>
              <input className="input-field" placeholder="Company Name" />
            </div>
            <div>
              <label className="eyebrow mb-2 block text-[0.6rem]">Email</label>
              <input className="input-field" type="email" placeholder="you@company.com" />
            </div>
            <div>
              <label className="eyebrow mb-2 block text-[0.6rem]">Your Needs</label>
              <textarea
                className="input-field min-h-[140px] resize-none"
                placeholder="Describe your operational challenges..."
              />
            </div>
            <button type="button" className="btn btn-primary mt-2 w-full">
              Request Consultation
            </button>
          </form>
        </div>
      </Reveal>
    </main>
  )
}
