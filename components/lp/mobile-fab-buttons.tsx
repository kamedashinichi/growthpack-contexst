"use client"

import { Download, MessageCircle } from "lucide-react"

export function MobileFABButtons() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] md:hidden bg-white border-t border-[#E5E7EB] shadow-[0_-2px_12px_rgba(0,0,0,0.1)] pb-[env(safe-area-inset-bottom,0px)]">
      <div className="flex flex-row gap-1.5 sm:gap-2 p-1.5 sm:p-2">
        {/* Primary CTA - 資料ダウンロード */}
        <a
          href="https://classmethod.jp/download/line-mini-app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-2 sm:py-2.5 bg-[#06C755] text-white font-bold text-xs sm:text-sm rounded-lg shadow-[0_2px_8px_rgba(6,199,85,0.3)] hover:bg-[#05A847] active:bg-[#05A847] active:scale-[0.98] transition-all duration-200"
          aria-label="資料ダウンロード（無料）を申し込む"
        >
          <Download size={14} className="sm:w-4 sm:h-4" strokeWidth={2.5} />
          <span className="whitespace-nowrap">資料ダウンロード</span>
        </a>

        {/* Secondary CTA - お問い合わせ */}
        <a
          href="https://classmethod.jp/services/line/line-apps/#iframe-form"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-2 sm:py-2.5 bg-white text-[#06C755] font-bold text-xs sm:text-sm border-2 border-[#06C755] rounded-lg hover:bg-[#E8F8F0] active:bg-[#E8F8F0] active:scale-[0.98] transition-all duration-200"
          aria-label="お問い合わせフォームを開く"
        >
          <MessageCircle size={14} className="sm:w-4 sm:h-4" strokeWidth={2.5} />
          <span className="whitespace-nowrap">お問い合わせ</span>
        </a>
      </div>
    </div>
  )
}

