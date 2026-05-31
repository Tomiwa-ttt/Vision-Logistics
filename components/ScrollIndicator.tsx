export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 sm:bottom-10 sm:flex">
      <span className="eyebrow text-[0.6rem]">Scroll</span>
      <div className="scroll-indicator h-10 w-px bg-gradient-to-b from-white/60 to-transparent" />
    </div>
  )
}
