"use client"

import { Download, MessageCircle } from "lucide-react"

export function MobileFABButtons() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] md:hidden bg-white border-t border-[#E5E7EB] shadow-[0_-2px_12px_rgba(0,0,0,0.1)]">
      <div className="flex flex-col gap-3 p-4">
        {/* Primary CTA - 資料ダウンロード */}
        <a
          href="https://classmethod.jp/download/line-mini-app/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2.5 px-6 py-4 bg-[#06C755] text-white font-bold text-base rounded-lg shadow-[0_4px_12px_rgba(6,199,85,0.3)] hover:bg-[#05A847] active:bg-[#05A847] active:scale-[0.98] transition-all duration-200"
          aria-label="資料ダウンロード（無料）を申し込む"
        >
          <Download size={20} strokeWidth={2.5} />
          資料ダウンロード（無料）
        </a>

        {/* Secondary CTA - お問い合わせ */}
        <a
          href="https://classmethod.jp/inquiry/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2.5 px-6 py-[14px] bg-white text-[#06C755] font-bold text-base border-2 border-[#06C755] rounded-lg hover:bg-[#E8F8F0] active:bg-[#E8F8F0] active:scale-[0.98] transition-all duration-200"
          aria-label="お問い合わせフォームを開く"
        >
          <MessageCircle size={20} strokeWidth={2.5} />
          お問い合わせ
        </a>
      </div>
    </div>
  )
}

