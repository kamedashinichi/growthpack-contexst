import { HeroSection } from "@/components/lp/hero-section"
import { ProblemSection } from "@/components/lp/problem-section"
import { SolutionSection } from "@/components/lp/solution-section"
import { StrengthSection } from "@/components/lp/strength-section"
import { FeaturesSection } from "@/components/lp/features-section"
import { CaseStudySection } from "@/components/lp/case-study-section"
import { FinalCTASection } from "@/components/lp/final-cta-section"
import { LandingPageLayout } from "@/components/LandingPageLayout"
import { IndustryLP } from "@/components/IndustryLP"

export default async function LandingPage({
  searchParams,
}: {
  searchParams: Promise<{ industry?: string }>
}) {
  const params = await searchParams
  if (params.industry) {
    return <IndustryLP industry={params.industry} />
  }

  return (
    <LandingPageLayout>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <StrengthSection />
      <FeaturesSection />
      <CaseStudySection />
      <FinalCTASection />
    </LandingPageLayout>
  )
}
