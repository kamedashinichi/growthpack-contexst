export function ProblemSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1F2937] mb-12 md:mb-16">
          こんなお悩みありませんか？
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Problem 1: LINE友だちは増えたが活用できていない */}
          <div className="relative">
            <div className="absolute -top-3 -left-3 w-12 h-12 bg-[#06C755] text-white rounded-full flex items-center justify-center text-xl font-bold z-10 shadow-lg">
              1
            </div>

            <div className="bg-gradient-to-br from-[#F0FDF4] to-white rounded-2xl p-6 pt-10 border border-[#E5E7EB] min-h-[340px] flex flex-col">
              <h3 className="text-lg font-bold text-[#1F2937] mb-4 leading-tight">
                LINE友だちは増えたが
                <br />
                活用できていない
              </h3>

              <div className="flex-1 flex items-center justify-center mb-4">
                <svg className="w-48 h-44" viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* LINEトークルーム風の背景 */}
                  <rect x="30" y="20" width="140" height="140" rx="12" fill="white" stroke="#D1D5DB" strokeWidth="2" />

                  {/* ヘッダー部分 */}
                  <rect x="30" y="20" width="140" height="35" rx="12" fill="#06C755" />
                  <rect x="30" y="45" width="140" height="10" fill="#06C755" />

                  {/* LINE アイコン */}
                  <circle cx="50" cy="37" r="10" fill="white" />
                  <path d="M45 35 L55 35 M47 38 L53 38" stroke="#06C755" strokeWidth="1.5" strokeLinecap="round" />

                  {/* タイトル */}
                  <text x="66" y="42" className="text-sm font-bold" fill="white">
                    友だち 10,000人
                  </text>

                  {/* メッセージ吹き出し（送信側 - 企業） */}
                  <rect x="45" y="70" width="110" height="24" rx="12" fill="#E5E7EB" />
                  <text x="100" y="86" textAnchor="middle" className="text-xs" fill="#6B7280">
                    新商品のお知らせ
                  </text>

                  {/* メッセージ吹き出し（送信側） */}
                  <rect x="45" y="102" width="110" height="24" rx="12" fill="#E5E7EB" />
                  <text x="100" y="118" textAnchor="middle" className="text-xs" fill="#6B7280">
                    クーポン配信
                  </text>

                  {/* 虚無感を表現する線（既読のみで反応なし） */}
                  <text x="155" y="88" className="text-[10px]" fill="#9CA3AF">
                    既読
                  </text>
                  <text x="155" y="120" className="text-[10px]" fill="#9CA3AF">
                    既読
                  </text>

                  {/* 困っている人物 */}
                  <g transform="translate(155, 125)">
                    <circle cx="20" cy="15" r="12" fill="#FCD34D" />
                    <circle cx="17" cy="13" r="1.5" fill="#1F2937" />
                    <circle cx="23" cy="13" r="1.5" fill="#1F2937" />
                    <path
                      d="M16 19 Q20 17 24 19"
                      stroke="#1F2937"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <ellipse cx="20" cy="30" rx="10" ry="12" fill="#3B82F6" />
                  </g>

                  {/* はてなマーク */}
                  <text x="100" y="152" textAnchor="middle" className="text-2xl font-bold" fill="#FB923C">
                    ?
                  </text>
                </svg>
              </div>

              <p className="text-sm text-[#6B7280] text-center leading-relaxed">
                友だち登録は増えたものの、配信以外の活用方法がわからない
              </p>
            </div>
          </div>

          {/* Problem 2: SaaSでは機能が足りない、スクラッチは高い */}
          <div className="relative">
            <div className="absolute -top-3 -left-3 w-12 h-12 bg-[#06C755] text-white rounded-full flex items-center justify-center text-xl font-bold z-10 shadow-lg">
              2
            </div>

            <div className="bg-gradient-to-br from-[#F0FDF4] to-white rounded-2xl p-6 pt-10 border border-[#E5E7EB] min-h-[340px] flex flex-col">
              <h3 className="text-lg font-bold text-[#1F2937] mb-4 leading-tight">
                SaaSでは機能が足りない
                <br />
                スクラッチは高い
              </h3>

              <div className="flex-1 flex items-center justify-center mb-4">
                <svg className="w-52 h-44" viewBox="0 0 220 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* 天秤の台座 */}
                  <rect x="95" y="140" width="30" height="8" rx="2" fill="#6B7280" />
                  <rect x="108" y="100" width="4" height="40" fill="#6B7280" />

                  {/* 天秤の支点 */}
                  <circle cx="110" cy="100" r="6" fill="#1F2937" />

                  {/* 天秤の棒（左が上がって右が下がっている） */}
                  <line x1="40" y1="80" x2="180" y2="110" stroke="#6B7280" strokeWidth="4" strokeLinecap="round" />

                  {/* 左側の皿紐 */}
                  <line x1="40" y1="80" x2="40" y2="100" stroke="#9CA3AF" strokeWidth="2" />

                  {/* 左の皿（SaaS - 軽い） */}
                  <ellipse cx="40" cy="105" rx="30" ry="8" fill="#D1D5DB" />
                  <ellipse cx="40" cy="105" rx="28" ry="6" fill="#E5E7EB" />

                  {/* SaaSパッケージ */}
                  <rect x="20" y="75" width="40" height="30" rx="6" fill="#3B82F6" />
                  <rect x="26" y="82" width="8" height="4" rx="1" fill="white" opacity="0.5" />
                  <rect x="26" y="88" width="12" height="4" rx="1" fill="white" opacity="0.5" />
                  <rect x="26" y="94" width="10" height="4" rx="1" fill="white" opacity="0.5" />
                  <text x="40" y="99" textAnchor="middle" className="text-xs font-bold" fill="white">
                    SaaS
                  </text>

                  {/* バツマーク（機能不足） */}
                  <circle cx="55" cy="70" r="10" fill="#EF4444" opacity="0.9" />
                  <path d="M50 65 L60 75 M60 65 L50 75" stroke="white" strokeWidth="2" strokeLinecap="round" />

                  {/* 右側の皿紐 */}
                  <line x1="180" y1="110" x2="180" y2="135" stroke="#9CA3AF" strokeWidth="2" />

                  {/* 右の皿（スクラッチ - 重い） */}
                  <ellipse cx="180" cy="140" rx="30" ry="8" fill="#D1D5DB" />
                  <ellipse cx="180" cy="140" rx="28" ry="6" fill="#E5E7EB" />

                  {/* スクラッチ開発のイメージ */}
                  <rect x="160" y="98" width="40" height="42" rx="6" fill="#1F2937" />
                  <line x1="168" y1="108" x2="192" y2="108" stroke="#06C755" strokeWidth="1.5" />
                  <line x1="168" y1="114" x2="188" y2="114" stroke="#06C755" strokeWidth="1.5" />
                  <line x1="168" y1="120" x2="192" y2="120" stroke="#06C755" strokeWidth="1.5" />
                  <line x1="168" y1="126" x2="185" y2="126" stroke="#06C755" strokeWidth="1.5" />
                  <text x="180" y="136" textAnchor="middle" className="text-[9px] font-bold" fill="white">
                    スクラッチ
                  </text>

                  {/* お金のマーク（高コスト） */}
                  <g transform="translate(160, 88)">
                    <circle cx="0" cy="0" r="8" fill="#FCD34D" />
                    <text x="0" y="3" textAnchor="middle" className="text-xs font-bold" fill="#1F2937">
                      ¥
                    </text>
                  </g>
                  <g transform="translate(175, 85)">
                    <circle cx="0" cy="0" r="7" fill="#FCD34D" />
                    <text x="0" y="3" textAnchor="middle" className="text-[10px] font-bold" fill="#1F2937">
                      ¥
                    </text>
                  </g>
                  <g transform="translate(188, 88)">
                    <circle cx="0" cy="0" r="6" fill="#FCD34D" />
                    <text x="0" y="2" textAnchor="middle" className="text-[9px] font-bold" fill="#1F2937">
                      ¥
                    </text>
                  </g>

                  {/* 悩む人物 */}
                  <g transform="translate(100, 30)">
                    <circle cx="0" cy="0" r="14" fill="#FFE4B5" />
                    <circle cx="-4" cy="-2" r="2" fill="#1F2937" />
                    <circle cx="4" cy="-2" r="2" fill="#1F2937" />
                    <path d="M-4 5 Q0 3 4 5" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                    <ellipse cx="0" cy="18" rx="12" ry="14" fill="#6B7280" />
                    <text x="0" y="-20" textAnchor="middle" className="text-2xl" fill="#FB923C">
                      ?
                    </text>
                  </g>
                </svg>
              </div>

              <p className="text-sm text-[#6B7280] text-center leading-relaxed">
                既製品では要件を満たせず、フルスクラッチは予算オーバー
              </p>
            </div>
          </div>

          {/* Problem 3: 会員データが分散、一元管理できていない */}
          <div className="relative">
            <div className="absolute -top-3 -left-3 w-12 h-12 bg-[#06C755] text-white rounded-full flex items-center justify-center text-xl font-bold z-10 shadow-lg">
              3
            </div>

            <div className="bg-gradient-to-br from-[#F0FDF4] to-white rounded-2xl p-6 pt-10 border border-[#E5E7EB] min-h-[340px] flex flex-col">
              <h3 className="text-lg font-bold text-[#1F2937] mb-4 leading-tight">
                会員データが分散
                <br />
                一元管理できていない
              </h3>

              <div className="flex-1 flex items-center justify-center mb-4">
                <svg className="w-52 h-44" viewBox="0 0 220 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* 中央の困っている人物 */}
                  <g transform="translate(110, 90)">
                    <circle cx="0" cy="-10" r="16" fill="#FFE4B5" />
                    <circle cx="-5" cy="-13" r="2" fill="#1F2937" />
                    <circle cx="5" cy="-13" r="2" fill="#1F2937" />
                    <path d="M-5 -5 Q0 -8 5 -5" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" fill="none" />
                    <ellipse cx="0" cy="8" rx="14" ry="16" fill="#6B7280" />
                    <line x1="-8" y1="4" x2="-18" y2="0" stroke="#6B7280" strokeWidth="3" strokeLinecap="round" />
                    <line x1="8" y1="4" x2="18" y2="0" stroke="#6B7280" strokeWidth="3" strokeLinecap="round" />

                    {/* 汗マーク */}
                    <ellipse cx="-12" cy="-18" rx="3" ry="4" fill="#3B82F6" opacity="0.6" />
                    <ellipse cx="12" cy="-18" rx="3" ry="4" fill="#3B82F6" opacity="0.6" />
                  </g>

                  {/* 散らばったシステム達 */}

                  {/* 左上: POSシステム */}
                  <rect x="15" y="20" width="50" height="38" rx="6" fill="#3B82F6" />
                  <rect x="22" y="28" width="12" height="2" rx="1" fill="white" opacity="0.7" />
                  <rect x="22" y="33" width="18" height="2" rx="1" fill="white" opacity="0.7" />
                  <rect x="22" y="38" width="14" height="2" rx="1" fill="white" opacity="0.7" />
                  <text x="40" y="52" textAnchor="middle" className="text-sm font-bold" fill="white">
                    POS
                  </text>
                  <path
                    d="M65 50 L90 75"
                    stroke="#D1D5DB"
                    strokeWidth="2"
                    strokeDasharray="4 3"
                    markerEnd="url(#arrowgray)"
                  />

                  {/* 右上: ECサイト */}
                  <rect x="155" y="20" width="50" height="38" rx="6" fill="#FB923C" />
                  <circle cx="170" cy="35" r="3" fill="white" opacity="0.7" />
                  <circle cx="180" cy="35" r="3" fill="white" opacity="0.7" />
                  <circle cx="190" cy="35" r="3" fill="white" opacity="0.7" />
                  <rect x="165" y="42" width="30" height="10" rx="2" fill="white" opacity="0.7" />
                  <text x="180" y="52" textAnchor="middle" className="text-sm font-bold" fill="white">
                    EC
                  </text>
                  <path
                    d="M155 50 L125 75"
                    stroke="#D1D5DB"
                    strokeWidth="2"
                    strokeDasharray="4 3"
                    markerEnd="url(#arrowgray)"
                  />

                  {/* 左下: LINEシステム */}
                  <rect x="15" y="122" width="50" height="38" rx="6" fill="#06C755" />
                  <circle cx="40" cy="138" r="8" fill="white" />
                  <path d="M35 136 L45 136 M37 140 L43 140" stroke="#06C755" strokeWidth="1.5" strokeLinecap="round" />
                  <text x="40" y="155" textAnchor="middle" className="text-sm font-bold" fill="white">
                    LINE
                  </text>
                  <path
                    d="M65 135 L90 105"
                    stroke="#D1D5DB"
                    strokeWidth="2"
                    strokeDasharray="4 3"
                    markerEnd="url(#arrowgray)"
                  />

                  {/* 右下: CRMシステム */}
                  <rect x="155" y="122" width="50" height="38" rx="6" fill="#8B5CF6" />
                  <circle cx="170" cy="138" r="6" fill="white" opacity="0.7" />
                  <circle cx="185" cy="138" r="6" fill="white" opacity="0.7" />
                  <circle cx="177.5" cy="147" r="6" fill="white" opacity="0.7" />
                  <text x="180" y="155" textAnchor="middle" className="text-sm font-bold" fill="white">
                    CRM
                  </text>
                  <path
                    d="M155 135 L125 105"
                    stroke="#D1D5DB"
                    strokeWidth="2"
                    strokeDasharray="4 3"
                    markerEnd="url(#arrowgray)"
                  />

                  {/* 矢印の定義 */}
                  <defs>
                    <marker
                      id="arrowgray"
                      markerWidth="10"
                      markerHeight="10"
                      refX="9"
                      refY="3"
                      orient="auto"
                      markerUnits="strokeWidth"
                    >
                      <path d="M0,0 L0,6 L9,3 z" fill="#D1D5DB" />
                    </marker>
                  </defs>

                  {/* バラバラアイコン */}
                  <g transform="translate(110, 50)">
                    <circle cx="-8" cy="0" r="8" fill="#EF4444" opacity="0.9" />
                    <path d="M-11 -3 L-5 3 M-11 3 L-5 -3" stroke="white" strokeWidth="2" strokeLinecap="round" />

                    <circle cx="8" cy="0" r="8" fill="#EF4444" opacity="0.9" />
                    <path d="M5 -3 L11 3 M5 3 L11 -3" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </g>
                </svg>
              </div>

              <p className="text-sm text-[#6B7280] text-center leading-relaxed">
                複数システムにデータが散在し、顧客の全体像が見えない
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
