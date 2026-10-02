export function GradientBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-[#0d0d1a] to-indigo-950" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-500/8 to-pink-500/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-600/15 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-600/10 via-transparent to-transparent" />
      {/* Subtle grid */}
      <div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px'}} />
    </div>
  )
}
