// components/FilterBar.tsx - Updated to show category correctly
interface FilterBarProps {
  categories: string[]
  activeFilter: string
  onFilterChange: (filter: string) => void
}

export function FilterBar({ categories, activeFilter, onFilterChange }: FilterBarProps) {
  const displayCategories = [
    { id: 'all', label: 'All' },
    ...categories.map(cat => ({ id: cat, label: cat.charAt(0).toUpperCase() + cat.slice(1) }))
  ]

  return (
    <div className="flex gap-1.5 flex-wrap mb-5">
      {displayCategories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onFilterChange(cat.id)}
          className={`px-3.5 py-1 rounded-full text-xs transition-all capitalize ${
            activeFilter === cat.id
              ? 'bg-acheto-dark text-acheto-cream'
              : 'border border-acheto-dark/12 text-acheto-muted hover:border-acheto-red hover:text-acheto-red'
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
}