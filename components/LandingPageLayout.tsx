import { LPHeader } from "@/components/lp/header"
import { LPFooter } from "@/components/lp/footer"
import { MobileFABButtons } from "@/components/lp/mobile-fab-buttons"

export function LandingPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <LPHeader />
      <main className="pb-20 md:pb-0">{children}</main>
      <LPFooter />
      <MobileFABButtons />
    </div>
  )
}
