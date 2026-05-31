'use client'

import dynamic from 'next/dynamic'

const Scene = dynamic(() => import('@/components/Scene'), {
  ssr: false,
  loading: () => (
    <div
      className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-[#050505] to-black"
      aria-hidden
    />
  ),
})

export default function HeroScene() {
  return <Scene />
}
