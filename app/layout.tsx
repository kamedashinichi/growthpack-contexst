import type React from "react"
import type { Metadata, Viewport } from "next"
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

export const viewport: Viewport = {
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  metadataBase: new URL("https://growthpack-contexst.vercel.app"),
  title: "グロースパック for LINE",
  description: "通常6ヶ月の開発を3ヶ月で。機能アセットで実現するスピード×柔軟性のLINEミニアプリ開発",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <head>
        <meta property="og:title" content="グロースパック for LINE" />
        <meta
          property="og:description"
          content="高速かつ柔軟なLINE開発サービス"
        />
        <meta property="og:site_name" content="グロースパック for LINE" />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://growthpack-contexst.vercel.app/images/ogp.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="グロースパック for LINE" />
        <meta
          name="twitter:description"
          content="高速かつ柔軟なLINE開発サービス"
        />
        <meta
          name="twitter:image"
          content="https://growthpack-contexst.vercel.app/images/ogp.png"
        />
      </head>
      <body className={`${notoSansJP.variable} ${roboto.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
