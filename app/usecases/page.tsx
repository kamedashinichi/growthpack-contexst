import type { Metadata } from "next"
import featuresData from '@/data/features-catalog.json'
import type { FeaturesData } from '@/types/features-catalog'
import { LPHeader } from "@/components/lp/header"
import { LPFooter } from "@/components/lp/footer"
import { UseCaseSection } from "@/components/lp/use-case-section"

const data = featuresData as FeaturesData

export const metadata: Metadata = {
  title: "課題から逆引き — グロースパック for LINE",
  description: "「こんな課題がある」から必要な機能の組み合わせを逆引きできます。",
}

export default function UseCasesPage() {
  return (
    <div className="min-h-screen bg-white">
      <LPHeader />
      <main className="pt-20 md:pt-24 pb-0">
        <UseCaseSection useCases={data.use_cases} features={data.features} />
      </main>
      <LPFooter />
    </div>
  )
}
