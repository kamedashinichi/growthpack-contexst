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

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto mb-12">
          {/* Table Header */}
          <div className="bg-white rounded-t-2xl overflow-hidden">
            <div className="grid grid-cols-4 text-center">
              <div className="p-4 bg-[#F3F4F6] font-bold text-[#1F2937] text-sm md:text-base">比較項目</div>
              <div className="p-4 bg-[#F3F4F6] font-bold text-[#1F2937] text-sm md:text-base">SaaS</div>
              <div className="p-4 bg-[#FCD34D] font-bold text-[#1F2937] text-sm md:text-base relative">
                ハーフスクラッチ
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#FB923C] text-white text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap">
                  おすすめ
                </span>
              </div>
              <div className="p-4 bg-[#F3F4F6] font-bold text-[#1F2937] text-sm md:text-base">フルスクラッチ</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="bg-white rounded-b-2xl overflow-hidden text-[#1F2937]">
            {/* Initial Cost */}
            <div className="grid grid-cols-4 text-center border-t border-[#E5E7EB]">
              <div className="p-4 bg-[#F8F9FA] font-medium text-sm">初期コスト</div>
              <div className="p-4 flex flex-col items-center justify-center">
                <span className="text-[#06C755] text-2xl mb-1">◎</span>
                <span className="text-xs text-[#6B7280]">低い</span>
              </div>
              <div className="p-4 bg-[#FFFBEB] flex flex-col items-center justify-center">
                <span className="text-[#06C755] text-2xl mb-1">○</span>
                <span className="text-xs text-[#6B7280]">抑えられる</span>
              </div>
              <div className="p-4 flex flex-col items-center justify-center">
                <span className="text-[#EF4444] text-2xl mb-1">△</span>
                <span className="text-xs text-[#6B7280]">高い</span>
              </div>
            </div>

            {/* Development Period */}
            <div className="grid grid-cols-4 text-center border-t border-[#E5E7EB]">
              <div className="p-4 bg-[#F8F9FA] font-medium text-sm">開発期間</div>
              <div className="p-4 flex flex-col items-center justify-center">
                <span className="text-[#06C755] text-2xl mb-1">◎</span>
                <span className="text-xs text-[#6B7280]">即日〜</span>
              </div>
              <div className="p-4 bg-[#FFFBEB] flex flex-col items-center justify-center">
                <span className="text-[#06C755] text-2xl mb-1">○</span>
                <span className="text-xs text-[#6B7280] font-bold">約3ヶ月</span>
              </div>
              <div className="p-4 flex flex-col items-center justify-center">
                <span className="text-[#EF4444] text-2xl mb-1">△</span>
                <span className="text-xs text-[#6B7280]">6ヶ月〜</span>
              </div>
            </div>

            {/* Customization */}
            <div className="grid grid-cols-4 text-center border-t border-[#E5E7EB]">
              <div className="p-4 bg-[#F8F9FA] font-medium text-sm">カスタマイズ性</div>
              <div className="p-4 flex flex-col items-center justify-center">
                <span className="text-[#EF4444] text-2xl mb-1">×</span>
                <span className="text-xs text-[#6B7280]">不可</span>
              </div>
              <div className="p-4 bg-[#FFFBEB] flex flex-col items-center justify-center">
                <span className="text-[#06C755] text-2xl mb-1">○</span>
                <span className="text-xs text-[#6B7280]">柔軟に対応</span>
              </div>
              <div className="p-4 flex flex-col items-center justify-center">
                <span className="text-[#06C755] text-2xl mb-1">◎</span>
                <span className="text-xs text-[#6B7280]">完全自由</span>
              </div>
            </div>

            {/* Scalability */}
            <div className="grid grid-cols-4 text-center border-t border-[#E5E7EB]">
              <div className="p-4 bg-[#F8F9FA] font-medium text-sm">拡張性</div>
              <div className="p-4 flex flex-col items-center justify-center">
                <span className="text-[#EF4444] text-2xl mb-1">△</span>
                <span className="text-xs text-[#6B7280]">限定的</span>
              </div>
              <div className="p-4 bg-[#FFFBEB] flex flex-col items-center justify-center">
                <span className="text-[#06C755] text-2xl mb-1">○</span>
                <span className="text-xs text-[#6B7280]">段階的に追加可</span>
              </div>
              <div className="p-4 flex flex-col items-center justify-center">
                <span className="text-[#06C755] text-2xl mb-1">◎</span>
                <span className="text-xs text-[#6B7280]">無制限</span>
              </div>
            </div>

            {/* Operation & Maintenance */}
            <div className="grid grid-cols-4 text-center border-t border-[#E5E7EB]">
              <div className="p-4 bg-[#F8F9FA] font-medium text-sm">運用・保守</div>
              <div className="p-4 flex flex-col items-center justify-center">
                <span className="text-[#06C755] text-2xl mb-1">◎</span>
                <span className="text-xs text-[#6B7280]">ベンダー任せ</span>
              </div>
              <div className="p-4 bg-[#FFFBEB] flex flex-col items-center justify-center">
                <span className="text-[#06C755] text-2xl mb-1">○</span>
                <span className="text-xs text-[#6B7280]">サポート体制充実</span>
              </div>
              <div className="p-4 flex flex-col items-center justify-center">
                <span className="text-[#FB923C] text-2xl mb-1">△</span>
                <span className="text-xs text-[#6B7280]">自社or外注</span>
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
