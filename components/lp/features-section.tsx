import Image from 'next/image'

export function FeaturesSection() {
  const features = [
    { image: "/images/会員証.png", name: "LINE会員証", description: "5秒で会員化、アプリDL不要", url: "/memberscard", isExternal: false },
    { image: "/images/順番待ち.png", name: "順番待ち", description: "待ち時間を可視化", url: "/waiting", isExternal: false },
    { image: "/images/予約.png", name: "予約", description: "無断キャンセル削減", url: "/reservation", isExternal: false },
    { image: "/images/スタンプカード.png", name: "スタンプカード", description: "デジタルで紛失なし", url: "/stampcard", isExternal: false },
    { image: "/images/クーポン.png", name: "クーポン配信", description: "セグメント別配信", url: "/coupon", isExternal: false },
    { image: "/images/チケット.png", name: "チケット発行", description: "イベント・入場管理", url: "/ticket", isExternal: false },
    { image: "/images/抽選.png", name: "抽選", description: "キャンペーン施策に最適", url: "/lottery", isExternal: false },
    { image: "/images/セグメント配信.png", name: "セグメント配信", description: "セグメントで動的リッチメニューによる最適UI", url: "/segment", isExternal: false },
    { image: "/images/1to1.png", name: "1to1コミュニケーション", description: "顧客対応を記録", url: "/1to1", isExternal: false },
    { image: "/images/ギフト.png", name: "ギフト", description: "友人紹介プログラム", url: "/gift", isExternal: false },
  ]

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1F2937] mb-4">
          顧客の体験を、LINEで一気通貫でサポート
        </h2>
        <p className="text-center text-[#6B7280] mb-12 md:mb-16">
          必要な機能を選択して、専用のLINEミニアプリを構築
        </p>

        {/* Feature Cards - 4 column grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-[#E5E7EB] rounded-xl p-5 md:p-6 hover:shadow-lg hover:border-[#06C755] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-3 flex justify-start">
                <div className="relative w-12 h-12">
                  <Image
                    src={feature.image}
                    alt={feature.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-base md:text-lg font-bold text-[#1F2937] mb-2">{feature.name}</h3>
              <p className="text-sm text-[#6B7280] mb-3">{feature.description}</p>
              <a 
                href={feature.url} 
                {...(feature.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-[#06C755] text-sm font-semibold hover:text-[#05A847] transition-colors"
              >
                詳しく見る →
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 md:mt-12">
          <p className="text-[#6B7280]">上記以外にも、ニーズに合わせた機能開発が可能です</p>
        </div>
      </div>
    </section>
  )
}
