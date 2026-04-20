interface HeroProps {
  onShopNow: () => void
  onNewArrivals: () => void
}

export function Hero({ onShopNow, onNewArrivals }: HeroProps) {
  return (
    <div className="bg-acheto-dark py-16 px-8 relative overflow-hidden min-h-[320px] flex flex-col justify-center gap-4">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg width="100%" height="100%" viewBox="0 0 800 320" preserveAspectRatio="xMidYMid slice">
          <circle cx="680" cy="60" r="110" fill="#955149" opacity="0.18" />
          <circle cx="750" cy="260" r="70" fill="#7AA95C" opacity="0.14" />
          <polygon points="580,0 680,180 480,180" fill="#A7001E" opacity="0.12" />
          <rect x="600" y="180" width="80" height="80" rx="8" fill="#E2E9C0" opacity="0.1" />
          <circle cx="520" cy="80" r="30" fill="#E2E9C0" opacity="0.08" />
        </svg>
      </div>

      <span className="inline-flex items-center gap-1.5 bg-acheto-green/20 border border-acheto-green/35 text-acheto-cream text-[11px] font-medium px-3 py-1 rounded-full w-fit animate-fade-up">
        <span className="w-1.5 h-1.5 bg-acheto-green rounded-full animate-pulse" />
        New season 2026
      </span>
      
      <h1 className="text-4xl font-medium text-white leading-tight max-w-[520px] animate-fade-up [animation-delay:100ms]">
        Wear Bold.<br />Live <em className="text-acheto-cream not-italic">Different.</em>
      </h1>
      
      <p className="text-sm text-white/55 leading-relaxed max-w-[400px] animate-fade-up [animation-delay:200ms]">
        Curated clothing and gadgets for those who refuse to blend in. Premium quality, striking design.
      </p>
      
      <div className="flex gap-2.5 flex-wrap animate-fade-up [animation-delay:300ms]">
        <button onClick={onShopNow} className="bg-acheto-red text-white px-7 py-3 rounded-lg text-sm font-medium transition-all hover:bg-acheto-red-2 hover:-translate-y-0.5">
          Shop now
        </button>
        <button onClick={onNewArrivals} className="bg-white/7 text-white border border-white/20 px-7 py-3 rounded-lg text-sm transition-all hover:bg-white/12 hover:border-white/40">
          New arrivals →
        </button>
      </div>
    </div>
  )
}