'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/shared/ui/button';
import { Section } from '@/components/shared/ui/section';
import { Card } from '@/components/shared/ui/card';
import { TrackedExternalLink } from '@/components/shared/feature-page/tracking';
import { PRICE_NOTE, getPricingEntry, type FeatureKey } from '@/lib/pricing';

interface PriceSectionProps {
  currentFeatureKey: FeatureKey;
}

export function PriceSection({ currentFeatureKey }: PriceSectionProps) {
  const current = getPricingEntry(currentFeatureKey);
  if (!current) return null;

  return (
    <Section id="pricing" spacing="md" container="wide" background="muted">
      <div className="max-w-[720px] mb-8 sm:mb-12">
        <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#05A847] mb-3">
          PRICING
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">初期費用</h2>
        <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">{PRICE_NOTE}</p>
      </div>

      {/* 現機能の価格カード */}
      <Card variant="elevated" padding="lg" rounded="xl" className="mb-8 max-w-[720px]">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3 mb-4 pb-4 border-b border-[#E5E7EB]">
          <h3 className="text-lg sm:text-xl font-bold text-[#1F2937]">{current.name}</h3>
          <div className="text-2xl sm:text-3xl font-bold text-[#05A847]">
            {current.price}
            <span className="text-sm font-normal text-[#6B7280] ml-1">（税抜）</span>
          </div>
        </div>
        <dl className="grid sm:grid-cols-[120px_1fr] gap-x-4 gap-y-2 text-sm">
          <dt className="font-semibold text-[#6B7280]">外部システム連携</dt>
          <dd className="text-[#1F2937]">{current.integration}</dd>
          <dt className="font-semibold text-[#6B7280]">標準仕様</dt>
          <dd className="text-[#1F2937]">{current.note}</dd>
        </dl>
      </Card>

      {/* CTA 2本 */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-[720px]">
        <Button variant="primary" size="lg" asChild>
          <TrackedExternalLink
            href="https://classmethod.jp/services/line/line-apps/#iframe-form"
            location="pricing_section"
            destination="contact"
          >
            お問い合わせ
            <ArrowRight className="w-5 h-5 ml-2" />
          </TrackedExternalLink>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link href="/#features">機能一覧で他の価格を見る</Link>
        </Button>
      </div>
    </Section>
  );
}
