export function CaseStudySection() {
  const caseStudies = [
    {
      company: "PAL様",
      industry: "アパレル・小売業",
      quote:
        "Native appはアプリDLが必要な為、ライトユーザーや操作に不慣れなお客様に導入が進まず、スタッフ/ユーザー双方に課題感があった。LINE Mini appはライトユーザーへのリーチ＆会員化という棲み分けができた",
      metrics: [
        { value: "200", unit: "%", label: "新規会員数増加" },
        { value: "3", unit: "倍", label: "友だち数増加" },
        { value: "5", unit: "倍", label: "EC売上成長" },
      ],
    },
    {
      company: "グッデイ様",
      industry: "ホームセンター",
      quote:
        "以前はチャットボットのSaaSサービスを導入していましたが、問い合わせやカスタマイズにより柔軟に対応するため、フルスクラッチでの開発を検討していました",
      metrics: [
        { value: "1.9", unit: "%", label: "提示率向上" },
        { value: "15", unit: "万人", label: "友だち増加" },
        { value: "11", unit: "万人", label: "会員数増加" },
      ],
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#F0FDF4]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-5 md:px-6">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#1F2937] mb-8 sm:mb-12 md:mb-16">導入企業の声</h2>

        {/* Case Study Cards - 2 column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
              {/* Header */}
              <div className="mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-[#1F2937] mb-1 sm:mb-2">{study.company}</h3>
                <p className="text-xs sm:text-sm text-[#6B7280]">{study.industry}</p>
              </div>

              {/* Quote */}
              <blockquote className="border-l-3 sm:border-l-4 border-[#06C755] pl-3 sm:pl-4 mb-4 sm:mb-6">
                <p className="text-xs sm:text-sm md:text-base text-[#6B7280] italic leading-relaxed">「{study.quote}」</p>
              </blockquote>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                {study.metrics.map((metric, mIndex) => (
                  <div key={mIndex} className="text-center">
                    <div className="text-lg sm:text-2xl md:text-3xl font-bold text-[#FB923C] mb-0.5 sm:mb-1">
                      <span className="font-['Roboto']">{metric.value}</span>
                      <span className="text-sm sm:text-base md:text-lg">{metric.unit}</span>
                    </div>
                    <div className="text-[10px] sm:text-xs md:text-sm text-[#6B7280]">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
