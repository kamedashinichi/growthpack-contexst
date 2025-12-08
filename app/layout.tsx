import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans_JP, Roboto } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-noto-sans-jp",
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "グロースパック for LINE - デザインシステム",
  description: "BtoB向けLINE開発サービスのデザインシステム",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} ${roboto.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
