"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function LPHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 md:h-[72px] bg-white transition-shadow duration-300 ${
        isScrolled ? "shadow-[0_1px_3px_rgba(0,0,0,0.08)]" : ""
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <span className="text-xl md:text-2xl font-bold text-[#1F2937]">グロースパック</span>
          <span className="text-xl md:text-1.5xl font-bold text-[#64748b]">for</span>
          <span className="text-xl md:text-2xl font-bold text-[#00C300]">LINE</span>
        </div>

        {/* Desktop CTA */}
        <a
          href="https://classmethod.jp/inquiry/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-[#06C755] text-white font-bold rounded-lg shadow-[0_2px_8px_rgba(6,199,85,0.25)] hover:bg-[#05A847] hover:shadow-[0_4px_12px_rgba(6,199,85,0.35)] hover:-translate-y-0.5 transition-all duration-300"
        >
          お問い合わせ
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-[#1F2937]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="メニューを開く"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-t border-[#E5E7EB] shadow-lg">
          <div className="px-4 py-4">
            {/* Mobile Menu CTA */}
            <a
              href="https://classmethod.jp/inquiry/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-6 py-3 bg-[#06C755] text-white font-bold rounded-lg text-center"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
