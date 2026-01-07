"use client"

import { useEffect, useState } from "react"
import { Download, MessageCircle, ChevronDown } from "lucide-react"

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Trigger animations after component mounts
    setIsLoaded(true)
  }, [])

  return (
    <section
      className="relative pt-16 md:pt-[72px] min-h-[600px] md:min-h-[700px] bg-gradient-to-b from-[#E8F8F0] to-white overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-20 md:py-24 lg:py-[100px]">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Text Content - Left 55% */}
          <div className="flex-[1.2] text-center lg:text-left">
            {/* H1 Catch Copy */}
            <h1
              id="hero-heading"
              className={`text-[36px] md:text-[44px] lg:text-[52px] font-extrabold text-[#1F2937] leading-[1.3] mb-6 ${
                isLoaded ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              <span className="text-[#06C755]">LINE公式アカウント</span>、
              <br />
              持っているだけになっていませんか？
            </h1>

            {/* Sub Copy */}
            <p
              className={`text-base md:text-lg lg:text-xl text-[#6B7280] leading-[1.75] mb-10 max-w-xl mx-auto lg:mx-0 ${
                isLoaded ? "animate-fade-in animation-delay-200" : "opacity-0"
              }`}
            >
              通常<span className="text-[#FB923C] font-bold">6ヶ月</span>の開発を
              <span className="text-[#FB923C] font-bold">3ヶ月</span>で。
              <br className="hidden md:block" />
              機能アセットで実現する、
              <span className="text-[#06C755] font-bold">スピード×柔軟性</span>
              のLINEミニアプリ開発
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 ${
                isLoaded ? "animate-fade-in animation-delay-400" : "opacity-0"
              }`}
            >
              {/* Primary CTA - 資料ダウンロード */}
              <a
                href="https://classmethod.jp/download/line-mini-app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 lg:px-10 py-4 lg:py-[18px] bg-[#06C755] text-white font-bold text-base lg:text-lg rounded-lg shadow-[0_4px_12px_rgba(6,199,85,0.3)] hover:bg-[#05A847] hover:shadow-[0_6px_16px_rgba(6,199,85,0.4)] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#06C755] focus:ring-offset-2 transition-all duration-300"
                aria-label="資料ダウンロード（無料）を申し込む"
              >
                <Download size={20} strokeWidth={2.5} />
                資料ダウンロード（無料）
              </a>

              {/* Secondary CTA - お問い合わせ */}
              <a
                href="https://classmethod.jp/services/line/line-apps/#iframe-form"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 lg:px-10 py-[14px] lg:py-4 bg-white text-[#06C755] font-bold text-base lg:text-lg border-2 border-[#06C755] rounded-lg hover:bg-[#E8F8F0] hover:border-[#05A847] focus:outline-none focus:ring-2 focus:ring-[#06C755] focus:ring-offset-2 transition-all duration-300"
                aria-label="お問い合わせフォームを開く"
              >
                <MessageCircle size={20} strokeWidth={2.5} />
                お問い合わせ
              </a>
            </div>

            {/* Note Text */}
            <p
              className={`text-sm text-[#9CA3AF] mt-4 text-center lg:text-left ${
                isLoaded ? "animate-fade-in animation-delay-600" : "opacity-0"
              }`}
            ></p>
          </div>

          {/* Visual - Right 45% */}
          <div
            className={`flex-1 flex items-center justify-center w-full max-w-md lg:max-w-[500px] ${
              isLoaded ? "animate-slide-in-right animation-delay-200" : "opacity-0"
            }`}
          >
            <div className="relative w-full aspect-square">
              {/* Background gradient circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#06C755]/15 via-[#39D275]/10 to-[#E8F8F0] rounded-full scale-110" />

              {/* Main phone mockup */}
              <div className="absolute inset-4 lg:inset-6 bg-white rounded-[32px] shadow-2xl overflow-hidden border border-[#E5E7EB]">
                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#1F2937] rounded-b-2xl" />

                {/* LINE App Screen */}
                <div className="pt-10 px-4 pb-4 h-full flex flex-col">
                  {/* LINE Header */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 bg-[#06C755] rounded-xl flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                        <path d="M12 2C6.48 2 2 5.58 2 10.14c0 2.58 1.57 4.87 4.03 6.36-.18.65-.64 2.34-.73 2.7-.12.45.16.44.35.32.15-.1 2.3-1.56 3.24-2.2.93.14 1.88.22 2.86.22h.25c5.52 0 10-3.58 10-8.14S17.52 2 12 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#1F2937]">グロースパック ストア</p>
                      <p className="text-[10px] text-[#9CA3AF]">公式アカウント</p>
                    </div>
                  </div>

                  {/* Feature Cards */}
                  <div className="space-y-2.5 flex-1">
                    {/* Member Card */}
                    <div className="bg-gradient-to-r from-[#06C755] to-[#39D275] rounded-xl p-3 text-white">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold">会員証</span>
                        <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full">Gold</span>
                      </div>
                      <p className="text-lg font-bold font-mono">1234 5678 9012</p>
                      <p className="text-[10px] opacity-80 mt-1">山田 太郎 様</p>
                    </div>

                    {/* Coupon */}
                    <div className="bg-[#FCD34D]/20 border border-[#FCD34D] rounded-xl p-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">🎁</span>
                        <div>
                          <p className="text-xs font-bold text-[#1F2937]">バースデークーポン</p>
                          <p className="text-lg font-bold text-[#FB923C]">20%OFF</p>
                        </div>
                      </div>
                    </div>

                    {/* Stamp Card */}
                    <div className="bg-[#F8F9FA] rounded-xl p-3">
                      <p className="text-xs font-bold text-[#1F2937] mb-2">スタンプカード</p>
                      <div className="flex gap-1.5">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-7 h-7 rounded-full flex items-center justify-center text-sm ${
                              i < 3 ? "bg-[#06C755] text-white" : "bg-[#E5E7EB]"
                            }`}
                          >
                            {i < 3 ? "✓" : ""}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-16 h-16 lg:w-20 lg:h-20 bg-[#FCD34D] rounded-full opacity-70 blur-sm" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 lg:w-16 lg:h-16 bg-[#3B82F6] rounded-full opacity-50 blur-sm" />
              <div className="absolute top-1/4 -left-6 w-8 h-8 bg-[#06C755] rounded-full opacity-60" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-[#9CA3AF] tracking-wider">Scroll</span>
        <ChevronDown size={24} className="text-[#06C755] animate-bounce-slow" aria-hidden="true" />
      </div>
    </section>
  )
}
