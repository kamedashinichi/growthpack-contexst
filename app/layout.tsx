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
  metadataBase: new URL("https://lp.growthpackforline.classmethod.net"),
  title: "グロースパック for LINE",
  description: "通常6ヶ月の開発を3ヶ月で。機能アセットで実現するスピード×柔軟性のLINEミニアプリ開発",
  generator: "v0.app",
  openGraph: {
    title: "グロースパック for LINE",
    description: "高速かつ柔軟なLINE開発サービス",
    siteName: "グロースパック for LINE",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "https://lp.growthpackforline.classmethod.net/images/ogp-v2.jpg",
        width: 1200,
        height: 630,
        alt: "グロースパック for LINE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "グロースパック for LINE",
    description: "高速かつ柔軟なLINE開発サービス",
    images: ["https://lp.growthpackforline.classmethod.net/images/ogp-v2.jpg"],
  },
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
