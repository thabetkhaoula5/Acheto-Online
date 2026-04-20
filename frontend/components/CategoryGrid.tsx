// components/CategoryGrid.tsx
'use client'

import Image from 'next/image'

interface Category {
  id: string
  name: string
  bg: string
  image: string
  count: number
}

interface CategoryGridProps {
  categories: Category[]
  onSelectCategory: (categoryId: string) => void
}

export function CategoryGrid({ categories, onSelectCategory }: CategoryGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 mb-7">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelectCategory(cat.id)}
          className="bg-white border border-acheto-dark/10 rounded-xl py-3.5 px-2 text-center transition-all hover:border-acheto-red-2 hover:bg-acheto-dark hover:-translate-y-0.5 group"
        >
          <div
            className="w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center transition-transform group-hover:scale-110 overflow-hidden"
            style={{ backgroundColor: cat.bg }}
          >
            <Image src={cat.image} alt={cat.name} width={32} height={32} className="object-contain" />
          </div>
          <div className="text-xs font-medium text-acheto-dark group-hover:text-white transition-colors">{cat.name}</div>
          <div className="text-[11px] text-acheto-muted group-hover:text-white/50 transition-colors">{cat.count} items</div>
        </button>
      ))}
    </div>
  )
}