import { ShieldCheck, Cloud, Award } from 'lucide-react'

export function StrengthSection() {
    return (
        <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-5 md:px-6">
                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2937] mb-3 sm:mb-4">
                        クラスメソッドならではの強み
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-[#6B7280]">
                        確かな技術力と実績で、貴社のビジネスをご支援します
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
                    {/* LINE Technology Partner */}
                    <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-[#06C755]/10 rounded-bl-full -mr-4 -mt-4 sm:-mr-6 sm:-mt-6 md:-mr-8 md:-mt-8 transition-transform group-hover:scale-110" />

                        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 relative">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#06C755] rounded-lg sm:rounded-xl flex items-center justify-center shrink-0">
                                <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                            </div>
                            <div>
                                <div className="text-[#06C755] font-bold text-xs sm:text-sm mb-0.5 sm:mb-1">認定パートナー</div>
                                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#1F2937]">
                                    LINE Technology Partner
                                </h3>
                            </div>
                        </div>

                        <p className="text-xs sm:text-sm md:text-base text-[#6B7280] leading-relaxed relative">
                            LINEの仕様を熟知した認定パートナーとして、
                            最新機能の活用や最適なUX設計をご提案します。
                            公式アカウントの開設からAPI開発まで一気通貫でサポート可能です。
                        </p>
                    </div>

                    {/* AWS */}
                    <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-[#FF9900]/10 rounded-bl-full -mr-4 -mt-4 sm:-mr-6 sm:-mt-6 md:-mr-8 md:-mt-8 transition-transform group-hover:scale-110" />

                        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 relative">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#FF9900] rounded-lg sm:rounded-xl flex items-center justify-center shrink-0">
                                <Cloud className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                            </div>
                            <div>
                                <div className="text-[#FF9900] font-bold text-xs sm:text-sm mb-0.5 sm:mb-1">クラウドインテグレーション</div>
                                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#1F2937]">
                                    AWS Premier Tier
                                </h3>
                            </div>
                        </div>

                        <div className="text-xs sm:text-sm md:text-base text-[#6B7280] leading-relaxed relative space-y-2 sm:space-y-3">
                            <p>
                                <span className="font-bold text-[#1F2937]">サーバーレスアーキテクチャ</span><br />
                                従量課金で無駄なコストを抑えつつ、急なアクセス集中にも自動で対応できる強固なインフラを提供します。
                            </p>
                            <p>
                                <span className="font-bold text-[#1F2937]">クラスメソッドメンバーズ</span><br />
                                請求代行サービスへの加入により、AWS利用料の割引と、セキュリティのベースライン設定を標準で提供します。
                            </p>
                        </div>
                    </div>
                </div>

                {/* Badge Area / Trust Signals */}
                <div className="mt-8 sm:mt-10 md:mt-12 text-center">
                    <div className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 bg-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-gray-200 shadow-sm text-xs sm:text-sm text-[#4B5563]">
                        <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F59E0B] shrink-0" />
                        <span>実績: 支援実績5,000社以上 / 技術ブログ<a href="https://dev.classmethod.jp/" target="_blank" rel="noopener noreferrer" className="hover:underline">「DevelopersIO」</a>運営</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
