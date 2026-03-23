import { Download, MessageCircle, FileText, CheckCircle2 } from "lucide-react"
import { CTA_DOWNLOAD, CTA_CONTACT } from "@/data/shared"

type FinalCTASectionProps = {
  withDocumentPreview?: boolean
}

export function FinalCTASection({ withDocumentPreview = false }: FinalCTASectionProps = {}) {
  if (withDocumentPreview) {
    return (
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#E8F8F0] to-white">
        <div className="max-w-[900px] mx-auto px-4 sm:px-5 md:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#1F2937] mb-4 sm:mb-6">まずは資料で詳しく知る</h2>

          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-10">
            {/* Document Preview */}
            <div className="flex-1 bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-[#E5E7EB] shadow-sm">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <FileText size={20} className="text-[#06C755]" />
                <p className="text-sm sm:text-base font-bold text-[#1F2937]">資料でわかること</p>
              </div>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  "導入企業の具体的な成果数値",
                  "10機能の詳細と活用シーン",
                  "料金プラン・開発スケジュール",
                  "他社サービスとの比較",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-[#06C755] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#1F2937]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex-1 text-center">
              <div className="flex flex-col gap-3 sm:gap-4">
                <a
                  href={CTA_DOWNLOAD}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-5 sm:px-6 md:px-10 py-3.5 sm:py-4 md:py-5 bg-[#06C755] text-white font-bold text-base sm:text-lg md:text-xl rounded-lg shadow-xl hover:bg-[#05A847] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Download size={18} className="sm:w-5 sm:h-5 md:w-[22px] md:h-[22px]" />
                  資料ダウンロード（無料）
                </a>
                <a
                  href={CTA_CONTACT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-5 sm:px-6 md:px-10 py-3.5 sm:py-4 md:py-5 bg-white text-[#06C755] font-bold text-base sm:text-lg md:text-xl border-2 border-[#06C755] rounded-lg hover:bg-[#E8F8F0] transition-all duration-300"
                >
                  <MessageCircle size={18} className="sm:w-5 sm:h-5 md:w-[22px] md:h-[22px]" />
                  直接相談したい方はこちら
                </a>
              </div>
              <p className="text-xs sm:text-sm text-[#9CA3AF] mt-3 sm:mt-4">
                ※ 30秒で完了。営業電話はいたしません
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#E8F8F0] to-white">
      <div className="max-w-[800px] mx-auto px-4 sm:px-5 md:px-6 text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2937] mb-4 sm:mb-6">まずは資料で詳しく知る</h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#6B7280] mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          機能詳細・導入事例・料金プランなど、詳しい情報を資料でご確認いただけます
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
          <a
            href={CTA_DOWNLOAD}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 sm:px-6 md:px-10 py-3.5 sm:py-4 md:py-5 bg-[#06C755] text-white font-bold text-base sm:text-lg md:text-xl rounded-lg shadow-xl hover:bg-[#05A847] hover:-translate-y-0.5 transition-all duration-300"
          >
            <Download size={18} className="sm:w-5 sm:h-5 md:w-[22px] md:h-[22px]" />
            資料ダウンロード（無料）
          </a>
          <a
            href={CTA_CONTACT}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 sm:px-6 md:px-10 py-3.5 sm:py-4 md:py-5 bg-white text-[#06C755] font-bold text-base sm:text-lg md:text-xl border-2 border-[#06C755] rounded-lg hover:bg-[#E8F8F0] transition-all duration-300"
          >
            <MessageCircle size={18} className="sm:w-5 sm:h-5 md:w-[22px] md:h-[22px]" />
            直接相談したい方はこちら
          </a>
        </div>

        {/* Sub text */}
        <p className="text-xs sm:text-sm text-[#9CA3AF]"></p>
      </div>
    </section>
  )
}
