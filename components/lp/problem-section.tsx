import Image from 'next/image'

export function ProblemSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1F2937] mb-12 md:mb-16">
          こんなお悩みありませんか？
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Problem 1: LINE友だちは増えたが活用できていない */}
          <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB] flex flex-col">
            <div className="flex-1 flex items-center justify-center bg-white rounded-lg">
              <Image
                src="/images/kadai1.png"
                alt="LINE友だちは増えたが活用できていない"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Problem 2: SaaSでは機能が足りない、スクラッチは高い */}
          <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB] flex flex-col">
            <div className="flex-1 flex items-center justify-center bg-white rounded-lg">
              <Image
                src="/images/kadai2.png"
                alt="SaaSでは機能が足りない、スクラッチは高い"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Problem 3: 会員データが分散、一元管理できていない */}
          <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB] flex flex-col">
            <div className="flex-1 flex items-center justify-center bg-white rounded-lg">
              <Image
                src="/images/kadai3.png"
                alt="会員データが分散、一元管理できていない"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
