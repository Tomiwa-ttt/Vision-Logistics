import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import ContactForm from '@/components/ContactForm'

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
          <ContactForm />
        </div>
      </Reveal>
    </main>
  )
}