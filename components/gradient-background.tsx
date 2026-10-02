"use client"

export function GradientBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Base dark */}
      <div className="absolute inset-0 bg-[#050505]" />
      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-100" />
      {/* Radial glow top-left */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[120px]" />
      {/* Radial glow bottom-right */}
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-violet-600/8 rounded-full blur-[120px]" />
      {/* Center subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/3 rounded-full blur-[150px]" />
    </div>
  )
}
