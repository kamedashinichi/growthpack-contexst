import { LPHeader } from "@/components/lp/header"
import { HeroSection } from "@/components/lp/hero-section"
import { ProblemSection } from "@/components/lp/problem-section"
import { SolutionSection } from "@/components/lp/solution-section"
import { StrengthSection } from "@/components/lp/strength-section"
import { FeaturesSection } from "@/components/lp/features-section"
import { CaseStudySection } from "@/components/lp/case-study-section"
import { FinalCTASection } from "@/components/lp/final-cta-section"
import { LPFooter } from "@/components/lp/footer"
import { MobileFABButtons } from "@/components/lp/mobile-fab-buttons"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <LPHeader />
      <main className="pb-32 md:pb-0">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <StrengthSection />
        <FeaturesSection />
        <CaseStudySection />
        <FinalCTASection />
      </main>
      <LPFooter />
      <MobileFABButtons />
    </div>
  )
}
