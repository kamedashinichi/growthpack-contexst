import type { Metadata } from "next"
import { getIndustryContent } from "@/lib/content"
import { LPHeader } from "@/components/lp/header"
import { HeroSection } from "@/components/lp/hero-section"
import { ProblemSection } from "@/components/lp/problem-section"
import { SolutionSection } from "@/components/lp/solution-section"
import { SolutionStorySection } from "@/components/lp/solution-story-section"
import { FeatureHighlightSection } from "@/components/lp/feature-highlight-section"
import { StrengthSection } from "@/components/lp/strength-section"
import { FeaturesSection } from "@/components/lp/features-section"
import { CaseStudySection } from "@/components/lp/case-study-section"
import { FinalCTASection } from "@/components/lp/final-cta-section"
import { LPFooter } from "@/components/lp/footer"
import { MobileFABButtons } from "@/components/lp/mobile-fab-buttons"

type Props = {
  searchParams: Promise<{ industry?: string }>
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const params = await searchParams
  const content = getIndustryContent(params?.industry)

  return {
    title: content.seo.title,
    description: content.seo.description,
    openGraph: {
      title: content.seo.ogTitle,
      description: content.seo.ogDescription,
      siteName: "グロースパック for LINE",
      locale: "ja_JP",
      type: "website",
      images: [
        {
          url: "https://lp.growthpackforline.classmethod.net/images/ogp-v2.jpg",
          width: 1200,
          height: 630,
          alt: content.seo.ogTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: content.seo.ogTitle,
      description: content.seo.ogDescription,
      images: ["https://lp.growthpackforline.classmethod.net/images/ogp-v2.jpg"],
    },
  }
}

export default async function LandingPage({ searchParams }: Props) {
  const params = await searchParams
  const content = getIndustryContent(params?.industry)
  const industry = content.id
  const isIndustry = industry !== "generic"

  return (
    <div className="min-h-screen bg-white">
      <LPHeader />
      <main className="pb-20 md:pb-0">
        <HeroSection content={content.hero} industry={industry} />

        {/* 課題セクション: 業界別はpropsから、ジェネリックは既存ハードコード */}
        <ProblemSection problems={isIndustry ? content.problems : undefined} industry={industry} />

        {/* ソリューション: 業界別はストーリー形式、ジェネリックは比較表 */}
        {isIndustry && content.solutionStory ? (
          <SolutionStorySection story={content.solutionStory} />
        ) : (
          <SolutionSection />
        )}

        {/* 機能ハイライト: 業界LPのみ表示 */}
        {isIndustry && content.featureHighlights.length > 0 && (
          <FeatureHighlightSection highlights={content.featureHighlights} />
        )}

        <StrengthSection />

        <FeaturesSection
          highlightIds={isIndustry ? content.featureHighlights.map((h) => h.featureId) : undefined}
        />

        <CaseStudySection
          caseStudies={isIndustry ? content.caseStudies : undefined}
          industry={industry}
        />

        <FinalCTASection content={isIndustry ? content.cta : undefined} />
      </main>
      <LPFooter />
      <MobileFABButtons />
    </div>
  )
}
