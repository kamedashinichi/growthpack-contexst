import { Download, MessageCircle } from "lucide-react"

export function FinalCTASection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-[#E8F8F0] to-white">
      <div className="max-w-[800px] mx-auto px-4 md:px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-6">まずは資料で詳しく知る</h2>
        <p className="text-lg md:text-xl text-[#6B7280] mb-10 md:mb-12">
          機能詳細・導入事例・料金プランなど、詳しい情報を資料でご確認いただけます
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-8">
          <a
            href="https://classmethod.jp/download/line-mini-app/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 md:px-10 py-4 md:py-5 bg-[#06C755] text-white font-bold text-lg md:text-xl rounded-lg shadow-xl hover:bg-[#05A847] hover:-translate-y-0.5 transition-all duration-300"
          >
            <Download size={22} />
            資料ダウンロード（無料）
          </a>
          <a
            href="https://classmethod.jp/services/line/line-apps/#iframe-form"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 md:px-10 py-4 md:py-5 bg-white text-[#06C755] font-bold text-lg md:text-xl border-2 border-[#06C755] rounded-lg hover:bg-[#E8F8F0] transition-all duration-300"
          >
            <MessageCircle size={22} />
            直接相談したい方はこちら
          </a>
        </div>

        {/* Sub text */}
        <p className="text-sm text-[#9CA3AF]"></p>
      </div>
    </section>
  )
}
