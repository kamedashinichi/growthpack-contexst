export function FeaturesSection() {
  const features = [
    { emoji: "💳", name: "LINE会員証", description: "5秒で会員化、アプリDL不要" },
    { emoji: "🎫", name: "スタンプカード", description: "デジタルで紛失なし" },
    { emoji: "🎁", name: "クーポン配信", description: "セグメント別配信" },
    { emoji: "📅", name: "予約", description: "無断キャンセル削減" },
    { emoji: "⏰", name: "順番待ち", description: "待ち時間を可視化" },
    { emoji: "🎰", name: "ガチャ", description: "エンゲージメント向上" },
    { emoji: "💬", name: "1to1コミュニケーション", description: "顧客対応を記録" },
    { emoji: "🎁", name: "ギフト", description: "友人紹介プログラム" },
    { emoji: "🎯", name: "抽選", description: "キャンペーン施策に最適" },
    { emoji: "🎟️", name: "チケット発行", description: "イベント・入場管理" },
    { emoji: "💰", name: "決済システム", description: "LINE Pay連携でスムーズ決済" },
  ]

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1F2937] mb-4">
          顧客の体験を、LINEで一気通貫でサポート
        </h2>
        <p className="text-center text-[#6B7280] mb-12 md:mb-16">
          必要な機能を選択して、御社専用のLINEミニアプリを構築
        </p>

        {/* Feature Cards - 4 column grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-[#E5E7EB] rounded-xl p-5 md:p-6 hover:shadow-lg hover:border-[#06C755] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-4xl mb-3">{feature.emoji}</div>
              <h3 className="text-base md:text-lg font-bold text-[#1F2937] mb-2">{feature.name}</h3>
              <p className="text-sm text-[#6B7280] mb-3">{feature.description}</p>
              <a href="#" className="text-[#06C755] text-sm font-semibold hover:text-[#05A847] transition-colors">
                詳しく見る →
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 md:mt-12">
          <p className="text-[#6B7280]">上記以外にも、御社のニーズに合わせた機能開発が可能です</p>
        </div>
      </div>
    </section>
  )
}
