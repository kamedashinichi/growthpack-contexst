import type { FeatureHighlight } from "@/lib/content"

interface FeatureHighlightSectionProps {
  highlights: FeatureHighlight[]
}

export function FeatureHighlightSection({ highlights }: FeatureHighlightSectionProps) {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-white">
      <div className="max-w-[900px] mx-auto px-4 sm:px-5 md:px-6">
        <p className="text-xs sm:text-sm tracking-[0.15em] uppercase text-neutral-400 mb-3 sm:mb-4">
          Features
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-[#1F2937] leading-tight mb-12 sm:mb-16 md:mb-20">
          アパレルに効く4つの機能
        </h2>

        <div className="space-y-16 sm:space-y-20 md:space-y-24">
          {highlights.map((highlight, index) => {
            const isReversed = index % 2 === 1
            return (
              <div
                key={index}
                className={`grid grid-cols-1 md:grid-cols-[1fr_280px] gap-6 sm:gap-8 md:gap-12 items-start ${
                  isReversed ? "md:grid-cols-[280px_1fr]" : ""
                }`}
              >
                {/* Text content */}
                <div className={isReversed ? "md:order-2" : ""}>
                  <span className="text-xs text-neutral-400 mb-2 block">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl sm:text-2xl md:text-[28px] font-bold text-[#1F2937] mb-3 sm:mb-4 leading-snug">
                    {highlight.name}
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-500 leading-[1.8] mb-4 sm:mb-6">
                    {highlight.industryContext}
                  </p>
                  {highlight.proof && (
                    <div className="inline-flex items-center gap-2 bg-[#E8F8F0] text-[#06C755] text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      {highlight.proof}
                    </div>
                  )}
                </div>

                {/* Visual block */}
                <div className={`${isReversed ? "md:order-1" : ""}`}>
                  <div className="bg-neutral-50 rounded-2xl p-6 sm:p-8 aspect-square flex items-center justify-center">
                    <div className="text-center">
                      <span className="block text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1F2937] font-['Roboto'] tracking-tight leading-none">
                        {getFeatureVisual(highlight.featureId).number}
                      </span>
                      <span className="block text-xs sm:text-sm text-neutral-400 mt-2 sm:mt-3">
                        {getFeatureVisual(highlight.featureId).label}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function getFeatureVisual(featureId: string): { number: string; label: string } {
  const visuals: Record<string, { number: string; label: string }> = {
    memberscard: { number: "5sec", label: "会員登録完了まで" },
    "1to1": { number: "0", label: "引き継ぎ漏れ" },
    coupon: { number: "665%", label: "メッセージROAS" },
    gift: { number: "10万", label: "友だち追加/月" },
  }
  return visuals[featureId] ?? { number: "—", label: "" }
}
