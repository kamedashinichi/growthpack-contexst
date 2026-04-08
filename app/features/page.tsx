import type { Metadata } from "next"
import featuresData from '@/data/features-catalog.json'
import type { FeaturesData } from '@/types/features-catalog'
import { LPHeader } from "@/components/lp/header"
import { LPFooter } from "@/components/lp/footer"
import { CategoryTabs } from "@/components/lp/category-tabs"

const data = featuresData as FeaturesData

export const metadata: Metadata = {
  title: "機能を探す — グロースパック for LINE",
  description: "カテゴリから必要な機能を探せます。会員証・予約・クーポン・セグメント配信など、LINEミニアプリの機能をアセットベースで提供。",
}

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      <LPHeader />
      <main className="pt-20 md:pt-24 pb-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#1F2937] mb-3">
              「自分の課題」から、必要な機能を探す
            </h1>
            <p className="text-gray-500 text-sm">
              カテゴリを選んで、関係する機能だけを確認できます
            </p>
          </div>
          <CategoryTabs categories={data.categories} features={data.features} />
        </div>
      </main>
      <LPFooter />
    </div>
  )
}
