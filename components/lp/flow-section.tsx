import { flowSteps } from "@/data/shared"

export function FlowSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-5 md:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#1F2937] mb-3 sm:mb-4">
          導入の流れ
        </h2>
        <p className="text-sm sm:text-base text-center text-[#6B7280] mb-8 sm:mb-12 md:mb-16">
          最短3ヶ月で本番稼働
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {flowSteps.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="relative flex md:flex-col items-start md:items-center text-center gap-4 md:gap-0 pb-6 md:pb-0">
                  {/* Connector line (desktop) */}
                  {index < 3 && (
                    <div className="hidden md:block absolute top-6 left-[calc(50%+28px)] w-[calc(100%-56px)] h-0.5 bg-[#E5E7EB]" />
                  )}
                  {/* Connector line (mobile) */}
                  {index < 3 && (
                    <div className="md:hidden absolute left-[23px] top-[52px] w-0.5 h-[calc(100%-52px)] bg-[#E5E7EB]" />
                  )}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#06C755] rounded-full flex items-center justify-center shrink-0 relative z-10">
                    <Icon size={22} className="sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="md:mt-3 text-left md:text-center">
                    <p className="text-[10px] sm:text-xs text-[#06C755] font-bold mb-0.5">STEP {item.step}</p>
                    <h3 className="text-sm sm:text-base font-bold text-[#1F2937] mb-0.5 sm:mb-1">{item.title}</h3>
                    <span className="inline-block px-2 py-0.5 bg-[#E8F8F0] text-[#06C755] text-[10px] sm:text-xs font-semibold rounded-full mb-1 sm:mb-2">
                      {item.period}
                    </span>
                    <p className="text-[10px] sm:text-xs text-[#6B7280] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
