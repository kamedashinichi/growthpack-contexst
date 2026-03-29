"use client"

import { track } from "@vercel/analytics"
import { Download, MessageCircle } from "lucide-react"
import type { CTAContent } from "@/lib/content"

interface FinalCTASectionProps {
  content?: CTAContent
}

export function FinalCTASection({ content }: FinalCTASectionProps) {
  const headline = content?.headline ?? "まずは資料で詳しく知る"
  const subtext =
    content?.subtext ??
    "機能詳細・導入事例・料金プランなど、詳しい情報を資料でご確認いただけます"

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#E8F8F0] to-white">
      <div className="max-w-[900px] mx-auto px-4 sm:px-5 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* 製品資料ダウンロード */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 text-center">
            <h3 className="text-lg sm:text-xl font-bold text-[#1F2937] mb-3 sm:mb-4">
              製品資料ダウンロード
            </h3>
            <p className="text-sm text-[#6B7280] mb-6">
              {subtext}
            </p>
            <a
              href="https://classmethod.jp/download/line-mini-app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 bg-[#06C755] text-white font-bold text-base rounded-lg shadow-lg hover:bg-[#05A847] hover:-translate-y-0.5 transition-all duration-300"
              onClick={() => track("cta_download", { location: "final_cta" })}
            >
              <Download size={18} />
              製品資料をダウンロード
            </a>
          </div>

          {/* お問い合わせ */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 text-center">
            <h3 className="text-lg sm:text-xl font-bold text-[#1F2937] mb-3 sm:mb-4">
              お問い合わせ
            </h3>
            <p className="text-sm text-[#6B7280] mb-6">
              導入のご相談・お見積もりなど、お気軽にお問い合わせください
            </p>
            <a
              href="https://classmethod.jp/services/line/line-apps/#iframe-form"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 bg-white text-[#06C755] font-bold text-base border-2 border-[#06C755] rounded-lg hover:bg-[#E8F8F0] transition-all duration-300"
              onClick={() => track("cta_contact", { location: "final_cta" })}
            >
              <MessageCircle size={18} />
              お問い合わせ
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
