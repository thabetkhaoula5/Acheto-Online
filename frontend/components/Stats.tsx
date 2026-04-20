export function Stats() {
  const stats = [
    { value: '2,400+', label: 'Products' },
    { value: '98%', label: 'Satisfaction' },
    { value: 'Free', label: 'Shipping >$50' },
    { value: '30-day', label: 'Easy returns' },
  ]

  return (
    <div className="flex flex-wrap bg-acheto-cream">
      {stats.map((stat, index) => (
        <div key={index} className="flex-1 min-w-[110px] text-center py-4 px-2 border-r border-acheto-dark/10 last:border-none">
          <div className="text-[22px] font-medium text-acheto-red">{stat.value}</div>
          <div className="text-[11px] text-acheto-dark/60 mt-0.5">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}