'use client'

import { useState } from 'react'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    setStatus('loading')
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm({ name: '', company: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="relative overflow-x-hidden">
      <PageHero
        eyebrow="Contact"
        title="Enterprise Consultation"
        subtitle="Tell us about your operations. We'll show you what's possible with intelligent systems."
      />

      <Reveal>
        <div className="mx-auto max-w-lg px-4 pb-24 safe-bottom sm:px-6 md:px-10 md:pb-32">
          <div className="glass-card flex flex-col gap-5 p-6 sm:p-8 md:p-10">
            <div>
              <label className="eyebrow mb-2 block text-[0.6rem]">Name</label>
              <input name="name" value={form.name} onChange={handleChange} className="input-field" placeholder="Your Name" />
            </div>
            <div>
              <label className="eyebrow mb-2 block text-[0.6rem]">Company</label>
              <input name="company" value={form.company} onChange={handleChange} className="input-field" placeholder="Company Name" />
            </div>
            <div>
              <label className="eyebrow mb-2 block text-[0.6rem]">Email</label>
              <input name="email" value={form.email} onChange={handleChange} className="input-field" type="email" placeholder="you@company.com" />
            </div>
            <div>
              <label className="eyebrow mb-2 block text-[0.6rem]">Your Needs</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="input-field min-h-[140px] resize-none"
                placeholder="Describe your operational challenges..."
              />
            </div>

            {status === 'success' && (
              <p className="text-center text-sm text-green-400">Request received — we'll be in touch soon.</p>
            )}
            {status === 'error' && (
              <p className="text-center text-sm text-red-400">Something went wrong. Please try again.</p>
            )}

            <button
              onClick={handleSubmit}
              disabled={status === 'loading'}
              className="btn btn-primary mt-2 w-full disabled:opacity-50"
            >
              {status === 'loading' ? 'Sending...' : 'Request Consultation'}
            </button>
          </div>
        </div>
      </Reveal>
    </main>
  )
}