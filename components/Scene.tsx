'use client'

import { Canvas } from '@react-three/fiber'
import { Float, OrbitControls, Stars } from '@react-three/drei'
import { useEffect, useState } from 'react'

function WireShape({
  position,
  scale,
  geometry,
}: {
  position: [number, number, number]
  scale: number
  geometry: 'box' | 'icosahedron' | 'octahedron'
}) {
  return (
    <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh position={position} scale={scale}>
        {geometry === 'box' && <boxGeometry args={[1, 1, 1]} />}
        {geometry === 'icosahedron' && <icosahedronGeometry args={[0.8, 1]} />}
        {geometry === 'octahedron' && <octahedronGeometry args={[0.9, 0]} />}
        <meshStandardMaterial
          color="#ffffff"
          wireframe
          transparent
          opacity={0.12}
        />
      </mesh>
    </Float>
  )
}

export default function Scene() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return (
    <div className="absolute inset-0 -z-10" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80" />
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        dpr={[1, isMobile ? 1.25 : 1.75]}
        gl={{ antialias: !isMobile, powerPreference: isMobile ? 'low-power' : 'high-performance' }}
      >
        <fog attach="fog" args={['#000000', 8, 18]} />
        <ambientLight intensity={0.25} />
        <pointLight position={[8, 12, 8]} intensity={1.4} color="#ffffff" />
        <pointLight position={[-8, -4, -6]} intensity={0.4} color="#2997ff" />

        <Stars
          radius={80}
          depth={40}
          count={isMobile ? 400 : 1200}
          factor={isMobile ? 2 : 3}
          fade
          speed={0.5}
        />

        {!isMobile && (
          <>
            <WireShape position={[-2.2, 0.8, -1]} scale={0.9} geometry="icosahedron" />
            <WireShape position={[2.4, -0.6, 0.5]} scale={0.7} geometry="octahedron" />
          </>
        )}
        <WireShape position={[0.3, 1.2, -2]} scale={0.55} geometry="box" />

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={isMobile ? 0.2 : 0.35}
          enablePan={false}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  )
}
