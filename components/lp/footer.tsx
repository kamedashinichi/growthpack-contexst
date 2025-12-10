export function LPFooter() {
  const links = [
    { label: "会社情報", href: "https://classmethod.jp/" },
    { label: "プライバシーポリシー", href: "https://classmethod.jp/privacy/" },
  ]

  return (
    <footer className="bg-[#1F2937] text-white py-10 md:py-12">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-1 mb-2">
              <span className="text-2xl font-bold">グロースパック</span>
              <span className="text-2xl font-bold text-[#06C755]">for LINE</span>
            </div>
            <p className="text-sm text-gray-400">スピード×柔軟性のLINEミニアプリ開発</p>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6 md:gap-8">
            {links.map((link, index) => (
              <a key={index} href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">© Classmethod, Inc.</p>
        </div>
      </div>
    </footer>
  )
}
