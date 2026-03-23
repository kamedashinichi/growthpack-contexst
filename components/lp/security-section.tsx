import { securityItems } from "@/data/shared"

export function SecuritySection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-5 md:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#1F2937] mb-8 sm:mb-12 md:mb-16">
          安心の開発体制
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {securityItems.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-[#E5E7EB] text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#E8F8F0] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Icon size={24} className="sm:w-7 sm:h-7 text-[#06C755]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#1F2937] mb-1.5 sm:mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
