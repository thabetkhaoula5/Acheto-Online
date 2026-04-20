// components/Footer.tsx - Mettre à jour pour inclure plus d'informations
interface FooterProps {
  onNavigate: (page: string) => void
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-acheto-dark pt-8 pb-5 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          <div>
            <div className="flex items-center gap-1.5 text-white text-base font-medium mb-3">
              <svg width="22" height="22" viewBox="0 0 36 36" fill="none">
                <rect width="36" height="36" rx="9" fill="#955149" />
                <path d="M10 27L15 9H21L26 27H22L20.5 22H15.5L14 27H10Z" fill="#E2E9C0" />
                <path d="M16.5 18.5H19.5L18 13L16.5 18.5Z" fill="#1E0F1C" />
                <circle cx="27" cy="10" r="4" fill="#7AA95C" />
                <circle cx="27" cy="10" r="2" fill="#E2E9C0" />
              </svg>
              <span>Ach<em className="text-acheto-cream not-italic">eto</em></span>
            </div>
            <p className="text-white/40 text-[11px] leading-relaxed">
              Bold style for the fearless. Curated clothing, gadgets, and accessories.
            </p>
          </div>
          <div>
            <h4 className="text-white/60 text-xs font-medium mb-2">Shop</h4>
            <ul className="space-y-1">
              <li><button onClick={() => onNavigate('clothing')} className="text-white/40 text-[11px] hover:text-white transition-colors">Clothing</button></li>
              <li><button onClick={() => onNavigate('gadgets')} className="text-white/40 text-[11px] hover:text-white transition-colors">Gadgets</button></li>
              <li><button onClick={() => onNavigate('footwear')} className="text-white/40 text-[11px] hover:text-white transition-colors">Footwear</button></li>
              <li><button onClick={() => onNavigate('accessories')} className="text-white/40 text-[11px] hover:text-white transition-colors">Accessories</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white/60 text-xs font-medium mb-2">Support</h4>
            <ul className="space-y-1">
              <li><button className="text-white/40 text-[11px] hover:text-white transition-colors">FAQs</button></li>
              <li><button className="text-white/40 text-[11px] hover:text-white transition-colors">Shipping</button></li>
              <li><button className="text-white/40 text-[11px] hover:text-white transition-colors">Returns</button></li>
              <li><button className="text-white/40 text-[11px] hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white/60 text-xs font-medium mb-2">Company</h4>
            <ul className="space-y-1">
              <li><button onClick={() => onNavigate('about')} className="text-white/40 text-[11px] hover:text-white transition-colors">About Us</button></li>
              <li><button className="text-white/40 text-[11px] hover:text-white transition-colors">Careers</button></li>
              <li><button className="text-white/40 text-[11px] hover:text-white transition-colors">Privacy Policy</button></li>
              <li><button className="text-white/40 text-[11px] hover:text-white transition-colors">Terms of Service</button></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-4 flex justify-between items-center flex-wrap gap-2">
          <div className="text-[10px] text-white/28">
            © {currentYear} Acheto · All rights reserved
          </div>
          <div className="flex gap-3">
            <span className="text-white/28 text-[10px]">Next.js</span>
            <span className="text-white/28 text-[10px]">Made with ❤️ in Tunis, TN</span>
          </div>
        </div>
      </div>
    </footer>
  )
}