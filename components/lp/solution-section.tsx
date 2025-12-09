export function SolutionSection() {
  return (
    <section className="py-16 md:py-20 bg-[#06C755] text-white">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">80%は完成済み、残り20%を御社仕様に</h2>
        <p className="text-lg md:text-xl text-center mb-12 md:mb-14 opacity-90">
          機能アセットをベースに、必要な部分だけカスタマイズ
        </p>

        {/* Formula */}
        <div className="max-w-4xl mx-auto mb-14 md:mb-16">
          <div className="bg-white rounded-2xl p-6 md:p-10 text-[#1F2937]">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
              {/* 機能アセット */}
              <div className="flex-1 text-center">
                <div className="bg-[#E8F8F0] rounded-xl p-4 mb-2">
                  <div className="text-4xl md:text-5xl font-bold text-[#06C755]">80%</div>
                  <div className="text-xs text-[#6B7280] mt-1">機能アセット</div>
                </div>
                <p className="text-[10px] text-[#9CA3AF]">基本機能は開発済み</p>
              </div>

              <div className="text-3xl font-bold text-[#06C755]">+</div>

              {/* カスタマイズ */}
              <div className="flex-1 text-center">
                <div className="bg-[#FEF3C7] rounded-xl p-4 mb-2">
                  <div className="text-4xl md:text-5xl font-bold text-[#FB923C]">20%</div>
                  <div className="text-xs text-[#6B7280] mt-1">カスタマイズ</div>
                </div>
                <p className="text-[10px] text-[#9CA3AF]">御社独自の要件</p>
              </div>

              <div className="text-3xl font-bold text-[#06C755]">=</div>

              {/* 御社専用 */}
              <div className="flex-1 text-center">
                <div className="bg-gradient-to-br from-[#06C755] to-[#05A847] rounded-xl p-4 mb-2">
                  <div className="text-2xl md:text-3xl font-bold text-white">御社専用</div>
                  <div className="text-xs text-white/80 mt-1">システム</div>
                </div>
                <p className="text-[10px] text-[#9CA3AF]">最短3ヶ月でリリース</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {/* SaaS Card */}
            <div className="bg-white rounded-2xl p-6 text-[#1F2937] relative">
              <h3 className="text-xl font-bold mb-6 text-center">SaaS</h3>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2 justify-center">
                  <span className="text-[#06C755] text-lg shrink-0">◎</span>
                  <span className="text-[#6B7280] text-center">低価格で即日利用可</span>
                </div>
                <div className="flex items-start gap-2 justify-center">
                  <span className="text-[#EF4444] text-lg shrink-0">×</span>
                  <span className="text-[#6B7280]">カスタマイズ不可</span>
                </div>
                <div className="flex items-start gap-2 justify-center">
                  <span className="text-[#EF4444] text-lg shrink-0">△</span>
                  <span className="text-[#6B7280]">拡張性に限界</span>
                </div>
              </div>
            </div>

            {/* Half-Scratch Card */}
            <div className="bg-gradient-to-br from-[#FEF3C7] to-white rounded-2xl p-6 text-[#1F2937] border-2 border-[#FCD34D] relative shadow-lg transform md:scale-105">
              <h3 className="text-xl font-bold mb-6 text-center text-[#06C755]">ハーフスクラッチ</h3>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2 justify-center">
                  <span className="text-[#06C755] text-lg shrink-0">◎</span>
                  <span className="text-[#1F2937] font-medium">3ヶ月でスピード開発</span>
                </div>
                <div className="flex items-start gap-2 justify-center">
                  <span className="text-[#06C755] text-lg shrink-0">○</span>
                  <span className="text-[#1F2937] font-medium">柔軟なカスタマイズ</span>
                </div>
                <div className="flex items-start gap-2 justify-center">
                  <span className="text-[#06C755] text-lg shrink-0">○</span>
                  <span className="text-[#1F2937] font-medium">コスト最適化</span>
                </div>
              </div>
            </div>

            {/* Full Scratch Card */}
            <div className="bg-white rounded-2xl p-6 text-[#1F2937] relative">
              <h3 className="text-xl font-bold mb-6 text-center">フルスクラッチ</h3>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2 justify-center">
                  <span className="text-[#06C755] text-lg shrink-0">◎</span>
                  <span className="text-[#6B7280]">完全自由設計</span>
                </div>
                <div className="flex items-start gap-2 justify-center">
                  <span className="text-[#EF4444] text-lg shrink-0">△</span>
                  <span className="text-[#6B7280]">高コスト</span>
                </div>
                <div className="flex items-start gap-2 justify-center">
                  <span className="text-[#EF4444] text-lg shrink-0">△</span>
                  <span className="text-[#6B7280]">開発期間6ヶ月〜</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Message */}
        <div className="text-center">
          <div className="inline-block bg-white/10 rounded-xl px-6 md:px-10 py-4 md:py-5">
            <p className="text-xl md:text-2xl font-bold">
              通常<span className="text-[#FCD34D] mx-2 text-2xl md:text-3xl">6ヶ月</span>かかる開発を
              <span className="text-[#FCD34D] mx-2 text-2xl md:text-3xl">3ヶ月</span>で実現
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
