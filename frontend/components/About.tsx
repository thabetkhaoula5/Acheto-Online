// components/About.tsx
'use client'

import Image from 'next/image'

interface AboutProps {
  onNavigate?: (page: string) => void
}

export function About({ onNavigate = () => {} }: AboutProps) {
  const features = [
    {
      icon: "/images/logo.svg",
      title: "Premium Quality",
      description: "Curated selection of high-end products from trusted brands"
    },
    {
      icon: "/images/globe.svg",
      title: "Worldwide Shipping",
      description: "Fast and reliable delivery to over 50 countries"
    },
    {
      icon: "/images/High_Tech.svg",
      title: "Tech Innovation",
      description: "Seamless shopping experience with cutting-edge technology"
    },
    {
      icon: "/images/Motif.svg",
      title: "Sustainable Style",
      description: "Eco-friendly packaging and responsible sourcing"
    }
  ]

  const team = [
    {
      name: "Ahmed Ben Ali",
      role: "Founder & CEO",
      image: "/images/Mode_Homme.svg",
      bg: "#E8DCD0"
    },
    {
      name: "Sofia Mansour",
      role: "Creative Director",
      image: "/images/Mode_Femme.svg",
      bg: "#D4AF37"
    },
    {
      name: "Karim Saidi",
      role: "Tech Lead",
      image: "/images/High_Tech.svg",
      bg: "#2C2C2C"
    },
    {
      name: "Leila Trabelsi",
      role: "Head of Design",
      image: "/images/Accessoires.svg",
      bg: "#87CEEB"
    }
  ]

  const stats = [
    { value: "2,400+", label: "Products", icon: "/images/Sneaker.svg" },
    { value: "98%", label: "Satisfaction", icon: "/images/logo.svg" },
    { value: "50+", label: "Countries", icon: "/images/globe.svg" },
    { value: "30-day", label: "Easy returns", icon: "/images/Mobile.svg" }
  ]

  return (
    <div className="bg-[#f8f5f2]">
      {/* Hero Section */}
      <div className="relative bg-acheto-dark py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg width="100%" height="100%" viewBox="0 0 800 320" preserveAspectRatio="xMidYMid slice">
            <circle cx="680" cy="60" r="110" fill="#955149" opacity="0.18" />
            <circle cx="750" cy="260" r="70" fill="#7AA95C" opacity="0.14" />
            <polygon points="580,0 680,180 480,180" fill="#A7001E" opacity="0.12" />
            <rect x="600" y="180" width="80" height="80" rx="8" fill="#E2E9C0" opacity="0.1" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-acheto-green/20 border border-acheto-green/35 text-acheto-cream text-[11px] font-medium px-3 py-1 rounded-full mb-4">
            <span className="w-1.5 h-1.5 bg-acheto-green rounded-full animate-pulse" />
            Our Story
          </div>
          <h1 className="text-4xl md:text-5xl font-medium text-white mb-4">
            Bold Style for the<br />
            <em className="text-acheto-cream not-italic">Fearless Generation</em>
          </h1>
          <p className="text-white/60 text-sm max-w-2xl mx-auto">
            Acheto was born from a simple idea: create a space where quality meets attitude, 
            where every product tells a story of craftsmanship and bold choices.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white border-b border-acheto-dark/8 py-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#f8f5f2] flex items-center justify-center mx-auto mb-3">
                <Image src={stat.icon} alt={stat.label} width={24} height={24} className="object-contain" />
              </div>
              <div className="text-2xl font-bold text-acheto-red">{stat.value}</div>
              <div className="text-xs text-acheto-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-medium text-acheto-dark mb-4">
              Our Mission
            </h2>
            <p className="text-acheto-muted text-sm leading-relaxed mb-4">
              At Acheto, we believe that style is a form of self-expression. Our mission is to 
              empower individuals to express their unique identity through carefully curated 
              products that blend functionality with striking design.
            </p>
            <p className="text-acheto-muted text-sm leading-relaxed">
              We're not just another e-commerce platform — we're a community of creators, 
              innovators, and trendsetters who refuse to blend in. Every product in our 
              collection is chosen with purpose, ensuring quality, sustainability, and style.
            </p>
          </div>
          <div className="bg-acheto-dark/5 rounded-2xl p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <svg width="48" height="48" viewBox="0 0 36 36" fill="none">
                <rect width="36" height="36" rx="9" fill="#1E0F1C"/>
                <path d="M10 27L15 9H21L26 27H22L20.5 22H15.5L14 27H10Z" fill="#E2E9C0"/>
                <path d="M16.5 18.5H19.5L18 13L16.5 18.5Z" fill="#A7001E"/>
                <circle cx="27" cy="10" r="4" fill="#7AA95C"/>
                <circle cx="27" cy="10" r="2" fill="#E2E9C0"/>
              </svg>
              <span className="text-acheto-dark text-xl font-medium tracking-tight">Ach<em className="text-acheto-red not-italic">eto</em></span>
            </div>
            <p className="text-acheto-dark font-medium italic text-sm">
              "Style is a way to say who you are without having to speak."
            </p>
            <p className="text-acheto-muted text-xs mt-2">— Rachel Zoe</p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-medium text-acheto-dark mb-2">Why Choose Acheto</h2>
            <p className="text-sm text-acheto-muted">Experience shopping differently</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature, index) => (
              <div key={index} className="bg-[#f8f5f2] rounded-xl p-5 text-center transition-all hover:-translate-y-1 hover:shadow-md">
                <div className="w-14 h-14 rounded-full bg-white border border-acheto-dark/10 flex items-center justify-center mx-auto mb-3">
                  <Image src={feature.icon} alt={feature.title} width={32} height={32} className="object-contain" />
                </div>
                <h3 className="text-base font-medium text-acheto-dark mb-2">{feature.title}</h3>
                <p className="text-xs text-acheto-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-medium text-acheto-dark mb-2">Meet the Team</h2>
          <p className="text-sm text-acheto-muted">The creative minds behind Acheto</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {team.map((member, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div 
                className="w-24 h-24 rounded-full mx-auto mb-3 flex items-center justify-center transition-all group-hover:scale-110 group-hover:shadow-lg"
                style={{ backgroundColor: member.bg }}
              >
                <Image src={member.image} alt={member.name} width={48} height={48} className="object-contain" />
              </div>
              <h3 className="text-sm font-medium text-acheto-dark">{member.name}</h3>
              <p className="text-xs text-acheto-muted">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="py-12 px-6 bg-acheto-dark text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-medium mb-6">Built with Modern Tech</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-2xl mb-2">⚡</div>
              <div className="text-sm font-medium">Next.js 14</div>
              <div className="text-xs text-white/50">React Framework</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-2xl mb-2">🎨</div>
              <div className="text-sm font-medium">Tailwind CSS</div>
              <div className="text-xs text-white/50">Styling</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-2xl mb-2">🐍</div>
              <div className="text-sm font-medium">Flask</div>
              <div className="text-xs text-white/50">Python API</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-2xl mb-2">🍃</div>
              <div className="text-sm font-medium">MongoDB</div>
              <div className="text-xs text-white/50">Database</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-medium text-acheto-dark mb-3">
            Ready to Make a Statement?
          </h2>
          <p className="text-sm text-acheto-muted mb-6">
            Join thousands of customers who've found their bold style with Acheto.
          </p>
          <div className="flex gap-3 justify-center">
            <button 
              onClick={() => onNavigate('shop')}
              className="bg-acheto-red text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all hover:bg-acheto-red-2 hover:-translate-y-px"
            >
              Shop Now
            </button>
            <button 
              onClick={() => onNavigate('shop')}
              className="bg-white text-acheto-dark border border-acheto-dark/18 px-6 py-2.5 rounded-lg text-sm transition-all hover:border-acheto-red hover:text-acheto-red"
            >
              Explore Products →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}