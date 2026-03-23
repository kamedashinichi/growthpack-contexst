import type { MetricsItem } from "@/data/types"

export function MetricsBar({ metrics }: { metrics: MetricsItem[] }) {
  return (
    <section className="py-6 sm:py-8 bg-[#1F2937]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-5 md:px-6">
        <p className="text-xs sm:text-sm text-center text-gray-400 mb-3 sm:mb-4">導入企業の実績</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((m, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-0.5">
                <span className="font-['Roboto'] text-[#06C755]">{m.value}</span>
                <span className="text-base sm:text-lg md:text-xl text-gray-300">{m.unit}</span>
              </div>
              <div className="text-[10px] sm:text-xs text-gray-400">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
